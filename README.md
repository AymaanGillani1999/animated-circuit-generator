# Animated Circuit Generator

Animated Circuit Generator is an MIT-licensed static web app for designing reusable animated SVG circuit snippets. It includes built-in circuit presets, custom SVG paste support, animation controls, color/background controls, and copyable SVG, CSS, embed, and AI implementation prompt outputs.

Live site: [http://aymaan.me/animated-circuit-generator/](http://aymaan.me/animated-circuit-generator/)

Repository: [https://github.com/AymaanGillani1999/animated-circuit-generator](https://github.com/AymaanGillani1999/animated-circuit-generator)

## Features

- 20 built-in animated SVG circuit presets.
- Preset categories for core traces, boards/connectors, networks, and signal shapes.
- Custom SVG paste mode for user-provided SVG markup.
- Animation modes: flow, pulse, draw, shimmer, and paused.
- Controls for speed, dash length, stroke width, glow strength, stagger, scale, opacity, and preview padding.
- Selectors for animation direction, line caps, line joins, node fill behavior, solid/gradient backgrounds, and surface textures.
- Copy panels for SVG, CSS, complete embed HTML, and model-readable implementation prompts.
- `llms.txt` and `AI.md` so code models can understand how to use generated snippets in other projects.

## Built-In Presets

The app currently ships with these presets:

- Core traces: vertical trace, horizontal bus, branch, grid, chip, radial, zigzag, stack.
- Boards and connectors: motherboard, data lanes, edge frame, connector, maze.
- Networks: hex core, neural mesh, orbit bus, terminal tree.
- Signals: antenna array, waveform, serpentine.

## Getting Started

Install dependencies and run the local dev server:

```bash
npm install
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## How To Use

1. Pick a circuit preset from the grouped selector, or switch to **Paste SVG** and provide your own SVG.
2. Tune the animation, stroke, glow, color, background, texture, and spacing controls.
3. Copy one of the generated outputs:
   - SVG: markup only.
   - CSS: reusable styles and animation keyframes.
   - Embed: complete copy-paste HTML snippet.
   - AI Prompt: implementation instructions for code models.

## Integration API

Generated snippets use one base class:

- `.animated-circuit`

Use exactly one animation class:

- `.circuit-flow`
- `.circuit-pulse`
- `.circuit-draw`
- `.circuit-shimmer`
- `.circuit-paused`

Optional wrapper texture classes:

- `.circuit-pattern-none`
- `.circuit-pattern-grid`
- `.circuit-pattern-scanlines`
- `.circuit-pattern-dots`

The generated CSS is controlled by these variables:

- `--circuit-color`
- `--circuit-bg`
- `--circuit-bg-alt`
- `--circuit-speed`
- `--circuit-stroke`
- `--circuit-glow`
- `--circuit-dash`
- `--circuit-opacity`
- `--circuit-linecap`
- `--circuit-linejoin`
- `--circuit-node-fill`
- `--circuit-direction`
- `--circuit-padding`

Example wrapper:

```html
<div class="circuit-surface circuit-pattern-grid">
  <svg class="animated-circuit circuit-flow" viewBox="0 0 180 120" role="img" aria-label="Animated circuit">
    <path d="M16 60h52l20-20h40l20 20h16" />
    <circle class="node" cx="16" cy="60" r="4" />
    <circle class="node" cx="164" cy="60" r="4" />
  </svg>
</div>
```

## Example SVGs

These examples can be pasted into the **Paste SVG** field in the app.

### Compact Signal Bridge

```html
<svg viewBox="0 0 220 120" role="img" aria-label="Compact signal bridge">
  <path d="M18 60h48l22-22h44l22 22h48" />
  <path d="M88 38v44" />
  <path d="M132 38v44" />
  <circle class="node" cx="18" cy="60" r="4" />
  <circle class="node" cx="88" cy="38" r="5" />
  <circle class="node" cx="132" cy="82" r="5" />
  <circle class="node" cx="202" cy="60" r="4" />
</svg>
```

### Microchip Badge

```html
<svg viewBox="0 0 180 180" role="img" aria-label="Microchip badge">
  <rect x="58" y="58" width="64" height="64" rx="8" />
  <path d="M58 78H26l-12-12" />
  <path d="M58 102H18" />
  <path d="M122 78h32l12-12" />
  <path d="M122 102h40" />
  <path d="M78 58V26l-12-12" />
  <path d="M102 58V18" />
  <path d="M78 122v32l-12 12" />
  <path d="M102 122v40" />
  <circle class="node" cx="14" cy="66" r="4" />
  <circle class="node" cx="18" cy="102" r="4" />
  <circle class="node" cx="166" cy="66" r="4" />
  <circle class="node" cx="162" cy="102" r="4" />
  <circle class="node" cx="66" cy="14" r="4" />
  <circle class="node" cx="102" cy="18" r="4" />
  <circle class="node" cx="66" cy="166" r="4" />
  <circle class="node" cx="102" cy="162" r="4" />
</svg>
```

### Radial Hub

```html
<svg viewBox="0 0 220 220" role="img" aria-label="Radial hub circuit">
  <circle class="node" cx="110" cy="110" r="14" />
  <path d="M110 96V28" />
  <path d="M110 124v68" />
  <path d="M96 110H28" />
  <path d="M124 110h68" />
  <path d="M100 100L52 52" />
  <path d="M120 100l48-48" />
  <path d="M100 120l-48 48" />
  <path d="M120 120l48 48" />
  <circle class="node" cx="110" cy="28" r="4" />
  <circle class="node" cx="192" cy="110" r="4" />
  <circle class="node" cx="110" cy="192" r="4" />
  <circle class="node" cx="28" cy="110" r="4" />
  <circle class="node" cx="52" cy="52" r="4" />
  <circle class="node" cx="168" cy="52" r="4" />
  <circle class="node" cx="168" cy="168" r="4" />
  <circle class="node" cx="52" cy="168" r="4" />
</svg>
```

### Data Ladder

```html
<svg viewBox="0 0 260 180" role="img" aria-label="Data ladder circuit">
  <path d="M28 28h80l18 18h106" />
  <path d="M28 78h204" />
  <path d="M28 128h80l18-18h106" />
  <path d="M76 28v100" />
  <path d="M156 46v64" />
  <path d="M204 78v50" />
  <circle class="node" cx="28" cy="28" r="4" />
  <circle class="node" cx="232" cy="46" r="4" />
  <circle class="node" cx="28" cy="78" r="4" />
  <circle class="node" cx="232" cy="78" r="4" />
  <circle class="node" cx="28" cy="128" r="4" />
  <circle class="node" cx="232" cy="110" r="4" />
  <circle class="node" cx="76" cy="78" r="5" />
  <circle class="node" cx="156" cy="78" r="5" />
  <circle class="node" cx="204" cy="128" r="5" />
</svg>
```

## Preset Structure

Circuit presets are split by category under `src/circuit-presets/`:

- `core.js`: general traces, grids, chips, branches, and stacks.
- `boards.js`: boards, data lanes, frames, connectors, and maze routing.
- `networks.js`: mesh, hex, orbit, and tree structures.
- `signals.js`: antenna, waveform, and serpentine signal shapes.

`src/circuit-presets/index.js` exports both `circuitCategories` for grouped UI selectors and `circuits` for flat lookup.

## AI Integration

The app includes two model-facing files:

- `AI.md`: implementation guidance for code models.
- `llms.txt`: concise project summary, public API, and file map.

The page also includes JSON metadata in `index.html` under `#llm-implementation-metadata`.

## GitHub Pages

The live site is published from the `gh-pages` branch:

[http://aymaan.me/animated-circuit-generator/](http://aymaan.me/animated-circuit-generator/)

Current deployment flow:

1. Run `npm run build`.
2. Copy `dist/` to the `gh-pages` branch.
3. Push `gh-pages`.

The project uses `vite.config.js` with `base: "./"` so built assets work from GitHub Pages subpaths and custom domains.

## License

MIT. See `LICENSE`.
