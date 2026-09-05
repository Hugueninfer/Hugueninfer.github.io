import {ProjectCards, Skills} from "./custom/CareerContent.js";
import { j as s, b as $, C as P, e as D } from "./index-DwCqBxFL.js";
import {
  k as E,
  d as V,
  e as G,
  f as L,
  g as O,
  S as B,
  L as I,
  c as N,
  R as C,
  B as T,
  j as A,
  h as F,
  p as _,
} from "./theme-CvJK8SGN.js";
import { r as d } from "./router-5ag9yOgs.js";
import { C as q, T as W } from "./Console-CyBRxdTz.js";
import "./react-dom-36navsnf.js";
import "./asset-BaG-jDRI.js";
const a = 250,
  j = 980,
  Y = [
    {
      x: 62,
      w: 100,
      h: 74,
      key: "prompt",
      name: "Prompt",
      sub: "claude · 200k ctx",
    },
    {
      x: 218,
      w: 88,
      h: 92,
      key: "router",
      name: "Router",
      sub: "mcp · 7 tools",
    },
    {
      x: 606,
      w: 92,
      h: 96,
      key: "gate",
      name: "Gate",
      sub: "tsc · axe · diff",
    },
    { x: 764, w: 112, h: 78, key: "ship", name: "Commit", sub: "git · npm" },
  ],
  k = [
    { y: 96, name: "Build", out: "badge.tsx · 142 loc" },
    { y: 152, name: "Audit", out: "axe · 4.9:1 AA" },
    { y: 208, name: "Docs", out: "mdx · registry +1" },
  ],
  h = 344,
  v = 190,
  m = 40,
  U = 6200,
  X = 806,
  J = ({ x: c, y: l }) =>
    s.jsxs("g", {
      className: "rg-prop rg-chip",
      children: [
        [0, 1, 2, 3].map((r) =>
          s.jsxs(
            "g",
            {
              children: [
                s.jsx("path", {
                  className: "rg-pin",
                  d: `M${c + 8 + r * 7} ${l} v-5`,
                }),
                s.jsx("path", {
                  className: "rg-pin",
                  d: `M${c + 8 + r * 7} ${l + 34} v5`,
                }),
                s.jsx("path", {
                  className: "rg-pin",
                  d: `M${c} ${l + 8 + r * 7} h-5`,
                }),
                s.jsx("path", {
                  className: "rg-pin",
                  d: `M${c + 34} ${l + 8 + r * 7} h5`,
                }),
              ],
            },
            r,
          ),
        ),
        s.jsx("path", {
          className: "rg-chip-pkg",
          d: `M${c} ${l} h34 v34 h-34 z`,
        }),
        s.jsx("path", {
          className: "rg-chip-die",
          d: `M${c + 10} ${l + 10} h14 v14 h-14 z`,
        }),
      ],
    }),
  K = ({ x: c, y: l }) =>
    s.jsx("g", {
      className: "rg-prop rg-db",
      children: [2, 1, 0].map((r) =>
        s.jsxs(
          "g",
          {
            children: [
              s.jsx("path", {
                className: "rg-db-body",
                d: `M${c} ${l + r * 12} v8 a13 4.6 0 0 0 26 0 v-8 z`,
              }),
              s.jsx("ellipse", {
                className: "rg-db-top",
                cx: c + 13,
                cy: l + r * 12,
                rx: "13",
                ry: "4.6",
              }),
            ],
          },
          r,
        ),
      ),
    }),
  Q = ({ x: c, y: l, label: r }) =>
    s.jsxs("g", {
      className: "rg-prop rg-cloud",
      children: [
        s.jsx("path", {
          className: "rg-cloud-body",
          d: `M${c + 9} ${l + 20} a9.5 9.5 0 0 1 2 -18 a12.5 12.5 0 0 1 23 -2.5 a8.5 8.5 0 0 1 7 20.5 z`,
        }),
        s.jsx("text", {
          className: "rg-chip-t",
          x: c + 21,
          y: l + 32,
          children: r,
        }),
      ],
    }),
  Z = [
    [0, 22, "kw"],
    [26, 30, "id"],
    [6, 16, "kw"],
    [26, 34, "st"],
    [6, 30, "id"],
    [0, 14, "kw"],
    [18, 26, "st"],
    [6, 20, "id"],
    [30, 18, "kw"],
  ],
  ss = ({ x: c, y: l, w: r = 84 }) =>
    s.jsxs("g", {
      className: "rg-prop rg-code",
      children: [
        s.jsx("path", {
          className: "rg-code-box",
          d: `M${c} ${l} h${r} v70 h-${r} z`,
        }),
        s.jsx("path", {
          className: "rg-code-bar",
          d: `M${c} ${l} h${r} v11 h-${r} z`,
        }),
        [0, 1, 2].map((n) =>
          s.jsx(
            "circle",
            {
              className: "rg-code-dot",
              cx: c + 8 + n * 7,
              cy: l + 5.5,
              r: "1.8",
            },
            n,
          ),
        ),
        Z.map(([n, t, i], x) =>
          s.jsx(
            "path",
            {
              className: `rg-code-ln k-${i}`,
              d: `M${c + 8 + n} ${l + 22 + x * 5.4} h${Math.min(t, r - 16 - n)}`,
            },
            x,
          ),
        ),
      ],
    }),
  H = 62,
  es = () => {
    const c = j / H;
    return s.jsxs("g", {
      className: "rg-brd",
      "aria-hidden": "true",
      children: [
        s.jsx("path", { className: "rg-brd-bus", d: `M0 ${a + 4} H${j}` }),
        s.jsx("path", { className: "rg-brd-bus", d: `M0 ${a + 11} H${j}` }),
        Array.from({ length: H }, (l, r) => {
          const n = r * c + 3,
            t = r % 7;
          return s.jsxs(
            "g",
            {
              children: [
                r % 2 === 0 &&
                  s.jsx("circle", {
                    className: "rg-brd-via",
                    cx: n,
                    cy: a + 4,
                    r: "1.1",
                  }),
                t === 0 &&
                  s.jsxs("g", {
                    className: "rg-brd-pkg",
                    children: [
                      s.jsx("path", {
                        className: "rg-brd-chip",
                        d: `M${n - 3} ${a + 5.5} h9 v4 h-9 z`,
                      }),
                      [0, 1, 2].map((i) =>
                        s.jsx(
                          "path",
                          {
                            className: "rg-brd-pin",
                            d: `M${n - 1.5 + i * 3} ${a + 5.5} v-1.6`,
                          },
                          i,
                        ),
                      ),
                    ],
                  }),
                t === 2 &&
                  s.jsx("path", {
                    className: "rg-brd-res",
                    d: `M${n - 2} ${a + 6} h5 v3 h-5 z`,
                  }),
                t === 4 &&
                  s.jsx("circle", {
                    className: "rg-brd-cap",
                    cx: n,
                    cy: a + 7.5,
                    r: "2",
                  }),
                t === 5 &&
                  s.jsx("path", {
                    className: "rg-brd-trace",
                    d: `M${n} ${a + 4} l3 3.5 H${n + 9}`,
                  }),
                t === 6 &&
                  s.jsx("path", {
                    className: "rg-brd-silk",
                    d: `M${n} ${a + 12.6} h4`,
                  }),
              ],
            },
            r,
          );
        }),
      ],
    });
  };
function as() {
  const [c, l] = d.useState(0),
    [r, n] = d.useState(null),
    [t, i] = d.useState(!1),
    x = d.useRef(0),
    y = d.useRef(0),
    b = d.useRef(0),
    M = d.useRef(0);
  d.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      l(1);
      return;
    }
    M.current = performance.now();
    const e = (o) => {
      const g = (o - M.current) / U;
      (l(Math.min(1, g)), g < 1 && (b.current = requestAnimationFrame(e)));
    };
    return (
      (b.current = requestAnimationFrame(e)),
      () => cancelAnimationFrame(b.current)
    );
  }, []);
  const p = c * X,
    w = c >= 1 && !t,
    u = w
      ? "ship"
      : p < 190
        ? "prompt"
        : p < 330
          ? "router"
          : p < 578
            ? "agents"
            : p < 726
              ? "gate"
              : "ship",
    f = u === "gate" && p > 690,
    R = r ?? u,
    z = () => {
      t ||
        ((x.current = p),
        i(!0),
        window.clearTimeout(y.current),
        (y.current = window.setTimeout(() => {
          (i(!1), (M.current = performance.now()));
        }, 1500)));
    };
  return s.jsx("div", {
    className: "sv-rig",
    onClick: z,
    children: s.jsxs("svg", {
      viewBox: `0 0 ${j} 272`,
      preserveAspectRatio: "xMidYMax meet",
      "aria-hidden": "true",
      children: [
        s.jsx("path", { className: "rg-ground", d: `M0 ${a} H${j}` }),
        s.jsx(es, {}),
        s.jsx("path", { className: "rg-skirt", d: `M0 ${a + 15} H${j}` }),
        s.jsx("path", { className: "rg-drop", d: `M534 ${a - 137} H559` }),
        s.jsx("path", {
          className: "rg-drop",
          d: `M559 ${a - 137} V${a - 126}`,
        }),
        s.jsx("path", {
          className: "rg-drop",
          d: `M559 ${a - 126} V${a - 74}`,
        }),
        s.jsx("path", { className: "rg-drop", d: `M562 ${a - 45} V${a}` }),
        s.jsx("g", {
          transform: `translate(548 ${a - 148}) scale(.66)`,
          children: s.jsx(J, { x: 0, y: 0 }),
        }),
        s.jsx("g", {
          transform: `translate(552 ${a - 74}) scale(.72)`,
          children: s.jsx(K, { x: 0, y: 0 }),
        }),
        s.jsx(Q, { x: 892, y: a - 128, label: "API" }),
        s.jsx(ss, { x: 888, y: a - 70 }),
        s.jsx("path", {
          className: "rg-wire rg-tie",
          d: `M876 152 H930 V${a - 70}`,
        }),
        s.jsx("g", {
          className: `rg-store ${u === "agents" ? "is-on" : ""}`,
          children: k.map((e, o) =>
            s.jsx(
              "path",
              {
                className: "rg-drop",
                d: `M${h + 40 + o * 56} ${e.y + m} V${a}`,
              },
              o,
            ),
          ),
        }),
        s.jsx("path", {
          className: "rg-rail",
          d: "M110 152 H300 M534 152 H606 M690 152 H760",
        }),
        k.map((e, o) =>
          s.jsxs(
            "g",
            {
              className: `rg-fan ${u === "agents" ? "is-on" : ""}`,
              style: { "--d": `${o * 0.1}s` },
              children: [
                s.jsx("path", {
                  className: "rg-wire",
                  d: `M300 152 C324 152 324 ${e.y + m / 2} ${h} ${e.y + m / 2}`,
                }),
                s.jsx("path", {
                  className: "rg-wire",
                  d: `M${h + v} ${e.y + m / 2} C554 ${e.y + m / 2} 554 152 578 152`,
                }),
              ],
            },
            o,
          ),
        ),
        s.jsx("path", {
          className: `rg-rail ${f ? "is-on" : ""} rg-back`,
          d: `M648 ${a - 4} H256 V196`,
        }),
        Y.map((e) =>
          s.jsxs(
            "g",
            {
              className: `rg-stn ${e.key} ${R === e.key ? "is-live" : ""}`,
              onPointerEnter: () => n(e.key),
              onPointerLeave: () => n(null),
              children: [
                s.jsx("path", {
                  className: "rg-box",
                  d: `M${e.x} ${a} V${a - e.h} h${e.w} V${a} z`,
                }),
                s.jsx("path", {
                  className: "rg-lip",
                  d: `M${e.x} ${a - e.h} h${e.w} v7 h-${e.w} z`,
                }),
                s.jsx("text", {
                  className: "rg-nm",
                  x: e.x + 11,
                  y: a - e.h + 23,
                  children: e.name,
                }),
                s.jsx("text", {
                  className: "rg-sb",
                  x: e.x + 11,
                  y: a - e.h + 36,
                  children: e.sub,
                }),
                [0, 1].map((o) => {
                  const g = a - 40 + o * 20;
                  return s.jsxs(
                    "g",
                    {
                      children: [
                        s.jsx("path", {
                          className: "rg-unit",
                          d: `M${e.x + 8} ${g} h${e.w - 16} v15 h-${e.w - 16} z`,
                        }),
                        [0, 1, 2, 3, 4].map((S) =>
                          s.jsx(
                            "path",
                            {
                              className: "rg-vent",
                              d: `M${e.x + 26 + S * 5} ${g + 4} v7`,
                            },
                            S,
                          ),
                        ),
                        s.jsx("circle", {
                          className: `rg-led l${o}`,
                          cx: e.x + 16,
                          cy: g + 7.5,
                          r: "2.6",
                        }),
                        s.jsx("path", {
                          className: "rg-slot",
                          d: `M${e.x + e.w - 26} ${g + 7.5} h14`,
                        }),
                      ],
                    },
                    o,
                  );
                }),
                s.jsx("path", {
                  className: "rg-feet",
                  d: `M${e.x + 6} ${a} v-4 M${e.x + e.w - 6} ${a} v-4`,
                }),
              ],
            },
            e.key,
          ),
        ),
        k.map((e, o) =>
          s.jsxs(
            "g",
            {
              className: `rg-ag ${u === "agents" ? "is-on" : ""} ${r === "agents" ? "is-live" : ""}`,
              style: { "--d": `${o * 0.12}s` },
              onPointerEnter: () => n("agents"),
              onPointerLeave: () => n(null),
              children: [
                s.jsx("path", {
                  className: "rg-ag-box",
                  d: `M${h} ${e.y} h${v} v${m} h-${v} z`,
                }),
                s.jsx("circle", {
                  className: "rg-ag-dot",
                  cx: h + 15,
                  cy: e.y + m / 2,
                  r: "5",
                }),
                s.jsx("text", {
                  className: "rg-ag-nm",
                  x: h + 30,
                  y: e.y + 18,
                  children: e.name,
                }),
                s.jsx("text", {
                  className: "rg-ag-out",
                  x: h + 30,
                  y: e.y + 31,
                  children: e.out,
                }),
                s.jsx("path", {
                  className: "rg-ag-run",
                  d: `M${h + 1} ${e.y + m - 2} h${v - 2}`,
                }),
              ],
            },
            e.name,
          ),
        ),
        s.jsxs("g", {
          className: `rg-bot ${t ? "is-down" : ""} ${f ? "is-back" : ""} ${w ? "is-working" : ""}`,
          transform: `translate(${t ? x.current : p} ${a}) scale(.74)`,
          children: [
            s.jsx(E, { x: 0, y: 0 }),
            s.jsxs("g", {
              className: "rg-think",
              "aria-hidden": "true",
              children: [
                s.jsx("text", {
                  className: "rg-think-t",
                  x: "-34",
                  y: "-147",
                  children: "Thinking",
                }),
                [0, 1, 2].map((e) =>
                  s.jsx(
                    "circle",
                    {
                      className: "rg-think-d",
                      cx: 18 + e * 7,
                      cy: "-150",
                      r: "1.9",
                      style: { "--d": `${e * 0.18}s` },
                    },
                    e,
                  ),
                ),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function is() {
  const [c, l] = V(),
    [r, n] = G();
  (L(), O());
  const t = P.ai;
  return s.jsxs("div", {
    className: `site-root sv-ai-page ${c ? "is-dark" : ""} ${_(r)}`,
    children: [
      s.jsx(B, {
        email: $.email,
        dark: c,
        onToggleDark: l,
        palette: r,
        onTogglePalette: n,
      }),
      s.jsx("header", {
        className: "sv-hero sv-ai-hero",
        id: "top",
        children: s.jsxs("div", {
          className: "sv-wrap",
          children: [
            s.jsxs("div", {
              className: "sv-hero-grid",
              children: [
                s.jsx(I, { as: "h1", lines: N(t.heroTitle) }),
                s.jsxs(C, {
                  className: "sv-hero-right",
                  children: [
                    s.jsx("p", { children: t.heroSub }),
                    s.jsxs("div", {
                      className: "sv-hero-cta",
                      children: [
                        s.jsx(T, { href: t.heroCtaHref, children: t.heroCta }),
                        s.jsx(T, {
                          href: t.heroCta2Href,
                          variant: "ghost",
                          arrowDir: "sw",
                          children: t.heroCta2,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            s.jsx(as, {}),
          ],
        }),
      }),
      s.jsxs("section", {
        className: "sv-wrap sv-pad",
        id: "loop",
        "data-badge": "The loop",
        children: [
          s.jsx(A, { lines: N(t.loopTitle), sub: t.loopSub }),
          s.jsx("div", {
            className: "sv-uses",
            children: (t.loopSteps ?? []).map((i, x) =>
              s.jsxs(
                C,
                {
                  className: "sv-use",
                  children: [
                    s.jsx("span", {
                      className: "no",
                      children: String(x + 1).padStart(2, "0"),
                    }),
                    s.jsx("span", { className: "k", children: i.k }),
                    s.jsx("h3", { children: i.t }),
                    s.jsx("p", { children: i.d }),
                  ],
                },
                i.t,
              ),
            ),
          }),
        ],
      }),
      s.jsxs("section", {
        className: "sv-wrap sv-pad",
        id: "ai-work",
        "data-badge": "AI work",
        children: [
          s.jsx(A, { lines: N(t.workTitle), sub: t.workSub }),
          s.jsx(ProjectCards, {}),
        ],
      }),
      s.jsx(Skills, {}),
      s.jsx(F, {
        email: $.email,
        availability: $.availability,
        responseTime: $.responseTime,
        location: $.location,
        disciplines: $.disciplines,
        socials: $.socials,
      }),
    ],
  });
}
export { is as default };
