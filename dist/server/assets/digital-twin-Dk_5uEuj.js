import { H as jsxRuntimeExports } from "./server-C3xy30Ng.js";
import { P as Panel } from "./Panel-DYlq79_q.js";
import { c as createLucideIcon, S as Search } from "./router-4hJi6Iyc.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "22", x2: "18", y1: "12", y2: "12", key: "l9bcsi" }],
  ["line", { x1: "6", x2: "2", y1: "12", y2: "12", key: "13hhkx" }],
  ["line", { x1: "12", x2: "12", y1: "6", y2: "2", key: "10w3f3" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "18", key: "15g9kq" }]
];
const Crosshair = createLucideIcon("crosshair", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "m21 3-7 7", key: "1l2asr" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
];
const Maximize2 = createLucideIcon("maximize-2", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M5 3v16h16", key: "1mqmf9" }],
  ["path", { d: "m5 19 6-6", key: "jh6hbb" }],
  ["path", { d: "m2 6 3-3 3 3", key: "tkyvxa" }],
  ["path", { d: "m18 16 3 3-3 3", key: "1d4glt" }]
];
const Move3d = createLucideIcon("move-3d", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
];
const RotateCw = createLucideIcon("rotate-cw", __iconNode$1);
const __iconNode = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
  ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18", key: "1dp563" }]
];
const Tablet = createLucideIcon("tablet", __iconNode);
function DigitalTwin() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] tracking-[0.2em] text-muted-foreground", children: "SECTION · 02" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold mt-1", children: "Digital Twin Workspace" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Pinpoint any tagged asset in 3D with sub-10cm RFID precision." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Control Panel", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[10px] tracking-widest text-muted-foreground", children: "SEARCH TARGET" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { defaultValue: "Part X-104", className: "w-full bg-background border border-border rounded-sm pl-9 pr-3 py-2 text-sm" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[10px] tracking-widest text-muted-foreground", children: "TARGET COORDINATES" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 grid grid-cols-3 gap-2 font-mono", children: [["X", "2.4m"], ["Y", "1.1m"], ["Z", "0.8m"]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border rounded-sm px-3 py-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-primary", children: v })
        ] }, k)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[10px] tracking-widest text-muted-foreground", children: "LAYER FILTERS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 flex flex-wrap gap-2", children: ["Static Machinery", "Mobile Tow Tractors", "Handheld Tool Cribs"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 bg-background border border-border rounded-sm px-2 py-1.5 text-xs cursor-pointer hover:border-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", defaultChecked: true, className: "accent-[oklch(0.82_0.17_195)]" }),
          l
        ] }, l)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "3D CAD Environment Viewer · High-Fidelity Render", action: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] normal-case tracking-normal text-success", children: "● LIVE TELEMETRY" }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[460px] rounded-sm bg-background border border-border overflow-hidden scanline", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 800 460", className: "w-full h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pattern", { id: "floor", width: "40", height: "20", patternUnits: "userSpaceOnUse", patternTransform: "skewX(-30)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 40 0 L 0 0 0 20", fill: "none", stroke: "oklch(0.3 0.03 240)", strokeWidth: "0.5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "rack", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0", stopColor: "oklch(0.32 0.03 240)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "1", stopColor: "oklch(0.22 0.025 240)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "100,400 700,400 800,260 0,260", fill: "url(#floor)", opacity: "0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "60,260 60,80 400,30 740,80 740,260", fill: "none", stroke: "oklch(0.4 0.03 240)", strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "60", y1: "80", x2: "740", y2: "80", stroke: "oklch(0.4 0.03 240)", strokeDasharray: "4 4" }),
        [140, 260, 380, 500, 620].map((x, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x, y: "220", width: "80", height: "160", fill: "url(#rack)", stroke: "oklch(0.4 0.03 240)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: x, y1: "260", x2: x + 80, y2: "260", stroke: "oklch(0.32 0.03 240)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: x, y1: "300", x2: x + 80, y2: "300", stroke: "oklch(0.32 0.03 240)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: x, y1: "340", x2: x + 80, y2: "340", stroke: "oklch(0.32 0.03 240)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: x + 8, y: "215", fontFamily: "JetBrains Mono", fontSize: "9", fill: "oklch(0.65 0.02 230)", children: [
            "SHELF B",
            i + 1
          ] })
        ] }, x)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "430", y: "340", width: "60", height: "30", fill: "oklch(0.72 0.18 150)", opacity: "0.6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "445", cy: "375", r: "6", fill: "oklch(0.32 0.03 240)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "480", cy: "375", r: "6", fill: "oklch(0.32 0.03 240)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("circle", { cx: "300", cy: "280", r: "40", fill: "none", stroke: "oklch(0.65 0.24 25)", strokeWidth: "1.5", opacity: "0.4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("animate", { attributeName: "r", values: "20;55;20", dur: "2.5s", repeatCount: "indefinite" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("animate", { attributeName: "opacity", values: "0.8;0;0.8", dur: "2.5s", repeatCount: "indefinite" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "300", cy: "280", r: "16", fill: "oklch(0.65 0.24 25)", fillOpacity: "0.25", stroke: "oklch(0.65 0.24 25)", strokeWidth: "1.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "300", y1: "265", x2: "300", y2: "295", stroke: "oklch(0.65 0.24 25)", strokeWidth: "1.2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "285", y1: "280", x2: "315", y2: "280", stroke: "oklch(0.65 0.24 25)", strokeWidth: "1.2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "316", y1: "280", x2: "500", y2: "160", stroke: "oklch(0.65 0.24 25)", strokeDasharray: "3 3", opacity: "0.6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "500", y: "140", width: "180", height: "60", fill: "oklch(0.22 0.025 240)", stroke: "oklch(0.65 0.24 25)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "510", y: "160", fontFamily: "JetBrains Mono", fontSize: "9", fill: "oklch(0.65 0.24 25)", letterSpacing: "1", children: "TARGET LOCK" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "510", y: "178", fontFamily: "Space Grotesk", fontSize: "14", fontWeight: "700", fill: "oklch(0.96 0.01 220)", children: "Part X-104" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "510", y: "194", fontFamily: "JetBrains Mono", fontSize: "9", fill: "oklch(0.65 0.02 230)", children: "SHELF B3 · ±0.08m" })
        ] }),
        Array.from({
          length: 30
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: 120 + i * 23 % 600, cy: 250 + i * 47 % 120, r: "2", fill: "oklch(0.82 0.17 195)", opacity: "0.6" }, i))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3 flex gap-1", children: [Move3d, RotateCw, Maximize2, Crosshair].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-8 h-8 grid place-items-center rounded-sm bg-panel/80 border border-border hover:border-primary text-muted-foreground hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" }) }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3 font-mono text-[10px] text-muted-foreground tracking-widest", children: "VIEW: ORBIT · PAN · ZOOM   |   FPS 60   |   CAD r.2026.1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "absolute bottom-3 right-3 flex items-center gap-2 px-3 py-2 rounded-sm bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tablet, { className: "w-4 h-4" }),
        " Launch Tablet AR"
      ] })
    ] }) })
  ] });
}
export {
  DigitalTwin as component
};
