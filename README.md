# mikarserwe
# Simple Spinning Ball

A tiny browser game/demo that shows a spinning (rotating) ball which also bounces under gravity. It's intended as a minimal, self-contained example you can drop into a GitHub Pages site or open locally.

## Features
- Smooth animation using requestAnimationFrame
- Simple physics: gravity, bounce with energy loss, wall collisions
- Visible rotation using decorative stripes so the spin is obvious
- Pause/Resume and Reset controls

## Files
- `index.html` — demo page and canvas
- `style.css` — minimal styling
- `script.js` — game/animation logic (physics + rotation)
- `extra_file_1.txt` — small extra file included

## How to run locally
1. Clone the repository or put these files in a folder.
2. Open `index.html` in your browser.

Alternatively, serve via a simple HTTP server (recommended for some browsers):
- Using Python 3:
  ```
  python -m http.server 8000
  ```
  Then open http://localhost:8000 in your browser.

## Controls
- Pause / Start button — toggle animation
- Reset button — place the ball back in the middle with a new random velocity and spin

## License
MIT — feel free to reuse and modify.
