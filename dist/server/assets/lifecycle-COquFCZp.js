import { H as jsxRuntimeExports } from "./server-C3xy30Ng.js";
import { P as Panel } from "./Panel-DYlq79_q.js";
import { c as createLucideIcon, S as Search, W as Wrench } from "./router-4hJi6Iyc.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode$1);
const __iconNode = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode);
const rows = [{
  id: "#TL-8492",
  desc: "Pneumatic Riveter",
  zone: "Hangar Floor",
  scoreLabel: "94% READY",
  scoreTone: "bg-success/15 text-success border-success/40",
  bar: 94,
  doc: "Manual_Riv.pdf"
}, {
  id: "#AV-0421",
  desc: "Avionics Tester",
  zone: "Bench 04",
  scoreLabel: "12 DAYS LEFT",
  scoreTone: "bg-warning/15 text-warning border-warning/40",
  bar: 40,
  doc: "Cert_2026.pdf"
}, {
  id: "#TL-1102",
  desc: "Torque Wrench #12",
  zone: "Locker B",
  scoreLabel: "CALIB EXPIRED",
  scoreTone: "bg-danger/15 text-danger border-danger/40",
  bar: 8,
  doc: "SDS_Sheet.pdf",
  selected: true
}, {
  id: "#TW-3344",
  desc: "Tow Tractor Alpha",
  zone: "Tow Yard",
  scoreLabel: "82% READY",
  scoreTone: "bg-success/15 text-success border-success/40",
  bar: 82,
  doc: "Service_Log.pdf"
}, {
  id: "#CL-7711",
  desc: "Composite Layup Kit",
  zone: "Cleanroom B",
  scoreLabel: "26 DAYS LEFT",
  scoreTone: "bg-warning/15 text-warning border-warning/40",
  bar: 55,
  doc: "Compliance.pdf"
}];
function Lifecycle() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] tracking-[0.2em] text-muted-foreground", children: "SECTION · 03" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold mt-1", children: "Asset Lifecycle Manager" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Calibration, certifications, and chain-of-custody for every tagged tool." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { title: "Asset Registry · 1,420 items", action: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 normal-case tracking-normal text-[11px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-3.5 h-3.5" }),
      " 3 filters"
    ] }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-4", children: [
        ["All Status", "Manufacturer", "Next Calib Date"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "px-3 py-1.5 rounded-sm bg-background border border-border text-xs hover:border-primary", children: [
          f,
          " ▾"
        ] }, f)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative ml-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Clean table search…", className: "bg-background border border-border rounded-sm pl-8 pr-3 py-1.5 text-xs w-56" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm border-collapse", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "font-mono text-[10px] tracking-widest text-muted-foreground border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-2", children: "ASSET ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-2", children: "DESCRIPTION" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-2", children: "ZONE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-2", children: "LIFECYCLE SCORE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-2", children: "DOCS" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: `border-b border-border/60 hover:bg-muted/40 ${r.selected ? "bg-primary/5" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2 font-mono text-primary", children: r.id }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2", children: r.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2 text-muted-foreground", children: r.zone }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded-sm border text-[10px] font-mono tracking-wider ${r.scoreTone}`, children: r.scoreLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-1 bg-background rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-to-r from-primary to-success", style: {
              width: `${r.bar}%`
            } }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3.5 h-3.5" }),
            " ",
            r.doc
          ] }) })
        ] }, r.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Selected · Torque Wrench #12 · Usage Statistics", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] tracking-widest text-muted-foreground", children: "TOTAL USAGE CYCLES" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-4xl font-bold mt-1", children: [
            "1,240",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base text-muted-foreground font-sans", children: " cycles" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] tracking-widest text-muted-foreground", children: "LOGGED FLIGHT HOURS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold mt-1", children: "248 hrs" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] tracking-widest text-muted-foreground", children: "LAST USER" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm mt-1", children: "Tech. M. Kowalski" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] text-muted-foreground", children: "EMP-44219" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 flex items-end gap-1", children: Array.from({
          length: 32
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-primary/60 rounded-t-sm", style: {
          height: `${20 + Math.abs(Math.sin(i * 0.6)) * 80}%`
        } }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] text-muted-foreground tracking-widest", children: "USAGE · LAST 32 SHIFTS" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Compliance Actions", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm border border-danger/40 bg-danger/10 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] tracking-widest text-danger", children: "STATUS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-2xl font-bold text-danger mt-1 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-5 h-5" }),
            " OUT OF SERVICE"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Calibration certificate expired 2 days ago. Asset auto-locked from check-out." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full flex items-center justify-between px-4 py-3 rounded-sm bg-background border border-border hover:border-primary text-sm group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4" }),
            " Lock asset in system check-out"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-success", children: "ENFORCED" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full flex items-center justify-between px-4 py-3 rounded-sm bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "w-4 h-4" }),
            " Request calibration service"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "→" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 text-center pt-2", children: [["Mfr", "Snap-On"], ["Model", "TQ-1500"], ["Serial", "SO-44A"]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border rounded-sm py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] text-muted-foreground tracking-widest", children: k.toUpperCase() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mt-0.5", children: v })
        ] }, k)) })
      ] }) })
    ] })
  ] });
}
export {
  Lifecycle as component
};
