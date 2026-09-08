/* WSET 2 Revision Bench — tab switching, rotating quiz deck, topic reader and
   the "read next" recommendation engine. No dependencies. */

(function () {
  "use strict";

  var STORE_KEY = "wset2-bench-v1";

  /* ------------------------------------------------------------- persistence */

  var state = { reviewed: [], stats: {}, confidence: {} };

  /* How the 1-5 self-rating reads back to the user. */
  var CONFIDENCE_LABELS = ["", "No idea", "Shaky", "Getting there", "Solid", "Could teach it"];

  function load() {
    try {
      var raw = window.localStorage.getItem(STORE_KEY);
      if (!raw) return;
      var parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.reviewed)) state.reviewed = parsed.reviewed;
      if (parsed && parsed.stats && typeof parsed.stats === "object") state.stats = parsed.stats;
      if (parsed && parsed.confidence && typeof parsed.confidence === "object") state.confidence = parsed.confidence;
    } catch (e) { /* private mode, blocked storage: carry on with defaults */ }
  }

  function save() {
    try {
      window.localStorage.setItem(STORE_KEY, JSON.stringify(state));
    } catch (e) { /* nothing to do: the page still works for this visit */ }
  }

  function isReviewed(id) { return state.reviewed.indexOf(id) !== -1; }

  function confidenceOf(id) { return state.confidence[id] || 0; }

  function topicStat(id) {
    var s = state.stats[id];
    return { seen: (s && s.seen) || 0, correct: (s && s.correct) || 0 };
  }

  /* ------------------------------------------------------------------ helpers */

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var byId = {};
  TOPICS.forEach(function (t, i) { byId[t.id] = t; t._order = i; });

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function plural(n, word) { return n + " " + word + (n === 1 ? "" : "s"); }

  /* ---------------------------------------------------------------- countdown */

  function renderCountdown() {
    var exam = new Date(EXAM_DATE + "T00:00:00");
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var days = Math.round((exam - today) / 86400000);

    var nEl = $("#cd-number");
    var lEl = $("#cd-label");
    var pretty = exam.toLocaleDateString(undefined, { weekday: "short" }) + " " +
                 exam.getDate() + " " + exam.toLocaleDateString(undefined, { month: "short" });

    if (days > 0) {
      nEl.textContent = days;
      lEl.innerHTML = (days === 1 ? "day until" : "days until") + "<br>" + pretty;
    } else if (days === 0) {
      nEl.textContent = "0";
      lEl.innerHTML = "exam is<br>today";
    } else {
      nEl.textContent = "✓";
      lEl.innerHTML = "exam sat<br>" + pretty;
    }
  }

  /* --------------------------------------------------------------------- tabs */

  function initTabs() {
    var tabs = [].slice.call(document.querySelectorAll(".tab"));
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () { selectTab(tab.dataset.tab); });
      tab.addEventListener("keydown", function (ev) {
        var i = tabs.indexOf(tab);
        if (ev.key === "ArrowRight" || ev.key === "ArrowLeft") {
          ev.preventDefault();
          var next = tabs[(i + (ev.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
          next.focus();
          selectTab(next.dataset.tab);
        }
      });
    });
  }

  function selectTab(name) {
    document.querySelectorAll(".tab").forEach(function (t) {
      var on = t.dataset.tab === name;
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.tabIndex = on ? 0 : -1;
    });
    document.querySelectorAll(".panel").forEach(function (p) {
      p.hidden = p.dataset.panel !== name;
    });
  }

  /* --------------------------------------------------------------------- quiz */

  var deck = [], deckPos = 0, current = null, answered = false;
  var session = { asked: 0, right: 0 };

  function questionsFor(focus) {
    if (focus === "all") return QUESTIONS.slice();
    if (focus === "weak") {
      var weak = TOPICS.filter(function (t) {
        var s = topicStat(t.id);
        var conf = confidenceOf(t.id);
        return (s.seen > 0 && s.correct < s.seen) || (conf > 0 && conf <= 2);
      }).map(function (t) { return t.id; });
      if (!weak.length) return QUESTIONS.slice();
      return QUESTIONS.filter(function (q) { return weak.indexOf(q.t) !== -1; });
    }
    if (focus.indexOf("group:") === 0) {
      var g = focus.slice(6);
      return QUESTIONS.filter(function (q) { return byId[q.t].group === g; });
    }
    return QUESTIONS.filter(function (q) { return q.t === focus; });
  }

  function buildDeck() {
    var focus = $("#focus").value;
    deck = shuffle(questionsFor(focus));
    deckPos = 0;
    nextQuestion();
  }

  function nextQuestion() {
    if (deckPos >= deck.length) {          /* deck exhausted: reshuffle and rotate on */
      deck = shuffle(deck);
      deckPos = 0;
    }
    current = deck[deckPos++];
    answered = false;
    renderQuestion();
  }

  function renderQuestion() {
    var topic = byId[current.t];
    var card = $("#qcard");
    card.innerHTML = "";

    var top = el("div", "qcard-top");
    var chip = el("span", "chip");
    var sw = el("span", "swatch");
    sw.style.width = sw.style.height = ".8rem";
    sw.style.marginTop = "0";
    sw.style.background = "var(--w-" + topic.swatch + ")";
    chip.appendChild(sw);
    chip.appendChild(document.createTextNode(topic.name));
    top.appendChild(chip);
    top.appendChild(el("span", "qcount", "Q " + (deckPos) + " / " + deck.length));
    card.appendChild(top);

    card.appendChild(el("h2", "qstem", current.q));

    var opts = el("div", "opts");
    current.o.forEach(function (text, i) {
      var b = el("button", "opt");
      b.type = "button";
      b.appendChild(el("span", "letter", "ABCD"[i]));
      b.appendChild(el("span", "opt-text", text));
      b.addEventListener("click", function () { answer(i); });
      opts.appendChild(b);
    });
    card.appendChild(opts);

    var foot = el("div", "qfoot");
    foot.appendChild(el("span", "hint", "Pick an answer — keys 1-4"));
    card.appendChild(foot);

    renderScore();
  }

  function answer(picked) {
    if (answered) return;
    answered = true;

    var correct = picked === current.a;
    var topic = byId[current.t];

    session.asked++;
    if (correct) session.right++;

    var s = state.stats[current.t] || { seen: 0, correct: 0 };
    s.seen++;
    if (correct) s.correct++;
    state.stats[current.t] = s;
    save();

    var buttons = [].slice.call(document.querySelectorAll("#qcard .opt"));
    buttons.forEach(function (b, i) {
      b.disabled = true;
      if (i === current.a) {
        b.classList.add("is-correct");
        b.appendChild(el("span", "verdict", "Correct"));
      } else if (i === picked) {
        b.classList.add("is-wrong");
        b.appendChild(el("span", "verdict", "Your answer"));
      } else {
        b.classList.add("is-dim");
      }
    });

    var foot = $("#qcard .qfoot");

    var box = el("div", "explain");
    box.appendChild(el("p", "field-label", correct ? "Correct — why" : "Not quite — why"));
    box.appendChild(el("p", null, current.e));
    $("#qcard").insertBefore(box, foot);

    foot.innerHTML = "";
    var next = el("button", "btn", "Next question");
    next.type = "button";
    next.id = "next-btn";
    next.addEventListener("click", nextQuestion);
    foot.appendChild(next);

    var read = el("button", "btn btn-ghost", "Read up on " + topic.name);
    read.type = "button";
    read.addEventListener("click", function () { openTopic(topic.id, true); selectTab("topics"); });
    foot.appendChild(read);

    foot.appendChild(el("span", "hint", "Enter for the next question"));
    next.focus();

    renderScore();
    renderRail();
  }

  function renderScore() {
    var acc = session.asked ? Math.round((session.right / session.asked) * 100) : 0;
    var allSeen = 0, allRight = 0;
    Object.keys(state.stats).forEach(function (k) {
      allSeen += state.stats[k].seen;
      allRight += state.stats[k].correct;
    });
    var allAcc = allSeen ? Math.round((allRight / allSeen) * 100) : 0;

    $("#scoreline").innerHTML =
      '<div>This session<b>' + session.right + "/" + session.asked + '</b></div>' +
      '<div>Session rate<b>' + acc + '%</b></div>' +
      '<div>All time<b>' + allAcc + '%</b><span></span></div>';
  }

  function initQuiz() {
    var focus = $("#focus");
    var frag = document.createDocumentFragment();

    [["all", "All topics (" + QUESTIONS.length + " questions)"], ["weak", "My weak spots (missed or rated 1-2)"]].forEach(function (pair) {
      var o = el("option", null, pair[1]);
      o.value = pair[0];
      frag.appendChild(o);
    });

    var groups = [];
    TOPICS.forEach(function (t) { if (groups.indexOf(t.group) === -1) groups.push(t.group); });
    groups.forEach(function (g) {
      var og = document.createElement("optgroup");
      og.label = g;
      var all = el("option", null, "All " + g.toLowerCase());
      all.value = "group:" + g;
      og.appendChild(all);
      TOPICS.filter(function (t) { return t.group === g; }).forEach(function (t) {
        var o = el("option", null, "  " + t.name);
        o.value = t.id;
        og.appendChild(o);
      });
      frag.appendChild(og);
    });
    focus.appendChild(frag);
    focus.addEventListener("change", buildDeck);

    document.addEventListener("keydown", function (ev) {
      if ($('[data-panel="quiz"]').hidden) return;
      var tag = document.activeElement && document.activeElement.tagName;
      if (tag === "SELECT" || tag === "INPUT") return;

      if (!answered && "1234".indexOf(ev.key) !== -1) {
        var i = parseInt(ev.key, 10) - 1;
        if (i < current.o.length) { ev.preventDefault(); answer(i); }
      } else if (answered && (ev.key === "Enter" || ev.key === " ")) {
        ev.preventDefault();
        nextQuestion();
      }
    });

    buildDeck();
  }

  /* ------------------------------------------------------------------- topics */

  var currentTopic = null;

  function initTopics() {
    var sel = $("#topic-select");
    var groups = [];
    TOPICS.forEach(function (t) { if (groups.indexOf(t.group) === -1) groups.push(t.group); });

    groups.forEach(function (g) {
      var og = document.createElement("optgroup");
      og.label = g;
      TOPICS.filter(function (t) { return t.group === g; }).forEach(function (t) {
        var o = el("option", null, t.name);
        o.value = t.id;
        og.appendChild(o);
      });
      sel.appendChild(og);
    });

    sel.addEventListener("change", function () { openTopic(sel.value, true); });

    openTopic(TOPICS[0].id, false);   /* first load: show content, but do not claim it as read */
  }

  function decorateOptions() {
    var sel = $("#topic-select");
    [].slice.call(sel.options).forEach(function (o) {
      var t = byId[o.value];
      if (!t) return;
      var conf = confidenceOf(t.id);
      o.textContent = (isReviewed(t.id) ? "✓ " : "• ") + t.name + (conf ? "  " + conf + "/5" : "");
    });
  }

  function openTopic(id, markRead) {
    currentTopic = id;
    $("#topic-select").value = id;

    if (markRead && !isReviewed(id)) {
      state.reviewed.push(id);
      save();
    }

    renderTopic(byId[id]);
    renderRail();
    decorateOptions();
    document.querySelector(".topic-doc").scrollIntoView({ block: "nearest" });
  }

  function sectionBlock(label, node) {
    var s = el("section", "section");
    s.appendChild(el("p", "field-label", label));
    s.appendChild(node);
    return s;
  }

  function rowsFrom(list, keyName, keyDetail) {
    var dl = el("dl", "rows");
    list.forEach(function (item) {
      var row = el("div", "row");
      row.appendChild(el("dt", null, item[keyName]));
      row.appendChild(el("dd", null, item[keyDetail]));
      dl.appendChild(row);
    });
    return dl;
  }

  function bulletsFrom(list) {
    var ul = el("ul", "bullets");
    list.forEach(function (b) { ul.appendChild(el("li", null, b)); });
    return ul;
  }

  function renderTopic(t) {
    var doc = $("#topic-doc");
    doc.innerHTML = "";

    var head = el("div", "topic-head");
    var sw = el("span", "swatch");
    sw.style.background = "var(--w-" + t.swatch + ")";
    if (t.swatch === "none") sw.style.borderStyle = "dashed";
    head.appendChild(sw);

    var titleWrap = el("div");
    titleWrap.style.flex = "1 1 14rem";
    titleWrap.appendChild(el("p", "group-tag", t.group));
    titleWrap.appendChild(el("h2", null, t.name));
    head.appendChild(titleWrap);

    var toggle = el("button", "btn btn-ghost reviewed-toggle", isReviewed(t.id) ? "✓ Reviewed" : "Mark reviewed");
    toggle.type = "button";
    toggle.addEventListener("click", function () {
      var i = state.reviewed.indexOf(t.id);
      if (i === -1) state.reviewed.push(t.id); else state.reviewed.splice(i, 1);
      save();
      renderTopic(t);
      renderRail();
      decorateOptions();
    });
    head.appendChild(toggle);
    doc.appendChild(head);

    doc.appendChild(el("p", "blurb", t.blurb));

    if (t.regions && t.regions.length) {
      doc.appendChild(sectionBlock("Key regions", rowsFrom(t.regions, "name", "detail")));
    }
    if (t.profile && t.profile.length) {
      var label = t.group === "White grapes" || t.group === "Black grapes" ? "Flavour profile & structure" : "How it works";
      doc.appendChild(sectionBlock(label, rowsFrom(t.profile, "label", "detail")));
    }
    if (t.key && t.key.length) {
      doc.appendChild(sectionBlock("Must know", bulletsFrom(t.key)));
    }
    if (t.traps && t.traps.length) {
      var trapBox = el("div", "traps");
      trapBox.appendChild(el("p", "field-label", "Exam traps"));
      trapBox.appendChild(bulletsFrom(t.traps));
      var wrap = el("section", "section");
      wrap.appendChild(trapBox);
      doc.appendChild(wrap);
    }
    if (t.related && t.related.length) {
      var links = el("div", "related-links");
      t.related.forEach(function (rid) {
        var b = el("button", null, byId[rid].name);
        b.type = "button";
        b.addEventListener("click", function () { openTopic(rid, true); });
        links.appendChild(b);
      });
      doc.appendChild(sectionBlock("Study alongside", links));
    }

    doc.appendChild(confidenceBlock(t));

    var foot = el("div", "topic-quizlink");
    var st = topicStat(t.id);
    var n = QUESTIONS.filter(function (q) { return q.t === t.id; }).length;
    foot.appendChild(el("span", "stat-line", st.seen
      ? "You have answered " + plural(st.seen, "question") + " here · " + st.correct + " correct"
      : plural(n, "question") + " in the bank on this topic"));

    var quizBtn = el("button", "btn", "Test me on this");
    quizBtn.type = "button";
    quizBtn.addEventListener("click", function () {
      $("#focus").value = t.id;
      buildDeck();
      selectTab("quiz");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    foot.appendChild(quizBtn);
    doc.appendChild(foot);
  }

  /* Self-rated confidence, 1-5, read back into the recommendations below. */
  function confidenceBlock(t) {
    var current = confidenceOf(t.id);

    var block = el("div", "conf-block");

    var head = el("div", "conf-head");
    head.appendChild(el("p", "field-label", "Confidence check"));
    head.appendChild(el("p", "conf-legend", current
      ? current + " of 5 — " + CONFIDENCE_LABELS[current]
      : "How well do you know this? 1 is no idea, 5 is could teach it."));
    block.appendChild(head);

    var scale = el("div", "conf-scale");
    scale.setAttribute("role", "group");
    scale.setAttribute("aria-label", "Confidence in " + t.name + ", 1 to 5");

    for (var i = 1; i <= 5; i++) {
      (function (n) {
        var b = el("button", "conf-btn", String(n));
        b.type = "button";
        b.title = n + " — " + CONFIDENCE_LABELS[n] + (n === current ? " (click again to clear)" : "");
        b.setAttribute("aria-pressed", n === current ? "true" : "false");
        b.setAttribute("aria-label", n + " of 5, " + CONFIDENCE_LABELS[n]);
        if (current && n <= current) b.classList.add("is-filled");
        if (n === current) b.classList.add("is-selected");
        b.addEventListener("click", function () {
          if (confidenceOf(t.id) === n) {
            delete state.confidence[t.id];      /* clicking the current rating clears it */
          } else {
            state.confidence[t.id] = n;
          }
          save();
          renderTopic(t);
          renderRail();
          decorateOptions();
        });
        scale.appendChild(b);
      })(i);
    }
    block.appendChild(scale);
    return block;
  }

  /* -------------------------------------------------- read-next recommendations */

  function recommendations() {
    var fresh = [], revisit = [];

    TOPICS.forEach(function (t) {
      var stat = topicStat(t.id);
      var missed = stat.seen - stat.correct;
      var conf = confidenceOf(t.id);

      if (!isReviewed(t.id)) {
        var score = 100 - t._order;      /* syllabus order is the baseline */
        var reasons = [];

        if (conf && conf <= 2) {         /* rated shaky but never marked read */
          score += 120;
          reasons.push("you rated it " + conf + "/5 and have not read it yet");
        }
        if (missed > 0) {
          score += 90 + missed * 10;
          reasons.push("you have missed " + plural(missed, "question") + " on it");
        }

        var feeders = TOPICS.filter(function (o) {
          return isReviewed(o.id) && o.related.indexOf(t.id) !== -1;
        });
        if (feeders.length) {
          score += 45 + feeders.length * 8;
          reasons.push("follows on from " + feeders[0].name);
        }

        var groupDone = TOPICS.filter(function (o) { return o.group === t.group && isReviewed(o.id); }).length;
        var groupSize = TOPICS.filter(function (o) { return o.group === t.group; }).length;
        if (groupDone > 0 && groupDone < groupSize) {
          score += 25;
          if (!reasons.length) reasons.push("finishes off " + t.group.toLowerCase());
        }

        if (!reasons.length) reasons.push("step " + (t._order + 1) + " in the syllabus order");

        fresh.push({ topic: t, score: score, why: reasons[0], kind: "new" });
        return;
      }

      /* Already read. Your own confidence rating decides whether it comes back,
         with quiz accuracy as the second opinion. */
      var score2 = 0, why = [];

      if (conf) {
        if (conf <= 2) {
          score2 = 360 - conf * 25;
          why.push("you rated it " + conf + "/5, " + CONFIDENCE_LABELS[conf].toLowerCase());
        } else if (conf === 3) {
          score2 = 240;
          why.push("only 3/5 confident");
        }
      } else {
        score2 = 150;                    /* read but never rated: worth a second pass */
        why.push("read but not rated yet");
      }

      var poor = stat.seen >= 2 && (stat.correct / stat.seen) < 0.7;
      if (poor) {
        score2 = Math.max(score2, 260) + 40;
        why.push(stat.correct + " of " + stat.seen + " right in the quiz");
      }

      if (conf >= 4 && !poor) return;    /* solid and scoring well: leave it alone */

      if (score2 > 0) {
        revisit.push({ topic: t, score: score2, why: "revisit — " + why.join(", "), kind: "revisit" });
      }
    });

    fresh.sort(function (a, b) { return b.score - a.score; });
    revisit.sort(function (a, b) { return b.score - a.score; });

    /* Keep at most two re-reads in view so new material still gets a look in. */
    var out = revisit.slice(0, 2).concat(fresh.slice(0, 4 - Math.min(revisit.length, 2)));
    if (out.length < 4) out = out.concat(revisit.slice(2, 2 + (4 - out.length)));

    out.sort(function (a, b) { return b.score - a.score; });
    return out.slice(0, 4);
  }

  function renderRail() {
    var done = state.reviewed.length;
    $("#progress-num").innerHTML = done + "<span>of " + TOPICS.length + " sections read</span>";

    var ticks = $("#ticks");
    ticks.innerHTML = "";
    TOPICS.forEach(function (t) {
      var d = el("span", "tick" + (isReviewed(t.id) ? " done" : ""));
      d.title = t.name + (isReviewed(t.id) ? " — reviewed" : " — not read yet");
      ticks.appendChild(d);
    });

    var rated = TOPICS.filter(function (t) { return confidenceOf(t.id) > 0; });
    var shaky = rated.filter(function (t) { return confidenceOf(t.id) <= 2; }).length;
    var solid = rated.filter(function (t) { return confidenceOf(t.id) >= 4; }).length;

    var conf = $("#conf-summary");
    if (!rated.length) {
      conf.textContent = "Rate your confidence at the foot of each section to steer what comes next.";
    } else {
      var avg = rated.reduce(function (sum, t) { return sum + confidenceOf(t.id); }, 0) / rated.length;
      conf.textContent = rated.length + " of " + TOPICS.length + " rated · average " +
        (Math.round(avg * 10) / 10) + "/5 · " + shaky + " shaky, " + solid + " solid";
    }

    var note = $("#rail-note");
    if (done === 0) {
      note.textContent = "Nothing marked yet. Open a section and it counts as read.";
    } else if (shaky > 0) {
      note.textContent = plural(shaky, "section") + " you rated 1 or 2. Those come first below.";
    } else if (done === TOPICS.length) {
      note.textContent = "Every section read. Now drill the quiz and revisit anything below 70%.";
    } else {
      var remaining = TOPICS.length - done;
      note.textContent = plural(remaining, "section") + " still to cover.";
    }

    var list = $("#readnext");
    list.innerHTML = "";
    recommendations().forEach(function (r, i) {
      var li = el("li");
      var b = el("button");
      b.type = "button";
      b.appendChild(el("span", "rank", String(i + 1).padStart(2, "0")));
      var txt = el("span");
      txt.appendChild(el("span", "nm", r.topic.name));
      txt.appendChild(el("span", "why", r.why));
      b.appendChild(txt);
      b.addEventListener("click", function () { openTopic(r.topic.id, true); });
      li.appendChild(b);
      list.appendChild(li);
    });
  }

  /* --------------------------------------------------------------------- boot */

  load();
  renderCountdown();
  initTabs();
  initQuiz();
  initTopics();

  $("#reset").addEventListener("click", function () {
    if (!window.confirm("Clear your read sections, confidence ratings and quiz record?")) return;
    state = { reviewed: [], stats: {}, confidence: {} };
    session = { asked: 0, right: 0 };
    save();
    renderRail();
    decorateOptions();
    renderTopic(byId[currentTopic]);
    renderScore();
  });
})();
