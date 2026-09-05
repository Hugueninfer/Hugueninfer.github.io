import {WhatsAppButton} from "./custom/CareerContent.js";
import { j as s, b as o, C as B } from "./index-DwCqBxFL.js";
import { r as d } from "./router-5ag9yOgs.js";
import {
  u as F,
  R as v,
  d as V,
  e as W,
  g as D,
  S as O,
  L as P,
  c as _,
  A as G,
  h as I,
  p as K,
} from "./theme-CvJK8SGN.js";
import { b as Y } from "./Commuter-BHE77-Jm.js";
import { D as Q } from "./Daughter-HgqIGkFr.js";
import "./react-dom-36navsnf.js";
const a = 300,
  U = 4200,
  Z = 2,
  k = { x: 486, y: 250 },
  x = ({ x: e, w: c, h: r, v: t = 0 }) => {
    const l = a - r,
      i = t % 3,
      $ = r > 100 ? 2 : 1;
    return s.jsxs("g", {
      className: `nb t${t % 4}`,
      children: [
        s.jsx("path", {
          className: "body",
          d: `M${e} ${a} V${l} h${c} V${a} z`,
        }),
        i === 0 &&
          s.jsx("path", {
            className: "roof",
            d: `M${e - 10} ${l} L${e + c / 2} ${l - 30} L${e + c + 10} ${l} z`,
          }),
        i === 1 &&
          s.jsx("path", {
            className: "roof",
            d: `M${e - 10} ${l} L${e + c * 0.3} ${l - 26} L${e + c * 0.7} ${l - 26} L${e + c + 10} ${l} z`,
          }),
        i === 2 &&
          s.jsx("path", {
            className: "roof",
            d: `M${e - 8} ${l} L${e + c + 8} ${l - 22} L${e + c + 8} ${l} z`,
          }),
        t % 2 === 0 &&
          s.jsx("path", {
            className: "chim",
            d: `M${e + c - 26} ${l - 12} v-22 h13 v22 z`,
          }),
        t % 4 === 1 &&
          s.jsxs(s.Fragment, {
            children: [
              s.jsx("path", {
                className: "porch",
                d: `M${e + c / 2 - 22} ${a} v-26 h44 v26`,
              }),
              s.jsx("path", {
                className: "ln porch-ln",
                d: `M${e + c / 2 - 22} ${a - 26} h44`,
              }),
            ],
          }),
        t % 4 === 3 &&
          s.jsx("path", {
            className: "dorm",
            d: `M${e + c / 2 - 11} ${l - 4} v-16 h22 v16 z`,
          }),
        Array.from({ length: $ }, (p, n) =>
          s.jsxs(
            "g",
            {
              children: [
                s.jsx("rect", {
                  className: "win",
                  x: e + 12,
                  y: l + 20 + n * 30,
                  width: "20",
                  height: "24",
                  rx: "2",
                }),
                s.jsx("rect", {
                  className: "win",
                  x: e + c - 32,
                  y: l + 20 + n * 30,
                  width: "20",
                  height: "24",
                  rx: "2",
                }),
              ],
            },
            n,
          ),
        ),
        s.jsx("path", {
          className: "nb-door",
          d: `M${e + c / 2 - 8} ${a} v-30 h16 v30 z`,
        }),
      ],
    });
  },
  m = ({ x: e, s: c = 1 }) =>
    s.jsxs("g", {
      className: "far-tree",
      children: [
        s.jsx("path", { className: "trunk", d: `M${e} ${a} V${a - 54 * c}` }),
        s.jsx("circle", {
          className: "crown",
          cx: e,
          cy: a - 72 * c,
          r: 30 * c,
        }),
        s.jsx("circle", {
          className: "crown c2",
          cx: e - 20 * c,
          cy: a - 58 * c,
          r: 20 * c,
        }),
        s.jsx("circle", {
          className: "crown c3",
          cx: e + 21 * c,
          cy: a - 60 * c,
          r: 18 * c,
        }),
      ],
    });
function J() {
  const t = a - 176;
  return s.jsxs("g", {
    className: "house",
    children: [
      s.jsx("path", { className: "walls", d: `M300 ${a} V${t} h470 V${a} z` }),
      s.jsx("path", {
        className: "roof",
        d: `M278 ${t} L${300 + 470 / 2} ${t - 78} L792 ${t} z`,
      }),
      s.jsx("path", { className: "ln eave", d: `M278 ${t} h514` }),
      s.jsx("path", {
        className: "ln batten",
        d: `M${300 + 470 / 2} ${t - 78} L${300 + 470 / 2} ${t}`,
      }),
      s.jsx("path", {
        className: "chimney",
        d: `M630 ${t - 33} v-46 h26 v62 z`,
      }),
      s.jsx("g", {
        className: "smoke",
        children: [0, 1, 2].map((l) =>
          s.jsx(
            "path",
            {
              className: `puff p${l}`,
              d: `M643 ${t - 82} q-8 -14 0 -25 q8 -11 0 -21`,
            },
            l,
          ),
        ),
      }),
      [342, 650].map((l, i) =>
        s.jsxs(
          "g",
          {
            className: "win",
            children: [
              s.jsx("rect", {
                className: "glass",
                x: l,
                y: t + 34,
                width: "84",
                height: "66",
                rx: "3",
              }),
              s.jsx("path", {
                className: "ln",
                d: `M${l + 42} ${t + 34} v66 M${l} ${t + 67} h84`,
              }),
              s.jsx("path", {
                className: "ln ledge",
                d: `M${l - 7} ${t + 102} h98`,
              }),
              i === 1 &&
                s.jsx("rect", {
                  className: "curtain",
                  x: l + 2,
                  y: t + 36,
                  width: "38",
                  height: "62",
                  rx: "2",
                }),
            ],
          },
          i,
        ),
      ),
      s.jsx("rect", {
        className: "inside",
        x: 490,
        y: a - 112,
        width: "72",
        height: "112",
        rx: "2",
      }),
      s.jsxs("g", {
        className: "door",
        children: [
          s.jsx("rect", {
            className: "leaf",
            x: 490,
            y: a - 112,
            width: "72",
            height: "112",
            rx: "2",
          }),
          s.jsx("rect", {
            className: "panel",
            x: 502,
            y: a - 100,
            width: "48",
            height: "42",
            rx: "2",
          }),
          s.jsx("rect", {
            className: "panel",
            x: 502,
            y: a - 50,
            width: "48",
            height: "34",
            rx: "2",
          }),
          s.jsx("circle", { className: "knob", cx: 553, cy: a - 58, r: "3.4" }),
        ],
      }),
      s.jsx("path", {
        className: "ln jamb",
        d: `M484 ${a} V${a - 118} h84 V${a}`,
      }),
      s.jsx("path", { className: "step", d: `M458 ${a} h112 v9 h-112 z` }),
      s.jsx("rect", {
        className: "plate",
        x: 578,
        y: a - 104,
        width: "16",
        height: "20",
        rx: "2",
      }),
      s.jsx("text", {
        className: "numb",
        x: 586,
        y: a - 90,
        textAnchor: "middle",
        children: "1",
      }),
      s.jsxs("g", {
        className: "porch",
        children: [
          s.jsx("path", {
            className: "beam",
            d: `M514 ${a - 126} h24 l40 126 h-104 z`,
          }),
          s.jsx("path", {
            className: "lamp",
            d: `M514 ${a - 126} h24 l-5 -16 h-14 z`,
          }),
          s.jsx("path", { className: "ln bracket", d: `M526 ${a - 142} v-10` }),
        ],
      }),
    ],
  });
}
const L = ({ x: e, flip: c = !1 }) =>
    s.jsxs("g", {
      className: "car",
      transform: c ? `translate(${2 * e} 0) scale(-1 1)` : void 0,
      children: [
        s.jsx("path", {
          className: "body",
          d: `M${e - 62} ${a - 12} q0 -26 26 -28 l16 -20 q24 -6 48 0 l14 20 q26 3 26 28 z`,
        }),
        s.jsx("path", {
          className: "glass",
          d: `M${e - 18} ${a - 42} l10 -14 q18 -4 34 0 l8 14 z`,
        }),
        s.jsx("path", { className: "ln split", d: `M${e + 6} ${a - 56} v14` }),
        s.jsx("circle", { className: "tyre", cx: e - 34, cy: a - 10, r: "12" }),
        s.jsx("circle", { className: "tyre", cx: e + 40, cy: a - 10, r: "12" }),
        s.jsx("circle", { className: "hub", cx: e - 34, cy: a - 10, r: "4.5" }),
        s.jsx("circle", { className: "hub", cx: e + 40, cy: a - 10, r: "4.5" }),
      ],
    }),
  g = ({ x: e }) =>
    s.jsxs("g", {
      className: "street-lamp",
      children: [
        s.jsx("path", {
          className: "beam2",
          d: `M${e + 30} ${a - 148} h24 l40 148 h-104 z`,
        }),
        s.jsx("ellipse", {
          className: "pool",
          cx: e + 42,
          cy: a,
          rx: "56",
          ry: "7",
        }),
        s.jsx("path", {
          className: "ln stem",
          d: `M${e} ${a} V${a - 148} q0 -16 18 -16 h20`,
        }),
        s.jsx("path", {
          className: "head",
          d: `M${e + 30} ${a - 164} h24 l-6 14 h-12 z`,
        }),
        s.jsx("ellipse", {
          className: "bulb2",
          cx: e + 42,
          cy: a - 150,
          rx: "9",
          ry: "4",
        }),
        s.jsx("path", { className: "ln foot", d: `M${e - 8} ${a} h16` }),
      ],
    }),
  q = ({ x: e }) =>
    s.jsxs("g", {
      className: "bike",
      children: [
        s.jsx("circle", {
          className: "wheel",
          cx: e - 22,
          cy: a - 18,
          r: "18",
        }),
        s.jsx("circle", {
          className: "wheel",
          cx: e + 22,
          cy: a - 18,
          r: "18",
        }),
        s.jsx("path", {
          className: "ln frame",
          d: `M${e - 22} ${a - 18} L${e - 4} ${a - 46} L${e + 22} ${a - 18} M${e - 4} ${a - 46} L${e + 8} ${a - 18} L${e - 22} ${a - 18}`,
        }),
        s.jsx("path", {
          className: "ln bar",
          d: `M${e + 14} ${a - 50} h14 M${e - 4} ${a - 46} l-6 -8 h-10`,
        }),
      ],
    }),
  C = ({ x: e }) =>
    s.jsxs("g", {
      className: "bench",
      children: [
        s.jsx("path", {
          className: "slat",
          d: `M${e - 34} ${a - 26} h68 v6 h-68 z`,
        }),
        s.jsx("path", {
          className: "slat",
          d: `M${e - 34} ${a - 38} h68 v6 h-68 z`,
        }),
        s.jsx("path", {
          className: "ln leg",
          d: `M${e - 26} ${a} v-26 M${e + 26} ${a} v-26`,
        }),
      ],
    }),
  ss = ({ x: e }) =>
    s.jsxs("g", {
      className: "sign",
      children: [
        s.jsx("path", { className: "ln stem", d: `M${e} ${a} v-62` }),
        s.jsx("path", {
          className: "plate",
          d: `M${e - 4} ${a - 76} h38 v16 h-38 z`,
        }),
      ],
    }),
  S = ({ x: e }) =>
    s.jsxs("g", {
      className: "hyd",
      children: [
        s.jsx("path", {
          className: "body",
          d: `M${e - 7} ${a} v-20 q0 -9 7 -9 q7 0 7 9 v20 z`,
        }),
        s.jsx("path", { className: "ln arms", d: `M${e - 11} ${a - 19} h22` }),
      ],
    }),
  w = ({ x: e, w: c }) =>
    s.jsxs("g", {
      className: "hedge",
      children: [
        s.jsx("path", {
          className: "body",
          d: `M${e} ${a} v-26 q0 -9 11 -9 h${c - 22} q11 0 11 9 v26 z`,
        }),
        s.jsx("path", {
          className: "ln top",
          d: `M${e + 6} ${a - 30} h${c - 12}`,
        }),
      ],
    }),
  es = ({ x: e }) =>
    s.jsx("g", {
      className: "playmate maltese-at-door",
      transform: `translate(550 ${a}) scale(.55)`,
      children: s.jsx("g", {
        className: "hop",
        children: s.jsx(Q, { uid: "door-dog", scene: "door" }),
      }),
    }),
  as = ({ x: e, v: c }) =>
    c === 2
      ? s.jsx("g", {
          className: "green grass",
          children: [-26, -16, -6, 4, 14, 24].map((r, t) =>
            s.jsx(
              "path",
              {
                className: "blade",
                d: `M${e + r} ${a} q${t % 2 ? 6 : -6} -14 ${t % 2 ? 10 : -10} -${22 + (t % 3) * 7}`,
              },
              t,
            ),
          ),
        })
      : c === 3
        ? s.jsxs("g", {
            className: "green sapling",
            children: [
              s.jsx("path", { className: "trunk2", d: `M${e} ${a} v-38` }),
              s.jsx("ellipse", {
                className: "crown2",
                cx: e,
                cy: a - 52,
                rx: "22",
                ry: "18",
              }),
              s.jsx("ellipse", {
                className: "crown2 c2",
                cx: e - 14,
                cy: a - 42,
                rx: "14",
                ry: "11",
              }),
            ],
          })
        : s.jsx("g", {
            className: "green grass",
            children: [-18, -8, 2, 12].map((r, t) =>
              s.jsx(
                "path",
                {
                  className: "blade",
                  d: `M${e + r} ${a} q${t % 2 ? 5 : -5} -12 ${t % 2 ? 8 : -8} -${18 + (t % 3) * 6}`,
                },
                t,
              ),
            ),
          }),
  E = ({ x: e }) =>
    s.jsxs("g", {
      className: "bin",
      children: [
        s.jsx("path", {
          className: "body",
          d: `M${e} ${a} l5 -40 h34 l5 40 z`,
        }),
        s.jsx("path", {
          className: "lid",
          d: `M${e - 4} ${a - 40} h52 v-7 h-52 z`,
        }),
      ],
    });
function cs() {
  return s.jsxs("g", {
    className: "street",
    children: [
      s.jsx(w, { x: -742, w: 150 }),
      s.jsx(C, { x: -520 }),
      s.jsx(g, { x: -424 }),
      s.jsx(g, { x: -60 }),
      s.jsx(L, { x: -320 }),
      s.jsx(S, { x: -176 }),
      s.jsx(q, { x: -104 }),
      s.jsx(w, { x: 16, w: 120 }),
      s.jsx(E, { x: 196 }),
      s.jsx(ss, { x: 264 }),
      s.jsx(es, { x: 352 }),
      s.jsx(g, { x: 640 }),
      s.jsx(g, { x: 1140 }),
      s.jsx(w, { x: 1200, w: 130 }),
      s.jsx(E, { x: 1264 }),
      s.jsx(q, { x: 1360 }),
      s.jsx(L, { x: 1520, flip: !0 }),
      s.jsx(g, { x: 1600 }),
      s.jsx(C, { x: 1690 }),
      s.jsx(S, { x: 1806 }),
    ],
  });
}
function ts() {
  return s.jsxs("g", {
    className: "near",
    children: [
      s.jsx("path", { className: "path", d: `M470 ${a} h96 l30 22 H440 z` }),
      [0, 1].map((e) =>
        s.jsx(
          "path",
          {
            className: "ln path-ln",
            d: `M${452 + e * 12} ${a + 8 + e * 7} h${112 + e * 14}`,
          },
          e,
        ),
      ),
      s.jsxs("g", {
        className: "fence",
        children: [
          s.jsx("path", {
            className: "ln rail",
            d: `M-760 ${a - 26} H438 M596 ${a - 26} H1900`,
          }),
          s.jsx("path", {
            className: "ln rail",
            d: `M-760 ${a - 12} H438 M596 ${a - 12} H1900`,
          }),
          Array.from({ length: 58 }, (e, c) => -752 + c * 46)
            .filter((e) => e < 438 || e > 596)
            .map((e) =>
              s.jsx(
                "path",
                { className: "ln pale", d: `M${e} ${a + 2} V${a - 36}` },
                e,
              ),
            ),
        ],
      }),
      s.jsxs("g", {
        className: "post",
        children: [
          s.jsx("path", {
            className: "ln stem",
            d: `M624 ${a + 2} V${a - 44}`,
          }),
          s.jsx("path", {
            className: "box",
            d: `M608 ${a - 44} h34 v22 h-34 z`,
          }),
          s.jsx("path", {
            className: "flag",
            d: `M642 ${a - 44} v-14 l10 5 z`,
          }),
        ],
      }),
      [
        [-662, 2],
        [-410, 2],
        [-262, 3],
        [-96, 2],
        [132, 2],
        [286, 3],
        [1010, 2],
        [1180, 3],
        [1436, 2],
        [1620, 2],
        [1852, 3],
      ].map(([e, c], r) => s.jsx(as, { x: e, v: c }, r)),
    ],
  });
}
function ls() {
  const e = F("(max-width: 760px)"),
    c = e
      ? { x: 150, y: 40, w: 760, h: 292 }
      : { x: -330, y: 46, w: 1800, h: 286 },
    r = `${c.x} ${c.y} ${c.w} ${c.h}`,
    [t, l] = d.useState(0),
    i = d.useRef(0),
    $ = d.useRef(null),
    p = d.useRef(null);
  return (
    d.useEffect(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const n = window.setInterval(() => l((h) => h + 1), U);
      return () => window.clearInterval(n);
    }, []),
    d.useEffect(() => () => window.clearTimeout(i.current), []),
    d.useEffect(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const n = $.current,
        h = p.current;
      if (!n || !h) return;
      let j = 0;
      const y = () => {
          j = 0;
          const H = n.getBoundingClientRect(),
            b = window.innerHeight || 1,
            z = b * 0.92,
            T = b * 0.16,
            N = Math.min(1, Math.max(0, (z - H.top) / (z - T))),
            M = N < 0.5 ? 4 * N * N * N : 1 - Math.pow(-2 * N + 2, 3) / 2,
            f = c.w + (c.w / Z - c.w) * M,
            X = f * (c.h / c.w),
            A = c.x + c.w / 2 + (k.x - (c.x + c.w / 2)) * M,
            R = c.y + c.h / 2 + (k.y - (c.y + c.h / 2)) * M;
          h.setAttribute(
            "viewBox",
            `${(A - f / 2).toFixed(1)} ${(R - X / 2).toFixed(1)} ${f.toFixed(1)} ${X.toFixed(1)}`,
          );
        },
        u = () => {
          j || (j = requestAnimationFrame(y));
        };
      return (
        y(),
        window.addEventListener("scroll", u, { passive: !0 }),
        window.addEventListener("resize", u),
        () => {
          (window.removeEventListener("scroll", u),
            window.removeEventListener("resize", u),
            j && cancelAnimationFrame(j),
            h.setAttribute("viewBox", r));
        }
      );
    }, [e, t]),
    s.jsx(v, {
      className: "sv-door",
      children: s.jsx("div", {
        className: "sv-door-view",
        ref: $,
        onClick: () => l((n) => n + 1),
        role: "img",
        "aria-label":
          "Um rapaz loiro bate à porta de uma casa tranquila; um cachorro Maltês aparece quando a porta abre. Clique para bater novamente.",
        children: s.jsxs(
          "svg",
          {
            viewBox: r,
            preserveAspectRatio: "xMidYMax meet",
            ref: p,
            "aria-hidden": "true",
            children: [
              s.jsx("path", { className: "ln ground", d: `M-760 ${a} H1900` }),
              s.jsxs("g", {
                className: "far",
                children: [
                  s.jsx(m, { x: -690, s: 0.78 }),
                  s.jsx(x, { x: -748, w: 132, h: 92, v: 0 }),
                  s.jsx(x, { x: -560, w: 124, h: 106, v: 1 }),
                  s.jsx(m, { x: -430, s: 0.92 }),
                  s.jsx(m, { x: -286, s: 0.86 }),
                  s.jsx(x, { x: -344, w: 140, h: 88, v: 2 }),
                  s.jsx(x, { x: -150, w: 128, h: 104, v: 3 }),
                  s.jsx(m, { x: -30, s: 1.05 }),
                  s.jsx(x, { x: 40, w: 158, h: 116, v: 1 }),
                  s.jsx(m, { x: 186, s: 1.05 }),
                  s.jsx(x, { x: 846, w: 150, h: 104, v: 2 }),
                  s.jsx(m, { x: 812, s: 0.72 }),
                  s.jsx(m, { x: 1044, s: 0.9 }),
                  s.jsx(x, { x: 1130, w: 146, h: 92, v: 3 }),
                  s.jsx(x, { x: 1330, w: 132, h: 108, v: 0 }),
                  s.jsx(m, { x: 1490, s: 0.82 }),
                  s.jsx(x, { x: 1560, w: 140, h: 96, v: 1 }),
                  s.jsx(m, { x: 1730, s: 0.88 }),
                  s.jsx(x, { x: 1780, w: 126, h: 104, v: 2 }),
                ],
              }),
              s.jsx(J, {}),
              s.jsx("g", {
                className: "stand",
                transform: `translate(474 ${a - 9}) scale(1.02)`,
                children: s.jsx(Y, { uid: "door" }),
              }),
              s.jsx(cs, {}),
              s.jsx(ts, {}),
            ],
          },
          t,
        ),
      }),
    })
  );
}
const rs = (e) => {
    const c = e
      .replace(/^https?:\/\/[^/]+/, "")
      .split("/")
      .filter(Boolean)
      .pop();
    return c ? `/${c}` : "";
  },
  ns = () => o.socials.filter(e => e.label !== "WhatsApp").map((e) => [e.label, e.url, rs(e.url)]);
function $s() {
  const [e, c] = V(),
    [r, t] = W();
  D();
  const l = B.contact,
    [i, $] = d.useState(!1),
    p = (n) => {
      var h;
      (h = navigator.clipboard) != null &&
        h.writeText &&
        (n.preventDefault(),
        navigator.clipboard
          .writeText(o.email)
          .then(() => {
            ($(!0), window.setTimeout(() => $(!1), 1600));
          })
          .catch(() => {
            window.location.href = `mailto:${o.email}`;
          }));
    };
  return s.jsxs("div", {
    className: `site-root sv-fill ${e ? "is-dark" : ""} ${K(r)}`,
    children: [
      s.jsx(O, {
        email: o.email,
        dark: e,
        onToggleDark: c,
        palette: r,
        onTogglePalette: t,
      }),
      s.jsx("header", {
        className: "sv-hero sv-cn-hero",
        id: "top",
        children: s.jsxs("div", {
          className: "sv-wrap sv-cn-content",
          children: [
            s.jsxs(v, {
              as: "div",
              className: "sv-page-meta",
              children: ["Contato — ", o.location],
            }),
            s.jsx(P, { as: "h1", lines: _(l.heroTitle) }),
            s.jsx(v, { as: "p", className: "sv-cn-sub", children: l.heroSub }),
            s.jsx(WhatsAppButton, {}),
            s.jsxs(v, {
              className: "sv-cn-options",
              children: [
                s.jsxs("a", {
                  className: `opt is-primary ${i ? "is-copied" : ""}`,
                  href: `mailto:${o.email}`,
                  onClick: p,
                  children: [
                    s.jsx("span", { className: "k", children: "Email" }),
                    s.jsx("span", { className: "v", children: o.email }),
                    s.jsx("span", {
                      className: "hint",
                      "aria-hidden": "true",
                      children: i ? "Copiado" : "Copiar",
                    }),
                  ],
                }),
                ns().map(([n, h, j]) =>
                  s.jsxs(
                    "a",
                    {
                      className: "opt",
                      href: h,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: [
                        s.jsx("span", { className: "k", children: n }),
                        s.jsxs("span", {
                          className: "v",
                          children: [j, " ", s.jsx(G, {})],
                        }),
                      ],
                    },
                    n,
                  ),
                ),
              ],
            }),
            s.jsx(ls, {}),
          ],
        }),
      }),
      s.jsx(I, {
        board: !1,
        email: o.email,
        availability: o.availability,
        responseTime: o.responseTime,
        location: o.location,
        disciplines: o.disciplines,
        socials: o.socials,
      }),
    ],
  });
}
export { $s as default };
