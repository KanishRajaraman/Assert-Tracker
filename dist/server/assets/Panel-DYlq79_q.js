import { H as jsxRuntimeExports } from "./server-C3xy30Ng.js";
function Panel({
  title,
  children,
  action,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: `panel ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: title }),
      action
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children })
  ] });
}
export {
  Panel as P
};
