# AI Implementation Guide

This project is designed so code models can be pointed at the app or repository and implement the exported circuit in another site.

## What To Copy

Use the app export panels in this order:

1. Copy the CSS panel into a global stylesheet, component stylesheet, or CSS module.
2. Copy the SVG panel into the target component or HTML page.
3. Keep the SVG class `animated-circuit`.
4. Keep exactly one animation class on the SVG: `circuit-flow`, `circuit-pulse`, `circuit-draw`, `circuit-shimmer`, or `circuit-paused`.
5. For a self-contained paste, use the Embed panel instead.

## Customization Contract

Change appearance through CSS variables on a wrapper such as `.circuit-surface`:

```css
.circuit-surface {
  --circuit-color: #3f7cff;
  --circuit-bg: #0b111b;
  --circuit-bg-alt: #18243b;
  --circuit-speed: 5s;
  --circuit-stroke: 2px;
  --circuit-glow: 8px;
  --circuit-dash: 150;
  --circuit-opacity: 1;
  --circuit-linecap: round;
  --circuit-linejoin: round;
  --circuit-node-fill: var(--circuit-bg);
  --circuit-direction: normal;
  --circuit-padding: 52px;
}
```

Do not rewrite SVG path data unless the target project needs a different circuit shape.
Use `circuit-pattern-grid`, `circuit-pattern-scanlines`, or `circuit-pattern-dots` on the wrapper when the exported snippet includes a textured surface.

## Prompt For Code Models

When implementing into another project, give the model this instruction:

```text
Add this animated SVG circuit to my page. Place the CSS once in the nearest appropriate stylesheet, place the SVG in the component markup, preserve the animated-circuit class and selected circuit animation class, and customize only through the CSS variables unless I ask for a different SVG shape.
```

## Files Worth Reading

- `src/circuit-presets/`: built-in SVG presets split by category.
- `src/circuit-presets/index.js`: grouped and flat preset exports.
- `src/main.js`: export generation and custom SVG handling.
- `src/styles.css`: app UI styling and animation classes.
- `llms.txt`: concise model-facing project summary.
