# Animated Circuit Generator

Animated Circuit Generator is an MIT-licensed static web app for designing reusable animated SVG circuit snippets. It includes built-in circuit presets, custom SVG paste support, animation controls, color/background controls, and copyable SVG, CSS, embed, and AI implementation prompt outputs.

## Features

- Built-in SVG circuit presets: vertical trace, horizontal bus, branch, grid, chip, radial, zigzag, stack, motherboard, data lanes, antenna array, waveform, hex core, neural mesh, edge frame, serpentine, connector, orbit bus, terminal tree, and maze.
- Custom SVG paste mode for user-provided SVG markup.
- Animation modes: flow, pulse, draw, shimmer, and paused.
- Sliders for speed, dash length, stroke width, glow strength, stagger, scale, opacity, and preview padding.
- Controls for animation direction, line caps, line joins, node fill behavior, solid/gradient backgrounds, and surface textures.
- Copy panels for SVG, CSS, complete embed HTML, and model-readable implementation prompts.
- `llms.txt` and `AI.md` so code models can understand how to use the generated snippets.

## Getting Started

```bash
npm install
npm run dev
```

Build the static site:

```bash
npm run build
```

## GitHub Pages

This project can be published to GitHub Pages by building locally and pushing the generated `dist/` output to a `gh-pages` branch.

## Integration API

The generated snippets use these classes:

- `.animated-circuit`
- `.circuit-flow`
- `.circuit-pulse`
- `.circuit-draw`
- `.circuit-shimmer`
- `.circuit-paused`

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

## Preset Structure

Circuit presets are split by category under `src/circuit-presets/`:

- `core.js`: general traces, grids, chips, branches, and stacks.
- `boards.js`: boards, data lanes, frames, connectors, and maze routing.
- `networks.js`: mesh, hex, orbit, and tree structures.
- `signals.js`: antenna, waveform, and serpentine signal shapes.

`src/circuit-presets/index.js` exports both `circuitCategories` for grouped UI selectors and `circuits` for flat lookup.

## License

MIT. See `LICENSE`.
