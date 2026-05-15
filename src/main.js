import "./styles.css";
import { circuits } from "./circuits.js";

const state = {
  source: "preset",
  circuitId: circuits[0].id,
  animationMode: "flow",
  animationDirection: "normal",
  speed: 5,
  dash: 150,
  stroke: 2,
  glow: 8,
  stagger: 0.16,
  scale: 100,
  circuitColor: "#3f7cff",
  opacity: 1,
  lineCap: "round",
  lineJoin: "round",
  nodeFill: "background",
  backgroundMode: "solid",
  backgroundPattern: "none",
  backgroundColor: "#0b111b",
  backgroundAlt: "#18243b",
  stagePadding: 52,
  customSvg: ""
};

const elements = {
  stageWrap: document.querySelector("#stageWrap"),
  stage: document.querySelector("#stage"),
  circuitSelect: document.querySelector("#circuitSelect"),
  sourceButtons: [...document.querySelectorAll("[data-source]")],
  customSvgField: document.querySelector("#customSvgField"),
  customSvg: document.querySelector("#customSvg"),
  validationMessage: document.querySelector("#validationMessage"),
  animationMode: document.querySelector("#animationMode"),
  animationDirection: document.querySelector("#animationDirection"),
  speed: document.querySelector("#speed"),
  dash: document.querySelector("#dash"),
  stroke: document.querySelector("#stroke"),
  glow: document.querySelector("#glow"),
  stagger: document.querySelector("#stagger"),
  scale: document.querySelector("#scale"),
  circuitColor: document.querySelector("#circuitColor"),
  opacity: document.querySelector("#opacity"),
  lineCap: document.querySelector("#lineCap"),
  lineJoin: document.querySelector("#lineJoin"),
  nodeFill: document.querySelector("#nodeFill"),
  backgroundMode: document.querySelector("#backgroundMode"),
  backgroundPattern: document.querySelector("#backgroundPattern"),
  backgroundColor: document.querySelector("#backgroundColor"),
  backgroundAlt: document.querySelector("#backgroundAlt"),
  stagePadding: document.querySelector("#stagePadding"),
  speedValue: document.querySelector("#speedValue"),
  dashValue: document.querySelector("#dashValue"),
  strokeValue: document.querySelector("#strokeValue"),
  glowValue: document.querySelector("#glowValue"),
  staggerValue: document.querySelector("#staggerValue"),
  scaleValue: document.querySelector("#scaleValue"),
  opacityValue: document.querySelector("#opacityValue"),
  paddingValue: document.querySelector("#paddingValue"),
  svgOutput: document.querySelector("#svgOutput"),
  cssOutput: document.querySelector("#cssOutput"),
  embedOutput: document.querySelector("#embedOutput"),
  aiOutput: document.querySelector("#aiOutput"),
  copyButtons: [...document.querySelectorAll("[data-copy]")]
};

function init() {
  elements.circuitSelect.innerHTML = circuits
    .map((circuit) => `<option value="${circuit.id}">${circuit.name}</option>`)
    .join("");

  bindInput(elements.circuitSelect, "circuitId");
  bindInput(elements.animationMode, "animationMode");
  bindInput(elements.animationDirection, "animationDirection");
  bindInput(elements.speed, "speed", Number);
  bindInput(elements.dash, "dash", Number);
  bindInput(elements.stroke, "stroke", Number);
  bindInput(elements.glow, "glow", Number);
  bindInput(elements.stagger, "stagger", Number);
  bindInput(elements.scale, "scale", Number);
  bindInput(elements.circuitColor, "circuitColor");
  bindInput(elements.opacity, "opacity", Number);
  bindInput(elements.lineCap, "lineCap");
  bindInput(elements.lineJoin, "lineJoin");
  bindInput(elements.nodeFill, "nodeFill");
  bindInput(elements.backgroundMode, "backgroundMode");
  bindInput(elements.backgroundPattern, "backgroundPattern");
  bindInput(elements.backgroundColor, "backgroundColor");
  bindInput(elements.backgroundAlt, "backgroundAlt");
  bindInput(elements.stagePadding, "stagePadding", Number);

  elements.sourceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.source = button.dataset.source;
      render();
    });
  });

  elements.customSvg.addEventListener("input", (event) => {
    state.customSvg = event.target.value;
    render();
  });

  elements.copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const text = getCopyText(button.dataset.copy);
      await copyText(text);
      const oldText = button.textContent;
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = oldText;
      }, 1200);
    });
  });

  render();
}

function bindInput(element, key, transform = (value) => value) {
  element.addEventListener("input", (event) => {
    state[key] = transform(event.target.value);
    render();
  });
}

function getActiveCircuit() {
  return circuits.find((circuit) => circuit.id === state.circuitId) ?? circuits[0];
}

function getSelectedSvg() {
  if (state.source === "custom") {
    const parsed = parseCustomSvg(state.customSvg);
    return parsed.ok ? parsed.svg : null;
  }

  const circuit = getActiveCircuit();
  return `<svg class="animated-circuit circuit-${state.animationMode}" viewBox="${circuit.viewBox}" role="img" aria-label="${escapeAttribute(circuit.name)} animated circuit" style="width:${circuit.width}px">
${circuit.markup}
</svg>`;
}

function parseCustomSvg(markup) {
  if (!markup.trim()) {
    return { ok: false, message: "Paste an SVG to preview and export it." };
  }

  const parser = new DOMParser();
  const document = parser.parseFromString(markup, "image/svg+xml");
  const parseError = document.querySelector("parsererror");
  const svg = document.querySelector("svg");

  if (parseError || !svg) {
    return { ok: false, message: "That does not look like valid SVG markup yet." };
  }

  svg.classList.add("animated-circuit", `circuit-${state.animationMode}`);
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", "Custom animated circuit");
  return { ok: true, svg: svg.outerHTML };
}

function render() {
  const selectedSvg = getSelectedSvg();
  const validation = state.source === "custom" ? parseCustomSvg(state.customSvg) : { ok: true, message: "" };

  elements.sourceButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.source === state.source);
  });
  elements.customSvgField.classList.toggle("visible", state.source === "custom");
  elements.validationMessage.textContent = validation.ok ? "" : validation.message;
  elements.validationMessage.classList.toggle("visible", !validation.ok);

  setTextValues();
  setThemeVariables();

  elements.stage.innerHTML = selectedSvg ?? `<p class="empty-preview">Paste a valid SVG to see it animate.</p>`;
  const previewSvg = elements.stage.querySelector("svg");
  if (previewSvg) {
    previewSvg.classList.remove("circuit-flow", "circuit-pulse", "circuit-draw", "circuit-shimmer", "circuit-paused");
    previewSvg.classList.add("animated-circuit", `circuit-${state.animationMode}`);
    previewSvg.style.width = `${Math.max(120, state.scale * 2.4)}px`;
    prepareAnimatedElements(previewSvg);
  }

  const css = createCss();
  const svg = selectedSvg ?? "";
  const embed = `<style>\n${css}\n</style>\n<div class="circuit-surface circuit-pattern-${state.backgroundPattern}">\n${svg}\n</div>`;

  elements.svgOutput.textContent = svg;
  elements.cssOutput.textContent = css;
  elements.embedOutput.textContent = embed;
  elements.aiOutput.textContent = createAiPrompt(svg, css);
}

function prepareAnimatedElements(svg) {
  const animatedElements = [...svg.querySelectorAll("path, circle, rect, polyline, line")];

  animatedElements.forEach((element, index) => {
    const length = getElementLength(element);
    const dash = Math.max(8, Math.min(length * 0.32, state.dash));
    const gap = Math.max(length, state.dash * 4);
    const span = gap + dash;
    element.style.setProperty("--trace-length", length.toFixed(2));
    element.style.setProperty("--trace-dash", dash.toFixed(2));
    element.style.setProperty("--trace-gap", gap.toFixed(2));
    element.style.setProperty("--trace-start", span.toFixed(2));
    element.style.setProperty("--trace-end", `-${span.toFixed(2)}`);
    element.style.setProperty("--trace-delay", `${index * -state.stagger}s`);
  });
}

function getElementLength(element) {
  if (typeof element.getTotalLength === "function") {
    try {
      return Math.max(element.getTotalLength(), 1);
    } catch {
      return state.dash;
    }
  }

  return state.dash;
}

function setTextValues() {
  elements.speedValue.textContent = `${state.speed.toFixed(1)}s`;
  elements.dashValue.textContent = `${state.dash}px`;
  elements.strokeValue.textContent = `${state.stroke.toFixed(2)}px`;
  elements.glowValue.textContent = `${state.glow}px`;
  elements.staggerValue.textContent = `${state.stagger.toFixed(2)}s`;
  elements.scaleValue.textContent = `${state.scale}%`;
  elements.opacityValue.textContent = `${Math.round(state.opacity * 100)}%`;
  elements.paddingValue.textContent = `${state.stagePadding}px`;
}

function setThemeVariables() {
  const background =
    state.backgroundMode === "gradient"
      ? `linear-gradient(135deg, ${state.backgroundColor}, ${state.backgroundAlt})`
      : state.backgroundColor;

  elements.stageWrap.style.setProperty("--preview-background", background);
  elements.stageWrap.style.setProperty("--preview-padding", `${state.stagePadding}px`);
  elements.stageWrap.dataset.pattern = state.backgroundPattern;
  elements.stage.style.setProperty("--circuit-color", state.circuitColor);
  elements.stage.style.setProperty("--circuit-bg", state.backgroundColor);
  elements.stage.style.setProperty("--circuit-bg-alt", state.backgroundAlt);
  elements.stage.style.setProperty("--circuit-speed", `${state.speed}s`);
  elements.stage.style.setProperty("--circuit-stroke", `${state.stroke}px`);
  elements.stage.style.setProperty("--circuit-glow", `${state.glow}px`);
  elements.stage.style.setProperty("--circuit-dash", state.dash);
  elements.stage.style.setProperty("--circuit-opacity", state.opacity);
  elements.stage.style.setProperty("--circuit-linecap", state.lineCap);
  elements.stage.style.setProperty("--circuit-linejoin", state.lineJoin);
  elements.stage.style.setProperty("--circuit-node-fill", getNodeFillValue());
  elements.stage.style.setProperty("--circuit-direction", state.animationDirection);
}

function createCss() {
  const backgroundValue =
    state.backgroundMode === "gradient"
      ? `linear-gradient(135deg, var(--circuit-bg), var(--circuit-bg-alt))`
      : "var(--circuit-bg)";

  return `.circuit-surface {
  --circuit-color: ${state.circuitColor};
  --circuit-bg: ${state.backgroundColor};
  --circuit-bg-alt: ${state.backgroundAlt};
  --circuit-speed: ${state.speed}s;
  --circuit-stroke: ${state.stroke}px;
  --circuit-glow: ${state.glow}px;
  --circuit-dash: ${state.dash};
  --circuit-opacity: ${state.opacity};
  --circuit-linecap: ${state.lineCap};
  --circuit-linejoin: ${state.lineJoin};
  --circuit-node-fill: ${getNodeFillValue()};
  --circuit-direction: ${state.animationDirection};
  --circuit-padding: ${state.stagePadding}px;
  position: relative;
  isolation: isolate;
  display: grid;
  place-items: center;
  padding: var(--circuit-padding);
  overflow: hidden;
  background: ${backgroundValue};
}

.circuit-surface::before {
  position: absolute;
  inset: 0;
  z-index: -1;
  content: "";
  opacity: 0;
  pointer-events: none;
}

.circuit-pattern-grid::before {
  opacity: 0.32;
  background-image:
    linear-gradient(rgb(120 205 255 / 16%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(120 205 255 / 16%) 1px, transparent 1px);
  background-size: 28px 28px;
}

.circuit-pattern-scanlines::before {
  opacity: 0.24;
  background-image: linear-gradient(transparent 0 72%, rgb(120 205 255 / 18%) 72% 100%);
  background-size: 100% 9px;
}

.circuit-pattern-dots::before {
  opacity: 0.28;
  background-image: radial-gradient(circle, rgb(120 205 255 / 22%) 1px, transparent 1.6px);
  background-size: 18px 18px;
}

.animated-circuit {
  overflow: visible;
}

.animated-circuit path,
.animated-circuit circle,
.animated-circuit rect,
.animated-circuit polyline,
.animated-circuit line {
  fill: none;
  stroke: var(--circuit-color);
  stroke-width: var(--circuit-stroke);
  stroke-linecap: var(--circuit-linecap);
  stroke-linejoin: var(--circuit-linejoin);
  opacity: var(--circuit-opacity);
  stroke-dasharray: var(--trace-dash, var(--circuit-dash)) var(--trace-gap, 600);
  stroke-dashoffset: var(--trace-start, 600);
  filter: drop-shadow(0 0 var(--circuit-glow) var(--circuit-color));
  animation: circuit-flow var(--circuit-speed) linear infinite;
  animation-delay: var(--trace-delay, 0s);
  animation-direction: var(--circuit-direction);
}

.animated-circuit .node {
  fill: var(--circuit-node-fill);
}

.circuit-pulse path,
.circuit-pulse circle,
.circuit-pulse rect,
.circuit-pulse polyline,
.circuit-pulse line {
  animation-name: circuit-pulse;
}

.circuit-draw path,
.circuit-draw circle,
.circuit-draw rect,
.circuit-draw polyline,
.circuit-draw line {
  animation-name: circuit-draw;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  stroke-dasharray: var(--trace-length, 600);
}

.circuit-shimmer path,
.circuit-shimmer circle,
.circuit-shimmer rect,
.circuit-shimmer polyline,
.circuit-shimmer line {
  animation-name: circuit-shimmer;
}

.circuit-paused path,
.circuit-paused circle,
.circuit-paused rect,
.circuit-paused polyline,
.circuit-paused line {
  animation-play-state: paused;
}

@keyframes circuit-flow {
  0% { stroke-dashoffset: var(--trace-start, 600); opacity: 0.25; }
  18% { opacity: 1; }
  100% { stroke-dashoffset: var(--trace-end, -600); opacity: 0.6; }
}

@keyframes circuit-pulse {
  0%, 100% { opacity: 0.55; filter: drop-shadow(0 0 calc(var(--circuit-glow) * 0.5) var(--circuit-color)); }
  50% { opacity: 1; filter: drop-shadow(0 0 calc(var(--circuit-glow) * 1.6) var(--circuit-color)); }
}

@keyframes circuit-draw {
  0% { stroke-dashoffset: var(--trace-length, 600); opacity: 0.4; }
  70%, 100% { stroke-dashoffset: 0; opacity: 1; }
}

@keyframes circuit-shimmer {
  0% { stroke-dashoffset: var(--trace-start, 600); opacity: 0.65; }
  40% { opacity: 1; }
  100% { stroke-dashoffset: var(--trace-end, -600); opacity: 0.65; }
}`;
}

function getNodeFillValue() {
  if (state.nodeFill === "color") {
    return "var(--circuit-color)";
  }

  if (state.nodeFill === "transparent") {
    return "transparent";
  }

  return "var(--circuit-bg)";
}

function createAiPrompt(svg, css) {
  return `Implement this animated SVG circuit in my project.

Requirements:
1. Add the CSS exactly once, preferably in the component stylesheet or global CSS file.
2. Add the SVG where the animated circuit should appear.
3. Keep the classes "animated-circuit" and "circuit-${state.animationMode}" on the SVG.
4. Customize the CSS variables on a wrapper with class "circuit-surface" when changing color, speed, stroke, glow, dash, or background.
5. Preserve the MIT license notice if you redistribute this snippet as part of a template or library.

CSS:
${css}

SVG:
${svg}`;
}

function getCopyText(type) {
  const values = {
    svg: elements.svgOutput.textContent,
    css: elements.cssOutput.textContent,
    embed: elements.embedOutput.textContent,
    ai: elements.aiOutput.textContent
  };
  return values[type] ?? "";
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-999px";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function escapeAttribute(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

init();
