import { H as jsxRuntimeExports } from "./server-C3xy30Ng.js";
import { P as Panel } from "./Panel-DYlq79_q.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Settings() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] tracking-[0.2em] text-muted-foreground", children: "SECTION · 05" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold mt-1", children: "Settings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Reader hardware, alert thresholds, and integrations." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "RFID Reader Network", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [{
      id: "RDR-01",
      loc: "Hangar A · Ceiling",
      status: "ONLINE"
    }, {
      id: "RDR-02",
      loc: "Hangar B · Ceiling",
      status: "ONLINE"
    }, {
      id: "HND-04",
      loc: "Handheld · M. Kowalski",
      status: "SYNCING"
    }, {
      id: "RDR-07",
      loc: "Cleanroom B",
      status: "ONLINE"
    }].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between bg-background border border-border rounded-sm px-4 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm text-primary", children: r.id }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: r.loc })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-mono text-[10px] tracking-widest ${r.status === "ONLINE" ? "text-success" : "text-warning"}`, children: [
        "● ",
        r.status
      ] })
    ] }, r.id)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Alert Thresholds", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [["Calibration warning window", "30 days"], ["Missing asset escalation", "4 hours"], ["Cleanroom temperature deviation", "± 1.5°C"], ["Cleanroom humidity deviation", "± 5%"]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm border-b border-border pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { defaultValue: v, className: "bg-background border border-border rounded-sm px-3 py-1.5 text-sm font-mono w-40 text-right" })
    ] }, k)) }) })
  ] });
}
export {
  Settings as component
};
