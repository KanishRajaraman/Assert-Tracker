import { H as jsxRuntimeExports } from "./server-C3xy30Ng.js";
import { P as Panel } from "./Panel-DYlq79_q.js";
import { c as createLucideIcon } from "./router-4hJi6Iyc.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$5 = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode$5);
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$4);
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
];
const Package = createLucideIcon("package", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M2 22h20", key: "272qi7" }],
  [
    "path",
    {
      d: "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",
      key: "fkigj9"
    }
  ]
];
const PlaneTakeoff = createLucideIcon("plane-takeoff", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode);
const kpis = [{
  label: "TOTAL TAGGED ASSETS",
  value: "1,420",
  delta: "+12 today",
  icon: Package,
  tone: "text-primary"
}, {
  label: "ASSETS IN USE",
  value: "342",
  delta: "24% utilization",
  icon: PlaneTakeoff,
  tone: "text-foreground"
}, {
  label: "MISSING / OVERDUE",
  value: "3",
  delta: "investigate",
  icon: TriangleAlert,
  tone: "text-danger"
}, {
  label: "CALIBRATION ALERTS",
  value: "14",
  delta: "next 30 days",
  icon: Clock,
  tone: "text-warning"
}];
const zones = [{
  name: "Hangar A",
  density: "high",
  pct: 92,
  tone: "bg-danger"
}, {
  name: "Paint Shop",
  density: "low",
  pct: 24,
  tone: "bg-success"
}, {
  name: "Warehouse Bins",
  density: "med",
  pct: 68,
  tone: "bg-warning"
}, {
  name: "Cleanroom B",
  density: "high",
  pct: 98,
  tone: "bg-danger"
}, {
  name: "Tow Yard",
  density: "low",
  pct: 18,
  tone: "bg-success"
}, {
  name: "On-Wing Zone",
  density: "med",
  pct: 55,
  tone: "bg-warning"
}];
const activity = [{
  time: "10:14",
  type: "Check-In",
  asset: "Torque Wrench #42",
  by: "J. Doe — Zone A",
  tone: "text-success",
  icon: CircleCheck
}, {
  time: "09:45",
  type: "Check-Out",
  asset: "Avionics Tester",
  by: "A. Smith — Hangar B",
  tone: "text-primary",
  icon: ArrowUpRight
}, {
  time: "08:30",
  type: "ALERT — Calib. Expired",
  asset: "Rivet Gun #09",
  by: "System auto-flag",
  tone: "text-danger",
  icon: TriangleAlert
}, {
  time: "08:02",
  type: "Check-In",
  asset: "Pneumatic Riveter",
  by: "M. Kowalski — Hangar A",
  tone: "text-success",
  icon: CircleCheck
}, {
  time: "07:55",
  type: "Sweep Complete",
  asset: "Composite Vault 01",
  by: "Handheld Reader 04",
  tone: "text-primary",
  icon: CircleCheck
}];
function CommandCenter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] tracking-[0.2em] text-muted-foreground", children: "SECTION · 01" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold mt-1", children: "Command Center" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Live operational picture across all hangars, bays, and storage." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs text-muted-foreground text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "SHIFT · DAY-A" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-foreground", children: [
          (/* @__PURE__ */ new Date()).toUTCString().slice(17, 22),
          " UTC"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: kpis.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel p-4 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] tracking-widest text-muted-foreground", children: k.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-display text-4xl font-bold mt-2 ${k.tone}`, children: k.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: k.delta })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(k.icon, { className: `w-5 h-5 ${k.tone}` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" })
    ] }, k.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Live Hangar Heatmap · 2D Floorplan", className: "lg:col-span-2", action: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 normal-case tracking-normal text-[11px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "status-dot bg-primary" }),
          " Hand Tools"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "status-dot bg-success" }),
          " Tow Vehicles"
        ] })
      ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[340px] rounded-sm bg-background border border-border overflow-hidden scanline", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 600 340", className: "w-full h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("pattern", { id: "g", width: "20", height: "20", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 20 0 L 0 0 0 20", fill: "none", stroke: "oklch(0.3 0.03 240)", strokeWidth: "0.5" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "600", height: "340", fill: "url(#g)" }),
          zones.map((z, i) => {
            const x = i % 3 * 200 + 20;
            const y = Math.floor(i / 3) * 160 + 20;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x, y, width: "160", height: "140", fill: "oklch(0.22 0.025 240)", stroke: "oklch(0.32 0.03 240)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x, y: y + 130, width: `${160 * z.pct / 100}`, height: "10", className: z.tone, fillOpacity: "0.7" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: x + 8, y: y + 20, fontFamily: "JetBrains Mono", fontSize: "10", fill: "oklch(0.65 0.02 230)", letterSpacing: "1", children: z.name.toUpperCase() }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: x + 8, y: y + 48, fontFamily: "Space Grotesk", fontSize: "22", fontWeight: "700", fill: "oklch(0.96 0.01 220)", children: [
                z.pct,
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: x + 8, y: y + 64, fontFamily: "JetBrains Mono", fontSize: "9", fill: "oklch(0.65 0.02 230)", children: [
                z.density.toUpperCase(),
                " DENSITY"
              ] }),
              Array.from({
                length: Math.floor(z.pct / 8)
              }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: x + 20 + j * 17 % 130, cy: y + 90 + Math.floor(j * 17 / 130) * 12, r: "2.4", fill: j % 3 === 0 ? "oklch(0.72 0.18 150)" : "oklch(0.82 0.17 195)" }, j))
            ] }, z.name);
          })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3 font-mono text-[10px] text-muted-foreground tracking-widest", children: "FLOORPLAN · BUILDING 7 · LIVE" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { title: "Recent Activity Feed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: activity.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 pb-3 border-b border-border last:border-0 last:pb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(a.icon, { className: `w-4 h-4 mt-0.5 shrink-0 ${a.tone}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground", children: a.time }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-medium ${a.tone}`, children: a.type })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm mt-0.5 truncate", children: a.asset }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: a.by })
          ] })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-4 w-full text-xs font-mono tracking-widest text-primary hover:underline", children: "VIEW FULL OPERATIONAL LOG →" })
      ] })
    ] })
  ] });
}
export {
  CommandCenter as component
};
