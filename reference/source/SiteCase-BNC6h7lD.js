import { j as s, g as R, i as C, b as g, P as q } from "./index-DwCqBxFL.js";
import { r as w, c as M, N as F, L } from "./router-5ag9yOgs.js";
import {
  R as x,
  a as O,
  u as T,
  d as D,
  e as I,
  g as P,
  S as z,
  L as _,
  A as S,
  h as H,
  p as J,
} from "./theme-CvJK8SGN.js";
import { a as W } from "./asset-BaG-jDRI.js";
import "./react-dom-36navsnf.js";
const K = (c) => (c <= 0.0031308 ? c * 12.92 : 1.055 * c ** (1 / 2.4) - 0.055),
  Q = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4),
  y = 0.74;
function U(c) {
  const l = /^#([0-9a-f]{6})$/i.exec(c.trim());
  if (!l) return c;
  const [e, d, m] = [0, 2, 4].map((h) =>
      Q(parseInt(l[1].slice(h, h + 2), 16) / 255),
    ),
    a = Math.cbrt(0.4122214708 * e + 0.5363325363 * d + 0.0514459929 * m),
    r = Math.cbrt(0.2119034982 * e + 0.6806995451 * d + 0.1073969566 * m),
    i = Math.cbrt(0.0883024619 * e + 0.2817188376 * d + 0.6299787005 * m);
  if (0.2104542553 * a + 0.793617785 * r - 0.0040720468 * i >= y) return c;
  const o = 1.9779984951 * a - 2.428592205 * r + 0.4505937099 * i,
    t = 0.0259040371 * a + 0.7827717662 * r - 0.808675766 * i,
    j = (y + 0.3963377774 * o + 0.2158037573 * t) ** 3,
    p = (y - 0.1055613458 * o - 0.0638541728 * t) ** 3,
    u = (y - 0.0894841775 * o - 1.291485548 * t) ** 3;
  return `#${[
    4.0767416621 * j - 3.3077115913 * p + 0.2309699292 * u,
    -1.2684380046 * j + 2.6097574011 * p - 0.3413193965 * u,
    -0.0041960863 * j - 0.7034186147 * p + 1.707614701 * u,
  ]
    .map((h) => Math.max(0, Math.min(255, Math.round(K(h) * 255))))
    .map((h) => h.toString(16).padStart(2, "0"))
    .join("")}`;
}
const b = { light: "#005CEC", dark: "#6DA2FF" };
function Y(c, l) {
  return /^#[0-9a-f]{6}$/i.test(c.trim()) ? (l ? b.dark : b.light) : c;
}
function A({ src: c, cap: l, contain: e }) {
  const [d, m] = O(0.12);
  return s.jsx("figure", {
    className: `sv-fig sv-rv ${m ? "is-in" : ""}`,
    ref: d,
    children: s.jsx("div", {
      className: `frame ${e ? "is-contain" : ""}`,
      children: s.jsx("img", { src: W(c), alt: l ?? "", loading: "lazy" }),
    }),
  });
}
function G({ blocks: c }) {
  let l = 0;
  return s.jsx("div", {
    className: "sv-record",
    children: c.map((e, d) => {
      var m, a;
      return e.k === "section"
        ? ((l += 1),
          s.jsxs(
            x,
            {
              className: "sv-chapter",
              id: `ch-${l}`,
              children: [
                s.jsxs("div", {
                  className: "head",
                  children: [
                    s.jsxs("span", {
                      className: "eye",
                      children: [
                        s.jsx("i", { children: String(l).padStart(2, "0") }),
                        " · ",
                        e.eye,
                      ],
                    }),
                    e.title && s.jsx("h2", { children: e.title }),
                  ],
                }),
                s.jsxs("div", {
                  className: "body",
                  children: [
                    (m = e.body) == null
                      ? void 0
                      : m.map((r, i) => s.jsx("p", { children: r }, i)),
                    (a = e.tags) != null && a.length
                      ? s.jsx("ul", {
                          className: "chips",
                          children: e.tags.map((r) =>
                            s.jsx("li", { children: r }, r),
                          ),
                        })
                      : null,
                  ],
                }),
              ],
            },
            d,
          ))
        : e.k === "figure"
          ? s.jsx(A, { src: e.src, cap: e.cap, contain: e.contain }, d)
          : e.k === "duo" || e.k === "trio"
            ? s.jsx(
                "div",
                {
                  className: `sv-duo cols-${Math.min(e.items.length, 3)}`,
                  children: e.items.map((r) =>
                    s.jsx(A, { src: r.src, cap: r.cap }, r.src),
                  ),
                },
                d,
              )
            : e.k === "metrics"
              ? s.jsx(
                  x,
                  {
                    className: "sv-case-metrics",
                    children: e.items.map(([r, i]) =>
                      s.jsxs(
                        "div",
                        {
                          className: "m",
                          children: [
                            s.jsx("span", { className: "v", children: r }),
                            s.jsx("span", { className: "l", children: i }),
                          ],
                        },
                        i,
                      ),
                    ),
                  },
                  d,
                )
              : e.k === "quote"
                ? s.jsxs(
                    x,
                    {
                      as: "blockquote",
                      className: "sv-quote",
                      children: [
                        s.jsxs("p", { children: ["“", e.text, "”"] }),
                        e.who && s.jsx("cite", { children: e.who }),
                      ],
                    },
                    d,
                  )
                : null;
    }),
  });
}
function V({ blocks: c }) {
  const l = c.filter((o) => o.k === "section"),
    e = T("(min-width: 1100px)"),
    [d, m] = w.useState(!1),
    [a, r] = w.useState(0),
    i = w.useRef(0);
  if (
    (w.useEffect(() => {
      if (!e || l.length < 2) return;
      const o = () => {
          i.current = 0;
          const j = document.getElementById("ch-1"),
            p = document.getElementById(`ch-${l.length}`);
          if (!j || !p) return;
          const u = window.innerHeight;
          m(
            j.getBoundingClientRect().top < u * 0.5 &&
              p.getBoundingClientRect().bottom > u * 0.3,
          );
          let f = 0;
          for (let h = 0; h < l.length; h++) {
            const n = document.getElementById(`ch-${h + 1}`);
            n && n.getBoundingClientRect().top < u * 0.45 && (f = h);
          }
          r(f);
        },
        t = () => {
          i.current || (i.current = requestAnimationFrame(o));
        };
      return (
        o(),
        window.addEventListener("scroll", t, { passive: !0 }),
        window.addEventListener("resize", t),
        () => {
          (window.removeEventListener("scroll", t),
            window.removeEventListener("resize", t),
            i.current && cancelAnimationFrame(i.current));
        }
      );
    }, [e, l.length]),
    !e || l.length < 2)
  )
    return null;
  const N = (o) => (t) => {
    t.preventDefault();
    const j = document.getElementById(`ch-${o + 1}`);
    j &&
      window.scrollTo({
        top:
          window.scrollY +
          j.getBoundingClientRect().top -
          window.innerHeight * 0.18,
        behavior: "smooth",
      });
  };
  return s.jsx("nav", {
    className: `sv-ch-rail ${d ? "is-on" : ""}`,
    "aria-label": "Chapters",
    children: l.map((o, t) =>
      s.jsxs(
        "a",
        {
          href: `#ch-${t + 1}`,
          onClick: N(t),
          className: t === a ? "is-act" : "",
          children: [
            s.jsx("i", { children: String(t + 1).padStart(2, "0") }),
            s.jsx("span", { children: o.eye ?? o.title }),
          ],
        },
        t,
      ),
    ),
  });
}
function ns() {
  var p, u, f, h;
  const [c, l] = D(),
    [e, d] = I();
  P();
  const { slug: m = "" } = M(),
    a = C[m];
  if (
    (w.useEffect(() => {
      window.scrollTo(0, 0);
    }, [m]),
    !a)
  )
    return s.jsx(F, { to: "/work", replace: !0 });
  const r = R.find((n) => n.id === m) ?? {},
    i = a.blocks ?? [],
    N = q,
    o = N[(N.indexOf(m) + 1) % N.length],
    t = C[o],
    j = (p = R.find((n) => n.id === o)) == null ? void 0 : p.image;
  return s.jsxs("div", {
    className: `site-root sv-case ${c ? "is-dark" : ""} ${J(e)}`,
    style: {
      "--sv-case": a.accent
        ? e === "mm"
          ? Y(a.accent, c)
          : c
            ? U(a.accent)
            : a.accent
        : "var(--sv-amber-2)",
    },
    children: [
      s.jsx(z, {
        email: g.email,
        dark: c,
        onToggleDark: l,
        palette: e,
        onTogglePalette: d,
      }),
      s.jsx("header", {
        className: "sv-hero sv-case-hero",
        children: s.jsxs("div", {
          className: "sv-wrap",
          children: [
            s.jsx(x, {
              as: L,
              className: "sv-case-back",
              to: "/work",
              children: "← All work",
            }),
            s.jsx(_, { as: "h1", lines: [a.name] }),
            s.jsx(x, {
              as: "p",
              className: "sv-case-tagline",
              children: a.tagline,
            }),
            s.jsx(x, {
              className: "sv-case-bar",
              children: (a.meta ?? []).map(([n, v]) =>
                s.jsxs(
                  "div",
                  {
                    children: [
                      s.jsx("div", { className: "k", children: n }),
                      s.jsx("div", {
                        className: "v",
                        children:
                          n === "Live" && a.live
                            ? s.jsxs("a", {
                                href: a.live,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: [v, s.jsx(S, {})],
                              })
                            : v,
                      }),
                    ],
                  },
                  n,
                ),
              ),
            }),
          ],
        }),
      }),
      s.jsx("div", {
        className: "sv-wrap sv-pad sv-case-body",
        children: s.jsxs("div", {
          className: "sv-case-sheet",
          children: [
            r.image &&
              s.jsx(x, {
                className: "sv-case-shot sv-ink-surface sv-case-lead",
                children: s.jsx("img", {
                  src: r.image,
                  alt: `${a.name} — ${a.tagline ?? "case study"}`,
                  decoding: "async",
                }),
              }),
            i.length
              ? s.jsxs(s.Fragment, {
                  children: [s.jsx(G, { blocks: i }), s.jsx(V, { blocks: i })],
                })
              : s.jsxs("div", {
                  className: "sv-record",
                  children: [
                    (u = a.metrics) != null && u.length
                      ? s.jsxs(x, {
                          className: "sv-case-part",
                          children: [
                            s.jsxs("div", {
                              className: "head",
                              children: [
                                s.jsx("span", {
                                  className: "eye",
                                  children: "Overview",
                                }),
                                s.jsx("h2", { children: "By the numbers" }),
                              ],
                            }),
                            s.jsx("div", {
                              className: "sv-case-metrics",
                              children: a.metrics.map(([n, v]) =>
                                s.jsxs(
                                  "div",
                                  {
                                    className: "m",
                                    children: [
                                      s.jsx("span", {
                                        className: "v",
                                        children: n,
                                      }),
                                      s.jsx("span", {
                                        className: "l",
                                        children: v,
                                      }),
                                    ],
                                  },
                                  v,
                                ),
                              ),
                            }),
                          ],
                        })
                      : null,
                    (a.sections ?? []).map(([n, v, B, E, k], $) =>
                      s.jsxs(
                        x,
                        {
                          className: "sv-chapter",
                          children: [
                            s.jsxs("div", {
                              className: "margin",
                              children: [
                                s.jsx("span", {
                                  className: "no",
                                  children: String($ + 1).padStart(2, "0"),
                                }),
                                s.jsx("span", {
                                  className: "eye",
                                  children: n,
                                }),
                              ],
                            }),
                            s.jsxs("div", {
                              className: "body",
                              children: [
                                s.jsx("h2", { children: v }),
                                s.jsx("p", { children: B }),
                                E
                                  ? s.jsxs("figure", {
                                      className: "sv-chapter-shot",
                                      children: [
                                        s.jsx("span", {
                                          className: "fr",
                                          children: s.jsx("img", {
                                            src: E,
                                            alt: k || v,
                                            loading: "lazy",
                                          }),
                                        }),
                                        k
                                          ? s.jsx("figcaption", { children: k })
                                          : null,
                                      ],
                                    })
                                  : null,
                              ],
                            }),
                          ],
                        },
                        $,
                      ),
                    ),
                    (f = a.showcase) != null && f.length
                      ? s.jsxs(x, {
                          className: "sv-case-part",
                          children: [
                            s.jsxs("div", {
                              className: "head",
                              children: [
                                s.jsx("span", {
                                  className: "eye",
                                  children: "Showcase",
                                }),
                                s.jsx("h2", { children: "Selected screens" }),
                              ],
                            }),
                            s.jsx("div", {
                              className: "sv-case-shots",
                              children: a.showcase.map((n) =>
                                s.jsxs(
                                  "figure",
                                  {
                                    className: `shot ${n.span === "full" ? "is-full" : ""}`,
                                    children: [
                                      s.jsx("div", {
                                        className: "frame",
                                        children: n.url
                                          ? s.jsx("img", {
                                              src: n.url,
                                              alt: n.label ?? "",
                                              loading: "lazy",
                                              decoding: "async",
                                            })
                                          : s.jsx("span", {
                                              className: "slot",
                                              children: n.label ?? n.id,
                                            }),
                                      }),
                                      n.label &&
                                        s.jsx("figcaption", {
                                          children: n.label,
                                        }),
                                    ],
                                  },
                                  n.id,
                                ),
                              ),
                            }),
                          ],
                        })
                      : null,
                    a.quote
                      ? s.jsxs(x, {
                          as: "blockquote",
                          className: "sv-quote sv-case-part",
                          children: [
                            s.jsxs("p", { children: ["“", a.quote.text, "”"] }),
                            a.quote.who &&
                              s.jsxs("cite", { children: ["— ", a.quote.who] }),
                          ],
                        })
                      : null,
                  ],
                }),
            (h = a.results) != null && h.length
              ? s.jsxs(x, {
                  className: "sv-results",
                  children: [
                    s.jsx("h3", { children: "What shipped" }),
                    s.jsx("ul", {
                      children: a.results.map((n) =>
                        s.jsx("li", { children: n }, n),
                      ),
                    }),
                  ],
                })
              : null,
            t &&
              s.jsx(x, {
                className: "sv-next",
                children: s.jsxs(L, {
                  className: "card",
                  to: `/work/${o}`,
                  children: [
                    s.jsxs("span", {
                      className: "copy",
                      children: [
                        s.jsx("span", {
                          className: "lbl",
                          children: "Next case study",
                        }),
                        s.jsxs("span", {
                          className: "name",
                          children: [t.name, " ", s.jsx(S, { dir: "e" })],
                        }),
                        t.tagline &&
                          s.jsx("span", {
                            className: "sv-next-tag",
                            children: t.tagline,
                          }),
                        s.jsxs("span", {
                          className: "sv-btn sv-btn--ghost sv-next-go",
                          children: ["Explore project", s.jsx(S, { dir: "e" })],
                        }),
                      ],
                    }),
                    j &&
                      s.jsx("span", {
                        className: "media",
                        children: s.jsx("img", {
                          src: j,
                          alt: `${t.name} — preview`,
                          loading: "lazy",
                          decoding: "async",
                        }),
                      }),
                  ],
                }),
              }),
          ],
        }),
      }),
      s.jsx(H, {
        email: g.email,
        availability: g.availability,
        responseTime: g.responseTime,
        location: g.location,
        disciplines: g.disciplines,
        socials: g.socials,
      }),
    ],
  });
}
export { ns as default };
