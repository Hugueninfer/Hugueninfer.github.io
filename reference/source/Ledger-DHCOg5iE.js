import { j as s } from "./index-DwCqBxFL.js";
import { r as o } from "./router-5ag9yOgs.js";
import { i as c, j as t } from "./theme-CvJK8SGN.js";
function x({ entries: r, title: i, sub: l }) {
  const a = o.useRef(null);
  return (
    c(a, ".sv-card", {
      from: 0.96,
      rise: 12,
      start: 0.94,
      span: 0.36,
      overlap: 0.5,
    }),
    s.jsxs("section", {
      className: "sv-wrap sv-pad",
      id: "profile",
      "data-badge": "Teams",
      children: [
        s.jsx(t, { lines: i, sub: l }),
        s.jsx("div", {
          className: "sv-board",
          ref: a,
          children: r.map((e, n) =>
            s.jsxs(
              "article",
              {
                className: "sv-card",
                children: [
                  s.jsxs("span", { className: "ix", children: ["A", n + 1] }),
                  s.jsx("h3", { children: e.name }),
                  s.jsx("span", { className: "role", children: e.role }),
                  s.jsx("p", { children: e.note }),
                ],
              },
              e.name,
            ),
          ),
        }),
      ],
    })
  );
}
export { x as L };
