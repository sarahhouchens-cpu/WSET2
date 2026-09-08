# WSET 2 Revision Bench

A study site for the **WSET Level 2 Award in Wines** exam on **17 September**.

Two tabs:

1. **Mock questions** — a rotating, shuffled deck of 106 multiple-choice questions.
   Every answer, right or wrong, opens an explanation of the underlying concept.
   The deck can be focused on a single topic, a whole group (e.g. all sparkling
   wines), or "my weak spots" — the topics you have actually got wrong so far.
2. **Topic notes** — a dropdown of 32 exam topics. Each one gives key regions,
   flavour profile and structure, must-know facts, and the exam traps that
   catch people out. Each section carries a **1-5 confidence rating**, and a
   **Read next** panel recommends what to study next from those ratings, what
   you have marked as reviewed, which sections feed into each other, and where
   your quiz answers are going wrong.

   Sections are marked reviewed only by pressing **Mark as reviewed** — opening
   or browsing a topic never marks it.

## Running it

No build step and no dependencies. Open `index.html` in a browser.

To serve it locally:

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

## Single-file version

`python3 build.py` inlines the CSS and JS into `dist/wset2-revision-bench.html`,
one self-contained file that works offline — handy on a phone or emailed to
yourself before the exam.

## Layout

```
index.html          markup and tab structure
assets/styles.css   design tokens and components (light + dark)
assets/data.js      TOPICS (32) and QUESTIONS (106) — all study content
assets/app.js       quiz deck, topic reader, progress and recommendations
build.py            produces the single-file version in dist/
```

## Editing the content

Everything examinable lives in `assets/data.js`.

A topic:

```js
{
  id: "riesling",
  name: "Riesling",
  group: "White grapes",
  swatch: "lemon",            // wine-appearance colour used as the dot
  blurb: "…",
  regions: [{ name: "Mosel, Germany", detail: "…" }],
  profile: [{ label: "Structure", detail: "…" }],
  key:   ["…"],               // must-know bullets
  traps: ["…"],               // exam traps
  related: ["sweet-wines"]    // drives "Read next"
}
```

A question — `t` is the topic id, `a` is the index of the correct option:

```js
{ t: "riesling", q: "…", o: ["…", "…", "…", "…"], a: 0, e: "Explanation shown either way." }
```

Topic order in the `TOPICS` array is the recommended study order and is used as
the baseline for recommendations.

## Progress

Reviewed sections, confidence ratings and quiz results are stored in the
browser's `localStorage`. Progress is per browser and per device: it does not
sync between a laptop and a phone, and clearing site data removes it. "Reset
progress" in the footer clears it deliberately.

### How "Read next" ranks sections

| Signal | Effect |
| --- | --- |
| Rated 1-2 | Promoted above unread material |
| Rated 3 | Offered as a lighter revisit |
| Rated 4-5 | Suppressed, unless quiz accuracy contradicts it |
| Reviewed, unrated | Comes back for a second pass |
| Missed questions | Raises priority in proportion to how many |
| Related to a reviewed section | Small boost, shown as "follows on from X" |
| Otherwise | Syllabus order |

At most two revisits appear at once so unread sections keep surfacing.
