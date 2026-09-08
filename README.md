# WSET 2 Revision Bench

A study site for the **WSET Level 2 Award in Wines** exam on **17 September**.

Two tabs:

1. **Mock questions** — a rotating, shuffled deck of 106 multiple-choice questions.
   Every answer, right or wrong, opens an explanation of the underlying concept.
   The deck can be focused on a single topic, a whole group (e.g. all sparkling
   wines), or "my weak spots" — the topics you have actually got wrong so far.
2. **Topic notes** — a dropdown of 32 exam topics. Each one gives key regions,
   flavour profile and structure, must-know facts, and the exam traps that
   catch people out. A **Read next** panel recommends what to study next based
   on what you have already read, which sections feed into each other, and
   where your quiz answers are going wrong.

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

Read sections and quiz results are stored in the browser's `localStorage`, so
progress stays on the device you study on. "Reset progress" in the footer
clears it.
