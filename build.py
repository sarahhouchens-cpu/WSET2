#!/usr/bin/env python3
"""Inline the CSS and JS into one self-contained HTML file.

Output: dist/wset2-revision-bench.html — a single file that works offline from
a phone, an email attachment, or a USB stick, and doubles as the source for the
hosted version. Run: python3 build.py
"""

import pathlib
import re

ROOT = pathlib.Path(__file__).parent
DIST = ROOT / "dist"

html = (ROOT / "index.html").read_text(encoding="utf-8")
css = (ROOT / "assets" / "styles.css").read_text(encoding="utf-8")
data = (ROOT / "assets" / "data.js").read_text(encoding="utf-8")
app = (ROOT / "assets" / "app.js").read_text(encoding="utf-8")

body = re.search(r"<body>(.*)</body>", html, re.S).group(1)
body = re.sub(r'\s*<script src="assets/[^"]+"></script>', "", body)

fonts = re.search(r'<link rel="stylesheet" href="https://fonts\.googleapis[^>]+>', html).group(0)

out = f"""<title>WSET 2 Revision Bench</title>
{fonts}
<style>
{css}
</style>
{body}
<script>
{data}
</script>
<script>
{app}
</script>
"""

DIST.mkdir(exist_ok=True)
target = DIST / "wset2-revision-bench.html"
target.write_text(out, encoding="utf-8")
print(f"wrote {target.relative_to(ROOT)} ({len(out) / 1024:.0f} KB)")
