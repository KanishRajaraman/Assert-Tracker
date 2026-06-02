import { H as jsxRuntimeExports } from "./server-C3xy30Ng.js";
import { P as Panel } from "./Panel-DYlq79_q.js";
import { c as createLucideIcon } from "./router-4hJi6Iyc.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
];
const Activity = createLucideIcon("activity", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
      key: "1ptgy4"
    }
  ],
  [
    "path",
    {
      d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
      key: "1sl1rz"
    }
  ]
];
const Droplets = createLucideIcon("droplets", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" }]
];
const Thermometer = createLucideIcon("thermometer", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const sectors = [{
  name: "Hangar Sector A",
  icon: "🏭",
  value: 42,
  label: "CAPACITY",
  tone: "bg-success",
  text: "text-success"
}, {
  name: "Cleanroom Suite B",
  icon: "🧪",
  value: 98,
  label: "CAPACITY",
  tone: "bg-danger",
  text: "text-danger"
}, {
  name: "Storage Vault 01",
  icon: "📦",
  value: 75,
  label: "CAPACITY",
  tone: "bg-warning",
  text: "text-warning"
}, {
  name: "On-Wing Repair Zone",
  icon: "✈️",
  value: 12,
  label: "TOOLS OUT",
  tone: "bg-success",
  text: "text-success"
}];
function Zones() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] tracking-[0.2em] text-muted-foreground", children: "SECTION · 04" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold mt-1", children: "Zone & Room Analytics" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Capacity, climate, and live RFID sweep telemetry per facility." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Sector Overview", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: sectors.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm bg-background border border-border p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: s.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono text-[10px] tracking-widest ${s.text}`, children: s.label })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-3xl font-bold mt-3", children: [
        s.value,
        s.label === "CAPACITY" ? "%" : ""
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: s.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-1 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full ${s.tone}`, style: {
        width: `${s.label === "CAPACITY" ? s.value : Math.min(s.value * 5, 100)}%`
      } }) })
    ] }, s.name)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Climate Stability Logs · Specialized Storage", action: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] normal-case tracking-normal text-success flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "status-dot bg-success animate-pulse" }),
        " NOMINAL"
      ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChartRow, { icon: Thermometer, label: "TEMPERATURE", target: "22°C", current: "22.3°C", tone: "text-primary", color: "oklch(0.82 0.17 195)", data: [22.4, 22.1, 22.8, 23.2, 22.7, 22, 21.8, 22.1, 22.3, 22.5, 22.2, 22.3], target_: 22, min: 20, max: 25 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChartRow, { icon: Droplets, label: "HUMIDITY", target: "40%", current: "41%", tone: "text-success", color: "oklch(0.72 0.18 150)", data: [42, 41, 43, 40, 39, 40, 41, 42, 41, 40, 41, 41], target_: 40, min: 35, max: 50 })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Real-Time Room Sweep Status", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[10px] tracking-widest text-muted-foreground", children: "TARGET ROOM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-1 w-full flex items-center justify-between bg-background border border-border rounded-sm px-3 py-2 text-sm hover:border-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Composite Vault 01" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "▾" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm bg-background border border-border p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] tracking-widest text-muted-foreground", children: "LAST SWEEP" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-2xl font-bold mt-1", children: [
              "42",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground font-sans", children: " min ago" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground mt-1", children: "Handheld Reader 04" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm bg-background border border-border p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] tracking-widest text-muted-foreground", children: "RECONCILIATION" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold mt-1 text-success", children: "100%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground mt-1", children: "All tags reconciled" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm bg-background border border-border p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Expected Tags" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold", children: "124" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Detected Tags" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-success", children: "124" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm mt-2 pt-2 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Variance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-success", children: "0" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full flex items-center justify-center gap-2 px-4 py-3 rounded-sm bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 glow-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4" }),
          " Run Polar Live Room Audit"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[11px] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-3.5 h-3.5" }),
          " Audit dispatches 14 ceiling antennas + 2 handhelds"
        ] })
      ] }) })
    ] })
  ] });
}
function ChartRow({
  icon: Icon,
  label,
  target,
  current,
  tone,
  color,
  data,
  target_,
  min,
  max
}) {
  const w = 360, h = 80;
  const norm = (v) => h - (v - min) / (max - min) * h;
  const step = w / (data.length - 1);
  const points = data.map((v, i) => `${i * step},${norm(v)}`).join(" ");
  const targetY = norm(target_);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-4 h-4 ${tone}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] tracking-widest text-muted-foreground", children: label })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
          "TARGET ",
          target
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `ml-3 ${tone}`, children: [
          "NOW ",
          current
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: `0 0 ${w} ${h}`, className: "w-full h-20 bg-background border border-border rounded-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: targetY, x2: w, y2: targetY, stroke: "oklch(0.45 0.03 240)", strokeDasharray: "3 3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points, fill: "none", stroke: color, strokeWidth: "2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: `0,${h} ${points} ${w},${h}`, fill: color, opacity: "0.12" }),
      data.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: i * step, cy: norm(v), r: "2", fill: color }, i))
    ] })
  ] });
}
export {
  Zones as component
};
