import {ProjectCards, Skills} from "./custom/CareerContent.js";
import {
  j as e,
  b as R,
  C as H,
  a as _,
  W as K,
  g as q,
  P as G,
  h as Y,
  i as J,
} from "./index-DwCqBxFL.js";
import {
  L as X,
  R as P,
  A as M,
  j as W,
  u as $,
  d as Q,
  e as V,
  f as U,
  g as Z,
  S as ee,
  c as L,
  h as se,
  p as ae,
} from "./theme-CvJK8SGN.js";
import { r as c, L as B } from "./router-5ag9yOgs.js";
import { a as T } from "./asset-BaG-jDRI.js";
import "./react-dom-36navsnf.js";
function ne({ title: a, sub: t, hero: l }) {
  return e.jsxs("div", {
    className: "sv-rail-head is-lifted",
    children: [
      e.jsx("div", {
        className: "lede",
        children: e.jsx(X, { as: "h1", lines: a }),
      }),
      e.jsxs("div", {
        className: "aside",
        children: [
          e.jsx(P, { as: "p", className: "sv-rail-lead", children: t }),
          ((l == null ? void 0 : l.cta) ||
            (l == null ? void 0 : l.secondary)) &&
            e.jsxs(P, {
              className: "sv-rail-ctas",
              children: [
                l.cta &&
                  e.jsxs("a", {
                    className: "sv-btn sv-btn--amber",
                    href: l.cta.href,
                    children: [l.cta.label, e.jsx(M, { dir: "sw" })],
                  }),
                l.secondary &&
                  e.jsxs("a", {
                    className: "sv-btn sv-btn--ghost",
                    href: l.secondary.href,
                    children: [l.secondary.label, e.jsx(M, { dir: "sw" })],
                  }),
              ],
            }),
        ],
      }),
    ],
  });
}
const te = 5;
function le({ shots: a, index: t, onClose: l, onStep: d }) {
  c.useEffect(() => {
    const r = (m) => {
      m.key === "Escape"
        ? l()
        : m.key === "ArrowRight"
          ? d(1)
          : m.key === "ArrowLeft" && d(-1);
    };
    window.addEventListener("keydown", r);
    const p = document.body.style.overflow;
    return (
      (document.body.style.overflow = "hidden"),
      document.body.classList.add("sv-lb-open"),
      () => {
        (window.removeEventListener("keydown", r),
          (document.body.style.overflow = p),
          document.body.classList.remove("sv-lb-open"));
      }
    );
  }, [l, d]);
  const n = a[t];
  return n
    ? e.jsx("div", {
        className: "sv-lightbox",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": n.title,
        onClick: l,
        children: e.jsxs("div", {
          className: "sv-lb-inner",
          onClick: (r) => r.stopPropagation(),
          children: [
            e.jsxs("div", {
              className: "sv-lb-bar",
              children: [
                e.jsxs("span", {
                  children: [
                    "Plate ",
                    String(t + 1).padStart(2, "0"),
                    " / ",
                    String(a.length).padStart(2, "0"),
                    " — ",
                    n.title,
                  ],
                }),
                e.jsx("button", {
                  onClick: l,
                  "aria-label": "Close",
                  children: "✕",
                }),
              ],
            }),
            e.jsx("img", { src: n.url, alt: n.title }),
            e.jsxs("div", {
              className: "sv-lb-nav",
              children: [
                e.jsx("button", {
                  onClick: () => d(-1),
                  "aria-label": "Previous",
                  children: e.jsx("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.8",
                    children: e.jsx("path", { d: "M15 5l-7 7 7 7" }),
                  }),
                }),
                e.jsx("button", {
                  onClick: () => d(1),
                  "aria-label": "Next",
                  children: e.jsx("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.8",
                    children: e.jsx("path", { d: "M9 5l7 7-7 7" }),
                  }),
                }),
              ],
            }),
          ],
        }),
      })
    : null;
}
function re({ shots: a, tabs: t, title: l, sub: d, initialTab: n }) {
  var A;
  const [r, p] = c.useState(n ?? ((A = t[0]) == null ? void 0 : A.key) ?? ""),
    [m, f] = c.useState(0),
    [x, v] = c.useState(null),
    u = c.useRef(null),
    [h, g] = c.useState(4);
  c.useLayoutEffect(() => {
    const s = u.current;
    if (!s) return;
    const i = () => {
      const C = s.querySelector(".sv-archive");
      if (!C) return;
      const y = getComputedStyle(C)
        .gridTemplateColumns.split(" ")
        .filter(Boolean).length;
      y > 0 && g(y);
    };
    i();
    const o = new ResizeObserver(i);
    return (o.observe(s), () => o.disconnect());
  }, []);
  const w = h * te,
    N = c.useMemo(
      () =>
        a
          .filter((s) => (s.group || "web") === r && s.url)
          .slice()
          .sort((s, i) => (s.order ?? 0) - (i.order ?? 0))
          .map((s) => ({ ...s, url: T(s.url) })),
      [a, r],
    ),
    b = Math.max(1, Math.ceil(N.length / w)),
    j = Math.min(m, b - 1),
    k = c.useMemo(() => N.slice(j * w, (j + 1) * w), [N, j, w]),
    S = c.useCallback(
      (s) => {
        v((i) => (i == null ? i : (i + s + k.length) % k.length));
      },
      [k.length],
    ),
    E = (s) => {
      var i;
      (f(s),
        v(null),
        (i = document.getElementById("archive")) == null ||
          i.scrollIntoView({ behavior: "smooth", block: "start" }));
    };
  return e.jsxs("section", {
    className: "sv-wrap sv-pad",
    id: "work-gallery",
    "data-badge": "Screenshots",
    ref: u,
    children: [
      e.jsx(W, { lines: l, sub: d }),
      e.jsx("div", {
        className: "sv-tabs",
        role: "tablist",
        children: t.map((s) => {
          const i = a.filter(
            (o) => (o.group || "web") === s.key && o.url,
          ).length;
          return e.jsxs(
            "button",
            {
              role: "tab",
              "aria-selected": s.key === r,
              className: s.key === r ? "is-on" : "",
              onClick: () => {
                (p(s.key), f(0), v(null));
              },
              children: [
                s.label,
                e.jsx("span", { className: "count", children: i }),
              ],
            },
            s.key,
          );
        }),
      }),
      N.length === 0
        ? e.jsx("p", {
            className: "sv-archive-empty",
            children: "Nothing here yet — new screenshots are on their way.",
          })
        : e.jsxs(e.Fragment, {
            children: [
              e.jsx(
                P,
                {
                  className: "sv-archive",
                  children: k.map((s, i) =>
                    e.jsx(
                      "button",
                      {
                        className: "sv-shot",
                        onClick: () => v(i),
                        "aria-label": `Open ${s.title}`,
                        children: e.jsx("span", {
                          className: "frame",
                          children: e.jsx("img", {
                            src: s.url,
                            alt: s.title,
                            loading: "lazy",
                          }),
                        }),
                      },
                      s.id,
                    ),
                  ),
                },
                `${r}-${j}`,
              ),
              b > 1 &&
                e.jsxs("nav", {
                  className: "sv-pager",
                  "aria-label": "Screenshot pages",
                  children: [
                    e.jsx("button", {
                      onClick: () => E(j - 1),
                      disabled: j === 0,
                      "aria-label": "Previous page",
                      children: e.jsx("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.8",
                        children: e.jsx("path", { d: "M15 5l-7 7 7 7" }),
                      }),
                    }),
                    Array.from({ length: b }, (s, i) =>
                      e.jsx(
                        "button",
                        {
                          className: i === j ? "is-on" : "",
                          "aria-current": i === j ? "page" : void 0,
                          onClick: () => E(i),
                          children: String(i + 1).padStart(2, "0"),
                        },
                        i,
                      ),
                    ),
                    e.jsx("button", {
                      onClick: () => E(j + 1),
                      disabled: j === b - 1,
                      "aria-label": "Next page",
                      children: e.jsx("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.8",
                        children: e.jsx("path", { d: "M9 5l7 7-7 7" }),
                      }),
                    }),
                  ],
                }),
            ],
          }),
      x != null &&
        e.jsx(le, { shots: k, index: x, onClose: () => v(null), onStep: S }),
    ],
  });
}
function O({ entry: a, eager: t }) {
  return a.video
    ? e.jsx("video", {
        src: T(a.video),
        muted: !0,
        loop: !0,
        playsInline: !0,
        autoPlay: t,
        preload: "metadata",
        draggable: !1,
      })
    : a.image
      ? e.jsx("img", {
          src: T(a.image),
          alt: `${a.name} — preview`,
          loading: "lazy",
          decoding: "async",
          draggable: !1,
        })
      : null;
}
function ie({ entry: a, index: t, onClose: l }) {
  var d;
  return (
    c.useEffect(() => {
      const n = (p) => {
        p.key === "Escape" && l();
      };
      window.addEventListener("keydown", n);
      const r = document.body.style.overflow;
      return (
        (document.body.style.overflow = "hidden"),
        () => {
          (window.removeEventListener("keydown", n),
            (document.body.style.overflow = r));
        }
      );
    }, [l]),
    e.jsx("div", {
      className: "sv-report-sheet",
      role: "dialog",
      "aria-modal": "true",
      "aria-label": a.name,
      onClick: l,
      children: e.jsxs("article", {
        className: "sheet",
        onClick: (n) => n.stopPropagation(),
        children: [
          e.jsxs("header", {
            children: [
              e.jsxs("span", {
                className: "meta",
                children: [
                  "Report ",
                  String(t + 1).padStart(2, "0"),
                  " — ",
                  a.badge,
                  " · ",
                  a.date,
                ],
              }),
              e.jsx("h3", { children: a.name }),
              e.jsx("button", {
                type: "button",
                className: "close",
                onClick: l,
                "aria-label": "Close report",
                children: "✕",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "scroll",
            children: [
              (a.image || a.video) &&
                e.jsx("div", {
                  className: "plate",
                  children: e.jsx(O, { entry: a, eager: !0 }),
                }),
              e.jsx("div", {
                className: "body",
                children: (a.full ?? [a.lead]).map((n, r) =>
                  Array.isArray(n)
                    ? e.jsx(
                        "ul",
                        {
                          children: n.map((p, m) =>
                            e.jsx("li", { children: p }, m),
                          ),
                        },
                        r,
                      )
                    : e.jsx("p", { children: n }, r),
                ),
              }),
              (d = a.tags) != null && d.length
                ? e.jsx("div", {
                    className: "tags",
                    children: a.tags.map((n) =>
                      e.jsx("span", { children: n }, n),
                    ),
                  })
                : null,
              (a.reacts || a.comments) &&
                e.jsx("div", {
                  className: "stats",
                  children: [a.reacts, a.comments].filter(Boolean).join(" · "),
                }),
            ],
          }),
        ],
      }),
    })
  );
}
function ce({ entries: a, title: t, sub: l }) {
  var x, v;
  const d = !$("(min-width: 961px)"),
    [n, r] = c.useState(0),
    [p, m] = c.useState(null),
    f = (u) => {
      if (d && u !== n) {
        r(u);
        return;
      }
      m(u);
    };
  return e.jsxs("section", {
    className: "sv-wrap sv-pad",
    id: "ai-work",
    "data-badge": "Working with AI",
    children: [
      e.jsx(W, { lines: t, sub: l }),
      e.jsxs(P, {
        className: `sv-log ${d ? "is-flat" : ""}`,
        children: [
          e.jsxs("div", {
            className: "sv-log-index",
            children: [
              a.map((u, h) =>
                e.jsxs(
                  "button",
                  {
                    type: "button",
                    className: `sv-log-row ${h === n ? "is-act" : ""}`,
                    "aria-current": h === n,
                    onMouseEnter: () => {
                      d || r(h);
                    },
                    onFocus: () => {
                      d || r(h);
                    },
                    onClick: () => f(h),
                    children: [
                      e.jsx("span", {
                        className: "no",
                        children: String(h + 1).padStart(2, "0"),
                      }),
                      e.jsx("span", {
                        className: "id",
                        children: e.jsx("span", {
                          className: "name",
                          children: u.name,
                        }),
                      }),
                      e.jsx("span", {
                        className: "fold",
                        children: e.jsxs("span", {
                          className: "fold-in",
                          children: [
                            e.jsx("span", {
                              className: "lead",
                              children: u.lead,
                            }),
                            d && h === n && (u.image || u.video)
                              ? e.jsx("span", {
                                  className: "rowvis",
                                  "aria-hidden": "true",
                                  children: e.jsx(O, { entry: u, eager: !0 }),
                                })
                              : null,
                            e.jsxs("span", {
                              className: "more",
                              children: [
                                "Read the report ",
                                e.jsx(M, { dir: "e" }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  },
                  u.name,
                ),
              ),
              e.jsxs(B, {
                className: "sv-btn sv-btn--line sv-log-cta",
                to: "/contact",
                children: ["Let's build with AI", e.jsx(M, {})],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "sv-log-stage",
            onClick: () => m(n),
            children: [
              a.map((u, h) =>
                e.jsx(
                  "figure",
                  {
                    className: `sv-log-media ${h === n ? "is-on" : ""}`,
                    children: e.jsx(O, { entry: u, eager: h === n }),
                  },
                  u.name,
                ),
              ),
              e.jsxs("figcaption", {
                className: "fig",
                children: [
                  "FIG. ",
                  String(n + 1).padStart(3, "0"),
                  " — ",
                  (x = a[n]) == null ? void 0 : x.name,
                  " · ",
                  (v = a[n]) == null ? void 0 : v.badge,
                ],
              }),
            ],
          }),
        ],
      }),
      p != null &&
        a[p] &&
        e.jsx(ie, { entry: a[p], index: p, onClose: () => m(null) }),
    ],
  });
}
function oe({ stations: a }) {
  const t = $("(max-width: 900px)"),
    [l, d] = c.useState(null),
    n = c.useRef(null),
    r = c.useRef(null),
    p = c.useRef({}),
    [m, f] = c.useState(null),
    x = c.useRef({ x: 0, y: 0 }),
    v = c.useRef({ x: 0, y: 0 }),
    u = c.useRef({ x: 0, y: 0 }),
    h = c.useRef({ left: 0, top: 0, w: 0, h: 0, cw: 0, ch: 0 }),
    g = c.useRef(0),
    w = c.useRef(0),
    N = c.useCallback(() => {
      const s = n.current,
        i = r.current;
      if (!s || !i) return;
      const o = s.getBoundingClientRect();
      h.current = {
        left: o.left,
        top: o.top,
        w: o.width,
        h: o.height,
        cw: i.offsetWidth,
        ch: i.offsetHeight,
      };
    }, []),
    b = c.useCallback((s, i) => {
      const o = h.current;
      if (!o.cw) return;
      const C = 12,
        y = 30;
      u.current = { x: s, y: i };
      const I = s - o.left - o.cw / 2,
        D = i - o.top - o.ch / 2,
        F = Math.max(C, o.w - o.cw - C),
        z = Math.max(-y, o.h - o.ch + y);
      v.current = {
        x: Math.max(C, Math.min(F, I)),
        y: Math.max(-y, Math.min(z, D)),
      };
    }, []),
    j = c.useCallback(() => {
      const s = r.current;
      s &&
        (s.style.transform = `translate3d(${x.current.x.toFixed(2)}px, ${x.current.y.toFixed(2)}px, 0)`);
    }, []),
    k = c.useCallback(() => {
      const s = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        i = (o) => {
          const C = w.current ? Math.min(64, o - w.current) : 16.7;
          w.current = o;
          const y = s ? 1 : 1 - Math.pow(1 - 0.17, C / 16.7);
          ((x.current.x += (v.current.x - x.current.x) * y),
            (x.current.y += (v.current.y - x.current.y) * y),
            j(),
            (g.current = requestAnimationFrame(i)));
        };
      g.current || (g.current = requestAnimationFrame(i));
    }, [j]),
    S = c.useCallback(() => {
      (cancelAnimationFrame(g.current), (g.current = 0), (w.current = 0));
    }, []),
    E = c.useCallback(
      (s, i) => {
        (N(), b(s, i), (x.current = { ...v.current }), j(), k());
      },
      [N, b, j, k],
    ),
    A = c.useCallback(
      (s) => {
        const i = p.current[s];
        if (!i) return;
        const o = i.getBoundingClientRect();
        (E(o.left + o.width / 2, o.top + o.height / 2), f(s));
      },
      [E],
    );
  return (
    c.useEffect(() => {
      if (!m || t) return;
      const s = () => {
        (N(), b(u.current.x, u.current.y));
      };
      return (
        window.addEventListener("scroll", s, { passive: !0 }),
        window.addEventListener("resize", s),
        () => {
          (window.removeEventListener("scroll", s),
            window.removeEventListener("resize", s));
        }
      );
    }, [m, t, N, b]),
    c.useEffect(() => {
      t && (f(null), S());
    }, [t, S]),
    c.useEffect(() => S, [S]),
    e.jsxs("div", {
      className: "sv-wx",
      role: "list",
      ref: n,
      onPointerMove: (s) => {
        t ||
          s.pointerType === "touch" ||
          (g.current ? b(s.clientX, s.clientY) : E(s.clientX, s.clientY));
      },
      onPointerLeave: () => {
        (f(null), S());
      },
      onBlur: (s) => {
        s.currentTarget.contains(s.relatedTarget) || (f(null), S());
      },
      children: [
        a.map((s) => {
          const i = t && l === s.id;
          return e.jsxs(
            B,
            {
              className: `sv-wx-p${i ? " is-open" : ""}${m === s.id ? " is-lit" : ""}`,
              to: s.href,
              role: "listitem",
              ref: (o) => {
                p.current[s.id] = o;
              },
              "aria-expanded": t ? i : void 0,
              onPointerEnter: (o) => {
                !t && o.pointerType !== "touch" && f(s.id);
              },
              onFocus: () => {
                t || A(s.id);
              },
              "data-no-route": t && !i ? "" : void 0,
              onClick: (o) => {
                !i &&
                  window.matchMedia("(max-width: 900px)").matches &&
                  (o.preventDefault(), d(s.id));
              },
              children: [
                e.jsx("span", {
                  className: "sv-wx-shot",
                  children: e.jsx("img", {
                    src: T(s.image),
                    alt: "",
                    loading: "lazy",
                    draggable: !1,
                  }),
                }),
                e.jsx("span", {
                  className: "sv-wx-scrim",
                  "aria-hidden": "true",
                }),
                e.jsxs("span", {
                  className: "sv-wx-spine",
                  children: [
                    e.jsx("span", { className: "nm", children: s.name }),
                    s.kind &&
                      e.jsx("span", { className: "kd", children: s.kind }),
                  ],
                }),
                e.jsx("span", {
                  className: "sv-wx-plus",
                  "aria-hidden": "true",
                  children: e.jsx("svg", {
                    viewBox: "0 0 14 14",
                    children: e.jsx("path", { d: "M7 1v12M1 7h12" }),
                  }),
                }),
                e.jsxs("span", {
                  className: "sv-wx-open",
                  children: [
                    e.jsx("span", { className: "nm", children: s.name }),
                    s.lead &&
                      e.jsx("span", { className: "ld", children: s.lead }),
                    e.jsxs("span", {
                      className: "go",
                      children: ["Open project ", e.jsx(M, { dir: "e" })],
                    }),
                  ],
                }),
              ],
            },
            s.id,
          );
        }),
        !t &&
          e.jsx("div", {
            className: `sv-wx-pop${m ? " is-on" : ""}`,
            ref: r,
            "aria-hidden": "true",
            children: e.jsx("div", {
              className: "sv-wx-pop-card",
              children: a.map((s) =>
                e.jsxs(
                  "div",
                  {
                    className: `sv-wx-pop-l${m === s.id ? " is-on" : ""}`,
                    children: [
                      e.jsx("span", {
                        className: "shot",
                        children: e.jsx("img", {
                          src: T(s.image),
                          alt: "",
                          loading: "lazy",
                          draggable: !1,
                        }),
                      }),
                      e.jsxs("span", {
                        className: "txt",
                        children: [
                          e.jsx("span", { className: "nm", children: s.name }),
                          s.lead &&
                            e.jsx("span", {
                              className: "ld",
                              children: s.lead,
                            }),
                          e.jsxs("span", {
                            className: "go",
                            children: ["Open project ", e.jsx(M, { dir: "e" })],
                          }),
                        ],
                      }),
                    ],
                  },
                  s.id,
                ),
              ),
            }),
          }),
      ],
    })
  );
}
function de(a) {
  return typeof a == "string" ? { name: a } : a;
}
function ue(a, t) {
  const [l, d] = c.useState(""),
    [n, r] = c.useState(!1);
  return (
    c.useEffect(() => {
      if ((d(""), r(!1), !a)) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        (d(a), r(!0));
        return;
      }
      const p = a.split(" ");
      let m = 0,
        f = 0;
      const x = () => {
        ((m += 1),
          d(p.slice(0, m).join(" ")),
          m < p.length
            ? (f = window.setTimeout(x, 26 + Math.random() * 46))
            : r(!0));
      };
      return ((f = window.setTimeout(x, 260)), () => window.clearTimeout(f));
    }, [a, t]),
    { shown: l, done: n }
  );
}
function me({ title: a, names: t }) {
  const d = t.map(de),
    n = c.useRef(null),
    [r, p] = c.useState(null),
    { shown: m, done: f } = ue(
      r == null ? void 0 : r.note,
      r == null ? void 0 : r.name,
    ),
    x = (v, u) => {
      const h = n.current;
      if (!h || !u.note) return;
      const g = h.getBoundingClientRect(),
        w = (
          v.currentTarget.querySelector(".nm") ?? v.currentTarget
        ).getBoundingClientRect();
      p({
        name: u.name,
        note: u.note,
        x: Math.min(
          Math.max(w.left + w.width / 2 - g.left, 190),
          g.width - 190,
        ),
        y: w.top - g.top,
      });
    };
  return e.jsxs("section", {
    className: "sv-wrap sv-pad sv-marked sv-nda",
    "data-badge": "Non-disclosure",
    ref: n,
    children: [
      e.jsx("p", { className: "sv-nda-title", children: a }),
      e.jsx("div", {
        className: "sv-nda-strip",
        onMouseLeave: () => p(null),
        children: e.jsx("div", {
          className: "sv-nda-track",
          children: Array.from({ length: 4 }, (v, u) =>
            e.jsx(
              "ul",
              {
                className: "sv-nda-run",
                "aria-hidden": u > 0 || void 0,
                children: d.map((h) =>
                  e.jsxs(
                    "li",
                    {
                      onMouseEnter: (g) => x(g, h),
                      children: [
                        e.jsx("span", { className: "nm", children: h.name }),
                        e.jsx("span", {
                          className: "dot",
                          "aria-hidden": "true",
                        }),
                      ],
                    },
                    h.name,
                  ),
                ),
              },
              u,
            ),
          ),
        }),
      }),
      r &&
        e.jsx("div", {
          className: "sv-nda-pop",
          style: { left: r.x, top: r.y },
          "aria-hidden": "true",
          children: e.jsxs(
            "div",
            {
              className: "sv-nda-pop-in",
              children: [
                e.jsxs("span", {
                  className: "sv-nda-pop-eye",
                  children: [e.jsx("i", {}), r.name],
                }),
                e.jsxs("p", {
                  className: "sv-nda-pop-txt",
                  children: [
                    m ||
                      e.jsxs("span", {
                        className: "sv-nda-think",
                        children: [
                          e.jsx("i", {}),
                          e.jsx("i", {}),
                          e.jsx("i", {}),
                        ],
                      }),
                    !f && m && e.jsx("span", { className: "sv-nda-caret" }),
                  ],
                }),
              ],
            },
            r.name,
          ),
        }),
    ],
  });
}
function he() {
  const a = new Map(q.map((t) => [t.id, t]));
  return G.map((t) => {
    const l = a.get(t) ?? {},
      d = J[t] ?? {};
    return {
      id: t,
      name: d.name ?? l.name ?? t,
      badge: l.badge ?? d.type ?? "Project",
      year: l.date ?? d.year ?? "",
      note: d.metric ?? d.type ?? "",
      lead: l.lead ?? d.tagline ?? "",
      kind: l.kind || Y[t] || "",
      href: `/work/${t}`,
      image: l.image ?? "",
    };
  }).filter((t) => t.image);
}
function ge() {
  const [a, t] = Q(),
    [l, d] = V();
  (U(), Z());
  const n = H.work,
    r = he();
  return e.jsxs("div", {
    className: `site-root ${a ? "is-dark" : ""} ${ae(l)}`,
    children: [
      e.jsx(ee, {
        email: R.email,
        dark: a,
        onToggleDark: t,
        palette: l,
        onTogglePalette: d,
      }),
      e.jsxs("section", {
        className: "sv-wrap sv-work-top",
        children: [
          e.jsx(ne, {
            title: L(n.railTitle ?? ["Projetos", "*& explorations.*"]),
            sub: n.railIntro,
            hero: {
              meta: n.heroEyebrow,
              cta: {
                label: n.railCtaShots,
                href: n.railCtaShotsHref ?? "#work-gallery",
              },
              secondary: {
                label: n.railCtaAi,
                href: n.railCtaAiHref ?? "#ai-work",
              },
            },
          }),
          null,
        ],
      }),
      e.jsx(ProjectCards, {}),
      e.jsx(Skills, {}),
      e.jsx(se, {
        email: R.email,
        availability: R.availability,
        responseTime: R.responseTime,
        location: R.location,
        disciplines: R.disciplines,
        socials: R.socials,
      }),
    ],
  });
}
export { he as buildStations, ge as default };
