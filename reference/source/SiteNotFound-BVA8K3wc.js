import { j as s, b as t, C as u } from "./index-DwCqBxFL.js";
import { r as d, L as f } from "./router-5ag9yOgs.js";
import {
  d as $,
  e as b,
  g as y,
  S as M,
  R as r,
  L as w,
  c as k,
  A as S,
  k as T,
  h as A,
  p as E,
} from "./theme-CvJK8SGN.js";
import "./react-dom-36navsnf.js";
const L = 2e3,
  p = 400,
  N = ["/that-page", "/old-link", "/v1-home", "/tuesday"],
  e = 200;
function P({ x: l, label: h, t: i }) {
  return s.jsxs("g", {
    className: "file",
    transform: `translate(${l} ${e - 22})`,
    children: [
      s.jsx("path", { className: "sheet", d: "M6 -8 h30 v6 h-30 z" }),
      s.jsx("path", {
        className: `folder f${i % 4}`,
        d: "M0 -4 h16 l4 -4 h24 q3 0 3 3 v10 q0 3 -3 3 h-44 q-3 0 -3 -3 v-6 q0 -3 3 -3 z",
      }),
      s.jsx("text", {
        className: "silk file-silk",
        x: "22",
        y: "4",
        textAnchor: "middle",
        children: h,
      }),
    ],
  });
}
function D() {
  const [l, h] = $(),
    [i, g] = b(),
    c = u.notFound || {};
  y();
  const [n, x] = d.useState(0),
    o = d.useRef(0),
    v = () => {
      (x((a) => a + 1),
        window.clearTimeout(o.current),
        (o.current = window.setTimeout(() => x(0), L)));
    };
  return (
    d.useEffect(() => () => window.clearTimeout(o.current), []),
    s.jsxs("div", {
      className: `site-root sv-fill ${l ? "is-dark" : ""} ${E(i)}`,
      children: [
        s.jsx(M, {
          email: t.email,
          dark: l,
          onToggleDark: h,
          palette: i,
          onTogglePalette: g,
        }),
        s.jsx("header", {
          className: "sv-hero sv-cn-hero",
          id: "top",
          children: s.jsxs("div", {
            className: "sv-wrap sv-cn-content sv-404-center",
            children: [
              s.jsx(r, {
                as: "div",
                className: "sv-page-meta",
                children: "Not on file",
              }),
              s.jsx(w, { as: "h1", lines: k(c.heroTitle) }),
              s.jsx(r, {
                as: "p",
                className: "sv-cn-sub",
                children: c.heroSub,
              }),
              s.jsx(r, {
                className: "sv-404-cta",
                children: s.jsxs(f, {
                  className: "sv-btn sv-btn--amber",
                  to: "/",
                  children: [c.ctaLabel, s.jsx(S, {})],
                }),
              }),
              s.jsx(r, {
                className: `sv-404 ${n ? "is-met" : ""}`,
                children: s.jsxs("div", {
                  className: "sv-404-view",
                  onClick: v,
                  role: "img",
                  "aria-label":
                    "A robot in the site's file room, checking folders from a conveyor against a cabinet of pages. Click and it stops to say the page is not in here.",
                  children: [
                    s.jsxs("svg", {
                      viewBox: "0 0 900 250",
                      preserveAspectRatio: "xMidYMax meet",
                      "aria-hidden": "true",
                      children: [
                        s.jsx("path", { className: "rail", d: `M0 ${e} H900` }),
                        s.jsx("path", {
                          className: "sig",
                          d: `M20 ${e + 22} h130 l18 -18 M60 ${e + 34} h250`,
                        }),
                        s.jsx("path", {
                          className: "sig",
                          d: `M560 ${e + 30} h180 l16 -16 M760 ${e + 40} h120`,
                        }),
                        [110, 320, 700, 850].map((a) =>
                          s.jsx(
                            "circle",
                            { className: "via", cx: a, cy: e + 22, r: "3.2" },
                            a,
                          ),
                        ),
                        s.jsxs("g", {
                          className: "belt-run",
                          clipPath: "url(#sv-404-belt)",
                          children: [
                            s.jsx("defs", {
                              children: s.jsx("clipPath", {
                                id: "sv-404-belt",
                                children: s.jsx("rect", {
                                  x: "30",
                                  y: e - 60,
                                  width: "420",
                                  height: "60",
                                }),
                              }),
                            }),
                            s.jsx("g", {
                              className: "flow",
                              children: [0, 1].map((a) =>
                                s.jsx(
                                  "g",
                                  {
                                    transform: `translate(${a * p} 0)`,
                                    children: N.map((m, j) =>
                                      s.jsx(
                                        P,
                                        {
                                          x: 40 + j * (p / N.length),
                                          label: m,
                                          t: j,
                                        },
                                        m,
                                      ),
                                    ),
                                  },
                                  a,
                                ),
                              ),
                            }),
                          ],
                        }),
                        s.jsx("rect", {
                          className: "belt",
                          x: "30",
                          y: e - 20,
                          width: "420",
                          height: "7",
                          rx: "3.5",
                        }),
                        [52, 130, 208, 286, 364, 434].map((a) =>
                          s.jsx(
                            "circle",
                            { className: "roller", cx: a, cy: e - 8, r: "6.4" },
                            a,
                          ),
                        ),
                        s.jsx("text", {
                          className: "silk",
                          x: "240",
                          y: e + 16,
                          textAnchor: "middle",
                          children: "J7 — INTAKE",
                        }),
                        s.jsx("g", {
                          transform: `translate(497 ${e}) scale(-1 1)`,
                          children: s.jsx(T, { x: 0, y: 0 }),
                        }),
                        s.jsxs("g", {
                          className: "chip",
                          children: [
                            [590, 630, 670, 710, 750, 790].map((a) =>
                              s.jsx(
                                "path",
                                { className: "pin", d: `M${a} ${e - 6} v6` },
                                a,
                              ),
                            ),
                            s.jsx("rect", {
                              className: "case",
                              x: "565",
                              y: e - 128,
                              width: "250",
                              height: "122",
                              rx: "9",
                            }),
                            s.jsx("circle", {
                              className: "dot",
                              cx: "583",
                              cy: e - 110,
                              r: "3.4",
                            }),
                            s.jsx("circle", {
                              className: "led",
                              cx: "797",
                              cy: e - 110,
                              r: "3",
                            }),
                            s.jsx("rect", {
                              className: "drawer",
                              x: "585",
                              y: e - 104,
                              width: "210",
                              height: "24",
                              rx: "3",
                            }),
                            s.jsx("rect", {
                              className: "drawer is-out",
                              x: "527",
                              y: e - 74,
                              width: "210",
                              height: "24",
                              rx: "3",
                            }),
                            s.jsx("rect", {
                              className: "drawer",
                              x: "585",
                              y: e - 44,
                              width: "210",
                              height: "24",
                              rx: "3",
                            }),
                            s.jsx("path", {
                              className: "pull",
                              d: `M683 ${e - 94} h14 M683 ${e - 34} h14`,
                            }),
                            s.jsx("path", {
                              className: "pull is-hot",
                              d: `M625 ${e - 64} h14`,
                            }),
                            s.jsxs("g", {
                              className: "leaf",
                              children: [
                                s.jsx("rect", {
                                  className: "page",
                                  x: "547",
                                  y: e - 88,
                                  width: "20",
                                  height: "26",
                                  rx: "1.5",
                                }),
                                s.jsx("path", {
                                  className: "page-ln",
                                  d: `M551 ${e - 81} h12 M551 ${e - 76} h12 M551 ${e - 71} h8`,
                                }),
                              ],
                            }),
                            s.jsx("text", {
                              className: "silk",
                              x: "690",
                              y: e + 16,
                              textAnchor: "middle",
                              children: "U404 — PAGE STORE",
                            }),
                          ],
                        }),
                        s.jsxs("g", {
                          className: "lost",
                          children: [
                            s.jsx("path", {
                              className: "page tossed",
                              d: `M846 ${e - 42} l16 -6 4 10 -16 6 z`,
                            }),
                            s.jsx("path", {
                              className: "page tossed",
                              d: `M856 ${e - 34} l14 2 -2 12 -14 -2 z`,
                            }),
                            s.jsx("path", {
                              className: "bin",
                              d: `M840 ${e - 34} h38 l-5 34 h-28 z`,
                            }),
                            s.jsx("path", {
                              className: "bin-lip",
                              d: `M836 ${e - 34} h46`,
                            }),
                            s.jsx("text", {
                              className: "silk",
                              x: "859",
                              y: e + 16,
                              textAnchor: "middle",
                              children: "LOST+FOUND",
                            }),
                          ],
                        }),
                      ],
                    }),
                    n > 0 &&
                      s.jsx(
                        "span",
                        {
                          className: "sv-404-hi",
                          "aria-hidden": "true",
                          children: c.bubble,
                        },
                        n,
                      ),
                  ],
                }),
              }),
            ],
          }),
        }),
        s.jsx(A, {
          board: !1,
          email: t.email,
          availability: t.availability,
          responseTime: t.responseTime,
          location: t.location,
          disciplines: t.disciplines,
          socials: t.socials,
        }),
      ],
    })
  );
}
export { D as default };
