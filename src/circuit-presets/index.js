import { coreCircuits } from "./core.js";
import { boardCircuits } from "./boards.js";
import { networkCircuits } from "./networks.js";
import { signalCircuits } from "./signals.js";

export const circuitCategories = [
  {
    id: "core",
    label: "Core traces",
    description: "General-purpose traces, branches, grids, chips, and stacks.",
    circuits: coreCircuits
  },
  {
    id: "boards",
    label: "Boards and connectors",
    description: "Dense boards, lanes, frames, connectors, and maze-like routing.",
    circuits: boardCircuits
  },
  {
    id: "networks",
    label: "Networks",
    description: "Mesh, orbit, hex, and tree structures for distributed systems visuals.",
    circuits: networkCircuits
  },
  {
    id: "signals",
    label: "Signals",
    description: "Waveforms, antennas, and flowing signal-oriented shapes.",
    circuits: signalCircuits
  }
];

export const circuits = circuitCategories.flatMap((category) => category.circuits);
