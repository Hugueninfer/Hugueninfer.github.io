import {Education} from "./custom/CareerContent.js";
import {photos as personalPhotos} from "./custom/personal-content.mjs";
import { j as s, C as P, b as k, L as X, f as Y } from "./index-DwCqBxFL.js";
import {
  u as _,
  c as R,
  L as A,
  R as v,
  A as U,
  d as G,
  e as K,
  g as Q,
  S as Z,
  h as J,
  p as ss,
} from "./theme-CvJK8SGN.js";
import { r as h } from "./router-5ag9yOgs.js";
import { a as es } from "./Commuter-BHE77-Jm.js";
import { D as as } from "./Daughter-HgqIGkFr.js";
import { W as FamilyWife } from "./custom/FamilyCharacters.js";
import { profileDogFrame } from "./custom/family-spec.mjs";
import { a as ts } from "./asset-BaG-jDRI.js";
import { L as ls } from "./Ledger-DHCOg5iE.js";
import "./react-dom-36navsnf.js";
const e = 350,
  C = { x: -240, y: -10, w: 1820, h: 430 },
  B = { x: 230, y: 66, w: 640, h: 356 },
  I = { x: 550, y: 220 },
  cs = 1400,
  rs = 620,
  ns = 2400,
  is = 4200;
function os() {
  return s.jsxs("g", {
    className: "back",
    children: [
      s.jsx("path", { className: "ln floor", d: `M-60 ${e} H1340` }),
      s.jsx("path", { className: "ln skirt", d: `M-60 ${e - 12} H1340` }),
      s.jsxs("g", {
        className: "window",
        children: [
          s.jsx("path", {
            className: "light",
            d: `M96 262 L150 ${e} L392 ${e} L306 262 Z`,
          }),
          s.jsx("rect", {
            className: "glass",
            x: "96",
            y: "92",
            width: "210",
            height: "168",
            rx: "3",
          }),
          s.jsxs("g", {
            clipPath: "url(#sv-dk-win)",
            children: [
              s.jsx("defs", {
                children: s.jsx("clipPath", {
                  id: "sv-dk-win",
                  children: s.jsx("rect", {
                    x: "96",
                    y: "92",
                    width: "210",
                    height: "168",
                    rx: "3",
                  }),
                }),
              }),
              s.jsx("rect", {
                className: "sky",
                x: "96",
                y: "92",
                width: "210",
                height: "168",
              }),
              s.jsx("circle", {
                className: "sun",
                cx: "262",
                cy: "128",
                r: "17",
              }),
              s.jsx("path", {
                className: "hill far",
                d: "M96 206 q48 -36 96 -6 q42 26 114 -4 v64 H96 z",
              }),
              s.jsx("path", {
                className: "hill",
                d: "M96 222 q56 -28 108 -2 q46 22 102 -6 v46 H96 z",
              }),
              s.jsx("path", { className: "ln out-trunk", d: "M150 258 V214" }),
              s.jsx("circle", {
                className: "out-crown",
                cx: "150",
                cy: "198",
                r: "22",
              }),
              s.jsx("circle", {
                className: "out-crown c2",
                cx: "132",
                cy: "210",
                r: "14",
              }),
              s.jsx("circle", {
                className: "out-crown c3",
                cx: "168",
                cy: "211",
                r: "13",
              }),
            ],
          }),
          s.jsx("path", {
            className: "ln mullion",
            d: "M201 92 V260 M96 176 H306",
          }),
          s.jsx("path", { className: "ln sill", d: "M84 262 H318" }),
        ],
      }),
      s.jsx("path", { className: "ln shelf", d: "M470 144 H700" }),
      [0, 1, 2, 3, 4].map((a) =>
        s.jsx(
          "rect",
          {
            className: `book bk${a % 3}`,
            x: 480 + a * 15,
            y: 144 - [30, 38, 26, 34, 29][a],
            width: "11",
            height: [30, 38, 26, 34, 29][a],
            rx: "1.5",
          },
          a,
        ),
      ),
      s.jsx("path", { className: "lean", d: "M566 144 l2 -40 l34 4 l-2 36 z" }),
      s.jsxs("g", {
        className: "hi-pot",
        children: [
          s.jsx("path", { className: "pot", d: "M646 144 h30 l-5 -20 h-20 z" }),
          s.jsx("path", {
            className: "ln vine",
            d: "M661 124 q-18 14 -22 34 M661 124 q16 12 19 28",
          }),
        ],
      }),
      s.jsxs("g", {
        className: "frames",
        children: [
          s.jsx("rect", {
            className: "frame f1",
            x: "962",
            y: "96",
            width: "104",
            height: "82",
            rx: "2",
          }),
          s.jsx("rect", {
            className: "frame f2",
            x: "1082",
            y: "104",
            width: "62",
            height: "52",
            rx: "2",
          }),
          s.jsx("rect", {
            className: "frame",
            x: "1082",
            y: "168",
            width: "62",
            height: "46",
            rx: "2",
          }),
          s.jsx("rect", {
            className: "frame f3",
            x: "1160",
            y: "120",
            width: "74",
            height: "58",
            rx: "2",
          }),
        ],
      }),
      s.jsxs("g", {
        className: "pendant",
        children: [
          s.jsx("path", { className: "ln flex", d: "M500 -10 V96" }),
          s.jsx("path", {
            className: "dome",
            d: "M472 122 q0 -26 28 -26 q28 0 28 26 z",
          }),
          s.jsx("ellipse", {
            className: "bulb",
            cx: "500",
            cy: "124",
            rx: "8",
            ry: "3.8",
          }),
          s.jsx("path", {
            className: "glow pend-glow",
            d: "M474 126 h52 l40 130 H434 z",
          }),
        ],
      }),
    ],
  });
}
function hs() {
  return s.jsxs("g", {
    className: "side",
    children: [
      s.jsx("path", { className: "case", d: `M-214 ${e} V104 h132 V${e} z` }),
      s.jsx("path", { className: "case-sh", d: `M-96 ${e} V104 h14 V${e} z` }),
      [0, 1, 2, 3, 4].map((a) =>
        s.jsx(
          "path",
          { className: "ln case-sh", d: `M-214 ${150 + a * 40} h132` },
          a,
        ),
      ),
      [
        [-208, 7],
        [-166, 4],
        [-208, 5],
        [-160, 6],
        [-208, 8],
        [-152, 3],
        [-208, 4],
        [-176, 6],
      ].map(([a, t], i) => {
        const c = 150 + Math.floor(i / 2) * 40;
        return s.jsx(
          "g",
          {
            children: Array.from({ length: t }, (u, o) =>
              s.jsx(
                "rect",
                {
                  className: `book bk${(i + o) % 3}`,
                  x: a + o * 9,
                  y: c - [24, 28, 20, 26][(i + o) % 4],
                  width: "7",
                  height: [24, 28, 20, 26][(i + o) % 4],
                  rx: "1",
                },
                o,
              ),
            ),
          },
          i,
        );
      }),
      s.jsx("path", { className: "deck", d: "M-196 104 h72 v-22 h-72 z" }),
      s.jsx("circle", { className: "ln disc", cx: "-166", cy: "93", r: "8" }),
      s.jsx("circle", { className: "spindle", cx: "-166", cy: "93", r: "1.6" }),
      s.jsx("path", { className: "ln tone", d: "M-136 88 l-14 6" }),
      s.jsx("ellipse", {
        className: "cast-sh",
        cx: "-148",
        cy: e,
        rx: "80",
        ry: "6",
      }),
      s.jsxs("g", {
        className: "guitar",
        children: [
          s.jsx("path", {
            className: "gtr-body",
            d: `M-58 ${e - 6} q-26 -4 -26 -30 q0 -18 15 -22 q-9 -8 -9 -19 q0 -15 16 -17 q17 2 17 17 q0 11 -9 19 q15 4 15 22 q0 26 -19 30 z`,
          }),
          s.jsx("circle", {
            className: "gtr-hole",
            cx: "-53",
            cy: e - 40,
            r: "7.5",
          }),
          s.jsx("path", {
            className: "ln gtr-neck",
            d: `M-49 ${e - 94} l-16 -66`,
          }),
          s.jsx("path", {
            className: "ln gtr-head",
            d: `M-65 ${e - 160} l-9 -16 l10 -5 l9 16 z`,
          }),
          s.jsx("path", {
            className: "ln gtr-str",
            d: `M-52 ${e - 20} l-20 -140 M-47 ${e - 20} l-19 -139`,
          }),
        ],
      }),
      s.jsxs("g", {
        className: "dog",
        children: [
          s.jsx("ellipse", {
            className: "cast-sh",
            cx: "34",
            cy: e + 2,
            rx: "52",
            ry: "7",
          }),
          s.jsx("path", {
            className: "cushion",
            d: `M-16 ${e} q0 -16 22 -16 h58 q22 0 22 16 z`,
          }),
          s.jsx("ellipse", {
            className: "fur d-body",
            cx: "34",
            cy: e - 20,
            rx: "44",
            ry: "18",
          }),
          s.jsx("ellipse", {
            className: "fur d-head",
            cx: "-6",
            cy: e - 24,
            rx: "18",
            ry: "15",
          }),
          s.jsx("path", {
            className: "fur d-ear",
            d: `M-16 ${e - 36} q-13 3 -11 20 q9 -6 15 -14 z`,
          }),
          s.jsx("path", {
            className: "ln d-snout",
            d: `M-22 ${e - 20} q-8 2 -9 7`,
          }),
          s.jsx("ellipse", {
            className: "nose",
            cx: "-24",
            cy: e - 21,
            rx: "2.6",
            ry: "2",
          }),
          s.jsx("path", {
            className: "ln d-eye",
            d: `M-11 ${e - 27} q4 3 8 0`,
          }),
          s.jsx("path", {
            className: "ln d-tail",
            d: `M76 ${e - 24} q18 -4 12 -18`,
          }),
          s.jsx("ellipse", {
            className: "d-breath",
            cx: "34",
            cy: e - 20,
            rx: "44",
            ry: "18",
          }),
        ],
      }),
    ],
  });
}
function ds() {
  return s.jsxs("g", {
    className: "side",
    children: [
      s.jsx("path", { className: "rug2", d: `M934 ${e} h330 l24 12 H910 z` }),
      s.jsxs("g", {
        className: "sofa",
        children: [
          s.jsx("path", {
            className: "couch-back",
            d: `M966 ${e - 14} V246 q0 -14 16 -14 h226 q16 0 16 14 v90 z`,
          }),
          s.jsx("path", {
            className: "couch-seat",
            d: `M956 ${e - 14} h268 q12 0 12 12 v16 h-292 v-16 q0 -12 12 -12 z`,
          }),
          s.jsx("path", { className: "ln mattress", d: `M962 ${e - 8} h286` }),
          s.jsx("path", { className: "cush", d: "M986 280 h96 v46 h-96 z" }),
          s.jsx("path", { className: "cush", d: "M1090 280 h96 v46 h-96 z" }),
          s.jsx("path", {
            className: "pillow p1",
            d: "M974 268 h44 v40 h-44 z",
          }),
          s.jsx("path", {
            className: "pillow p2",
            d: "M1176 272 h40 v36 h-40 z",
          }),
          s.jsx("path", {
            className: "throw",
            d: `M1120 ${e - 26} h84 l-10 30 h-74 z`,
          }),
          s.jsx("path", {
            className: "ln couch-leg",
            d: `M970 ${e} v-10 M1240 ${e} v-10`,
          }),
        ],
      }),
      s.jsx("ellipse", {
        className: "cast-sh",
        cx: "1104",
        cy: e,
        rx: "152",
        ry: "7",
      }),
      s.jsxs("g", {
        className: "cat",
        children: [
          s.jsx("ellipse", {
            className: "fur",
            cx: "1204",
            cy: "266",
            rx: "26",
            ry: "11",
          }),
          s.jsx("circle", { className: "fur", cx: "1182", cy: "259", r: "10" }),
          s.jsx("path", {
            className: "ln ears",
            d: "M1175 252 l-3 -7 l7 3 M1187 251 l4 -7 l2 8",
          }),
          s.jsx("ellipse", {
            className: "nose",
            cx: "1173",
            cy: "261",
            rx: "1.6",
            ry: "1.2",
          }),
          s.jsx("path", { className: "ln tail", d: "M1228 268 q15 4 9 -10" }),
        ],
      }),
      s.jsxs("g", {
        className: "floor-lamp",
        children: [
          s.jsx("path", {
            className: "ln arc",
            d: `M1286 ${e} V244 q0 -52 -64 -56`,
          }),
          s.jsx("path", { className: "ln stand", d: `M1266 ${e} h40` }),
          s.jsx("path", {
            className: "shade2",
            d: "M1196 176 h52 l-16 30 h-20 z",
          }),
          s.jsx("path", {
            className: "glow lamp-glow",
            d: "M1200 206 h44 l50 100 H1150 z",
          }),
        ],
      }),
      s.jsx("path", { className: "pot", d: `M896 ${e} h50 l-8 -52 h-34 z` }),
      [-1, -0.3, 0.5].map((a, t) =>
        s.jsxs(
          "g",
          {
            children: [
              s.jsx("path", {
                className: "ln frond",
                d: `M921 300 q${a * 24} -24 ${a * 32} -${52 + t * 12}`,
              }),
              s.jsx("ellipse", {
                className: "leaf",
                cx: 921 + a * 32,
                cy: 300 - (52 + t * 12),
                rx: "14",
                ry: "8.5",
                transform: `rotate(${a * 28} ${921 + a * 32} ${300 - (52 + t * 12)})`,
              }),
            ],
          },
          t,
        ),
      ),
    ],
  });
}
function xs() {
  return s.jsxs("g", {
    className: "side",
    children: [
      s.jsx("path", { className: "table", d: "M1332 268 h124 v9 h-124 z" }),
      s.jsx("path", {
        className: "ln table-leg",
        d: `M1344 277 V${e} M1444 277 V${e}`,
      }),
      s.jsx("path", { className: "ln table-sh", d: `M1344 ${e - 26} h100` }),
      s.jsx("path", {
        className: "shade2 t-shade",
        d: "M1360 210 h44 l-13 26 h-18 z",
      }),
      s.jsx("path", { className: "ln t-stem", d: "M1382 236 V268" }),
      s.jsx("path", {
        className: "glow t-glow",
        d: "M1364 236 h36 l30 32 h-96 z",
      }),
      s.jsx("path", { className: "cup2", d: "M1418 268 h20 l-3 -15 h-14 z" }),
      s.jsx("ellipse", {
        className: "cast-sh",
        cx: "1394",
        cy: e,
        rx: "78",
        ry: "6",
      }),
      s.jsx("path", {
        className: "pouffe",
        d: `M1478 ${e} q-4 -34 30 -34 q34 0 30 34 z`,
      }),
      s.jsx("path", { className: "ln pouffe-ln", d: `M1482 ${e - 18} h52` }),
      s.jsxs("g", {
        className: "board-lean",
        children: [
          s.jsx("path", {
            className: "deck2",
            d: `M1550 ${e} l-22 -122 l16 -4 l22 122 z`,
          }),
          s.jsx("circle", {
            className: "ln wheel",
            cx: "1534",
            cy: e - 96,
            r: "4.5",
          }),
          s.jsx("circle", {
            className: "ln wheel",
            cx: "1548",
            cy: e - 24,
            r: "4.5",
          }),
        ],
      }),
      s.jsx("path", { className: "ln shelf2", d: "M1330 150 H1500" }),
      s.jsx("path", { className: "pot", d: "M1348 150 h30 l-5 -22 h-20 z" }),
      s.jsx("path", {
        className: "ln vine",
        d: "M1363 128 q-18 13 -22 32 M1363 128 q16 11 19 27",
      }),
      s.jsx("path", { className: "pot", d: "M1414 150 h26 l-4 -18 h-18 z" }),
      [-1, 0.6].map((a, t) =>
        s.jsx(
          "ellipse",
          {
            className: "leaf",
            cx: 1427 + a * 16,
            cy: 124 - t * 8,
            rx: "12",
            ry: "7",
            transform: `rotate(${a * 26} ${1427 + a * 16} ${124 - t * 8})`,
          },
          t,
        ),
      ),
      s.jsx("rect", {
        className: "frame f2",
        x: "1462",
        y: "112",
        width: "34",
        height: "38",
        rx: "2",
      }),
    ],
  });
}
function ms({ frame: a }) {
  return s.jsxs("g", {
    className: "mac",
    children: [
      s.jsx("path", { className: "lid", d: "M612 250 h168 l14 12 H598 z" }),
      s.jsx("path", { className: "ln lid-ln", d: "M676 257 h40" }),
      s.jsx("rect", {
        className: "bezel",
        x: 616,
        y: 156,
        width: 160,
        height: 94,
        rx: "4",
      }),
      s.jsx("rect", {
        className: "screen",
        x: 622,
        y: 162,
        width: 148,
        height: 82,
        rx: "2",
      }),
      s.jsxs("g", {
        className: "ui-app",
        children: [
          s.jsx("rect", {
            className: "bar",
            x: 622,
            y: 162,
            width: 148,
            height: "8",
            rx: "2",
          }),
          [0, 1, 2].map((l) =>
            s.jsx(
              "circle",
              { className: "dot", cx: 628 + l * 5, cy: 166, r: "1.3" },
              l,
            ),
          ),
          s.jsx("rect", {
            className: "rail",
            x: 622,
            y: 170,
            width: "30",
            height: 74,
          }),
          [0, 1, 2, 3, 4, 5].map((l) =>
            s.jsx(
              "rect",
              {
                className: `row ${l === 2 ? "is-sel" : ""}`,
                x: 625,
                y: 175 + l * 8,
                width: l === 2 ? 24 : 19 - (l % 3) * 4,
                height: "4",
                rx: "1",
              },
              l,
            ),
          ),
          s.jsx("rect", {
            className: "canvas",
            x: 652,
            y: 170,
            width: 118,
            height: 74,
          }),
          s.jsx("rect", {
            className: "frame-a",
            x: 662,
            y: 178,
            width: "28",
            height: "36",
            rx: "1.5",
          }),
          s.jsx("rect", {
            className: "frame-b",
            x: 662,
            y: 218,
            width: "28",
            height: "12",
            rx: "1.5",
          }),
          s.jsx("rect", {
            className: "sel",
            x: 661,
            y: 177,
            width: "30",
            height: "38",
            rx: "1.5",
          }),
          [
            [661, 177],
            [691, 177],
            [661, 215],
            [691, 215],
          ].map(([l, j], d) =>
            s.jsx(
              "rect",
              {
                className: "handle",
                x: l - 1.3,
                y: j - 1.3,
                width: "2.6",
                height: "2.6",
              },
              d,
            ),
          ),
          s.jsxs("g", {
            className: "note",
            children: [
              s.jsx("rect", {
                className: "pad",
                x: 700,
                y: 178,
                width: "60",
                height: "44",
                rx: "2",
              }),
              s.jsx("text", {
                className: "hd",
                x: 705,
                y: 186,
                children: "TODO",
              }),
              s.jsx("text", {
                className: "ln1",
                x: 705,
                y: 194,
                children: "Ship the thing.",
              }),
              s.jsx("text", {
                className: "ln2",
                x: 705,
                y: 202,
                children: "Then make it",
              }),
              s.jsx("text", {
                className: "ln3",
                x: 705,
                y: 210,
                children: "worth keeping.",
              }),
              s.jsx("text", {
                className: "sig",
                x: 705,
                y: 219,
                children: "— still going",
              }),
            ],
          }),
          s.jsxs("g", {
            className: "cursor",
            style: { opacity: a === 1 ? 1 : 0.82 },
            children: [
              s.jsx("path", {
                className: "ptr",
                d: "M694 224 l0 9 l2.4 -2.4 l1.8 3.6 l1.8 -.9 l-1.8 -3.6 l3.3 -.3 z",
              }),
              s.jsx("rect", {
                className: "tag",
                x: 702,
                y: 226,
                width: "18",
                height: "6",
                rx: "1.5",
              }),
            ],
          }),
          s.jsx("circle", { className: "live", cx: 764, cy: 166, r: "1.7" }),
        ],
      }),
    ],
  });
}
function ps({ active: a }) {
  return s.jsxs("g", {
    className: "desk",
    children: [
      s.jsxs("g", {
        className: "lamp",
        children: [
          s.jsx("path", {
            className: "glow desk-glow",
            d: "M866 166 h30 l38 92 H828 z",
          }),
          s.jsx("path", {
            className: "ln arm",
            d: "M858 262 V160 q0 -16 18 -16 h20",
          }),
          s.jsx("path", {
            className: "shade",
            d: "M862 140 h38 l-12 26 h-16 z",
          }),
        ],
      }),
      s.jsx("path", { className: "top", d: "M452 262 H892 v13 H452 z" }),
      s.jsx("path", { className: "top-lit", d: "M452 262 H892 v3 H452 z" }),
      s.jsx("path", { className: "top-edge", d: "M452 272 H892 v3 H452 z" }),
      s.jsx("ellipse", {
        className: "cast-sh",
        cx: "672",
        cy: e,
        rx: "232",
        ry: "7",
      }),
      s.jsx("path", { className: "ln leg", d: `M466 275 V${e}` }),
      s.jsx("path", { className: "ln leg", d: `M878 275 V${e}` }),
      s.jsx("rect", {
        className: "draw",
        x: "794",
        y: "275",
        width: "72",
        height: "70",
        rx: "2",
      }),
      s.jsx("path", { className: "draw-sh", d: "M854 275 h12 v70 h-12 z" }),
      s.jsx("path", { className: "ln", d: "M794 299 H866 M794 323 H866" }),
      s.jsx("path", {
        className: "ln pull",
        d: "M818 287 h26 M818 311 h26 M818 335 h26",
      }),
      s.jsxs("g", {
        className: "mug",
        children: [
          s.jsx("path", { className: "cup", d: "M466 238 h28 l-4 24 h-20 z" }),
          s.jsx("ellipse", {
            className: "cup-top",
            cx: "480",
            cy: "238",
            rx: "14",
            ry: "4",
          }),
          s.jsx("path", { className: "cup-sh", d: "M486 239 h8 l-4 23 h-6 z" }),
          s.jsx("path", { className: "ln handle", d: "M494 245 q11 5 -2 13" }),
          s.jsx("g", {
            className: "steam",
            children: [0, 1, 2].map((t) =>
              s.jsx(
                "path",
                {
                  className: `wisp w${t}`,
                  d: `M${472 + t * 8} 232 q-6 -11 0 -20 q6 -9 0 -18`,
                },
                t,
              ),
            ),
          }),
        ],
      }),
      s.jsx("path", { className: "note-pad", d: "M508 254 h54 l4 8 h-62 z" }),
      s.jsx("path", { className: "ln pen", d: "M516 246 l32 -7" }),
      s.jsxs("g", {
        className: "jar",
        children: [
          s.jsx("path", {
            className: "pot2",
            d: "M806 262 h26 l-4 -26 h-18 z",
          }),
          s.jsx("path", { className: "ln nib n1", d: "M813 238 V218" }),
          s.jsx("path", { className: "ln nib n2", d: "M820 238 V212" }),
          s.jsx("path", { className: "ln nib n3", d: "M826 238 l6 -22" }),
        ],
      }),
      s.jsxs("g", {
        className: "players",
        children: [
          s.jsxs("g", {
            className: "chair is-pushed",
            children: [
              s.jsx("path", {
                className: "ln chair-back",
                d: "M636 288 V196 q0 -10 10 -10 h6",
              }),
              s.jsx("path", {
                className: "seat",
                d: "M628 288 h84 v11 h-84 z",
              }),
              s.jsx("path", {
                className: "seat-edge",
                d: "M628 297 h84 v3 h-84 z",
              }),
              s.jsx("path", { className: "ln post", d: `M670 300 V${e - 10}` }),
              s.jsx("path", { className: "ln base", d: `M644 ${e - 10} h52` }),
              s.jsx("circle", {
                className: "caster",
                cx: "644",
                cy: e - 5,
                r: "5",
              }),
              s.jsx("circle", {
                className: "caster",
                cx: "696",
                cy: e - 5,
                r: "5",
              }),
            ],
          }),
          s.jsx("g", {
            className: "him",
            transform: `translate(322 ${e}) scale(2.9)`,
            children: s.jsx(es, { uid: "desk" }),
          }),
          s.jsx("g", {
            className: "wife-stage",
            transform: `translate(410 ${e}) scale(2.6)`,
            children: s.jsx(FamilyWife, { active: a }),
          }),
        ],
      }),
    ],
  });
}
function js() {
  return s.jsxs("g", {
    className: "fore",
    children: [
      s.jsx("path", { className: "rug", d: `M352 ${e} h520 l34 16 H318 z` }),
      s.jsx("path", { className: "ln rug-ln", d: `M366 ${e + 8} h488` }),
      s.jsxs("g", {
        className: "plant",
        children: [
          s.jsx("g", {
            className: "fronds",
            children: [-1, -0.45, 0.25, 1].map((a, t) =>
              s.jsxs(
                "g",
                {
                  children: [
                    s.jsx("path", {
                      className: `ln frond f${t}`,
                      d: `M232 ${e - 46} q${a * 28} -26 ${a * 39} -${56 + t * 9}`,
                    }),
                    s.jsx("ellipse", {
                      className: "leaf",
                      cx: 232 + a * 39,
                      cy: e - 46 - (56 + t * 9),
                      rx: "15",
                      ry: "9",
                      transform: `rotate(${a * 30} ${232 + a * 39} ${e - 46 - (56 + t * 9)})`,
                    }),
                  ],
                },
                t,
              ),
            ),
          }),
          s.jsx("path", {
            className: "pot",
            d: `M204 ${e + 6} h56 l-9 -46 h-38 z`,
          }),
          s.jsx("path", { className: "ln pot-ln", d: `M208 ${e - 30} h48` }),
        ],
      }),
      s.jsxs("g", {
        className: "stack",
        children: [
          s.jsx("path", { className: "bk-a", d: `M596 ${e} h60 v-11 h-60 z` }),
          s.jsx("path", {
            className: "bk-b",
            d: `M602 ${e - 11} h52 v-10 h-52 z`,
          }),
          s.jsx("path", {
            className: "bk-c",
            d: `M600 ${e - 21} h56 v-9 h-56 z`,
          }),
        ],
      }),
      s.jsxs("g", {
        className: "bag",
        children: [
          s.jsx("path", {
            className: "bag-body",
            d: `M904 ${e + 2} v-56 q0 -14 15 -14 h32 q15 0 15 14 v56 z`,
          }),
          s.jsx("path", { className: "ln flap", d: "M904 300 h62" }),
          s.jsx("path", { className: "ln strap", d: "M919 282 q16 -21 33 0" }),
        ],
      }),
    ],
  });
}
function Ns() {
  const a = _("(max-width: 760px)"),
    t = a ? B : C,
    [i, n] = h.useState(0),
    [o, m] = h.useState(!1),
    [p, l] = h.useState(!1),
    j = h.useRef(0),
    d = h.useRef(null),
    N = h.useRef(null);
  h.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const x = window.setInterval(() => n((r) => (r + 1) % 3), ns);
    return () => window.clearInterval(x);
  }, []);
  const g = h.useCallback(() => {
    if (j.current) return;
    m(!0);
    j.current = window.setTimeout(() => {
      j.current = 0;
      m(!1);
    }, is);
  }, []);
  // Trigger once on entering the scroll focus, not on every scroll frame.
  h.useEffect(() => { if (p) g(); }, [p, g]);
  return (
    h.useEffect(() => () => window.clearTimeout(j.current), []),
    h.useEffect(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const x = d.current,
        f = N.current;
      if (!x || !f) return;
      const r = a ? B : C,
        F = a ? rs : cs;
      let $ = 0,
        w = !1;
      const b = () => {
          $ = 0;
          let y;
          if (a) {
            const M = x.getBoundingClientRect(),
              z = window.innerHeight || 1,
              q = z * 0.86,
              W = z * 0.34;
            y = Math.min(1, Math.max(0, (q - M.top) / (q - W)));
          } else {
            const M = x.closest(".sv-ab-hero"),
              z = M == null ? void 0 : M.querySelector(".sv-ab-hero-pin");
            if (!M || !z) return;
            const q = M.offsetHeight - z.offsetHeight;
            y =
              q > 0
                ? Math.min(
                    1,
                    Math.max(
                      0,
                      (z.getBoundingClientRect().top -
                        M.getBoundingClientRect().top) /
                        q,
                    ),
                  )
                : 0;
          }
          const E = y < 0.5 ? 4 * y * y * y : 1 - Math.pow(-2 * y + 2, 3) / 2,
            L = r.w + (F - r.w) * E,
            T = L * (r.h / r.w),
            D = r.x + r.w / 2 + (I.x - (r.x + r.w / 2)) * E,
            O = r.y + r.h / 2 + (I.y - (r.y + r.h / 2)) * E;
          f.setAttribute(
            "viewBox",
            `${(D - L / 2).toFixed(1)} ${(O - T / 2).toFixed(1)} ${L.toFixed(1)} ${T.toFixed(1)}`,
          );
          const dog = f.querySelector(".profile-dog-stage");
          if (dog) {
            const pose = profileDogFrame(y);
            dog.setAttribute("transform", `translate(${pose.x} ${pose.y}) scale(-.65 .65)`);
            dog.style.setProperty("--dog-near-angle", `${pose.nearAngle}deg`);
            dog.style.setProperty("--dog-far-angle", `${pose.farAngle}deg`);
            dog.style.setProperty("--dog-bob", `${pose.bodyY}px`);
            dog.style.setProperty("--dog-tail-angle", `${pose.tailAngle}deg`);
          }
          const S = y > 0.72;
          S !== w && ((w = S), l(S));
        },
        H = () => {
          $ || ($ = requestAnimationFrame(b));
        };
      return (
        b(),
        window.addEventListener("scroll", H, { passive: !0 }),
        window.addEventListener("resize", H),
        () => {
          (window.removeEventListener("scroll", H),
            window.removeEventListener("resize", H),
            $ && cancelAnimationFrame($),
            f.setAttribute("viewBox", `${r.x} ${r.y} ${r.w} ${r.h}`));
        }
      );
    }, [a]),
    s.jsx("div", {
      className: `sv-desk-wrap ${p ? "is-met" : ""}`,
      children: s.jsx("div", {
        className: `sv-desk-view ${o || p ? "is-hi" : ""} ${p ? "is-met" : ""}`,
        ref: d,
        onClick: g,
        style: { aspectRatio: `${t.w} / ${t.h}` },
        role: "img",
        "aria-label":
          "Um rapaz loiro, sua esposa loira e um cachorro Maltês estão junto à mesa. Role para o cachorro caminhar e a esposa acenar; clique para repetir o aceno.",
        children: s.jsxs("svg", {
          ref: N,
          viewBox: `${t.x} ${t.y} ${t.w} ${t.h}`,
          preserveAspectRatio: "xMidYMid meet",
          "aria-hidden": "true",
          children: [
            s.jsx(os, {}),
            s.jsx(hs, {}),
            s.jsx(ds, {}),
            s.jsx(xs, {}),
            s.jsx(ps, { active: o }),
            s.jsx(ms, { frame: i }),
            s.jsx(js, {}),
            s.jsx("g", {
              className: "profile-dog-stage",
              transform: `translate(490 ${e}) scale(-.65 .65)`,
              children: s.jsx(as, { uid: "profile-dog", scene: "profile" }),
            }),
          ],
        }),
      }),
    })
  );
}
function us({ lead: a }) {
  const t = h.useRef(null),
    i = h.useRef(null),
    n = h.useRef(null);
  return (
    h.useEffect(() => {
      const c = t.current,
        u = i.current,
        o = n.current;
      if (!c || !u || !o) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        c.classList.add("is-flat");
        return;
      }
      const m = (N, g, x) => Math.min(x, Math.max(g, N)),
        p = (N) => N * N * N;
      let l = 0;
      const j = () => {
          l = 0;
          const N = window.innerHeight,
            g = -c.getBoundingClientRect().top,
            x = Math.max(1, c.offsetHeight - N),
            f = m(g / x, 0, 1),
            r = p(f);
          ((o.style.transform = `translateY(${(-r * 320).toFixed(1)}px)`),
            (o.style.opacity = m(1 - Math.pow(f, 1.35) * 1.02, 0, 1).toFixed(
              3,
            )));
        },
        d = () => {
          l || (l = requestAnimationFrame(j));
        };
      return (
        j(),
        window.addEventListener("scroll", d, { passive: !0 }),
        window.addEventListener("resize", d),
        () => {
          (window.removeEventListener("scroll", d),
            window.removeEventListener("resize", d),
            l && cancelAnimationFrame(l));
        }
      );
    }, []),
    s.jsx("section", {
      className: "sv-ab-hero",
      ref: t,
      id: "top",
      children: s.jsxs("div", {
        className: "sv-ab-hero-pin",
        ref: i,
        children: [
          s.jsx("div", {
            className: "sv-ab-hero-inner",
            ref: n,
            children: s.jsx("p", { className: "lead", children: R([a]) }),
          }),
          s.jsx(Ns, {}),
        ],
      }),
    })
  );
}
function fs({ shots: a }) {
  const t = h.useRef(null),
    i = h.useRef(null);
  return (
    h.useEffect(() => {
      const n = t.current,
        c = i.current;
      if (
        !n ||
        !c ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      )
        return;
      const u = (l, j, d) => Math.min(d, Math.max(j, l));
      let o = 0;
      const m = () => {
          o = 0;
          const l = window.innerHeight,
            j = n.getBoundingClientRect(),
            d = u(-j.top / Math.max(1, j.height - l), 0, 1),
            N = Math.max(0, c.scrollWidth - n.clientWidth + 80),
            g = Math.max(0, c.scrollWidth - n.clientWidth);
          c.style.transform = `translate3d(${(-d * g).toFixed(1)}px,0,0)`;
        },
        p = () => {
          o || (o = requestAnimationFrame(m));
        };
      return (
        m(),
        window.addEventListener("scroll", p, { passive: !0 }),
        window.addEventListener("resize", p),
        () => {
          (window.removeEventListener("scroll", p),
            window.removeEventListener("resize", p),
            o && cancelAnimationFrame(o));
        }
      );
    }, [a.length]),
    s.jsx("div", {
      className: "sv-lf",
      ref: t,
      children: s.jsx("div", {
        className: "sv-lf-track",
        ref: i,
        children: a.map((n) =>
          s.jsx(
            "figure",
            {
              className: "sv-lf-card",
              children: s.jsx("img", {
                src: ts(n),
                alt: personalPhotos.find(photo => photo.src === n)?.alt || "Foto pessoal",
                loading: "lazy",
                decoding: "async",
                draggable: !1,
              }),
            },
            n,
          ),
        ),
      }),
    })
  );
}
const gs = ["Backend", "APIs REST", "Multi-tenant", "IA aplicada", "Full stack", "Laravel"];
function ws({ title: a, meta: t, lead: i, tail: n }) {
  const c = h.useRef(null),
    u = h.useRef(null),
    o = i.split(" ");
  return (
    h.useEffect(() => {
      const m = c.current,
        p = u.current;
      if (!m || !p) return;
      const l = [...p.querySelectorAll(".w")];
      if (!l.length) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        l.forEach((x) => {
          ((x.style.opacity = "1"),
            (x.style.transform = "none"),
            (x.style.filter = "none"));
        });
        return;
      }
      const j = (x, f, r) => Math.min(r, Math.max(f, x));
      let d = 0;
      const N = () => {
          d = 0;
          const x = window.innerHeight,
            f = m.getBoundingClientRect(),
            r = (f.top + f.bottom) / 2,
            $ = j((x * 0.9 - r) / (x * 0.5), 0, 1) * l.length;
          for (let w = 0; w < l.length; w++) {
            const b = Math.max(0, Math.min(1, $ - w));
            ((l[w].style.opacity = (0.14 + 0.86 * b).toFixed(3)),
              (l[w].style.transform =
                `translateY(${((1 - b) * 0.2).toFixed(3)}em)`),
              (l[w].style.filter =
                b > 0.99 ? "none" : `blur(${((1 - b) * 3.5).toFixed(2)}px)`));
          }
        },
        g = () => {
          d || (d = requestAnimationFrame(N));
        };
      return (
        N(),
        window.addEventListener("scroll", g, { passive: !0 }),
        window.addEventListener("resize", g),
        () => {
          (window.removeEventListener("scroll", g),
            window.removeEventListener("resize", g),
            d && cancelAnimationFrame(d));
        }
      );
    }, [i]),
    s.jsx("section", {
      className: "sv-wrap sv-pad sv-credo",
      ref: c,
      id: "credo",
      "data-badge": "Como trabalho",
      children: s.jsxs("div", {
        className: "sv-credo-grid",
        children: [
          s.jsxs("aside", {
            className: "aside",
            children: [
              s.jsx(A, { lines: a }),
              s.jsx(v, { as: "span", className: "meta", children: t }),
            ],
          }),
          s.jsxs("div", {
            className: "main",
            children: [
              s.jsx("p", {
                className: "lead",
                ref: u,
                children: o.map((m, p) =>
                  s.jsxs("span", { className: "w", children: [m, " "] }, p),
                ),
              }),
              n && s.jsx(v, { as: "p", className: "tail", children: n }),
              s.jsx(v, {
                as: "ul",
                className: "tags",
                children: gs.map((m) => s.jsx("li", { children: m }, m)),
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function ys() {
  const a = P.about,
    t = String(a.ebookCoverTitle || "")
      .split("/")
      .filter(Boolean),
    i = a.ebookPoints || [];
  return s.jsx("section", {
    className: "sv-wrap sv-pad sv-ebook",
    id: "ebook",
    "data-badge": "E-book",
    children: s.jsxs("div", {
      className: "sv-ebook-grid",
      children: [
        s.jsxs(v, {
          className: "sv-ebook-plate",
          children: [
            s.jsxs("div", {
              className: "book",
              "aria-hidden": "true",
              children: [
                s.jsx("span", { className: "pages" }),
                s.jsxs("span", {
                  className: "cover",
                  children: [
                    s.jsx("span", {
                      className: "k",
                      children: a.ebookCoverKind,
                    }),
                    s.jsx("span", {
                      className: "ttl",
                      children: t.map((n, c) =>
                        s.jsxs(
                          "span",
                          {
                            children: [n, c < t.length - 1 && s.jsx("br", {})],
                          },
                          c,
                        ),
                      ),
                    }),
                    s.jsx("span", { className: "rule" }),
                    s.jsx("span", {
                      className: "by",
                      children: a.ebookCoverBy,
                    }),
                  ],
                }),
                s.jsx("span", { className: "spine" }),
              ],
            }),
            s.jsx("span", { className: "shelf", "aria-hidden": "true" }),
          ],
        }),
        s.jsxs("div", {
          className: "sv-ebook-read",
          children: [
            s.jsx(A, { as: "h2", lines: R(a.ebookTitle) }),
            s.jsx(v, {
              as: "p",
              className: "sv-ebook-lead",
              children: a.ebookLead,
            }),
            s.jsx(v, {
              as: "ul",
              className: "sv-ebook-points",
              children: i.map((n) => s.jsx("li", { children: n }, n)),
            }),
            s.jsxs(v, {
              className: "sv-ebook-cta",
              children: [
                s.jsxs("a", {
                  className: "sv-btn sv-btn--amber",
                  href: a.ebookHref,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: [a.ebookCta, s.jsx(U, {})],
                }),
                s.jsx("span", { className: "note", children: a.ebookNote }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Hs() {
  const [a, t] = G(),
    [i, n] = K();
  Q();
  const c = P.about;
  return s.jsxs("div", {
    className: `site-root ${a ? "is-dark" : ""} ${ss(i)}`,
    children: [
      s.jsx(Z, {
        email: k.email,
        dark: a,
        onToggleDark: t,
        palette: i,
        onTogglePalette: n,
      }),
      s.jsx(us, { lead: c.heroLead }),
      s.jsx("section", {
        className: "sv-wrap sv-pad sv-ab-statement",
        id: "profile",
        "data-badge": "Sobre",
        children: s.jsxs("div", {
          className: "sv-ab-statement-grid",
          children: [
            s.jsx(A, { as: "h2", lines: R(c.statement) }),
            s.jsx(v, {
              className: "aside",
              children: s.jsx("p", { children: c.statementBody }),
            }),
          ],
        }),
      }),
      s.jsx(fs, { shots: X }),
      s.jsx(ws, {
        title: R(c.credTitle),
        meta: c.credMeta,
        lead: c.credLead,
        tail: s.jsxs(s.Fragment, {
          children: [
            "Minha próxima etapa conecta essa base à inteligência artificial. ",
            s.jsx("span", {
              className: "hl",
              children: "Integrar, validar e evoluir.",
            }),
          ],
        }),
      }),
      s.jsx(ls, {
        entries: Y.map((u) => ({ name: u.name, role: u.role, note: u.note })),
        title: R(c.companiesTitle),
        sub: c.companiesNote,
      }),
      s.jsx(Education, {}),
      s.jsx(J, {
        email: k.email,
        availability: k.availability,
        responseTime: k.responseTime,
        location: k.location,
        disciplines: k.disciplines,
        socials: k.socials,
      }),
    ],
  });
}
export { Hs as default };
