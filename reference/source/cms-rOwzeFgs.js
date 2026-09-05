const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/stegaEncodeSourceMap-DmbO7R5A.js",
      "assets/index-DwCqBxFL.js",
      "assets/react-dom-36navsnf.js",
      "assets/router-5ag9yOgs.js",
      "assets/index-sXIK4by5.css",
      "assets/browser-CFhrP-vH.js",
    ]),
) => i.map((i) => d[i]);
var $i = Object.defineProperty;
var mr = (t) => {
  throw TypeError(t);
};
var Ai = (t, e, r) =>
  e in t
    ? $i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (t[e] = r);
var E = (t, e, r) => Ai(t, typeof e != "symbol" ? e + "" : e, r),
  gr = (t, e, r) => e.has(t) || mr("Cannot " + r);
var l = (t, e, r) => (
    gr(t, e, "read from private field"),
    r ? r.call(t) : e.get(t)
  ),
  I = (t, e, r) =>
    e.has(t)
      ? mr("Cannot add the same private member more than once")
      : e instanceof WeakSet
        ? e.add(t)
        : e.set(t, r),
  C = (t, e, r, n) => (
    gr(t, e, "write to private field"),
    n ? n.call(t, r) : e.set(t, r),
    r
  );
import { _ as Zr, A as Oi } from "./index-DwCqBxFL.js";
const en = !(typeof navigator > "u") && navigator.product === "ReactNative",
  tn = { timeout: en ? 6e4 : 12e4 },
  _i = function (t) {
    const e = { ...tn, ...(typeof t == "string" ? { url: t } : t) };
    if (((e.timeout = rn(e.timeout)), e.query)) {
      const { url: r, searchParams: n } = (function (i) {
        const s = i.indexOf("?");
        if (s === -1) return { url: i, searchParams: new URLSearchParams() };
        const o = i.slice(0, s),
          a = i.slice(s + 1);
        if (!en) return { url: o, searchParams: new URLSearchParams(a) };
        if (typeof decodeURIComponent != "function")
          throw new Error(
            "Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined",
          );
        const u = new URLSearchParams();
        for (const c of a.split("&")) {
          const [h, y] = c.split("=");
          h && u.append(vr(h), vr(y || ""));
        }
        return { url: o, searchParams: u };
      })(e.url);
      for (const [i, s] of Object.entries(e.query)) {
        if (s !== void 0)
          if (Array.isArray(s)) for (const a of s) n.append(i, a);
          else n.append(i, s);
        const o = n.toString();
        o && (e.url = `${r}?${o}`);
      }
    }
    return (
      (e.method =
        e.body && !e.method ? "POST" : (e.method || "GET").toUpperCase()),
      e
    );
  };
function vr(t) {
  return decodeURIComponent(t.replace(/\+/g, " "));
}
function rn(t) {
  if (t === !1 || t === 0) return !1;
  if (t.connect || t.socket) return t;
  const e = Number(t);
  return isNaN(e) ? rn(tn.timeout) : { connect: e, socket: e };
}
const xi = /^https?:\/\//i,
  Ti = function (t) {
    if (!xi.test(t.url)) throw new Error(`"${t.url}" is not a valid URL`);
  };
function nn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
const Ri = ["request", "response", "progress", "error", "abort"],
  wr = [
    "processOptions",
    "validateOptions",
    "interceptRequest",
    "finalizeOptions",
    "onRequest",
    "onResponse",
    "onError",
    "onReturn",
    "onHeaders",
  ];
function sn(t, e) {
  const r = [],
    n = wr.reduce((s, o) => ((s[o] = s[o] || []), s), {
      processOptions: [_i],
      validateOptions: [Ti],
    });
  function i(s) {
    const o =
        typeof s == "object" && s.callSiteStack ? s.callSiteStack : void 0,
      a = o ? void 0 : new Error(),
      u = Ri.reduce(
        (f, b) => (
          (f[b] = (function () {
            const S = Object.create(null);
            let A = 0;
            return {
              publish: function (O) {
                for (const w in S) S[w](O);
              },
              subscribe: function (O) {
                const w = A++;
                return (
                  (S[w] = O),
                  function () {
                    delete S[w];
                  }
                );
              },
            };
          })()),
          f
        ),
        {},
      ),
      c = ((f) =>
        function (b, S, ...A) {
          const O = b === "onError";
          let w = S;
          for (
            let _ = 0;
            _ < f[b].length && ((w = (0, f[b][_])(w, ...A)), !O || w);
            _++
          );
          return w;
        })(n),
      h = c("processOptions", s);
    c("validateOptions", h);
    const y = { options: h, channels: u, applyMiddleware: c };
    let d;
    const p = u.request.subscribe((f) => {
      d = e(f, (b, S) =>
        ((A, O, w) => {
          let _ = A,
            q = O;
          if (!_)
            try {
              q = c("onResponse", O, w);
            } catch (T) {
              ((q = null), (_ = T));
            }
          if (((_ = _ && c("onError", _, w)), _)) {
            if (_ instanceof Error) {
              const T =
                (o == null ? void 0 : o.stack) ||
                (a == null ? void 0 : a.stack);
              if (typeof T == "string") {
                const ve = T.split(
                  `
`,
                ).slice(o ? 1 : 2);
                ve.length > 0 &&
                  (_.stack +=
                    `
` +
                    ve.join(`
`));
              }
            }
            u.error.publish(_);
          } else q && u.response.publish(q);
        })(b, S, f),
      );
    });
    u.abort.subscribe(() => {
      (p(), d && d.abort());
    });
    const g = c("onReturn", u, y);
    return (g === u && u.request.publish(y), g);
  }
  return (
    (i.use = function (s) {
      if (!s)
        throw new Error(
          "Tried to add middleware that resolved to falsey value",
        );
      if (typeof s == "function")
        throw new Error(
          "Tried to add middleware that was a function. It probably expects you to pass options to it.",
        );
      if (s.onReturn && n.onReturn.length > 0)
        throw new Error(
          "Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event",
        );
      return (
        wr.forEach((o) => {
          s[o] && n[o].push(s[o]);
        }),
        r.push(s),
        i
      );
    }),
    (i.clone = () => sn(r, e)),
    t.forEach(i.use),
    i
  );
}
var br,
  Er,
  ji = nn(
    (function () {
      if (Er) return br;
      Er = 1;
      var t = function (r) {
          return r.replace(/^\s+|\s+$/g, "");
        },
        e = function (r) {
          return Object.prototype.toString.call(r) === "[object Array]";
        };
      return (br = function (r) {
        if (!r) return {};
        for (
          var n = Object.create(null),
            i = t(r).split(`
`),
            s = 0;
          s < i.length;
          s++
        ) {
          var o = i[s],
            a = o.indexOf(":"),
            u = t(o.slice(0, a)).toLowerCase(),
            c = t(o.slice(a + 1));
          typeof n[u] > "u"
            ? (n[u] = c)
            : e(n[u])
              ? n[u].push(c)
              : (n[u] = [n[u], c]);
        }
        return n;
      });
    })(),
  ),
  et,
  tt,
  je,
  rt,
  re,
  nt,
  it,
  Kr;
let Jt =
  ((Kr = class {
    constructor() {
      E(this, "onabort");
      E(this, "onerror");
      E(this, "onreadystatechange");
      E(this, "ontimeout");
      E(this, "readyState", 0);
      E(this, "response");
      E(this, "responseText", "");
      E(this, "responseType", "");
      E(this, "status");
      E(this, "statusText");
      E(this, "withCredentials");
      I(this, et);
      I(this, tt);
      I(this, je);
      I(this, rt, {});
      I(this, re);
      I(this, nt, {});
      I(this, it);
    }
    open(e, r, n) {
      var i;
      (C(this, et, e),
        C(this, tt, r),
        C(this, je, ""),
        (this.readyState = 1),
        (i = this.onreadystatechange) == null || i.call(this),
        C(this, re, void 0));
    }
    abort() {
      l(this, re) && l(this, re).abort();
    }
    getAllResponseHeaders() {
      return l(this, je);
    }
    setRequestHeader(e, r) {
      l(this, rt)[e] = r;
    }
    setInit(e, r = !0) {
      (C(this, nt, e), C(this, it, r));
    }
    send(e) {
      const r = this.responseType !== "arraybuffer",
        n = {
          ...l(this, nt),
          method: l(this, et),
          headers: l(this, rt),
          body: e,
        };
      (typeof AbortController == "function" &&
        l(this, it) &&
        (C(this, re, new AbortController()),
        typeof EventTarget < "u" &&
          l(this, re).signal instanceof EventTarget &&
          (n.signal = l(this, re).signal)),
        typeof document < "u" &&
          (n.credentials = this.withCredentials ? "include" : "omit"),
        fetch(l(this, tt), n)
          .then((i) => {
            var s;
            return (
              i.headers.forEach((o, a) => {
                C(
                  this,
                  je,
                  l(this, je) +
                    `${a}: ${o}\r
`,
                );
              }),
              (this.status = i.status),
              (this.statusText = i.statusText),
              (this.readyState = 3),
              (s = this.onreadystatechange) == null || s.call(this),
              r ? i.text() : i.arrayBuffer()
            );
          })
          .then((i) => {
            var s;
            (typeof i == "string"
              ? (this.responseText = i)
              : (this.response = i),
              (this.readyState = 4),
              (s = this.onreadystatechange) == null || s.call(this));
          })
          .catch((i) => {
            var s, o;
            i.name !== "AbortError"
              ? (s = this.onerror) == null || s.call(this, i)
              : (o = this.onabort) == null || o.call(this);
          }));
    }
  }),
  (et = new WeakMap()),
  (tt = new WeakMap()),
  (je = new WeakMap()),
  (rt = new WeakMap()),
  (re = new WeakMap()),
  (nt = new WeakMap()),
  (it = new WeakMap()),
  Kr);
const Yt = typeof XMLHttpRequest == "function" ? "xhr" : "fetch",
  Pi = Yt === "xhr" ? XMLHttpRequest : Jt,
  ki = (t, e) => {
    const r = t.options,
      n = t.applyMiddleware("finalizeOptions", r),
      i = {},
      s = t.applyMiddleware("interceptRequest", void 0, {
        adapter: Yt,
        context: t,
      });
    if (s) {
      const f = setTimeout(e, 0, null, s);
      return { abort: () => clearTimeout(f) };
    }
    let o = new Pi();
    o instanceof Jt &&
      typeof n.fetch == "object" &&
      o.setInit(n.fetch, n.useAbortSignal ?? !0);
    const a = n.headers,
      u = n.timeout;
    let c = !1,
      h = !1,
      y = !1;
    if (
      ((o.onerror = (f) => {
        g(
          o instanceof Jt
            ? f instanceof Error
              ? f
              : new Error(`Request error while attempting to reach ${n.url}`, {
                  cause: f,
                })
            : new Error(
                `Request error while attempting to reach is ${n.url}${f.lengthComputable ? `(${f.loaded} of ${f.total} bytes transferred)` : ""}`,
              ),
        );
      }),
      (o.ontimeout = (f) => {
        g(
          new Error(
            `Request timeout while attempting to reach ${n.url}${f.lengthComputable ? `(${f.loaded} of ${f.total} bytes transferred)` : ""}`,
          ),
        );
      }),
      (o.onabort = () => {
        (p(!0), (c = !0));
      }),
      (o.onreadystatechange = function () {
        (u &&
          (p(), (i.socket = setTimeout(() => d("ESOCKETTIMEDOUT"), u.socket))),
          !c &&
            o &&
            o.readyState === 4 &&
            o.status !== 0 &&
            (function () {
              if (!(c || h || y)) {
                if (o.status === 0)
                  return void g(new Error("Unknown XHR error"));
                (p(),
                  (h = !0),
                  e(null, {
                    body:
                      o.response ||
                      (o.responseType === "" || o.responseType === "text"
                        ? o.responseText
                        : ""),
                    url: n.url,
                    method: n.method,
                    headers: ji(o.getAllResponseHeaders()),
                    statusCode: o.status,
                    statusMessage: o.statusText,
                  }));
              }
            })());
      }),
      o.open(n.method, n.url, !0),
      (o.withCredentials = !!n.withCredentials),
      a && o.setRequestHeader)
    )
      for (const f in a) a.hasOwnProperty(f) && o.setRequestHeader(f, a[f]);
    return (
      n.rawBody && (o.responseType = "arraybuffer"),
      t.applyMiddleware("onRequest", {
        options: n,
        adapter: Yt,
        request: o,
        context: t,
      }),
      o.send(n.body || null),
      u && (i.connect = setTimeout(() => d("ETIMEDOUT"), u.connect)),
      {
        abort: function () {
          ((c = !0), o && o.abort());
        },
      }
    );
    function d(f) {
      ((y = !0), o.abort());
      const b = new Error(
        f === "ESOCKETTIMEDOUT"
          ? `Socket timed out on request to ${n.url}`
          : `Connection timed out on request to ${n.url}`,
      );
      ((b.code = f), t.channels.error.publish(b));
    }
    function p(f) {
      ((f || c || (o && o.readyState >= 2 && i.connect)) &&
        clearTimeout(i.connect),
        i.socket && clearTimeout(i.socket));
    }
    function g(f) {
      if (h) return;
      (p(!0), (h = !0), (o = null));
      const b =
        f || new Error(`Network error while attempting to reach ${n.url}`);
      ((b.isNetworkError = !0), (b.request = n), e(b));
    }
  },
  Mi = (t = [], e = ki) => sn(t, e);
var qi = {},
  Cr,
  Ir,
  Sr,
  $r,
  Ar,
  Nt = { exports: {} };
(Ar ||
  ((Ar = 1),
  (function (t, e) {
    ((e.formatArgs = function (n) {
      if (
        ((n[0] =
          (this.useColors ? "%c" : "") +
          this.namespace +
          (this.useColors ? " %c" : " ") +
          n[0] +
          (this.useColors ? "%c " : " ") +
          "+" +
          t.exports.humanize(this.diff)),
        !this.useColors)
      )
        return;
      const i = "color: " + this.color;
      n.splice(1, 0, i, "color: inherit");
      let s = 0,
        o = 0;
      (n[0].replace(/%[a-zA-Z%]/g, (a) => {
        a !== "%%" && (s++, a === "%c" && (o = s));
      }),
        n.splice(o, 0, i));
    }),
      (e.save = function (n) {
        try {
          n ? e.storage.setItem("debug", n) : e.storage.removeItem("debug");
        } catch {}
      }),
      (e.load = function () {
        let n;
        try {
          n = e.storage.getItem("debug") || e.storage.getItem("DEBUG");
        } catch {}
        return (
          !n && typeof process < "u" && "env" in process && (n = qi.DEBUG),
          n
        );
      }),
      (e.useColors = function () {
        if (
          typeof window < "u" &&
          window.process &&
          (window.process.type === "renderer" || window.process.__nwjs)
        )
          return !0;
        if (
          typeof navigator < "u" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
        )
          return !1;
        let n;
        return (
          (typeof document < "u" &&
            document.documentElement &&
            document.documentElement.style &&
            document.documentElement.style.WebkitAppearance) ||
          (typeof window < "u" &&
            window.console &&
            (window.console.firebug ||
              (window.console.exception && window.console.table))) ||
          (typeof navigator < "u" &&
            navigator.userAgent &&
            (n = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) &&
            parseInt(n[1], 10) >= 31) ||
          (typeof navigator < "u" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
        );
      }),
      (e.storage = (function () {
        try {
          return localStorage;
        } catch {}
      })()),
      (e.destroy = (() => {
        let n = !1;
        return () => {
          n ||
            ((n = !0),
            console.warn(
              "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
            ));
        };
      })()),
      (e.colors = [
        "#0000CC",
        "#0000FF",
        "#0033CC",
        "#0033FF",
        "#0066CC",
        "#0066FF",
        "#0099CC",
        "#0099FF",
        "#00CC00",
        "#00CC33",
        "#00CC66",
        "#00CC99",
        "#00CCCC",
        "#00CCFF",
        "#3300CC",
        "#3300FF",
        "#3333CC",
        "#3333FF",
        "#3366CC",
        "#3366FF",
        "#3399CC",
        "#3399FF",
        "#33CC00",
        "#33CC33",
        "#33CC66",
        "#33CC99",
        "#33CCCC",
        "#33CCFF",
        "#6600CC",
        "#6600FF",
        "#6633CC",
        "#6633FF",
        "#66CC00",
        "#66CC33",
        "#9900CC",
        "#9900FF",
        "#9933CC",
        "#9933FF",
        "#99CC00",
        "#99CC33",
        "#CC0000",
        "#CC0033",
        "#CC0066",
        "#CC0099",
        "#CC00CC",
        "#CC00FF",
        "#CC3300",
        "#CC3333",
        "#CC3366",
        "#CC3399",
        "#CC33CC",
        "#CC33FF",
        "#CC6600",
        "#CC6633",
        "#CC9900",
        "#CC9933",
        "#CCCC00",
        "#CCCC33",
        "#FF0000",
        "#FF0033",
        "#FF0066",
        "#FF0099",
        "#FF00CC",
        "#FF00FF",
        "#FF3300",
        "#FF3333",
        "#FF3366",
        "#FF3399",
        "#FF33CC",
        "#FF33FF",
        "#FF6600",
        "#FF6633",
        "#FF9900",
        "#FF9933",
        "#FFCC00",
        "#FFCC33",
      ]),
      (e.log = console.debug || console.log || (() => {})),
      (t.exports = (
        $r
          ? Sr
          : (($r = 1),
            (Sr = function (n) {
              function i(a) {
                let u,
                  c,
                  h,
                  y = null;
                function d(...p) {
                  if (!d.enabled) return;
                  const g = d,
                    f = Number(new Date()),
                    b = f - (u || f);
                  ((g.diff = b),
                    (g.prev = u),
                    (g.curr = f),
                    (u = f),
                    (p[0] = i.coerce(p[0])),
                    typeof p[0] != "string" && p.unshift("%O"));
                  let S = 0;
                  ((p[0] = p[0].replace(/%([a-zA-Z%])/g, (A, O) => {
                    if (A === "%%") return "%";
                    S++;
                    const w = i.formatters[O];
                    if (typeof w == "function") {
                      const _ = p[S];
                      ((A = w.call(g, _)), p.splice(S, 1), S--);
                    }
                    return A;
                  })),
                    i.formatArgs.call(g, p),
                    (g.log || i.log).apply(g, p));
                }
                return (
                  (d.namespace = a),
                  (d.useColors = i.useColors()),
                  (d.color = i.selectColor(a)),
                  (d.extend = s),
                  (d.destroy = i.destroy),
                  Object.defineProperty(d, "enabled", {
                    enumerable: !0,
                    configurable: !1,
                    get: () =>
                      y !== null
                        ? y
                        : (c !== i.namespaces &&
                            ((c = i.namespaces), (h = i.enabled(a))),
                          h),
                    set: (p) => {
                      y = p;
                    },
                  }),
                  typeof i.init == "function" && i.init(d),
                  d
                );
              }
              function s(a, u) {
                const c = i(this.namespace + (typeof u > "u" ? ":" : u) + a);
                return ((c.log = this.log), c);
              }
              function o(a, u) {
                let c = 0,
                  h = 0,
                  y = -1,
                  d = 0;
                for (; c < a.length;)
                  if (h < u.length && (u[h] === a[c] || u[h] === "*"))
                    u[h] === "*" ? ((y = h), (d = c), h++) : (c++, h++);
                  else {
                    if (y === -1) return !1;
                    ((h = y + 1), d++, (c = d));
                  }
                for (; h < u.length && u[h] === "*";) h++;
                return h === u.length;
              }
              return (
                (i.debug = i),
                (i.default = i),
                (i.coerce = function (a) {
                  return a instanceof Error ? a.stack || a.message : a;
                }),
                (i.disable = function () {
                  const a = [...i.names, ...i.skips.map((u) => "-" + u)].join(
                    ",",
                  );
                  return (i.enable(""), a);
                }),
                (i.enable = function (a) {
                  (i.save(a),
                    (i.namespaces = a),
                    (i.names = []),
                    (i.skips = []));
                  const u = (typeof a == "string" ? a : "")
                    .trim()
                    .replace(/\s+/g, ",")
                    .split(",")
                    .filter(Boolean);
                  for (const c of u)
                    c[0] === "-" ? i.skips.push(c.slice(1)) : i.names.push(c);
                }),
                (i.enabled = function (a) {
                  for (const u of i.skips) if (o(a, u)) return !1;
                  for (const u of i.names) if (o(a, u)) return !0;
                  return !1;
                }),
                (i.humanize = (function () {
                  if (Ir) return Cr;
                  Ir = 1;
                  var a = 1e3,
                    u = 60 * a,
                    c = 60 * u,
                    h = 24 * c,
                    y = 7 * h;
                  function d(p, g, f, b) {
                    var S = g >= 1.5 * f;
                    return Math.round(p / f) + " " + b + (S ? "s" : "");
                  }
                  return (Cr = function (p, g) {
                    g = g || {};
                    var f,
                      b,
                      S = typeof p;
                    if (S === "string" && p.length > 0)
                      return (function (A) {
                        if (!((A = String(A)).length > 100)) {
                          var O =
                            /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                              A,
                            );
                          if (O) {
                            var w = parseFloat(O[1]);
                            switch ((O[2] || "ms").toLowerCase()) {
                              case "years":
                              case "year":
                              case "yrs":
                              case "yr":
                              case "y":
                                return 315576e5 * w;
                              case "weeks":
                              case "week":
                              case "w":
                                return w * y;
                              case "days":
                              case "day":
                              case "d":
                                return w * h;
                              case "hours":
                              case "hour":
                              case "hrs":
                              case "hr":
                              case "h":
                                return w * c;
                              case "minutes":
                              case "minute":
                              case "mins":
                              case "min":
                              case "m":
                                return w * u;
                              case "seconds":
                              case "second":
                              case "secs":
                              case "sec":
                              case "s":
                                return w * a;
                              case "milliseconds":
                              case "millisecond":
                              case "msecs":
                              case "msec":
                              case "ms":
                                return w;
                              default:
                                return;
                            }
                          }
                        }
                      })(p);
                    if (S === "number" && isFinite(p))
                      return g.long
                        ? ((f = p),
                          (b = Math.abs(f)) >= h
                            ? d(f, b, h, "day")
                            : b >= c
                              ? d(f, b, c, "hour")
                              : b >= u
                                ? d(f, b, u, "minute")
                                : b >= a
                                  ? d(f, b, a, "second")
                                  : f + " ms")
                        : (function (A) {
                            var O = Math.abs(A);
                            return O >= h
                              ? Math.round(A / h) + "d"
                              : O >= c
                                ? Math.round(A / c) + "h"
                                : O >= u
                                  ? Math.round(A / u) + "m"
                                  : O >= a
                                    ? Math.round(A / a) + "s"
                                    : A + "ms";
                          })(p);
                    throw new Error(
                      "val is not a non-empty string or a valid number. val=" +
                        JSON.stringify(p),
                    );
                  });
                })()),
                (i.destroy = function () {
                  console.warn(
                    "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
                  );
                }),
                Object.keys(n).forEach((a) => {
                  i[a] = n[a];
                }),
                (i.names = []),
                (i.skips = []),
                (i.formatters = {}),
                (i.selectColor = function (a) {
                  let u = 0;
                  for (let c = 0; c < a.length; c++)
                    ((u = (u << 5) - u + a.charCodeAt(c)), (u |= 0));
                  return i.colors[Math.abs(u) % i.colors.length];
                }),
                i.enable(i.load()),
                i
              );
            }))
      )(e)));
    const { formatters: r } = t.exports;
    r.j = function (n) {
      try {
        return JSON.stringify(n);
      } catch (i) {
        return "[UnexpectedJSONParseError]: " + i.message;
      }
    };
  })(Nt, Nt.exports)),
  Nt.exports);
const Fi = typeof Buffer > "u" ? () => !1 : (t) => Buffer.isBuffer(t);
function Or(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Di(t) {
  if (Or(t) === !1) return !1;
  const e = t.constructor;
  if (e === void 0) return !0;
  const r = e.prototype;
  return !(Or(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1);
}
const Li = ["boolean", "string", "number"];
function Ui() {
  return {
    processOptions: (t) => {
      const e = t.body;
      return !e ||
        typeof e.pipe == "function" ||
        Fi(e) ||
        (Li.indexOf(typeof e) === -1 && !Array.isArray(e) && !Di(e))
        ? t
        : Object.assign({}, t, {
            body: JSON.stringify(t.body),
            headers: Object.assign({}, t.headers, {
              "Content-Type": "application/json",
            }),
          });
    },
  };
}
function Vi(t) {
  return {
    onResponse: (r) => {
      const n = r.headers["content-type"] || "",
        i = (t && t.force) || n.indexOf("application/json") !== -1;
      return r.body && n && i ? Object.assign({}, r, { body: e(r.body) }) : r;
    },
    processOptions: (r) =>
      Object.assign({}, r, {
        headers: Object.assign({ Accept: "application/json" }, r.headers),
      }),
  };
  function e(r) {
    try {
      return JSON.parse(r);
    } catch (n) {
      throw (
        (n.message = `Failed to parsed response body as JSON: ${n.message}`),
        n
      );
    }
  }
}
let Qe = {};
typeof globalThis < "u"
  ? (Qe = globalThis)
  : typeof window < "u"
    ? (Qe = window)
    : typeof global < "u"
      ? (Qe = global)
      : typeof self < "u" && (Qe = self);
var Ni = Qe;
function Hi(t = {}) {
  const e = t.implementation || Ni.Observable;
  if (!e)
    throw new Error(
      "`Observable` is not available in global scope, and no implementation was passed",
    );
  return {
    onReturn: (r, n) =>
      new e(
        (i) => (
          r.error.subscribe((s) => i.error(s)),
          r.progress.subscribe((s) =>
            i.next(Object.assign({ type: "progress" }, s)),
          ),
          r.response.subscribe((s) => {
            (i.next(Object.assign({ type: "response" }, s)), i.complete());
          }),
          r.request.publish(n),
          () => r.abort.publish()
        ),
      ),
  };
}
function Bi() {
  return {
    onRequest: (t) => {
      if (t.adapter !== "xhr") return;
      const e = t.request,
        r = t.context;
      function n(i) {
        return (s) => {
          const o = s.lengthComputable ? (s.loaded / s.total) * 100 : -1;
          r.channels.progress.publish({
            stage: i,
            percent: o,
            total: s.total,
            loaded: s.loaded,
            lengthComputable: s.lengthComputable,
          });
        };
      }
      ("upload" in e &&
        "onprogress" in e.upload &&
        (e.upload.onprogress = n("upload")),
        "onprogress" in e && (e.onprogress = n("download")));
    },
  };
}
var on = (t, e, r) =>
  (r.method === "GET" || r.method === "HEAD") && (t.isNetworkError || !1);
function Wi(t) {
  return 100 * Math.pow(2, t) + 100 * Math.random();
}
const er = (t = {}) =>
  ((e) => {
    const r = e.maxRetries || 5,
      n = e.retryDelay || Wi,
      i = e.shouldRetry;
    return {
      onError: (s, o) => {
        const a = o.options,
          u = a.maxRetries || r,
          c = a.retryDelay || n,
          h = a.shouldRetry || i,
          y = a.attemptNumber || 0;
        if (
          ((d = a.body) !== null &&
            typeof d == "object" &&
            typeof d.pipe == "function") ||
          !h(s, y, a) ||
          y >= u
        )
          return s;
        var d;
        const p = Object.assign({}, o, {
          options: Object.assign({}, a, { attemptNumber: y + 1 }),
        });
        return (setTimeout(() => o.channels.request.publish(p), c(y)), null);
      },
    };
  })({ shouldRetry: on, ...t });
er.shouldRetry = on;
var Xt = function (t, e) {
  return (
    (Xt =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (r, n) {
          r.__proto__ = n;
        }) ||
      function (r, n) {
        for (var i in n)
          Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
      }),
    Xt(t, e)
  );
};
function fe(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Class extends value " + String(e) + " is not a constructor or null",
    );
  Xt(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype =
    e === null ? Object.create(e) : ((r.prototype = e.prototype), new r());
}
function zi(t, e, r, n) {
  function i(s) {
    return s instanceof r
      ? s
      : new r(function (o) {
          o(s);
        });
  }
  return new (r || (r = Promise))(function (s, o) {
    function a(h) {
      try {
        c(n.next(h));
      } catch (y) {
        o(y);
      }
    }
    function u(h) {
      try {
        c(n.throw(h));
      } catch (y) {
        o(y);
      }
    }
    function c(h) {
      h.done ? s(h.value) : i(h.value).then(a, u);
    }
    c((n = n.apply(t, e || [])).next());
  });
}
function an(t, e) {
  var r = {
      label: 0,
      sent: function () {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: [],
    },
    n,
    i,
    s,
    o = Object.create(
      (typeof Iterator == "function" ? Iterator : Object).prototype,
    );
  return (
    (o.next = a(0)),
    (o.throw = a(1)),
    (o.return = a(2)),
    typeof Symbol == "function" &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function a(c) {
    return function (h) {
      return u([c, h]);
    };
  }
  function u(c) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; o && ((o = 0), c[0] && (r = 0)), r;)
      try {
        if (
          ((n = 1),
          i &&
            (s =
              c[0] & 2
                ? i.return
                : c[0]
                  ? i.throw || ((s = i.return) && s.call(i), 0)
                  : i.next) &&
            !(s = s.call(i, c[1])).done)
        )
          return s;
        switch (((i = 0), s && (c = [c[0] & 2, s.value]), c[0])) {
          case 0:
          case 1:
            s = c;
            break;
          case 4:
            return (r.label++, { value: c[1], done: !1 });
          case 5:
            (r.label++, (i = c[1]), (c = [0]));
            continue;
          case 7:
            ((c = r.ops.pop()), r.trys.pop());
            continue;
          default:
            if (
              ((s = r.trys),
              !(s = s.length > 0 && s[s.length - 1]) &&
                (c[0] === 6 || c[0] === 2))
            ) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!s || (c[1] > s[0] && c[1] < s[3]))) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < s[1]) {
              ((r.label = s[1]), (s = c));
              break;
            }
            if (s && r.label < s[2]) {
              ((r.label = s[2]), r.ops.push(c));
              break;
            }
            (s[2] && r.ops.pop(), r.trys.pop());
            continue;
        }
        c = e.call(t, r);
      } catch (h) {
        ((c = [6, h]), (i = 0));
      } finally {
        n = s = 0;
      }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function Ue(t) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    r = e && t[e],
    n = 0;
  if (r) return r.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function () {
        return (
          t && n >= t.length && (t = void 0),
          { value: t && t[n++], done: !t }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
}
function ue(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r) return t;
  var n = r.call(t),
    i,
    s = [],
    o;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = n.next()).done;) s.push(i.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}
function le(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, s; n < i; n++)
      (s || !(n in e)) &&
        (s || (s = Array.prototype.slice.call(e, 0, n)), (s[n] = e[n]));
  return t.concat(s || Array.prototype.slice.call(e));
}
function Te(t) {
  return this instanceof Te ? ((this.v = t), this) : new Te(t);
}
function Gi(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []),
    i,
    s = [];
  return (
    (i = Object.create(
      (typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype,
    )),
    a("next"),
    a("throw"),
    a("return", o),
    (i[Symbol.asyncIterator] = function () {
      return this;
    }),
    i
  );
  function o(p) {
    return function (g) {
      return Promise.resolve(g).then(p, y);
    };
  }
  function a(p, g) {
    n[p] &&
      ((i[p] = function (f) {
        return new Promise(function (b, S) {
          s.push([p, f, b, S]) > 1 || u(p, f);
        });
      }),
      g && (i[p] = g(i[p])));
  }
  function u(p, g) {
    try {
      c(n[p](g));
    } catch (f) {
      d(s[0][3], f);
    }
  }
  function c(p) {
    p.value instanceof Te
      ? Promise.resolve(p.value.v).then(h, y)
      : d(s[0][2], p);
  }
  function h(p) {
    u("next", p);
  }
  function y(p) {
    u("throw", p);
  }
  function d(p, g) {
    (p(g), s.shift(), s.length && u(s[0][0], s[0][1]));
  }
}
function Qi(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator],
    r;
  return e
    ? e.call(t)
    : ((t = typeof Ue == "function" ? Ue(t) : t[Symbol.iterator]()),
      (r = {}),
      n("next"),
      n("throw"),
      n("return"),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function n(s) {
    r[s] =
      t[s] &&
      function (o) {
        return new Promise(function (a, u) {
          ((o = t[s](o)), i(a, u, o.done, o.value));
        });
      };
  }
  function i(s, o, a, u) {
    Promise.resolve(u).then(function (c) {
      s({ value: c, done: a });
    }, o);
  }
}
function j(t) {
  return typeof t == "function";
}
function tr(t) {
  var e = function (n) {
      (Error.call(n), (n.stack = new Error().stack));
    },
    r = t(e);
  return (
    (r.prototype = Object.create(Error.prototype)),
    (r.prototype.constructor = r),
    r
  );
}
var Ht = tr(function (t) {
  return function (r) {
    (t(this),
      (this.message = r
        ? r.length +
          ` errors occurred during unsubscription:
` +
          r.map(function (n, i) {
            return i + 1 + ") " + n.toString();
          }).join(`
  `)
        : ""),
      (this.name = "UnsubscriptionError"),
      (this.errors = r));
  };
});
function St(t, e) {
  if (t) {
    var r = t.indexOf(e);
    0 <= r && t.splice(r, 1);
  }
}
var mt = (function () {
    function t(e) {
      ((this.initialTeardown = e),
        (this.closed = !1),
        (this._parentage = null),
        (this._finalizers = null));
    }
    return (
      (t.prototype.unsubscribe = function () {
        var e, r, n, i, s;
        if (!this.closed) {
          this.closed = !0;
          var o = this._parentage;
          if (o)
            if (((this._parentage = null), Array.isArray(o)))
              try {
                for (var a = Ue(o), u = a.next(); !u.done; u = a.next()) {
                  var c = u.value;
                  c.remove(this);
                }
              } catch (f) {
                e = { error: f };
              } finally {
                try {
                  u && !u.done && (r = a.return) && r.call(a);
                } finally {
                  if (e) throw e.error;
                }
              }
            else o.remove(this);
          var h = this.initialTeardown;
          if (j(h))
            try {
              h();
            } catch (f) {
              s = f instanceof Ht ? f.errors : [f];
            }
          var y = this._finalizers;
          if (y) {
            this._finalizers = null;
            try {
              for (var d = Ue(y), p = d.next(); !p.done; p = d.next()) {
                var g = p.value;
                try {
                  _r(g);
                } catch (f) {
                  ((s = s ?? []),
                    f instanceof Ht
                      ? (s = le(le([], ue(s)), ue(f.errors)))
                      : s.push(f));
                }
              }
            } catch (f) {
              n = { error: f };
            } finally {
              try {
                p && !p.done && (i = d.return) && i.call(d);
              } finally {
                if (n) throw n.error;
              }
            }
          }
          if (s) throw new Ht(s);
        }
      }),
      (t.prototype.add = function (e) {
        var r;
        if (e && e !== this)
          if (this.closed) _r(e);
          else {
            if (e instanceof t) {
              if (e.closed || e._hasParent(this)) return;
              e._addParent(this);
            }
            (this._finalizers =
              (r = this._finalizers) !== null && r !== void 0 ? r : []).push(e);
          }
      }),
      (t.prototype._hasParent = function (e) {
        var r = this._parentage;
        return r === e || (Array.isArray(r) && r.includes(e));
      }),
      (t.prototype._addParent = function (e) {
        var r = this._parentage;
        this._parentage = Array.isArray(r) ? (r.push(e), r) : r ? [r, e] : e;
      }),
      (t.prototype._removeParent = function (e) {
        var r = this._parentage;
        r === e ? (this._parentage = null) : Array.isArray(r) && St(r, e);
      }),
      (t.prototype.remove = function (e) {
        var r = this._finalizers;
        (r && St(r, e), e instanceof t && e._removeParent(this));
      }),
      (t.EMPTY = (function () {
        var e = new t();
        return ((e.closed = !0), e);
      })()),
      t
    );
  })(),
  cn = mt.EMPTY;
function un(t) {
  return (
    t instanceof mt ||
    (t && "closed" in t && j(t.remove) && j(t.add) && j(t.unsubscribe))
  );
}
function _r(t) {
  j(t) ? t() : t.unsubscribe();
}
var Ji = { Promise: void 0 },
  Yi = {
    setTimeout: function (t, e) {
      for (var r = [], n = 2; n < arguments.length; n++)
        r[n - 2] = arguments[n];
      return setTimeout.apply(void 0, le([t, e], ue(r)));
    },
    clearTimeout: function (t) {
      return clearTimeout(t);
    },
    delegate: void 0,
  };
function ln(t) {
  Yi.setTimeout(function () {
    throw t;
  });
}
function xr() {}
function It(t) {
  t();
}
var rr = (function (t) {
    fe(e, t);
    function e(r) {
      var n = t.call(this) || this;
      return (
        (n.isStopped = !1),
        r ? ((n.destination = r), un(r) && r.add(n)) : (n.destination = Zi),
        n
      );
    }
    return (
      (e.create = function (r, n, i) {
        return new Ve(r, n, i);
      }),
      (e.prototype.next = function (r) {
        this.isStopped || this._next(r);
      }),
      (e.prototype.error = function (r) {
        this.isStopped || ((this.isStopped = !0), this._error(r));
      }),
      (e.prototype.complete = function () {
        this.isStopped || ((this.isStopped = !0), this._complete());
      }),
      (e.prototype.unsubscribe = function () {
        this.closed ||
          ((this.isStopped = !0),
          t.prototype.unsubscribe.call(this),
          (this.destination = null));
      }),
      (e.prototype._next = function (r) {
        this.destination.next(r);
      }),
      (e.prototype._error = function (r) {
        try {
          this.destination.error(r);
        } finally {
          this.unsubscribe();
        }
      }),
      (e.prototype._complete = function () {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      }),
      e
    );
  })(mt),
  Xi = (function () {
    function t(e) {
      this.partialObserver = e;
    }
    return (
      (t.prototype.next = function (e) {
        var r = this.partialObserver;
        if (r.next)
          try {
            r.next(e);
          } catch (n) {
            Ct(n);
          }
      }),
      (t.prototype.error = function (e) {
        var r = this.partialObserver;
        if (r.error)
          try {
            r.error(e);
          } catch (n) {
            Ct(n);
          }
        else Ct(e);
      }),
      (t.prototype.complete = function () {
        var e = this.partialObserver;
        if (e.complete)
          try {
            e.complete();
          } catch (r) {
            Ct(r);
          }
      }),
      t
    );
  })(),
  Ve = (function (t) {
    fe(e, t);
    function e(r, n, i) {
      var s = t.call(this) || this,
        o;
      return (
        j(r) || !r
          ? (o = {
              next: r ?? void 0,
              error: n ?? void 0,
              complete: i ?? void 0,
            })
          : (o = r),
        (s.destination = new Xi(o)),
        s
      );
    }
    return e;
  })(rr);
function Ct(t) {
  ln(t);
}
function Ki(t) {
  throw t;
}
var Zi = { closed: !0, next: xr, error: Ki, complete: xr },
  nr = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })();
function qt(t) {
  return t;
}
function es() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  return hn(t);
}
function hn(t) {
  return t.length === 0
    ? qt
    : t.length === 1
      ? t[0]
      : function (r) {
          return t.reduce(function (n, i) {
            return i(n);
          }, r);
        };
}
var M = (function () {
  function t(e) {
    e && (this._subscribe = e);
  }
  return (
    (t.prototype.lift = function (e) {
      var r = new t();
      return ((r.source = this), (r.operator = e), r);
    }),
    (t.prototype.subscribe = function (e, r, n) {
      var i = this,
        s = rs(e) ? e : new Ve(e, r, n);
      return (
        It(function () {
          var o = i,
            a = o.operator,
            u = o.source;
          s.add(a ? a.call(s, u) : u ? i._subscribe(s) : i._trySubscribe(s));
        }),
        s
      );
    }),
    (t.prototype._trySubscribe = function (e) {
      try {
        return this._subscribe(e);
      } catch (r) {
        e.error(r);
      }
    }),
    (t.prototype.forEach = function (e, r) {
      var n = this;
      return (
        (r = Tr(r)),
        new r(function (i, s) {
          var o = new Ve({
            next: function (a) {
              try {
                e(a);
              } catch (u) {
                (s(u), o.unsubscribe());
              }
            },
            error: s,
            complete: i,
          });
          n.subscribe(o);
        })
      );
    }),
    (t.prototype._subscribe = function (e) {
      var r;
      return (r = this.source) === null || r === void 0
        ? void 0
        : r.subscribe(e);
    }),
    (t.prototype[nr] = function () {
      return this;
    }),
    (t.prototype.pipe = function () {
      for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
      return hn(e)(this);
    }),
    (t.prototype.toPromise = function (e) {
      var r = this;
      return (
        (e = Tr(e)),
        new e(function (n, i) {
          var s;
          r.subscribe(
            function (o) {
              return (s = o);
            },
            function (o) {
              return i(o);
            },
            function () {
              return n(s);
            },
          );
        })
      );
    }),
    (t.create = function (e) {
      return new t(e);
    }),
    t
  );
})();
function Tr(t) {
  var e;
  return (e = t ?? Ji.Promise) !== null && e !== void 0 ? e : Promise;
}
function ts(t) {
  return t && j(t.next) && j(t.error) && j(t.complete);
}
function rs(t) {
  return (t && t instanceof rr) || (ts(t) && un(t));
}
function ns(t) {
  return j(t == null ? void 0 : t.lift);
}
function Y(t) {
  return function (e) {
    if (ns(e))
      return e.lift(function (r) {
        try {
          return t(r, this);
        } catch (n) {
          this.error(n);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function he(t, e, r, n, i) {
  return new is(t, e, r, n, i);
}
var is = (function (t) {
    fe(e, t);
    function e(r, n, i, s, o, a) {
      var u = t.call(this, r) || this;
      return (
        (u.onFinalize = o),
        (u.shouldUnsubscribe = a),
        (u._next = n
          ? function (c) {
              try {
                n(c);
              } catch (h) {
                r.error(h);
              }
            }
          : t.prototype._next),
        (u._error = s
          ? function (c) {
              try {
                s(c);
              } catch (h) {
                r.error(h);
              } finally {
                this.unsubscribe();
              }
            }
          : t.prototype._error),
        (u._complete = i
          ? function () {
              try {
                i();
              } catch (c) {
                r.error(c);
              } finally {
                this.unsubscribe();
              }
            }
          : t.prototype._complete),
        u
      );
    }
    return (
      (e.prototype.unsubscribe = function () {
        var r;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var n = this.closed;
          (t.prototype.unsubscribe.call(this),
            !n &&
              ((r = this.onFinalize) === null || r === void 0 || r.call(this)));
        }
      }),
      e
    );
  })(rr),
  ss = tr(function (t) {
    return function () {
      (t(this),
        (this.name = "ObjectUnsubscribedError"),
        (this.message = "object unsubscribed"));
    };
  }),
  ir = (function (t) {
    fe(e, t);
    function e() {
      var r = t.call(this) || this;
      return (
        (r.closed = !1),
        (r.currentObservers = null),
        (r.observers = []),
        (r.isStopped = !1),
        (r.hasError = !1),
        (r.thrownError = null),
        r
      );
    }
    return (
      (e.prototype.lift = function (r) {
        var n = new Rr(this, this);
        return ((n.operator = r), n);
      }),
      (e.prototype._throwIfClosed = function () {
        if (this.closed) throw new ss();
      }),
      (e.prototype.next = function (r) {
        var n = this;
        It(function () {
          var i, s;
          if ((n._throwIfClosed(), !n.isStopped)) {
            n.currentObservers ||
              (n.currentObservers = Array.from(n.observers));
            try {
              for (
                var o = Ue(n.currentObservers), a = o.next();
                !a.done;
                a = o.next()
              ) {
                var u = a.value;
                u.next(r);
              }
            } catch (c) {
              i = { error: c };
            } finally {
              try {
                a && !a.done && (s = o.return) && s.call(o);
              } finally {
                if (i) throw i.error;
              }
            }
          }
        });
      }),
      (e.prototype.error = function (r) {
        var n = this;
        It(function () {
          if ((n._throwIfClosed(), !n.isStopped)) {
            ((n.hasError = n.isStopped = !0), (n.thrownError = r));
            for (var i = n.observers; i.length;) i.shift().error(r);
          }
        });
      }),
      (e.prototype.complete = function () {
        var r = this;
        It(function () {
          if ((r._throwIfClosed(), !r.isStopped)) {
            r.isStopped = !0;
            for (var n = r.observers; n.length;) n.shift().complete();
          }
        });
      }),
      (e.prototype.unsubscribe = function () {
        ((this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null));
      }),
      Object.defineProperty(e.prototype, "observed", {
        get: function () {
          var r;
          return (
            ((r = this.observers) === null || r === void 0
              ? void 0
              : r.length) > 0
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype._trySubscribe = function (r) {
        return (this._throwIfClosed(), t.prototype._trySubscribe.call(this, r));
      }),
      (e.prototype._subscribe = function (r) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(r),
          this._innerSubscribe(r)
        );
      }),
      (e.prototype._innerSubscribe = function (r) {
        var n = this,
          i = this,
          s = i.hasError,
          o = i.isStopped,
          a = i.observers;
        return s || o
          ? cn
          : ((this.currentObservers = null),
            a.push(r),
            new mt(function () {
              ((n.currentObservers = null), St(a, r));
            }));
      }),
      (e.prototype._checkFinalizedStatuses = function (r) {
        var n = this,
          i = n.hasError,
          s = n.thrownError,
          o = n.isStopped;
        i ? r.error(s) : o && r.complete();
      }),
      (e.prototype.asObservable = function () {
        var r = new M();
        return ((r.source = this), r);
      }),
      (e.create = function (r, n) {
        return new Rr(r, n);
      }),
      e
    );
  })(M),
  Rr = (function (t) {
    fe(e, t);
    function e(r, n) {
      var i = t.call(this) || this;
      return ((i.destination = r), (i.source = n), i);
    }
    return (
      (e.prototype.next = function (r) {
        var n, i;
        (i =
          (n = this.destination) === null || n === void 0 ? void 0 : n.next) ===
          null ||
          i === void 0 ||
          i.call(n, r);
      }),
      (e.prototype.error = function (r) {
        var n, i;
        (i =
          (n = this.destination) === null || n === void 0
            ? void 0
            : n.error) === null ||
          i === void 0 ||
          i.call(n, r);
      }),
      (e.prototype.complete = function () {
        var r, n;
        (n =
          (r = this.destination) === null || r === void 0
            ? void 0
            : r.complete) === null ||
          n === void 0 ||
          n.call(r);
      }),
      (e.prototype._subscribe = function (r) {
        var n, i;
        return (i =
          (n = this.source) === null || n === void 0
            ? void 0
            : n.subscribe(r)) !== null && i !== void 0
          ? i
          : cn;
      }),
      e
    );
  })(ir),
  sr = {
    now: function () {
      return (sr.delegate || Date).now();
    },
    delegate: void 0,
  },
  os = (function (t) {
    fe(e, t);
    function e(r, n, i) {
      (r === void 0 && (r = 1 / 0),
        n === void 0 && (n = 1 / 0),
        i === void 0 && (i = sr));
      var s = t.call(this) || this;
      return (
        (s._bufferSize = r),
        (s._windowTime = n),
        (s._timestampProvider = i),
        (s._buffer = []),
        (s._infiniteTimeWindow = !0),
        (s._infiniteTimeWindow = n === 1 / 0),
        (s._bufferSize = Math.max(1, r)),
        (s._windowTime = Math.max(1, n)),
        s
      );
    }
    return (
      (e.prototype.next = function (r) {
        var n = this,
          i = n.isStopped,
          s = n._buffer,
          o = n._infiniteTimeWindow,
          a = n._timestampProvider,
          u = n._windowTime;
        (i || (s.push(r), !o && s.push(a.now() + u)),
          this._trimBuffer(),
          t.prototype.next.call(this, r));
      }),
      (e.prototype._subscribe = function (r) {
        (this._throwIfClosed(), this._trimBuffer());
        for (
          var n = this._innerSubscribe(r),
            i = this,
            s = i._infiniteTimeWindow,
            o = i._buffer,
            a = o.slice(),
            u = 0;
          u < a.length && !r.closed;
          u += s ? 1 : 2
        )
          r.next(a[u]);
        return (this._checkFinalizedStatuses(r), n);
      }),
      (e.prototype._trimBuffer = function () {
        var r = this,
          n = r._bufferSize,
          i = r._timestampProvider,
          s = r._buffer,
          o = r._infiniteTimeWindow,
          a = (o ? 1 : 2) * n;
        if ((n < 1 / 0 && a < s.length && s.splice(0, s.length - a), !o)) {
          for (var u = i.now(), c = 0, h = 1; h < s.length && s[h] <= u; h += 2)
            c = h;
          c && s.splice(0, c + 1);
        }
      }),
      e
    );
  })(ir),
  as = (function (t) {
    fe(e, t);
    function e(r, n) {
      return t.call(this) || this;
    }
    return (
      (e.prototype.schedule = function (r, n) {
        return this;
      }),
      e
    );
  })(mt),
  jr = {
    setInterval: function (t, e) {
      for (var r = [], n = 2; n < arguments.length; n++)
        r[n - 2] = arguments[n];
      return setInterval.apply(void 0, le([t, e], ue(r)));
    },
    clearInterval: function (t) {
      return clearInterval(t);
    },
    delegate: void 0,
  },
  cs = (function (t) {
    fe(e, t);
    function e(r, n) {
      var i = t.call(this, r, n) || this;
      return ((i.scheduler = r), (i.work = n), (i.pending = !1), i);
    }
    return (
      (e.prototype.schedule = function (r, n) {
        var i;
        if ((n === void 0 && (n = 0), this.closed)) return this;
        this.state = r;
        var s = this.id,
          o = this.scheduler;
        return (
          s != null && (this.id = this.recycleAsyncId(o, s, n)),
          (this.pending = !0),
          (this.delay = n),
          (this.id =
            (i = this.id) !== null && i !== void 0
              ? i
              : this.requestAsyncId(o, this.id, n)),
          this
        );
      }),
      (e.prototype.requestAsyncId = function (r, n, i) {
        return (
          i === void 0 && (i = 0),
          jr.setInterval(r.flush.bind(r, this), i)
        );
      }),
      (e.prototype.recycleAsyncId = function (r, n, i) {
        if (
          (i === void 0 && (i = 0),
          i != null && this.delay === i && this.pending === !1)
        )
          return n;
        n != null && jr.clearInterval(n);
      }),
      (e.prototype.execute = function (r, n) {
        if (this.closed) return new Error("executing a cancelled action");
        this.pending = !1;
        var i = this._execute(r, n);
        if (i) return i;
        this.pending === !1 &&
          this.id != null &&
          (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
      }),
      (e.prototype._execute = function (r, n) {
        var i = !1,
          s;
        try {
          this.work(r);
        } catch (o) {
          ((i = !0),
            (s = o || new Error("Scheduled action threw falsy error")));
        }
        if (i) return (this.unsubscribe(), s);
      }),
      (e.prototype.unsubscribe = function () {
        if (!this.closed) {
          var r = this,
            n = r.id,
            i = r.scheduler,
            s = i.actions;
          ((this.work = this.state = this.scheduler = null),
            (this.pending = !1),
            St(s, this),
            n != null && (this.id = this.recycleAsyncId(i, n, null)),
            (this.delay = null),
            t.prototype.unsubscribe.call(this));
        }
      }),
      e
    );
  })(as),
  Pr = (function () {
    function t(e, r) {
      (r === void 0 && (r = t.now),
        (this.schedulerActionCtor = e),
        (this.now = r));
    }
    return (
      (t.prototype.schedule = function (e, r, n) {
        return (
          r === void 0 && (r = 0),
          new this.schedulerActionCtor(this, e).schedule(n, r)
        );
      }),
      (t.now = sr.now),
      t
    );
  })(),
  us = (function (t) {
    fe(e, t);
    function e(r, n) {
      n === void 0 && (n = Pr.now);
      var i = t.call(this, r, n) || this;
      return ((i.actions = []), (i._active = !1), i);
    }
    return (
      (e.prototype.flush = function (r) {
        var n = this.actions;
        if (this._active) {
          n.push(r);
          return;
        }
        var i;
        this._active = !0;
        do if ((i = r.execute(r.state, r.delay))) break;
        while ((r = n.shift()));
        if (((this._active = !1), i)) {
          for (; (r = n.shift());) r.unsubscribe();
          throw i;
        }
      }),
      e
    );
  })(Pr),
  ls = new us(cs),
  hs = ls,
  fs = new M(function (t) {
    return t.complete();
  });
function ds(t) {
  return t && j(t.schedule);
}
function or(t) {
  return t[t.length - 1];
}
function ps(t) {
  return j(or(t)) ? t.pop() : void 0;
}
function ar(t) {
  return ds(or(t)) ? t.pop() : void 0;
}
function ys(t, e) {
  return typeof or(t) == "number" ? t.pop() : e;
}
var fn = function (t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function dn(t) {
  return j(t == null ? void 0 : t.then);
}
function pn(t) {
  return j(t[nr]);
}
function yn(t) {
  return (
    Symbol.asyncIterator && j(t == null ? void 0 : t[Symbol.asyncIterator])
  );
}
function mn(t) {
  return new TypeError(
    "You provided " +
      (t !== null && typeof t == "object"
        ? "an invalid object"
        : "'" + t + "'") +
      " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.",
  );
}
function ms() {
  return typeof Symbol != "function" || !Symbol.iterator
    ? "@@iterator"
    : Symbol.iterator;
}
var gn = ms();
function vn(t) {
  return j(t == null ? void 0 : t[gn]);
}
function wn(t) {
  return Gi(this, arguments, function () {
    var r, n, i, s;
    return an(this, function (o) {
      switch (o.label) {
        case 0:
          ((r = t.getReader()), (o.label = 1));
        case 1:
          (o.trys.push([1, , 9, 10]), (o.label = 2));
        case 2:
          return [4, Te(r.read())];
        case 3:
          return (
            (n = o.sent()),
            (i = n.value),
            (s = n.done),
            s ? [4, Te(void 0)] : [3, 5]
          );
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Te(i)];
        case 6:
          return [4, o.sent()];
        case 7:
          return (o.sent(), [3, 2]);
        case 8:
          return [3, 10];
        case 9:
          return (r.releaseLock(), [7]);
        case 10:
          return [2];
      }
    });
  });
}
function bn(t) {
  return j(t == null ? void 0 : t.getReader);
}
function te(t) {
  if (t instanceof M) return t;
  if (t != null) {
    if (pn(t)) return gs(t);
    if (fn(t)) return vs(t);
    if (dn(t)) return ws(t);
    if (yn(t)) return En(t);
    if (vn(t)) return bs(t);
    if (bn(t)) return Es(t);
  }
  throw mn(t);
}
function gs(t) {
  return new M(function (e) {
    var r = t[nr]();
    if (j(r.subscribe)) return r.subscribe(e);
    throw new TypeError(
      "Provided object does not correctly implement Symbol.observable",
    );
  });
}
function vs(t) {
  return new M(function (e) {
    for (var r = 0; r < t.length && !e.closed; r++) e.next(t[r]);
    e.complete();
  });
}
function ws(t) {
  return new M(function (e) {
    t.then(
      function (r) {
        e.closed || (e.next(r), e.complete());
      },
      function (r) {
        return e.error(r);
      },
    ).then(null, ln);
  });
}
function bs(t) {
  return new M(function (e) {
    var r, n;
    try {
      for (var i = Ue(t), s = i.next(); !s.done; s = i.next()) {
        var o = s.value;
        if ((e.next(o), e.closed)) return;
      }
    } catch (a) {
      r = { error: a };
    } finally {
      try {
        s && !s.done && (n = i.return) && n.call(i);
      } finally {
        if (r) throw r.error;
      }
    }
    e.complete();
  });
}
function En(t) {
  return new M(function (e) {
    Cs(t, e).catch(function (r) {
      return e.error(r);
    });
  });
}
function Es(t) {
  return En(wn(t));
}
function Cs(t, e) {
  var r, n, i, s;
  return zi(this, void 0, void 0, function () {
    var o, a;
    return an(this, function (u) {
      switch (u.label) {
        case 0:
          (u.trys.push([0, 5, 6, 11]), (r = Qi(t)), (u.label = 1));
        case 1:
          return [4, r.next()];
        case 2:
          if (((n = u.sent()), !!n.done)) return [3, 4];
          if (((o = n.value), e.next(o), e.closed)) return [2];
          u.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return ((a = u.sent()), (i = { error: a }), [3, 11]);
        case 6:
          return (
            u.trys.push([6, , 9, 10]),
            n && !n.done && (s = r.return) ? [4, s.call(r)] : [3, 8]
          );
        case 7:
          (u.sent(), (u.label = 8));
        case 8:
          return [3, 10];
        case 9:
          if (i) throw i.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return (e.complete(), [2]);
      }
    });
  });
}
function Ie(t, e, r, n, i) {
  (n === void 0 && (n = 0), i === void 0 && (i = !1));
  var s = e.schedule(function () {
    (r(), i ? t.add(this.schedule(null, n)) : this.unsubscribe());
  }, n);
  if ((t.add(s), !i)) return s;
}
function Cn(t, e) {
  return (
    e === void 0 && (e = 0),
    Y(function (r, n) {
      r.subscribe(
        he(
          n,
          function (i) {
            return Ie(
              n,
              t,
              function () {
                return n.next(i);
              },
              e,
            );
          },
          function () {
            return Ie(
              n,
              t,
              function () {
                return n.complete();
              },
              e,
            );
          },
          function (i) {
            return Ie(
              n,
              t,
              function () {
                return n.error(i);
              },
              e,
            );
          },
        ),
      );
    })
  );
}
function In(t, e) {
  return (
    e === void 0 && (e = 0),
    Y(function (r, n) {
      n.add(
        t.schedule(function () {
          return r.subscribe(n);
        }, e),
      );
    })
  );
}
function Is(t, e) {
  return te(t).pipe(In(e), Cn(e));
}
function Ss(t, e) {
  return te(t).pipe(In(e), Cn(e));
}
function $s(t, e) {
  return new M(function (r) {
    var n = 0;
    return e.schedule(function () {
      n === t.length
        ? r.complete()
        : (r.next(t[n++]), r.closed || this.schedule());
    });
  });
}
function As(t, e) {
  return new M(function (r) {
    var n;
    return (
      Ie(r, e, function () {
        ((n = t[gn]()),
          Ie(
            r,
            e,
            function () {
              var i, s, o;
              try {
                ((i = n.next()), (s = i.value), (o = i.done));
              } catch (a) {
                r.error(a);
                return;
              }
              o ? r.complete() : r.next(s);
            },
            0,
            !0,
          ));
      }),
      function () {
        return j(n == null ? void 0 : n.return) && n.return();
      }
    );
  });
}
function Sn(t, e) {
  if (!t) throw new Error("Iterable cannot be null");
  return new M(function (r) {
    Ie(r, e, function () {
      var n = t[Symbol.asyncIterator]();
      Ie(
        r,
        e,
        function () {
          n.next().then(function (i) {
            i.done ? r.complete() : r.next(i.value);
          });
        },
        0,
        !0,
      );
    });
  });
}
function Os(t, e) {
  return Sn(wn(t), e);
}
function _s(t, e) {
  if (t != null) {
    if (pn(t)) return Is(t, e);
    if (fn(t)) return $s(t, e);
    if (dn(t)) return Ss(t, e);
    if (yn(t)) return Sn(t, e);
    if (vn(t)) return As(t, e);
    if (bn(t)) return Os(t, e);
  }
  throw mn(t);
}
function ze(t, e) {
  return e ? _s(t, e) : te(t);
}
function Se() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  var r = ar(t);
  return ze(t, r);
}
function cr(t, e) {
  var r = j(t)
      ? t
      : function () {
          return t;
        },
    n = function (i) {
      return i.error(r());
    };
  return new M(n);
}
function xs(t) {
  return !!t && (t instanceof M || (j(t.lift) && j(t.subscribe)));
}
var $n = tr(function (t) {
  return function () {
    (t(this),
      (this.name = "EmptyError"),
      (this.message = "no elements in sequence"));
  };
});
function $(t, e) {
  return new Promise(function (r, n) {
    var i = !1,
      s;
    t.subscribe({
      next: function (o) {
        ((s = o), (i = !0));
      },
      error: n,
      complete: function () {
        i ? r(s) : n(new $n());
      },
    });
  });
}
function Bt(t, e) {
  return new Promise(function (r, n) {
    var i = new Ve({
      next: function (s) {
        (r(s), i.unsubscribe());
      },
      error: n,
      complete: function () {
        n(new $n());
      },
    });
    t.subscribe(i);
  });
}
function Ts(t) {
  return t instanceof Date && !isNaN(t);
}
function L(t, e) {
  return Y(function (r, n) {
    var i = 0;
    r.subscribe(
      he(n, function (s) {
        n.next(t.call(e, s, i++));
      }),
    );
  });
}
var Rs = Array.isArray;
function js(t, e) {
  return Rs(e) ? t.apply(void 0, le([], ue(e))) : t(e);
}
function Ps(t) {
  return L(function (e) {
    return js(t, e);
  });
}
function ks(t, e, r) {
  return (
    r === void 0 && (r = qt),
    function (n) {
      kr(e, function () {
        for (
          var i = t.length,
            s = new Array(i),
            o = i,
            a = i,
            u = function (h) {
              kr(
                e,
                function () {
                  var y = ze(t[h], e),
                    d = !1;
                  y.subscribe(
                    he(
                      n,
                      function (p) {
                        ((s[h] = p),
                          d || ((d = !0), a--),
                          a || n.next(r(s.slice())));
                      },
                      function () {
                        --o || n.complete();
                      },
                    ),
                  );
                },
                n,
              );
            },
            c = 0;
          c < i;
          c++
        )
          u(c);
      });
    }
  );
}
function kr(t, e, r) {
  e();
}
function Ms(t, e, r, n, i, s, o, a) {
  var u = [],
    c = 0,
    h = 0,
    y = !1,
    d = function () {
      y && !u.length && !c && e.complete();
    },
    p = function (f) {
      return c < n ? g(f) : u.push(f);
    },
    g = function (f) {
      c++;
      var b = !1;
      te(r(f, h++)).subscribe(
        he(
          e,
          function (S) {
            e.next(S);
          },
          function () {
            b = !0;
          },
          void 0,
          function () {
            if (b)
              try {
                c--;
                for (
                  var S = function () {
                    var A = u.shift();
                    o || g(A);
                  };
                  u.length && c < n;
                )
                  S();
                d();
              } catch (A) {
                e.error(A);
              }
          },
        ),
      );
    };
  return (
    t.subscribe(
      he(e, p, function () {
        ((y = !0), d());
      }),
    ),
    function () {}
  );
}
function ce(t, e, r) {
  return (
    r === void 0 && (r = 1 / 0),
    j(e)
      ? ce(function (n, i) {
          return L(function (s, o) {
            return e(n, s, i, o);
          })(te(t(n, i)));
        }, r)
      : (typeof e == "number" && (r = e),
        Y(function (n, i) {
          return Ms(n, i, t, r);
        }))
  );
}
function An(t) {
  return (t === void 0 && (t = 1 / 0), ce(qt, t));
}
function qs() {
  return An(1);
}
function Fs() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  return qs()(ze(t, ar(t)));
}
function On(t) {
  return new M(function (e) {
    te(t()).subscribe(e);
  });
}
function Ds(t, e, r) {
  return (
    r === void 0 && (r = hs),
    new M(function (n) {
      var i = Ts(t) ? +t - r.now() : t;
      i < 0 && (i = 0);
      var s = 0;
      return r.schedule(function () {
        n.closed || (n.next(s++), n.complete());
      }, i);
    })
  );
}
function Ls() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  var r = ar(t),
    n = ys(t, 1 / 0),
    i = t;
  return i.length ? (i.length === 1 ? te(i[0]) : An(n)(ze(i, r))) : fs;
}
var Us = Array.isArray;
function Vs(t) {
  return t.length === 1 && Us(t[0]) ? t[0] : t;
}
function Ae(t, e) {
  return Y(function (r, n) {
    var i = 0;
    r.subscribe(
      he(n, function (s) {
        return t.call(e, s, i++) && n.next(s);
      }),
    );
  });
}
function ur(t) {
  return Y(function (e, r) {
    var n = null,
      i = !1,
      s;
    ((n = e.subscribe(
      he(r, void 0, void 0, function (o) {
        ((s = te(t(o, ur(t)(e)))),
          n ? (n.unsubscribe(), (n = null), s.subscribe(r)) : (i = !0));
      }),
    )),
      i && (n.unsubscribe(), (n = null), s.subscribe(r)));
  });
}
function Ns(t, e, r, n, i) {
  return function (s, o) {
    var a = r,
      u = e,
      c = 0;
    s.subscribe(
      he(
        o,
        function (h) {
          var y = c++;
          u = a ? t(u, h, y) : ((a = !0), h);
        },
        function () {
          (a && o.next(u), o.complete());
        },
      ),
    );
  };
}
function Hs(t, e) {
  return Y(Ns(t, e, arguments.length >= 2, !1, !0));
}
function _n() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  var r = ps(t);
  return r
    ? es(_n.apply(void 0, le([], ue(t))), Ps(r))
    : Y(function (n, i) {
        ks(le([n], ue(Vs(t))))(i);
      });
}
function Bs() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  return _n.apply(void 0, le([], ue(t)));
}
function Ws(t, e) {
  return j(e) ? ce(t, e, 1) : ce(t, 1);
}
function xn(t) {
  return Y(function (e, r) {
    try {
      e.subscribe(r);
    } finally {
      r.add(t);
    }
  });
}
function Tn(t) {
  t === void 0 && (t = {});
  var e = t.connector,
    r =
      e === void 0
        ? function () {
            return new ir();
          }
        : e,
    n = t.resetOnError,
    i = n === void 0 ? !0 : n,
    s = t.resetOnComplete,
    o = s === void 0 ? !0 : s,
    a = t.resetOnRefCountZero,
    u = a === void 0 ? !0 : a;
  return function (c) {
    var h,
      y,
      d,
      p = 0,
      g = !1,
      f = !1,
      b = function () {
        (y == null || y.unsubscribe(), (y = void 0));
      },
      S = function () {
        (b(), (h = d = void 0), (g = f = !1));
      },
      A = function () {
        var O = h;
        (S(), O == null || O.unsubscribe());
      };
    return Y(function (O, w) {
      (p++, !f && !g && b());
      var _ = (d = d ?? r());
      (w.add(function () {
        (p--, p === 0 && !f && !g && (y = Wt(A, u)));
      }),
        _.subscribe(w),
        !h &&
          p > 0 &&
          ((h = new Ve({
            next: function (q) {
              return _.next(q);
            },
            error: function (q) {
              ((f = !0), b(), (y = Wt(S, i, q)), _.error(q));
            },
            complete: function () {
              ((g = !0), b(), (y = Wt(S, o)), _.complete());
            },
          })),
          te(O).subscribe(h)));
    })(c);
  };
}
function Wt(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
  if (e === !0) {
    t();
    return;
  }
  if (e !== !1) {
    var i = new Ve({
      next: function () {
        (i.unsubscribe(), t());
      },
    });
    return te(e.apply(void 0, le([], ue(r)))).subscribe(i);
  }
}
function zs(t, e, r) {
  var n,
    i = !1;
  return (
    (n = t),
    Tn({
      connector: function () {
        return new os(n, e, r);
      },
      resetOnError: !0,
      resetOnComplete: !1,
      resetOnRefCountZero: i,
    })
  );
}
function Gs(t, e, r) {
  var n = j(t) || e || r ? { next: t, error: e, complete: r } : t;
  return n
    ? Y(function (i, s) {
        var o;
        (o = n.subscribe) === null || o === void 0 || o.call(n);
        var a = !0;
        i.subscribe(
          he(
            s,
            function (u) {
              var c;
              ((c = n.next) === null || c === void 0 || c.call(n, u),
                s.next(u));
            },
            function () {
              var u;
              ((a = !1),
                (u = n.complete) === null || u === void 0 || u.call(n),
                s.complete());
            },
            function (u) {
              var c;
              ((a = !1),
                (c = n.error) === null || c === void 0 || c.call(n, u),
                s.error(u));
            },
            function () {
              var u, c;
              (a && ((u = n.unsubscribe) === null || u === void 0 || u.call(n)),
                (c = n.finalize) === null || c === void 0 || c.call(n));
            },
          ),
        );
      })
    : qt;
}
function Rn(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
var jn = {
    0: 8203,
    1: 8204,
    2: 8205,
    3: 8290,
    4: 8291,
    5: 8288,
    6: 65279,
    7: 8289,
    8: 119155,
    9: 119156,
    a: 119157,
    b: 119158,
    c: 119159,
    d: 119160,
    e: 119161,
    f: 119162,
  },
  Je = { 0: 8203, 1: 8204, 2: 8205, 3: 65279 },
  Ye = {
    0: String.fromCodePoint(Je[0]),
    1: String.fromCodePoint(Je[1]),
    2: String.fromCodePoint(Je[2]),
    3: String.fromCodePoint(Je[3]),
  },
  Qs = new Array(4).fill(String.fromCodePoint(Je[0])).join("");
function Js(t) {
  let e = JSON.stringify(t),
    r = new TextEncoder().encode(e),
    n = "";
  for (let i = 0; i < r.length; i++) {
    let s = r[i];
    n += Ye[(s >> 6) & 3] + Ye[(s >> 4) & 3] + Ye[(s >> 2) & 3] + Ye[s & 3];
  }
  return Qs + n;
}
function Ys(t) {
  return !Number.isNaN(Number(t)) ||
    (/[a-z]/i.test(t) &&
      !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(t))
    ? !1
    : !!Date.parse(t);
}
function Xs(t) {
  try {
    new URL(t, t.startsWith("/") ? "https://acme.com" : void 0);
  } catch {
    return !1;
  }
  return !0;
}
function Ic(t, e, r = "auto") {
  return r === !0 || (r === "auto" && (Ys(t) || Xs(t))) ? t : `${t}${Js(e)}`;
}
Object.fromEntries(Object.entries(Ye).map((t) => [t[1], +t[0]]));
Object.fromEntries(Object.entries(jn).map((t) => t.reverse()));
var Ks = `${Object.values(jn)
    .map((t) => `\\u{${t.toString(16)}}`)
    .join("")}`,
  Mr = new RegExp(`[${Ks}]{4,}`, "gu");
function Zs(t) {
  var e;
  return {
    cleaned: t.replace(Mr, ""),
    encoded: ((e = t.match(Mr)) == null ? void 0 : e[0]) || "",
  };
}
function eo(t) {
  return t && JSON.parse(Zs(JSON.stringify(t)).cleaned);
}
function to(t) {
  return eo(t);
}
const ro = "drafts",
  no = "versions",
  Ne = ".",
  $t = `${ro}${Ne}`,
  Pn = `${no}${Ne}`;
function Ft(t) {
  return t.startsWith($t);
}
function Dt(t) {
  return t.startsWith(Pn);
}
function kn(t) {
  if (Dt(t)) {
    const e = Lt(t);
    return $t + e;
  }
  return Ft(t) ? t : $t + t;
}
function gt(t, e) {
  if (e === "drafts" || e === "published")
    throw new Error('Version can not be "published" or "drafts"');
  return `${Pn}${e}${Ne}${Lt(t)}`;
}
function Mn(t) {
  if (!Dt(t)) return;
  const [e, r] = t.split(Ne);
  return r;
}
function Lt(t) {
  return Dt(t) ? t.split(Ne).slice(2).join(Ne) : Ft(t) ? t.slice($t.length) : t;
}
let io = (t) => crypto.getRandomValues(new Uint8Array(t)),
  so = (t, e, r) => {
    let n = (2 << (Math.log(t.length - 1) / Math.LN2)) - 1,
      i = -~((1.6 * n * e) / t.length);
    return (s = e) => {
      let o = "";
      for (;;) {
        let a = r(i),
          u = i | 0;
        for (; u--;) if (((o += t[a[u] & n] || ""), o.length === s)) return o;
      }
    };
  },
  oo = (t, e = 21) => so(t, e, io);
const qr = /\r\n|[\n\r\u2028\u2029]/;
function ao(t, e, r) {
  const n = t.split(qr),
    i = { start: Fr(e.start, n), end: e.end ? Fr(e.end, n) : void 0 },
    { start: s, end: o, markerLines: a } = co(i, n),
    u = `${o}`.length;
  return t
    .split(qr, o)
    .slice(s, o)
    .map((c, h) => {
      const y = s + 1 + h,
        d = ` ${` ${y}`.slice(-u)} |`,
        p = a[y],
        g = !a[y + 1];
      if (!p) return ` ${d}${c.length > 0 ? ` ${c}` : ""}`;
      let f = "";
      if (Array.isArray(p)) {
        const b = c.slice(0, Math.max(p[0] - 1, 0)).replace(/[^\t]/g, " "),
          S = p[1] || 1;
        ((f = [
          `
 `,
          d.replace(/\d/g, " "),
          " ",
          b,
          "^".repeat(S),
        ].join("")),
          g && r && (f += " " + r));
      }
      return [">", d, c.length > 0 ? ` ${c}` : "", f].join("");
    }).join(`
`);
}
function co(t, e) {
  const r = { ...t.start },
    n = { ...r, ...t.end },
    i = 2,
    s = 3,
    o = r.line ?? -1,
    a = r.column ?? 0,
    u = n.line,
    c = n.column;
  let h = Math.max(o - (i + 1), 0),
    y = Math.min(e.length, u + s);
  (o === -1 && (h = 0), u === -1 && (y = e.length));
  const d = u - o,
    p = {};
  if (d)
    for (let g = 0; g <= d; g++) {
      const f = g + o;
      if (!a) p[f] = !0;
      else if (g === 0) {
        const b = e[f - 1].length;
        p[f] = [a, b - a + 1];
      } else if (g === d) p[f] = [0, c];
      else {
        const b = e[f - g].length;
        p[f] = [0, b];
      }
    }
  else a === c ? (a ? (p[o] = [a, 0]) : (p[o] = !0)) : (p[o] = [a, c - a]);
  return { start: h, end: y, markerLines: p };
}
function Fr(t, e) {
  var n;
  let r = 0;
  for (let i = 0; i < e.length; i++) {
    const s = e[i].length + 1;
    if (r + s > t) return { line: i + 1, column: t - r };
    r += s;
  }
  return {
    line: e.length,
    column: ((n = e[e.length - 1]) == null ? void 0 : n.length) ?? 0,
  };
}
const zt = 5;
class uo extends Error {
  constructor(r, n) {
    const i = qn(r, n);
    super(i.message);
    E(this, "response");
    E(this, "statusCode", 400);
    E(this, "responseBody");
    E(this, "traceId");
    E(this, "details");
    Object.assign(this, i);
  }
}
class lo extends Error {
  constructor(r) {
    const n = qn(r);
    super(n.message);
    E(this, "response");
    E(this, "statusCode", 500);
    E(this, "responseBody");
    E(this, "traceId");
    E(this, "details");
    Object.assign(this, n);
  }
}
function qn(t, e) {
  var s, o;
  const r = t.body,
    n = {
      response: t,
      statusCode: t.statusCode,
      responseBody: yo(r, t),
      traceId: po(t),
      message: "",
      details: void 0,
    };
  if (!Rn(r)) return ((n.message = `${Gt(t, r)}${pe(n.traceId)}`), n);
  const i = r.error;
  if (typeof i == "string" && typeof r.message == "string")
    return ((n.message = `${i} - ${r.message}${pe(n.traceId)}`), n);
  if (typeof i != "object" || i === null)
    return (
      typeof i == "string"
        ? (n.message = `${i}${pe(n.traceId)}`)
        : typeof r.message == "string"
          ? (n.message = `${r.message}${pe(n.traceId)}`)
          : (n.message = `${Gt(t, r)}${pe(n.traceId)}`),
      n
    );
  if (ho(i) || fo(i)) {
    const a = i.items || [],
      u = a
        .slice(0, zt)
        .map((h) => {
          var y;
          return (y = h.error) == null ? void 0 : y.description;
        })
        .filter(Boolean);
    let c = u.length
      ? `:
- ${u.join(`
- `)}`
      : "";
    return (
      a.length > zt &&
        (c += `
...and ${a.length - zt} more`),
      (n.message = `${i.description}${pe(n.traceId)}${c}`),
      (n.details = r.error),
      n
    );
  }
  if (Fn(i)) {
    const a =
      (o = (s = e == null ? void 0 : e.options) == null ? void 0 : s.query) ==
      null
        ? void 0
        : o.tag;
    return ((n.message = Dn(i, a, n.traceId)), (n.details = r.error), n);
  }
  return "description" in i && typeof i.description == "string"
    ? ((n.message = `${i.description}${pe(n.traceId)}`), (n.details = i), n)
    : ((n.message = `${Gt(t, r)}${pe(n.traceId)}`), n);
}
function ho(t) {
  return (
    "type" in t &&
    t.type === "mutationError" &&
    "description" in t &&
    typeof t.description == "string"
  );
}
function fo(t) {
  return (
    "type" in t &&
    t.type === "actionError" &&
    "description" in t &&
    typeof t.description == "string"
  );
}
function Fn(t) {
  return (
    Rn(t) &&
    t.type === "queryParseError" &&
    typeof t.query == "string" &&
    typeof t.start == "number" &&
    typeof t.end == "number"
  );
}
function Dn(t, e, r) {
  const { query: n, start: i, end: s, description: o } = t,
    a = r
      ? `
(traceId: ${r})`
      : "";
  if (!n || typeof i > "u") return `GROQ query parse error: ${o}${a}`;
  const u = e
    ? `

Tag: ${e}`
    : "";
  return `GROQ query parse error:
${ao(n, { start: i, end: s }, o)}${u}${a}`;
}
function Gt(t, e) {
  const r = typeof e == "string" ? ` (${mo(e, 100)})` : "",
    n = t.statusMessage ? ` ${t.statusMessage}` : "";
  return `${t.method}-request to ${t.url} resulted in HTTP ${t.statusCode}${n}${r}`;
}
function po(t) {
  var r;
  const e =
    (r = t == null ? void 0 : t.headers) == null ? void 0 : r.traceparent;
  if (e) return e.split("-")[1];
}
function yo(t, e) {
  return (e.headers["content-type"] || "")
    .toLowerCase()
    .indexOf("application/json") !== -1
    ? JSON.stringify(t, null, 2)
    : t;
}
function pe(t) {
  return t ? ` (traceId: ${t})` : "";
}
function mo(t, e) {
  return t.length > e ? `${t.slice(0, e)}…` : t;
}
class Kt extends Error {
  constructor({ projectId: r, credentials: n } = {}) {
    super("CorsOriginError");
    E(this, "projectId");
    E(this, "addOriginUrl");
    if (
      ((this.name = "CorsOriginError"),
      (this.projectId = r),
      r && typeof location < "u")
    ) {
      const i = new URL(`https://sanity.io/manage/project/${r}/api`),
        { origin: s } = location;
      (i.searchParams.set("cors", "add"),
        i.searchParams.set("origin", s),
        n && i.searchParams.set("credentials", ""),
        (this.addOriginUrl = i),
        (this.message = `The current origin is not allowed to connect to the Live Content API. Add it here: ${i}`));
    } else
      r
        ? (this.message = `The current origin is not allowed to connect to the Live Content API. Change your configuration here: https://sanity.io/manage/project/${r}/api`)
        : (this.message =
            "The current origin is not allowed to connect to the Live Content API.");
  }
}
const go = {
  onResponse: (t, e) => {
    if (t.statusCode >= 500) throw new lo(t);
    if (t.statusCode >= 400) throw new uo(t, e);
    return t;
  },
};
function vo(t = {}) {
  const e = {},
    r = (n) =>
      t.ignoreWarnings === void 0
        ? !1
        : (Array.isArray(t.ignoreWarnings)
            ? t.ignoreWarnings
            : [t.ignoreWarnings]
          ).some((i) =>
            typeof i == "string"
              ? n.includes(i)
              : i instanceof RegExp
                ? i.test(n)
                : !1,
          );
  return {
    onResponse: (n) => {
      const i = n.headers["x-sanity-warning"],
        s = Array.isArray(i) ? i : [i];
      for (const o of s) !o || e[o] || r(o) || ((e[o] = !0), console.warn(o));
      return n;
    },
  };
}
function Dr(t, e = {}) {
  return Mi([
    er({ shouldRetry: wo }),
    ...t,
    vo(e),
    Ui(),
    Vi(),
    Bi(),
    go,
    Hi({ implementation: M }),
  ]);
}
function wo(t, e, r) {
  if (r.maxRetries === 0) return !1;
  const n = r.method === "GET" || r.method === "HEAD",
    i = (r.uri || r.url).startsWith("/data/query"),
    s =
      t.response &&
      (t.response.statusCode === 429 ||
        t.response.statusCode === 502 ||
        t.response.statusCode === 503);
  return (n || i) && s ? !0 : er.shouldRetry(t, e, r);
}
const bo = "https://www.sanity.io/help/";
function lr(t) {
  return bo + t;
}
const Lr = ["image", "file"],
  Ur = ["before", "after", "replace"],
  He = (t) => {
    if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(t))
      throw new Error(
        "Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters",
      );
  },
  Eo = (t) => {
    if (!/^[-a-z0-9]+$/i.test(t))
      throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
  },
  Co = (t) => {
    if (Lr.indexOf(t) === -1)
      throw new Error(
        `Invalid asset type: ${t}. Must be one of ${Lr.join(", ")}`,
      );
  },
  Xe = (t, e) => {
    if (e === null || typeof e != "object" || Array.isArray(e))
      throw new Error(`${t}() takes an object of properties`);
  },
  At = (t, e) => {
    if (
      typeof e != "string" ||
      !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(e) ||
      e.includes("..")
    )
      throw new Error(`${t}(): "${e}" is not a valid document ID`);
  },
  Be = (t, e) => {
    if (!e._id)
      throw new Error(
        `${t}() requires that the document contains an ID ("_id" property)`,
      );
    At(t, e._id);
  },
  Io = (t, e) => {
    if (typeof e != "string")
      throw new Error(`\`${t}()\`: \`${e}\` is not a valid document type`);
  },
  Ln = (t, e) => {
    if (!e._type)
      throw new Error(
        `\`${t}()\` requires that the document contains a type (\`_type\` property)`,
      );
    Io(t, e._type);
  },
  So = (t, e) => {
    if (e._id && e._id !== t)
      throw new Error(
        `The provided document ID (\`${e._id}\`) does not match the generated version ID (\`${t}\`)`,
      );
  },
  $o = (t, e, r) => {
    const n = "insert(at, selector, items)";
    if (Ur.indexOf(t) === -1) {
      const i = Ur.map((s) => `"${s}"`).join(", ");
      throw new Error(`${n} takes an "at"-argument which is one of: ${i}`);
    }
    if (typeof e != "string")
      throw new Error(
        `${n} takes a "selector"-argument which must be a string`,
      );
    if (!Array.isArray(r))
      throw new Error(`${n} takes an "items"-argument which must be an array`);
  },
  Oe = (t) => {
    if (t.dataset) return t.dataset;
    const e = t.resource;
    if (e && e.type === "dataset") {
      const r = e.id.split(".");
      if (r.length !== 2)
        throw new Error(
          'Dataset resource ID must be in the format "project.dataset"',
        );
      return r[1];
    }
    throw new Error("`dataset` must be provided to perform queries");
  },
  Un = (t) => {
    if (typeof t != "string" || !/^[a-z0-9._-]{1,75}$/i.test(t))
      throw new Error(
        "Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.",
      );
    return t;
  },
  Vn = (t) => {
    const e = t.resource;
    if (!e)
      throw new Error(
        "`resource` must be provided to perform resource queries",
      );
    const { type: r, id: n } = e;
    switch (r) {
      case "dataset": {
        if (n.split(".").length !== 2)
          throw new Error(
            'Dataset resource ID must be in the format "project.dataset"',
          );
        return;
      }
      case "dashboard":
      case "media-library":
      case "canvas":
        return;
      default:
        throw new Error(`Unsupported resource type: ${r.toString()}`);
    }
  },
  ee = (t, e) => {
    if (e.resource)
      throw new Error(`\`${t}\` does not support resource-based operations`);
  };
function Ao(t) {
  let e = !1,
    r;
  return (...n) => (e || ((r = t(...n)), (e = !0)), r);
}
const de = (t) => Ao((...e) => console.warn(t.join(" "), ...e)),
  Oo = de([
    "Because you set `withCredentials` to true, we will override your `useCdn`",
    "setting to be false since (cookie-based) credentials are never set on the CDN",
  ]),
  _o = de([
    "Since you haven't set a value for `useCdn`, we will deliver content using our",
    "global, edge-cached API-CDN. If you wish to have content delivered faster, set",
    "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API.",
  ]),
  xo = de([
    "The Sanity client is configured with the `perspective` set to `drafts` or `previewDrafts`, which doesn't support the API-CDN.",
    "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning.",
  ]),
  To = de([
    "The `previewDrafts` perspective has been renamed to  `drafts` and will be removed in a future API version",
  ]),
  Ro = de([
    "You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.",
    `See ${lr("js-client-browser-token")} for more information and how to hide this warning.`,
  ]),
  jo = de([
    "You have configured Sanity client to use a token, but also provided `withCredentials: true`.",
    "This is no longer supported - only token will be used - remove `withCredentials: true`.",
  ]),
  Po = de([
    "Using the Sanity client without specifying an API version is deprecated.",
    `See ${lr("js-client-api-version")}`,
  ]),
  ko = de([
    "You have called `createVersion()` with a defined `document`. The recommended approach is to provide a `baseId` and `releaseId` instead.",
  ]),
  Mo = de([
    "The `~experimental_resource` configuration property has been renamed to `resource`.",
    "Please update your client configuration to use `resource` instead. Support for `~experimental_resource` will be removed in a future version.",
  ]),
  qo = "apicdn.sanity.io",
  Ke = {
    apiHost: "https://api.sanity.io",
    apiVersion: "1",
    useProjectHostname: !0,
    stega: { enabled: !1 },
  },
  Fo = ["localhost", "127.0.0.1", "0.0.0.0"],
  Do = (t) => Fo.indexOf(t) !== -1;
function Lo(t) {
  if (t === "1" || t === "X") return;
  const e = new Date(t);
  if (!(/^\d{4}-\d{2}-\d{2}$/.test(t) && e instanceof Date && e.getTime() > 0))
    throw new Error(
      "Invalid API version string, expected `1` or date in format `YYYY-MM-DD`",
    );
}
function Nn(t) {
  if (Array.isArray(t) && t.length > 1 && t.includes("raw"))
    throw new TypeError(
      'Invalid API perspective value: "raw". The raw-perspective can not be combined with other perspectives',
    );
}
const Hn = (t, e) => {
  const r = {
    ...e,
    ...t,
    stega: {
      ...(typeof e.stega == "boolean"
        ? { enabled: e.stega }
        : e.stega || Ke.stega),
      ...(typeof t.stega == "boolean" ? { enabled: t.stega } : t.stega || {}),
    },
  };
  r.apiVersion || Po();
  const n = { ...Ke, ...r };
  n["~experimental_resource"] &&
    !n.resource &&
    (Mo(), (n.resource = n["~experimental_resource"]));
  const i = n.resource,
    s = n.useProjectHostname && !i;
  if (typeof Promise > "u") {
    const p = lr("js-client-promise-polyfill");
    throw new Error(
      `No native Promise-implementation found, polyfill needed - see ${p}`,
    );
  }
  if (s && !n.projectId)
    throw new Error("Configuration must contain `projectId`");
  if (
    (i && Vn(n),
    typeof n.perspective < "u" && Nn(n.perspective),
    "encodeSourceMap" in n)
  )
    throw new Error(
      "It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client'. Did you mean 'stega.enabled'?",
    );
  if ("encodeSourceMapAtPath" in n)
    throw new Error(
      "It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client'. Did you mean 'stega.filter'?",
    );
  if (typeof n.stega.enabled != "boolean")
    throw new Error(
      `stega.enabled must be a boolean, received ${n.stega.enabled}`,
    );
  if (n.stega.enabled && n.stega.studioUrl === void 0)
    throw new Error(
      "stega.studioUrl must be defined when stega.enabled is true",
    );
  if (
    n.stega.enabled &&
    typeof n.stega.studioUrl != "string" &&
    typeof n.stega.studioUrl != "function"
  )
    throw new Error(
      `stega.studioUrl must be a string or a function, received ${n.stega.studioUrl}`,
    );
  const o = typeof window < "u" && window.location && window.location.hostname,
    a = o && Do(window.location.hostname),
    u = !!n.token;
  (n.withCredentials && u && (jo(), (n.withCredentials = !1)),
    o && a && u && n.ignoreBrowserTokenWarning !== !0
      ? Ro()
      : typeof n.useCdn > "u" && _o(),
    s && Eo(n.projectId),
    n.dataset && He(n.dataset),
    "requestTagPrefix" in n &&
      (n.requestTagPrefix = n.requestTagPrefix
        ? Un(n.requestTagPrefix).replace(/\.+$/, "")
        : void 0),
    (n.apiVersion = `${n.apiVersion}`.replace(/^v/, "")),
    (n.isDefaultApi = n.apiHost === Ke.apiHost),
    n.useCdn === !0 && n.withCredentials && Oo(),
    (n.useCdn = n.useCdn !== !1 && !n.withCredentials),
    Lo(n.apiVersion));
  const c = n.apiHost.split("://", 2),
    h = c[0],
    y = c[1],
    d = n.isDefaultApi ? qo : y;
  return (
    s
      ? ((n.url = `${h}://${n.projectId}.${y}/v${n.apiVersion}`),
        (n.cdnUrl = `${h}://${n.projectId}.${d}/v${n.apiVersion}`))
      : ((n.url = `${n.apiHost}/v${n.apiVersion}`), (n.cdnUrl = n.url)),
    n
  );
};
class Bn extends Error {
  constructor() {
    super(...arguments);
    E(this, "name", "ConnectionFailedError");
  }
}
class Uo extends Error {
  constructor(r, n, i = {}) {
    super(r, i);
    E(this, "name", "DisconnectError");
    E(this, "reason");
    this.reason = n;
  }
}
class Vo extends Error {
  constructor(r, n) {
    super(r);
    E(this, "name", "ChannelError");
    E(this, "data");
    this.data = n;
  }
}
class No extends Error {
  constructor(r, n, i = {}) {
    super(r, i);
    E(this, "name", "MessageError");
    E(this, "data");
    this.data = n;
  }
}
class Vr extends Error {
  constructor() {
    super(...arguments);
    E(this, "name", "MessageParseError");
  }
}
const Ho = ["channelError", "disconnect"];
function Wn(t, e) {
  return On(() => {
    const r = t();
    return xs(r) ? r : Se(r);
  }).pipe(ce((r) => Bo(r, e)));
}
function Bo(t, e) {
  return new M((r) => {
    const n = e.includes("open"),
      i = e.includes("reconnect");
    function s(c) {
      if ("data" in c) {
        const [h, y] = Nr(c);
        r.error(
          h
            ? new Vr("Unable to parse EventSource error message", { cause: y })
            : new No((y == null ? void 0 : y.data).message, y),
        );
        return;
      }
      t.readyState === t.CLOSED
        ? r.error(new Bn("EventSource connection failed"))
        : i && r.next({ type: "reconnect" });
    }
    function o() {
      r.next({ type: "open" });
    }
    function a(c) {
      var d;
      const [h, y] = Nr(c);
      if (h) {
        r.error(new Vr("Unable to parse EventSource message", { cause: h }));
        return;
      }
      if (c.type === "channelError") {
        const p = new URL(t.url).searchParams.get("tag");
        r.error(new Vo(Wo(y == null ? void 0 : y.data, p), y.data));
        return;
      }
      if (c.type === "disconnect") {
        r.error(
          new Uo(
            `Server disconnected client: ${((d = y.data) == null ? void 0 : d.reason) || "unknown error"}`,
          ),
        );
        return;
      }
      r.next({
        type: c.type,
        id: c.lastEventId,
        ...(y.data ? { data: y.data } : {}),
      });
    }
    (t.addEventListener("error", s), n && t.addEventListener("open", o));
    const u = [...new Set([...Ho, ...e])].filter(
      (c) => c !== "error" && c !== "open" && c !== "reconnect",
    );
    return (
      u.forEach((c) => t.addEventListener(c, a)),
      () => {
        (t.removeEventListener("error", s),
          n && t.removeEventListener("open", o),
          u.forEach((c) => t.removeEventListener(c, a)),
          t.close());
      }
    );
  });
}
function Nr(t) {
  try {
    const e = typeof t.data == "string" && JSON.parse(t.data);
    return [
      null,
      { type: t.type, id: t.lastEventId, ...(zo(e) ? {} : { data: e }) },
    ];
  } catch (e) {
    return [e, null];
  }
}
function Wo(t, e) {
  const r = t.error;
  return r
    ? Fn(r)
      ? Dn(r, e)
      : r.description
        ? r.description
        : typeof r == "string"
          ? r
          : JSON.stringify(r, null, 2)
    : t.message || "Unknown listener error";
}
function zo(t) {
  for (const e in t) return !1;
  return !0;
}
function zn(t) {
  if (typeof t == "string") return { id: t };
  if (Array.isArray(t)) return { query: "*[_id in $ids]", params: { ids: t } };
  if (
    typeof t == "object" &&
    t !== null &&
    "query" in t &&
    typeof t.query == "string"
  )
    return "params" in t && typeof t.params == "object" && t.params !== null
      ? { query: t.query, params: t.params }
      : { query: t.query };
  const e = [
    "* Document ID (<docId>)",
    "* Array of document IDs",
    "* Object containing `query`",
  ].join(`
`);
  throw new Error(`Unknown selection - must be one of:

${e}`);
}
class Gn {
  constructor(e, r = {}) {
    E(this, "selection");
    E(this, "operations");
    ((this.selection = e), (this.operations = r));
  }
  set(e) {
    return this._assign("set", e);
  }
  setIfMissing(e) {
    return this._assign("setIfMissing", e);
  }
  diffMatchPatch(e) {
    return (Xe("diffMatchPatch", e), this._assign("diffMatchPatch", e));
  }
  unset(e) {
    if (!Array.isArray(e))
      throw new Error(
        "unset(attrs) takes an array of attributes to unset, non-array given",
      );
    return (
      (this.operations = Object.assign({}, this.operations, { unset: e })),
      this
    );
  }
  inc(e) {
    return this._assign("inc", e);
  }
  dec(e) {
    return this._assign("dec", e);
  }
  insert(e, r, n) {
    return ($o(e, r, n), this._assign("insert", { [e]: r, items: n }));
  }
  append(e, r) {
    return this.insert("after", `${e}[-1]`, r);
  }
  prepend(e, r) {
    return this.insert("before", `${e}[0]`, r);
  }
  splice(e, r, n, i) {
    const s = typeof n > "u" || n === -1,
      o = r < 0 ? r - 1 : r,
      a = s ? -1 : Math.max(0, r + n),
      u = o < 0 && a >= 0 ? "" : a,
      c = `${e}[${o}:${u}]`;
    return this.insert("replace", c, i || []);
  }
  ifRevisionId(e) {
    return ((this.operations.ifRevisionID = e), this);
  }
  serialize() {
    return { ...zn(this.selection), ...this.operations };
  }
  toJSON() {
    return this.serialize();
  }
  reset() {
    return ((this.operations = {}), this);
  }
  _assign(e, r, n = !0) {
    return (
      Xe(e, r),
      (this.operations = Object.assign({}, this.operations, {
        [e]: Object.assign({}, (n && this.operations[e]) || {}, r),
      })),
      this
    );
  }
  _set(e, r) {
    return this._assign(e, r, !1);
  }
}
var we;
const fr = class fr extends Gn {
  constructor(r, n, i) {
    super(r, n);
    I(this, we);
    C(this, we, i);
  }
  clone() {
    return new fr(this.selection, { ...this.operations }, l(this, we));
  }
  commit(r) {
    if (!l(this, we))
      throw new Error(
        "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method",
      );
    const n = typeof this.selection == "string",
      i = Object.assign({ returnFirst: n, returnDocuments: !0 }, r);
    return l(this, we).mutate({ patch: this.serialize() }, i);
  }
};
we = new WeakMap();
let $e = fr;
var be;
const dr = class dr extends Gn {
  constructor(r, n, i) {
    super(r, n);
    I(this, be);
    C(this, be, i);
  }
  clone() {
    return new dr(this.selection, { ...this.operations }, l(this, be));
  }
  commit(r) {
    if (!l(this, be))
      throw new Error(
        "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method",
      );
    const n = typeof this.selection == "string",
      i = Object.assign({ returnFirst: n, returnDocuments: !0 }, r);
    return l(this, be).mutate({ patch: this.serialize() }, i);
  }
};
be = new WeakMap();
let ge = dr;
const Qn = { returnDocuments: !1 };
class Jn {
  constructor(e = [], r) {
    E(this, "operations");
    E(this, "trxId");
    ((this.operations = e), (this.trxId = r));
  }
  create(e) {
    return (Xe("create", e), this._add({ create: e }));
  }
  createIfNotExists(e) {
    const r = "createIfNotExists";
    return (Xe(r, e), Be(r, e), this._add({ [r]: e }));
  }
  createOrReplace(e) {
    const r = "createOrReplace";
    return (Xe(r, e), Be(r, e), this._add({ [r]: e }));
  }
  delete(e) {
    return (At("delete", e), this._add({ delete: { id: e } }));
  }
  transactionId(e) {
    return e ? ((this.trxId = e), this) : this.trxId;
  }
  serialize() {
    return [...this.operations];
  }
  toJSON() {
    return this.serialize();
  }
  reset() {
    return ((this.operations = []), this);
  }
  _add(e) {
    return (this.operations.push(e), this);
  }
}
var ne;
const pr = class pr extends Jn {
  constructor(r, n, i) {
    super(r, i);
    I(this, ne);
    C(this, ne, n);
  }
  clone() {
    return new pr([...this.operations], l(this, ne), this.trxId);
  }
  commit(r) {
    if (!l(this, ne))
      throw new Error(
        "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method",
      );
    return l(this, ne).mutate(
      this.serialize(),
      Object.assign({ transactionId: this.trxId }, Qn, r || {}),
    );
  }
  patch(r, n) {
    const i = typeof n == "function",
      s = typeof r != "string" && r instanceof ge,
      o = typeof r == "object" && ("query" in r || "id" in r);
    if (s) return this._add({ patch: r.serialize() });
    if (i) {
      const a = n(new ge(r, {}, l(this, ne)));
      if (!(a instanceof ge))
        throw new Error("function passed to `patch()` must return the patch");
      return this._add({ patch: a.serialize() });
    }
    if (o) {
      const a = new ge(r, n || {}, l(this, ne));
      return this._add({ patch: a.serialize() });
    }
    return this._add({ patch: { id: r, ...n } });
  }
};
ne = new WeakMap();
let Ot = pr;
var ye;
const yr = class yr extends Jn {
  constructor(r, n, i) {
    super(r, i);
    I(this, ye);
    C(this, ye, n);
  }
  clone() {
    return new yr([...this.operations], l(this, ye), this.trxId);
  }
  commit(r) {
    if (!l(this, ye))
      throw new Error(
        "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method",
      );
    return l(this, ye).mutate(
      this.serialize(),
      Object.assign({ transactionId: this.trxId }, Qn, r || {}),
    );
  }
  patch(r, n) {
    const i = typeof n == "function";
    if (typeof r != "string" && r instanceof $e)
      return this._add({ patch: r.serialize() });
    if (i) {
      const s = n(new $e(r, {}, l(this, ye)));
      if (!(s instanceof $e))
        throw new Error("function passed to `patch()` must return the patch");
      return this._add({ patch: s.serialize() });
    }
    return this._add({ patch: { id: r, ...n } });
  }
};
ye = new WeakMap();
let _t = yr;
const Go = "X-Sanity-Project-ID";
function Qo(t, e = {}) {
  const r = {};
  t.headers && Object.assign(r, t.headers);
  const n = e.token || t.token;
  (n && (r.Authorization = `Bearer ${n}`),
    !e.useGlobalApi &&
      !t.useProjectHostname &&
      t.projectId &&
      (r[Go] = t.projectId));
  const i = !!(typeof e.withCredentials > "u"
      ? t.withCredentials
      : e.withCredentials),
    s = typeof e.timeout > "u" ? t.timeout : e.timeout;
  return Object.assign({}, e, {
    headers: Object.assign({}, r, e.headers || {}),
    timeout: typeof s > "u" ? 300 * 1e3 : s,
    proxy: e.proxy || t.proxy,
    json: !0,
    withCredentials: i,
    fetch:
      typeof e.fetch == "object" && typeof t.fetch == "object"
        ? { ...t.fetch, ...e.fetch }
        : e.fetch || t.fetch,
  });
}
const Yn = ({ query: t, params: e = {}, options: r = {} }) => {
    const n = new URLSearchParams(),
      { tag: i, includeMutations: s, returnQuery: o, ...a } = r;
    (i && n.append("tag", i), n.append("query", t));
    for (const [u, c] of Object.entries(e))
      c !== void 0 && n.append(`$${u}`, JSON.stringify(c));
    for (const [u, c] of Object.entries(a)) c && n.append(u, `${c}`);
    return (
      o === !1 && n.append("returnQuery", "false"),
      s === !1 && n.append("includeMutations", "false"),
      `?${n}`
    );
  },
  Jo = (t, e) => (t === !1 ? void 0 : typeof t > "u" ? e : t),
  Yo = (t = {}) => ({
    dryRun: t.dryRun,
    returnIds: !0,
    returnDocuments: Jo(t.returnDocuments, !0),
    visibility: t.visibility || "sync",
    autoGenerateArrayKeys: t.autoGenerateArrayKeys,
    skipCrossDatasetReferenceValidation: t.skipCrossDatasetReferenceValidation,
  }),
  Ut = (t) => t.type === "response",
  Xo = (t) => t.body,
  Ko = (t, e) => t.reduce((r, n) => ((r[e(n)] = n), r), Object.create(null)),
  Zo = 11264;
function Xn(t, e, r, n, i = {}, s = {}) {
  const o =
      "stega" in s
        ? {
            ...(r || {}),
            ...(typeof s.stega == "boolean"
              ? { enabled: s.stega }
              : s.stega || {}),
          }
        : r,
    a = o.enabled ? to(i) : i,
    u = s.filterResponse === !1 ? (g) => g : (g) => g.result,
    {
      cache: c,
      next: h,
      ...y
    } = {
      useAbortSignal: typeof s.signal < "u",
      resultSourceMap: o.enabled ? "withKeyArraySelector" : s.resultSourceMap,
      ...s,
      returnQuery: s.filterResponse === !1 && s.returnQuery !== !1,
    },
    d =
      typeof c < "u" || typeof h < "u"
        ? { ...y, fetch: { cache: c, next: h } }
        : y,
    p = _e(t, e, "query", { query: n, params: a }, d);
  return o.enabled
    ? p.pipe(
        Bs(
          ze(
            Zr(
              () => import("./stegaEncodeSourceMap-DmbO7R5A.js"),
              __vite__mapDeps([0, 1, 2, 3, 4]),
            )
              .then(function (g) {
                return g.stegaEncodeSourceMap$1;
              })
              .then(({ stegaEncodeSourceMap: g }) => g),
          ),
        ),
        L(([g, f]) => {
          const b = f(g.result, g.resultSourceMap, o);
          return u({ ...g, result: b });
        }),
      )
    : p.pipe(L(u));
}
function We(t, e, r, n = {}) {
  const i = (() => {
      if (!n.releaseId) return r;
      const o = Mn(r);
      if (!o) {
        if (Ft(r))
          throw new Error(
            `The document ID (\`${r}\`) is a draft, but \`options.releaseId\` is set as \`${n.releaseId}\``,
          );
        return gt(r, n.releaseId);
      }
      if (o !== n.releaseId)
        throw new Error(
          `The document ID (\`${r}\`) is already a version of \`${o}\` release, but this does not match the provided \`options.releaseId\` (\`${n.releaseId}\`)`,
        );
      return r;
    })(),
    s = {
      uri: Q(t, "doc", i),
      json: !0,
      tag: n.tag,
      signal: n.signal,
      query:
        n.includeAllVersions !== void 0
          ? { includeAllVersions: n.includeAllVersions }
          : void 0,
    };
  return Ge(t, e, s).pipe(
    Ae(Ut),
    L((o) => {
      const a = o.body.documents;
      return a
        ? n.includeAllVersions
          ? a
          : a[0]
        : n.includeAllVersions
          ? []
          : void 0;
    }),
  );
}
function Kn(t, e, r, n = {}) {
  const i = {
    uri: Q(t, "doc", r.join(",")),
    json: !0,
    tag: n.tag,
    signal: n.signal,
  };
  return Ge(t, e, i).pipe(
    Ae(Ut),
    L((s) => {
      const o = Ko(s.body.documents || [], (a) => a._id);
      return r.map((a) => o[a] || null);
    }),
  );
}
const Hr = 100;
function Zn(t, e, r, n = {}) {
  if (r.length === 0) return Se(new Set());
  const i = [];
  for (let o = 0; o < r.length; o += Hr) i.push(r.slice(o, o + Hr));
  const s = (o) =>
    Ge(t, e, {
      uri: Q(t, "doc", o.map(encodeURIComponent).join(",")),
      tag: n.tag,
      signal: n.signal,
      query: { excludeContent: !0 },
    }).pipe(
      Ae(Ut),
      L((a) => {
        const u = new Set();
        for (const c of a.body.omitted || [])
          c.reason === "existence" && u.add(c.id);
        return new Set(o.filter((c) => !u.has(c)));
      }),
    );
  return ze(i).pipe(
    Ws(s),
    Hs((o, a) => {
      for (const u of a) o.add(u);
      return o;
    }, new Set()),
  );
}
function ei(t, e, r, n = {}) {
  return _e(
    t,
    e,
    "query",
    { query: "*[sanity::partOfRelease($releaseId)]", params: { releaseId: r } },
    n,
  );
}
function ti(t, e, r, n) {
  return (Be("createIfNotExists", r), Vt(t, e, r, "createIfNotExists", n));
}
function ri(t, e, r, n) {
  return (Be("createOrReplace", r), Vt(t, e, r, "createOrReplace", n));
}
function ni(t, e, r, n, i) {
  return (
    Be("createVersion", r),
    Ln("createVersion", r),
    ko(),
    k(
      t,
      e,
      {
        actionType: "sanity.action.document.version.create",
        publishedId: n,
        document: r,
      },
      i,
    )
  );
}
function ii(t, e, r, n, i, s, o) {
  if (!n)
    throw new Error(
      "`createVersion()` requires `baseId` when no `document` is provided",
    );
  if (!r)
    throw new Error(
      "`createVersion()` requires `publishedId` when `baseId` is provided",
    );
  (At("createVersion", n), At("createVersion", r));
  const a = {
    actionType: "sanity.action.document.version.create",
    publishedId: r,
    baseId: n,
    versionId: i ? gt(r, i) : kn(r),
    ifBaseRevisionId: s,
  };
  return k(t, e, a, o);
}
function si(t, e, r, n) {
  return _e(t, e, "mutate", { mutations: [{ delete: zn(r) }] }, n);
}
function oi(t, e, r, n = !1, i) {
  return k(
    t,
    e,
    {
      actionType: "sanity.action.document.version.discard",
      versionId: r,
      purge: n,
    },
    i,
  );
}
function ai(t, e, r, n) {
  return (
    Be("replaceVersion", r),
    Ln("replaceVersion", r),
    k(
      t,
      e,
      { actionType: "sanity.action.document.version.replace", document: r },
      n,
    )
  );
}
function ci(t, e, r, n, i) {
  return k(
    t,
    e,
    {
      actionType: "sanity.action.document.version.unpublish",
      versionId: r,
      publishedId: n,
    },
    i,
  );
}
function ui(t, e, r, n) {
  let i;
  r instanceof ge || r instanceof $e
    ? (i = { patch: r.serialize() })
    : r instanceof Ot || r instanceof _t
      ? (i = r.serialize())
      : (i = r);
  const s = Array.isArray(i) ? i : [i],
    o = (n && n.transactionId) || void 0;
  return _e(t, e, "mutate", { mutations: s, transactionId: o }, n);
}
function k(t, e, r, n) {
  const i = Array.isArray(r) ? r : [r],
    s = (n && n.transactionId) || void 0,
    o = (n && n.skipCrossDatasetReferenceValidation) || void 0,
    a = (n && n.dryRun) || void 0;
  return _e(
    t,
    e,
    "actions",
    {
      actions: i,
      transactionId: s,
      skipCrossDatasetReferenceValidation: o,
      dryRun: a,
    },
    n,
  );
}
function _e(t, e, r, n, i = {}) {
  const s = r === "mutate",
    o = r === "actions",
    a = r === "query",
    u = s || o ? "" : Yn(n),
    c = !s && !o && u.length < Zo,
    h = c ? u : "",
    y = i.returnFirst,
    {
      timeout: d,
      token: p,
      tag: g,
      headers: f,
      returnQuery: b,
      lastLiveEventId: S,
      cacheMode: A,
    } = i,
    O = Q(t, r, h),
    w = {
      method: c ? "GET" : "POST",
      uri: O,
      json: !0,
      body: c ? void 0 : n,
      query: s && Yo(i),
      timeout: d,
      headers: f,
      token: p,
      tag: g,
      returnQuery: b,
      perspective: i.perspective,
      resultSourceMap: i.resultSourceMap,
      lastLiveEventId: Array.isArray(S) ? S[0] : S,
      cacheMode: A,
      canUseCdn: a,
      signal: i.signal,
      fetch: i.fetch,
      useAbortSignal: i.useAbortSignal,
      useCdn: i.useCdn,
    };
  return Ge(t, e, w).pipe(
    Ae(Ut),
    L(Xo),
    L((_) => {
      if (!s) return _;
      const q = _.results || [];
      if (i.returnDocuments)
        return y ? q[0] && q[0].document : q.map((P) => P.document);
      const T = y ? "documentId" : "documentIds",
        ve = y ? q[0] && q[0].id : q.map((P) => P.id);
      return { transactionId: _.transactionId, results: q, [T]: ve };
    }),
  );
}
function Vt(t, e, r, n, i = {}) {
  const s = { [n]: r },
    o = Object.assign({ returnFirst: !0, returnDocuments: !0 }, i);
  return _e(t, e, "mutate", { mutations: [s] }, o);
}
const vt = (t) => {
    const e = t.config();
    return (
      (e.dataset !== void 0 && e.projectId !== void 0) || e.resource !== void 0
    );
  },
  li = (t, e) => vt(t) && e.startsWith(Q(t, "query")),
  ea = (t, e) => vt(t) && e.startsWith(Q(t, "mutate")),
  ta = (t, e) => vt(t) && e.startsWith(Q(t, "doc", "")),
  ra = (t, e) => vt(t) && e.startsWith(Q(t, "listen")),
  na = (t, e) => vt(t) && e.startsWith(Q(t, "history", "")),
  ia = (t, e) =>
    e.startsWith("/data/") ||
    li(t, e) ||
    ea(t, e) ||
    ta(t, e) ||
    ra(t, e) ||
    na(t, e);
function Ge(t, e, r) {
  const n = new Error(),
    i = r.url || r.uri,
    s = t.config(),
    o =
      typeof r.canUseCdn > "u"
        ? ["GET", "HEAD"].indexOf(r.method || "GET") >= 0 && ia(t, i)
        : r.canUseCdn;
  let a = (r.useCdn ?? s.useCdn) && o;
  const u =
    r.tag && s.requestTagPrefix
      ? [s.requestTagPrefix, r.tag].join(".")
      : r.tag || s.requestTagPrefix;
  if (
    (u && r.tag !== null && (r.query = { tag: Un(u), ...r.query }),
    ["GET", "HEAD", "POST"].indexOf(r.method || "GET") >= 0 && li(t, i))
  ) {
    const y = r.resultSourceMap ?? s.resultSourceMap;
    y !== void 0 && y !== !1 && (r.query = { resultSourceMap: y, ...r.query });
    const d = r.perspective || s.perspective;
    (typeof d < "u" &&
      (d === "previewDrafts" && To(),
      Nn(d),
      (r.query = {
        perspective: Array.isArray(d) ? d.join(",") : d,
        ...r.query,
      }),
      ((Array.isArray(d) && d.length > 0) ||
        d === "previewDrafts" ||
        d === "drafts") &&
        a &&
        ((a = !1), xo())),
      r.lastLiveEventId &&
        (r.query = { ...r.query, lastLiveEventId: r.lastLiveEventId }),
      r.returnQuery === !1 && (r.query = { returnQuery: "false", ...r.query }),
      a &&
        r.cacheMode == "noStale" &&
        (r.query = { cacheMode: "noStale", ...r.query }));
  }
  const c = Qo(s, Object.assign({}, r, { url: hr(t, i, a), callSiteStack: n })),
    h = new M((y) => e(c, s.requester).subscribe(y));
  return r.signal ? h.pipe(sa(r.signal)) : h;
}
function F(t, e, r) {
  return Ge(t, e, r).pipe(
    Ae((n) => n.type === "response"),
    L((n) => n.body),
  );
}
function Q(t, e, r) {
  const n = t.config();
  if (n.resource) {
    Vn(n);
    const o = ca(n),
      a = r !== void 0 ? `${e}/${r}` : e;
    return `${o}/${a}`.replace(/\/($|\?)/, "$1");
  }
  const i = Oe(n),
    s = `/${e}/${i}`;
  return `/data${r !== void 0 ? `${s}/${r}` : s}`.replace(/\/($|\?)/, "$1");
}
function hr(t, e, r = !1) {
  const { url: n, cdnUrl: i } = t.config();
  return `${r ? i : n}/${e.replace(/^\//, "")}`;
}
function sa(t) {
  return (e) =>
    new M((r) => {
      const n = () => r.error(aa(t));
      if (t && t.aborted) {
        n();
        return;
      }
      const i = e.subscribe(r);
      return (
        t.addEventListener("abort", n),
        () => {
          (t.removeEventListener("abort", n), i.unsubscribe());
        }
      );
    });
}
const oa = !!globalThis.DOMException;
function aa(t) {
  if (oa)
    return new DOMException(
      (t == null ? void 0 : t.reason) ?? "The operation was aborted.",
      "AbortError",
    );
  const e = new Error(
    (t == null ? void 0 : t.reason) ?? "The operation was aborted.",
  );
  return ((e.name = "AbortError"), e);
}
const ca = (t) => {
  const e = t.resource;
  if (!e)
    throw new Error("`resource` must be provided to perform resource queries");
  const { type: r, id: n } = e;
  switch (r) {
    case "dataset": {
      const i = n.split(".");
      if (i.length !== 2)
        throw new Error('Dataset ID must be in the format "project.dataset"');
      return `/projects/${i[0]}/datasets/${i[1]}`;
    }
    case "canvas":
      return `/canvases/${n}`;
    case "media-library":
      return `/media-libraries/${n}`;
    case "dashboard":
      return `/dashboards/${n}`;
    default:
      throw new Error(`Unsupported resource type: ${r.toString()}`);
  }
};
function hi(t, e, r) {
  const n = Oe(t.config());
  return F(t, e, {
    method: "POST",
    uri: `/agent/action/generate/${n}`,
    body: r,
  });
}
function ua(t, e, r) {
  const n = Oe(t.config());
  return F(t, e, { method: "POST", uri: `/agent/action/patch/${n}`, body: r });
}
function la(t, e, r) {
  const n = Oe(t.config());
  return F(t, e, { method: "POST", uri: `/agent/action/prompt/${n}`, body: r });
}
function fi(t, e, r) {
  const n = Oe(t.config());
  return F(t, e, {
    method: "POST",
    uri: `/agent/action/transform/${n}`,
    body: r,
  });
}
function di(t, e, r) {
  const n = Oe(t.config());
  return F(t, e, {
    method: "POST",
    uri: `/agent/action/translate/${n}`,
    body: r,
  });
}
var Ee, Ce;
class ha {
  constructor(e, r) {
    I(this, Ee);
    I(this, Ce);
    (C(this, Ee, e), C(this, Ce, r));
  }
  generate(e) {
    return hi(l(this, Ee), l(this, Ce), e);
  }
  transform(e) {
    return fi(l(this, Ee), l(this, Ce), e);
  }
  translate(e) {
    return di(l(this, Ee), l(this, Ce), e);
  }
}
((Ee = new WeakMap()), (Ce = new WeakMap()));
var ie, se;
class fa {
  constructor(e, r) {
    I(this, ie);
    I(this, se);
    (C(this, ie, e), C(this, se, r));
  }
  generate(e) {
    return $(hi(l(this, ie), l(this, se), e));
  }
  transform(e) {
    return $(fi(l(this, ie), l(this, se), e));
  }
  translate(e) {
    return $(di(l(this, ie), l(this, se), e));
  }
  prompt(e) {
    return $(la(l(this, ie), l(this, se), e));
  }
  patch(e) {
    return $(ua(l(this, ie), l(this, se), e));
  }
}
((ie = new WeakMap()), (se = new WeakMap()));
var st, ot;
class da {
  constructor(e, r) {
    I(this, st);
    I(this, ot);
    (C(this, st, e), C(this, ot, r));
  }
  upload(e, r, n) {
    return pi(l(this, st), l(this, ot), e, r, n);
  }
}
((st = new WeakMap()), (ot = new WeakMap()));
var at, ct;
class pa {
  constructor(e, r) {
    I(this, at);
    I(this, ct);
    (C(this, at, e), C(this, ct, r));
  }
  upload(e, r, n) {
    const i = pi(l(this, at), l(this, ct), e, r, n);
    return $(
      i.pipe(
        Ae((s) => s.type === "response"),
        L((s) => s.body.document),
      ),
    );
  }
}
((at = new WeakMap()), (ct = new WeakMap()));
function pi(t, e, r, n, i = {}) {
  var S;
  Co(r);
  let s = i.extract || void 0;
  s && !s.length && (s = ["none"]);
  const o = t.config(),
    a = ma(i, n),
    {
      tag: u,
      label: c,
      title: h,
      description: y,
      creditLine: d,
      filename: p,
      source: g,
    } = a,
    f = ((S = o.resource) == null ? void 0 : S.type) === "media-library",
    b = f
      ? { title: h, filename: p }
      : {
          label: c,
          title: h,
          description: y,
          filename: p,
          meta: s,
          creditLine: d,
        };
  return (
    g &&
      !f &&
      ((b.sourceId = g.id), (b.sourceName = g.name), (b.sourceUrl = g.url)),
    Ge(t, e, {
      tag: u,
      method: "POST",
      timeout: a.timeout || 0,
      uri: ya(o, r),
      headers: a.contentType ? { "Content-Type": a.contentType } : {},
      query: b,
      body: n,
    })
  );
}
function ya(t, e) {
  const r = e === "image" ? "images" : "files",
    n = t.resource;
  if (n) {
    const { type: s, id: o } = n;
    switch (s) {
      case "dataset":
        throw new Error(
          "Assets are not supported for dataset resources, yet. Configure the client with `{projectId: <projectId>, dataset: <datasetId>}` instead.",
        );
      case "canvas":
        return `/canvases/${o}/assets/${r}`;
      case "media-library":
        return `/media-libraries/${o}/upload`;
      case "dashboard":
        return `/dashboards/${o}/assets/${r}`;
      default:
        throw new Error(`Unsupported resource type: ${s.toString()}`);
    }
  }
  const i = Oe(t);
  return `assets/${r}/${i}`;
}
function ma(t, e) {
  return typeof File > "u" || !(e instanceof File)
    ? t
    : Object.assign(
        {
          filename: t.preserveFilename === !1 ? void 0 : e.name,
          contentType: e.type,
        },
        t,
      );
}
var ga = (t, e) =>
  Object.keys(e)
    .concat(Object.keys(t))
    .reduce((r, n) => ((r[n] = typeof t[n] > "u" ? e[n] : t[n]), r), {});
const va = (t, e) =>
    e.reduce((r, n) => (typeof t[n] > "u" || (r[n] = t[n]), r), {}),
  yi = On(() =>
    Zr(
      () => import("./browser-CFhrP-vH.js").then((t) => t.b),
      __vite__mapDeps([5, 2]),
    ),
  ).pipe(
    L(({ default: t }) => t),
    zs(1),
  );
function mi() {
  return function (t) {
    return t.pipe(
      ur((e, r) =>
        e instanceof Bn
          ? Fs(Se({ type: "reconnect" }), Ds(1e3).pipe(ce(() => r)))
          : cr(() => e),
      ),
    );
  };
}
const wa = 14800,
  ba = [
    "includePreviousRevision",
    "includeResult",
    "includeMutations",
    "includeAllVersions",
    "visibility",
    "effectFormat",
    "enableResume",
    "tag",
  ],
  Ea = { includeResult: !0 };
function gi(t, e, r = {}) {
  const {
      url: n,
      token: i,
      withCredentials: s,
      requestTagPrefix: o,
      headers: a,
    } = this.config(),
    u = r.tag && o ? [o, r.tag].join(".") : r.tag,
    c = { ...ga(r, Ea), tag: u },
    h = va(c, ba),
    y = Yn({ query: t, params: e, options: { tag: u, ...h } }),
    d = `${n}${Q(this, "listen", y)}`;
  if (d.length > wa) return cr(() => new Error("Query too large for listener"));
  const p = c.events ? c.events : ["mutation"],
    g = {};
  return (
    s && (g.withCredentials = !0),
    (i || a) &&
      ((g.headers = {}),
      i && (g.headers.Authorization = `Bearer ${i}`),
      a && Object.assign(g.headers, a)),
    Wn(
      () =>
        (typeof EventSource > "u" || g.headers ? yi : Se(EventSource)).pipe(
          L((f) => new f(d, g)),
        ),
      p,
    ).pipe(
      mi(),
      Ae((f) => p.includes(f.type)),
      L((f) => ({ type: f.type, ...("data" in f ? f.data : {}) })),
    )
  );
}
function Ca(t, e) {
  return Ia(typeof t == "function" ? { predicate: t, ...e } : t);
}
function Ia(t) {
  return (e) => {
    let r,
      n = !1;
    const { predicate: i, ...s } = t,
      o = e.pipe(
        Gs((u) => {
          t.predicate(u) && ((n = !0), (r = u));
        }),
        xn(() => {
          ((n = !1), (r = void 0));
        }),
        Tn(s),
      ),
      a = new M((u) => {
        (n && u.next(r), u.complete());
      });
    return Ls(o, a);
  };
}
const Br = "2021-03-25";
var me;
class vi {
  constructor(e) {
    I(this, me);
    C(this, me, e);
  }
  events({ includeDrafts: e = !1, tag: r, waitFor: n } = {}) {
    const {
        projectId: i,
        apiVersion: s,
        token: o,
        withCredentials: a,
        requestTagPrefix: u,
        headers: c,
      } = l(this, me).config(),
      h = s.replace(/^v/, "");
    if (h !== "X" && h < Br)
      throw new Error(
        `The live events API requires API version ${Br} or later. The current API version is ${h}. Please update your API version to use this feature.`,
      );
    if (e && !o && !a)
      throw new Error(
        "The live events API requires a token or withCredentials when 'includeDrafts: true'. Please update your client configuration. The token should have the lowest possible access role.",
      );
    const y = Q(l(this, me), "live/events"),
      d = new URL(l(this, me).getUrl(y, !1)),
      p = r && u ? [u, r].join(".") : r;
    (p && d.searchParams.set("tag", p),
      e && d.searchParams.set("includeDrafts", "true"),
      n && d.searchParams.set("waitFor", n));
    const g = {};
    (e && a && (g.withCredentials = !0),
      ((e && o) || c) &&
        ((g.headers = {}),
        e && o && (g.headers.Authorization = `Bearer ${o}`),
        c && Object.assign(g.headers, c)));
    const f = `${d.href}::${JSON.stringify(g)}`,
      b = Qt.get(f);
    if (b) return b;
    const S = Wn(
        () =>
          (typeof EventSource > "u" || g.headers ? yi : Se(EventSource)).pipe(
            L((w) => new w(d.href, g)),
          ),
        ["message", "restart", "welcome", "reconnect", "goaway"],
      ),
      A = Sa(
        new URL(l(this, me).getUrl("/check/cors", !1)),
        i,
        g.withCredentials === !0,
      ),
      O = S.pipe(
        mi(),
        ce((w) => (w.type === "reconnect" ? A.pipe(ce(() => Se(w))) : Se(w))),
        ur((w) =>
          w instanceof Kt
            ? cr(() => w)
            : A.pipe(
                ce(() => {
                  throw w;
                }),
              ),
        ),
        L((w) => {
          if (w.type === "message") {
            const { data: _, ...q } = w;
            return { ...q, tags: _.tags };
          }
          return w;
        }),
      ).pipe(
        xn(() => Qt.delete(f)),
        Ca({ predicate: (w) => w.type === "welcome" }),
      );
    return (Qt.set(f, O), O);
  }
}
me = new WeakMap();
function Sa(t, e, r) {
  return new M((n) => {
    const i = new AbortController(),
      { signal: s } = i;
    return (
      fetch(t, { method: "GET", mode: "cors", credentials: "omit", signal: s })
        .then((o) => {
          if (!(s.aborted || !o.ok)) return o.json();
        })
        .then((o) => {
          var a, u;
          if (!s.aborted) {
            if (
              r &&
              ((a = o == null ? void 0 : o.result) == null
                ? void 0
                : a.withCredentials) === !1
            ) {
              n.error(new Kt({ projectId: e, credentials: !0 }));
              return;
            }
            if (
              ((u = o == null ? void 0 : o.result) == null
                ? void 0
                : u.allowed) === !1
            ) {
              n.error(new Kt({ projectId: e, credentials: r }));
              return;
            }
            (n.next(), n.complete());
          }
        })
        .catch(() => {
          s.aborted || n.closed || (n.next(), n.complete());
        }),
      () => i.abort()
    );
  });
}
const Qt = new Map();
var U, K;
class $a {
  constructor(e, r) {
    I(this, U);
    I(this, K);
    (C(this, U, e), C(this, K, r));
  }
  create(e, r) {
    return Re(l(this, U), l(this, K), "PUT", e, r);
  }
  edit(e, r) {
    return Re(l(this, U), l(this, K), "PATCH", e, r);
  }
  delete(e) {
    return Re(l(this, U), l(this, K), "DELETE", e);
  }
  list() {
    ee("dataset", l(this, U).config());
    const e = l(this, U).config(),
      r = e.projectId;
    let n = "/datasets";
    return (
      e.useProjectHostname === !1 && (n = `/projects/${r}/datasets`),
      F(l(this, U), l(this, K), { uri: n, tag: null })
    );
  }
  getEmbeddingsSettings(e) {
    return (
      ee("dataset", l(this, U).config()),
      He(e),
      F(l(this, U), l(this, K), { uri: xt(l(this, U), e), tag: null })
    );
  }
  editEmbeddingsSettings(e, r) {
    return (
      ee("dataset", l(this, U).config()),
      He(e),
      F(l(this, U), l(this, K), {
        method: "PUT",
        uri: xt(l(this, U), e),
        body: r,
        tag: null,
      })
    );
  }
}
((U = new WeakMap()), (K = new WeakMap()));
var D, Z;
class Aa {
  constructor(e, r) {
    I(this, D);
    I(this, Z);
    (C(this, D, e), C(this, Z, r));
  }
  create(e, r) {
    return (
      ee("dataset", l(this, D).config()),
      $(Re(l(this, D), l(this, Z), "PUT", e, r))
    );
  }
  edit(e, r) {
    return (
      ee("dataset", l(this, D).config()),
      $(Re(l(this, D), l(this, Z), "PATCH", e, r))
    );
  }
  delete(e) {
    return (
      ee("dataset", l(this, D).config()),
      $(Re(l(this, D), l(this, Z), "DELETE", e))
    );
  }
  list() {
    ee("dataset", l(this, D).config());
    const e = l(this, D).config(),
      r = e.projectId;
    let n = "/datasets";
    return (
      e.useProjectHostname === !1 && (n = `/projects/${r}/datasets`),
      $(F(l(this, D), l(this, Z), { uri: n, tag: null }))
    );
  }
  getEmbeddingsSettings(e) {
    return (
      ee("dataset", l(this, D).config()),
      He(e),
      $(F(l(this, D), l(this, Z), { uri: xt(l(this, D), e), tag: null }))
    );
  }
  editEmbeddingsSettings(e, r) {
    return (
      ee("dataset", l(this, D).config()),
      He(e),
      $(
        F(l(this, D), l(this, Z), {
          method: "PUT",
          uri: xt(l(this, D), e),
          body: r,
          tag: null,
        }),
      )
    );
  }
}
((D = new WeakMap()), (Z = new WeakMap()));
function xt(t, e) {
  const r = t.config();
  return r.useProjectHostname === !1
    ? `/projects/${r.projectId}/datasets/${e}/settings/embeddings`
    : `/datasets/${e}/settings/embeddings`;
}
function Re(t, e, r, n, i) {
  return (
    ee("dataset", t.config()),
    He(n),
    F(t, e, { method: r, uri: `/datasets/${n}`, body: i, tag: null })
  );
}
var Pe, ut;
class wi {
  constructor(e, r) {
    I(this, Pe);
    I(this, ut);
    (C(this, Pe, e), C(this, ut, r));
  }
  getPlaybackInfo(e, r = {}) {
    var h;
    const n = l(this, Pe).config(),
      i =
        (h = n.resource || n["~experimental_resource"]) == null ? void 0 : h.id,
      { instanceId: s, libraryId: o } = Ta(e),
      a = o || i;
    if (!a)
      throw new Error(
        "Could not determine Media Library ID - you need to provide a valid Media Library ID in the client config or a Media Library GDR",
      );
    const u = Ra(s, a),
      c = ja(r);
    return F(l(this, Pe), l(this, ut), { method: "GET", uri: u, query: c });
  }
}
((Pe = new WeakMap()), (ut = new WeakMap()));
var lt, ht;
class Oa {
  constructor(e, r) {
    I(this, lt);
    I(this, ht);
    (C(this, lt, e), C(this, ht, r));
  }
  getPlaybackInfo(e, r = {}) {
    return $(new wi(l(this, lt).observable, l(this, ht)).getPlaybackInfo(e, r));
  }
}
((lt = new WeakMap()), (ht = new WeakMap()));
const _a = /^media-library:(ml[^:]+):([^:]+)$/;
function xa(t) {
  return typeof t == "object" && "_ref" in t;
}
function Ta(t) {
  const e = xa(t) ? t._ref : t,
    r = _a.exec(e);
  if (r) {
    const [, n, i] = r;
    return { libraryId: n, instanceId: i };
  }
  if (typeof t == "string" && t.startsWith("video-")) return { instanceId: t };
  throw new Error(
    `Invalid video asset instance identifier "${e}": must be a valid video instance id or a Global Dataset Reference (GDR) to the video asset in the Media Library`,
  );
}
function Ra(t, e) {
  return `/media-libraries/${e}/video/${t}/playback-info`;
}
function ja(t) {
  const e = {};
  if (t.transformations) {
    const { thumbnail: r, animated: n, storyboard: i } = t.transformations;
    (r &&
      (r.width && (e.thumbnailWidth = r.width),
      r.height && (e.thumbnailHeight = r.height),
      r.time !== void 0 && (e.thumbnailTime = r.time),
      r.fit && (e.thumbnailFit = r.fit),
      r.format && (e.thumbnailFormat = r.format)),
      n &&
        (n.width && (e.animatedWidth = n.width),
        n.height && (e.animatedHeight = n.height),
        n.start !== void 0 && (e.animatedStart = n.start),
        n.end !== void 0 && (e.animatedEnd = n.end),
        n.fps && (e.animatedFps = n.fps),
        n.format && (e.animatedFormat = n.format)),
      i && i.format && (e.storyboardFormat = i.format));
  }
  return (t.expiration && (e.expiration = t.expiration), e);
}
var ke, Me;
class Pa {
  constructor(e, r) {
    I(this, ke);
    I(this, Me);
    (C(this, ke, e), C(this, Me, r));
  }
  list(e) {
    const r = {},
      n = "/projects";
    return (
      (e == null ? void 0 : e.includeMembers) === !1 &&
        (r.includeMembers = "false"),
      (e == null ? void 0 : e.includeFeatures) === !1 &&
        (r.includeFeatures = "false"),
      e != null && e.organizationId && (r.organizationId = e.organizationId),
      e != null &&
        e.onlyExplicitMembership &&
        (r.onlyExplicitMembership = "true"),
      F(l(this, ke), l(this, Me), { uri: n, query: r })
    );
  }
  getById(e) {
    return F(l(this, ke), l(this, Me), { uri: `/projects/${e}` });
  }
}
((ke = new WeakMap()), (Me = new WeakMap()));
var qe, Fe;
class ka {
  constructor(e, r) {
    I(this, qe);
    I(this, Fe);
    (C(this, qe, e), C(this, Fe, r));
  }
  list(e) {
    const r = {},
      n = "/projects";
    return (
      (e == null ? void 0 : e.includeMembers) === !1 &&
        (r.includeMembers = "false"),
      (e == null ? void 0 : e.includeFeatures) === !1 &&
        (r.includeFeatures = "false"),
      e != null && e.organizationId && (r.organizationId = e.organizationId),
      e != null &&
        e.onlyExplicitMembership &&
        (r.onlyExplicitMembership = "true"),
      $(F(l(this, qe), l(this, Fe), { uri: n, query: r }))
    );
  }
  getById(e) {
    return $(F(l(this, qe), l(this, Fe), { uri: `/projects/${e}` }));
  }
}
((qe = new WeakMap()), (Fe = new WeakMap()));
const Wr = oo(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    8,
  ),
  Tt = (t, e) => (e ? gt(t, e) : kn(t));
function Rt(t, { releaseId: e, publishedId: r, document: n }) {
  if (r && n._id) {
    const i = Tt(r, e);
    return (So(i, n), i);
  }
  if (n._id) {
    const i = Ft(n._id),
      s = Dt(n._id);
    if (!i && !s)
      throw new Error(
        `\`${t}()\` requires a document with an \`_id\` that is a version or draft ID`,
      );
    if (e) {
      if (i)
        throw new Error(
          `\`${t}()\` was called with a document ID (\`${n._id}\`) that is a draft ID, but a release ID (\`${e}\`) was also provided.`,
        );
      const o = Mn(n._id);
      if (o !== e)
        throw new Error(
          `\`${t}()\` was called with a document ID (\`${n._id}\`) that is a version ID, but the release ID (\`${e}\`) does not match the document's version ID (\`${o}\`).`,
        );
    }
    return n._id;
  }
  if (r) return Tt(r, e);
  throw new Error(
    `\`${t}()\` requires either a publishedId or a document with an \`_id\``,
  );
}
const Ma = (t, e) => {
    if (
      typeof t == "object" &&
      t !== null &&
      ("releaseId" in t || "metadata" in t)
    ) {
      const { releaseId: r = Wr(), metadata: n = {} } = t;
      return [r, n, e];
    }
    return [Wr(), {}, t];
  },
  bi = (t, e) => {
    const [r, n, i] = Ma(t, e),
      s = { ...n, releaseType: n.releaseType || "undecided" };
    return {
      action: {
        actionType: "sanity.action.release.create",
        releaseId: r,
        metadata: s,
      },
      options: i,
    };
  };
var V, N;
class qa {
  constructor(e, r) {
    I(this, V);
    I(this, N);
    (C(this, V, e), C(this, N, r));
  }
  get({ releaseId: e }, r) {
    return We(l(this, V), l(this, N), `_.releases.${e}`, r);
  }
  create(e, r) {
    const { action: n, options: i } = bi(e, r),
      { releaseId: s, metadata: o } = n;
    return k(l(this, V), l(this, N), n, i).pipe(
      L((a) => ({ ...a, releaseId: s, metadata: o })),
    );
  }
  edit({ releaseId: e, patch: r }, n) {
    const i = {
      actionType: "sanity.action.release.edit",
      releaseId: e,
      patch: r,
    };
    return k(l(this, V), l(this, N), i, n);
  }
  publish({ releaseId: e }, r) {
    const n = { actionType: "sanity.action.release.publish", releaseId: e };
    return k(l(this, V), l(this, N), n, r);
  }
  archive({ releaseId: e }, r) {
    const n = { actionType: "sanity.action.release.archive", releaseId: e };
    return k(l(this, V), l(this, N), n, r);
  }
  unarchive({ releaseId: e }, r) {
    const n = { actionType: "sanity.action.release.unarchive", releaseId: e };
    return k(l(this, V), l(this, N), n, r);
  }
  schedule({ releaseId: e, publishAt: r }, n) {
    const i = {
      actionType: "sanity.action.release.schedule",
      releaseId: e,
      publishAt: r,
    };
    return k(l(this, V), l(this, N), i, n);
  }
  unschedule({ releaseId: e }, r) {
    const n = { actionType: "sanity.action.release.unschedule", releaseId: e };
    return k(l(this, V), l(this, N), n, r);
  }
  delete({ releaseId: e }, r) {
    const n = { actionType: "sanity.action.release.delete", releaseId: e };
    return k(l(this, V), l(this, N), n, r);
  }
  fetchDocuments({ releaseId: e }, r) {
    return ei(l(this, V), l(this, N), e, r);
  }
}
((V = new WeakMap()), (N = new WeakMap()));
var H, B;
class Fa {
  constructor(e, r) {
    I(this, H);
    I(this, B);
    (C(this, H, e), C(this, B, r));
  }
  get({ releaseId: e }, r) {
    return $(We(l(this, H), l(this, B), `_.releases.${e}`, r));
  }
  async create(e, r) {
    const { action: n, options: i } = bi(e, r),
      { releaseId: s, metadata: o } = n;
    return {
      ...(await $(k(l(this, H), l(this, B), n, i))),
      releaseId: s,
      metadata: o,
    };
  }
  edit({ releaseId: e, patch: r }, n) {
    const i = {
      actionType: "sanity.action.release.edit",
      releaseId: e,
      patch: r,
    };
    return $(k(l(this, H), l(this, B), i, n));
  }
  publish({ releaseId: e }, r) {
    const n = { actionType: "sanity.action.release.publish", releaseId: e };
    return $(k(l(this, H), l(this, B), n, r));
  }
  archive({ releaseId: e }, r) {
    const n = { actionType: "sanity.action.release.archive", releaseId: e };
    return $(k(l(this, H), l(this, B), n, r));
  }
  unarchive({ releaseId: e }, r) {
    const n = { actionType: "sanity.action.release.unarchive", releaseId: e };
    return $(k(l(this, H), l(this, B), n, r));
  }
  schedule({ releaseId: e, publishAt: r }, n) {
    const i = {
      actionType: "sanity.action.release.schedule",
      releaseId: e,
      publishAt: r,
    };
    return $(k(l(this, H), l(this, B), i, n));
  }
  unschedule({ releaseId: e }, r) {
    const n = { actionType: "sanity.action.release.unschedule", releaseId: e };
    return $(k(l(this, H), l(this, B), n, r));
  }
  delete({ releaseId: e }, r) {
    const n = { actionType: "sanity.action.release.delete", releaseId: e };
    return $(k(l(this, H), l(this, B), n, r));
  }
  fetchDocuments({ releaseId: e }, r) {
    return $(ei(l(this, H), l(this, B), e, r));
  }
}
((H = new WeakMap()), (B = new WeakMap()));
var ft, dt;
class Da {
  constructor(e, r) {
    I(this, ft);
    I(this, dt);
    (C(this, ft, e), C(this, dt, r));
  }
  getById(e) {
    return F(l(this, ft), l(this, dt), { uri: `/users/${e}` });
  }
}
((ft = new WeakMap()), (dt = new WeakMap()));
var pt, yt;
class La {
  constructor(e, r) {
    I(this, pt);
    I(this, yt);
    (C(this, pt, e), C(this, yt, r));
  }
  getById(e) {
    return $(F(l(this, pt), l(this, yt), { uri: `/users/${e}` }));
  }
}
((pt = new WeakMap()), (yt = new WeakMap()));
var oe, De, R;
const Mt = class Mt {
  constructor(e, r = Ke) {
    E(this, "assets");
    E(this, "datasets");
    E(this, "live");
    E(this, "mediaLibrary");
    E(this, "projects");
    E(this, "users");
    E(this, "agent");
    E(this, "releases");
    I(this, oe);
    I(this, De);
    I(this, R);
    E(this, "listen", gi);
    (this.config(r), C(this, De, e));
    const n = r._requestHandler;
    (C(
      this,
      R,
      n
        ? (() => {
            let i;
            return (s, o) => {
              const a = s;
              return (
                i || (i = new jt(e, { ...r, _requestHandler: void 0 })),
                n(a, (u) => e(u, o), i)
              );
            };
          })()
        : e,
    ),
      (this.assets = new da(this, l(this, R))),
      (this.datasets = new $a(this, l(this, R))),
      (this.live = new vi(this)),
      (this.mediaLibrary = { video: new wi(this, l(this, R)) }),
      (this.projects = new Pa(this, l(this, R))),
      (this.users = new Da(this, l(this, R))),
      (this.agent = { action: new ha(this, l(this, R)) }),
      (this.releases = new qa(this, l(this, R))));
  }
  clone() {
    return new Mt(l(this, De), this.config());
  }
  config(e) {
    if (e === void 0) return { ...l(this, oe) };
    if (l(this, oe) && l(this, oe).allowReconfigure === !1)
      throw new Error(
        "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client",
      );
    return (C(this, oe, Hn(e, l(this, oe) || {})), this);
  }
  withConfig(e) {
    const r = this.config();
    return new Mt(l(this, De), {
      ...r,
      ...e,
      stega: {
        ...(r.stega || {}),
        ...(typeof (e == null ? void 0 : e.stega) == "boolean"
          ? { enabled: e.stega }
          : (e == null ? void 0 : e.stega) || {}),
      },
    });
  }
  fetch(e, r, n) {
    return Xn(this, l(this, R), l(this, oe).stega, e, r, n);
  }
  getDocument(e, r) {
    if ((r == null ? void 0 : r.includeAllVersions) === !0)
      return We(this, l(this, R), e, { ...r, includeAllVersions: !0 });
    const n = {
      signal: r == null ? void 0 : r.signal,
      tag: r == null ? void 0 : r.tag,
      releaseId: r == null ? void 0 : r.releaseId,
      ...(r && "includeAllVersions" in r ? { includeAllVersions: !1 } : {}),
    };
    return We(this, l(this, R), e, n);
  }
  getDocuments(e, r) {
    return Kn(this, l(this, R), e, r);
  }
  documentsExists(e, r) {
    return Zn(this, l(this, R), e, r);
  }
  create(e, r) {
    return Vt(this, l(this, R), e, "create", r);
  }
  createIfNotExists(e, r) {
    return ti(this, l(this, R), e, r);
  }
  createOrReplace(e, r) {
    return ri(this, l(this, R), e, r);
  }
  createVersion(
    {
      document: e,
      publishedId: r,
      releaseId: n,
      baseId: i,
      ifBaseRevisionId: s,
    },
    o,
  ) {
    if (!e) return ii(this, l(this, R), r, i, n, s, o);
    const a = Rt("createVersion", {
        document: e,
        publishedId: r,
        releaseId: n,
      }),
      u = { ...e, _id: a },
      c = r || Lt(e._id);
    return ni(this, l(this, R), u, c, o);
  }
  delete(e, r) {
    return si(this, l(this, R), e, r);
  }
  discardVersion({ releaseId: e, publishedId: r }, n, i) {
    const s = Tt(r, e);
    return oi(this, l(this, R), s, n, i);
  }
  replaceVersion({ document: e, publishedId: r, releaseId: n }, i) {
    const s = Rt("replaceVersion", {
        document: e,
        publishedId: r,
        releaseId: n,
      }),
      o = { ...e, _id: s };
    return ai(this, l(this, R), o, i);
  }
  unpublishVersion({ releaseId: e, publishedId: r }, n) {
    const i = gt(r, e);
    return ci(this, l(this, R), i, r, n);
  }
  mutate(e, r) {
    return ui(this, l(this, R), e, r);
  }
  patch(e, r) {
    return new $e(e, r, this);
  }
  transaction(e) {
    return new _t(e, this);
  }
  action(e, r) {
    return k(this, l(this, R), e, r);
  }
  request(e) {
    return F(this, l(this, R), e);
  }
  getUrl(e, r) {
    return hr(this, e, r);
  }
  getDataUrl(e, r) {
    return Q(this, e, r);
  }
};
((oe = new WeakMap()), (De = new WeakMap()), (R = new WeakMap()));
let Zt = Mt;
var ae, Le, x;
const Ze = class Ze {
  constructor(e, r = Ke) {
    E(this, "assets");
    E(this, "datasets");
    E(this, "live");
    E(this, "mediaLibrary");
    E(this, "projects");
    E(this, "users");
    E(this, "agent");
    E(this, "releases");
    E(this, "observable");
    I(this, ae);
    I(this, Le);
    I(this, x);
    E(this, "listen", gi);
    (this.config(r), C(this, Le, e));
    const n = r._requestHandler;
    (C(
      this,
      x,
      n
        ? (() => {
            let i;
            return (s, o) => {
              const a = s;
              return (
                i || (i = new Ze(e, { ...r, _requestHandler: void 0 })),
                n(a, (u) => e(u, o), i)
              );
            };
          })()
        : e,
    ),
      (this.assets = new pa(this, l(this, x))),
      (this.datasets = new Aa(this, l(this, x))),
      (this.live = new vi(this)),
      (this.mediaLibrary = { video: new Oa(this, l(this, x)) }),
      (this.projects = new ka(this, l(this, x))),
      (this.users = new La(this, l(this, x))),
      (this.agent = { action: new fa(this, l(this, x)) }),
      (this.releases = new Fa(this, l(this, x))),
      (this.observable = new Zt(e, r)));
  }
  clone() {
    return new Ze(l(this, Le), this.config());
  }
  config(e) {
    if (e === void 0) return { ...l(this, ae) };
    if (l(this, ae) && l(this, ae).allowReconfigure === !1)
      throw new Error(
        "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client",
      );
    return (
      this.observable && this.observable.config(e),
      C(this, ae, Hn(e, l(this, ae) || {})),
      this
    );
  }
  withConfig(e) {
    const r = this.config();
    return new Ze(l(this, Le), {
      ...r,
      ...e,
      stega: {
        ...(r.stega || {}),
        ...(typeof (e == null ? void 0 : e.stega) == "boolean"
          ? { enabled: e.stega }
          : (e == null ? void 0 : e.stega) || {}),
      },
    });
  }
  fetch(e, r, n) {
    return $(Xn(this, l(this, x), l(this, ae).stega, e, r, n));
  }
  getDocument(e, r) {
    if ((r == null ? void 0 : r.includeAllVersions) === !0)
      return $(We(this, l(this, x), e, { ...r, includeAllVersions: !0 }));
    const n = {
      signal: r == null ? void 0 : r.signal,
      tag: r == null ? void 0 : r.tag,
      releaseId: r == null ? void 0 : r.releaseId,
      ...(r && "includeAllVersions" in r ? { includeAllVersions: !1 } : {}),
    };
    return $(We(this, l(this, x), e, n));
  }
  getDocuments(e, r) {
    return $(Kn(this, l(this, x), e, r));
  }
  documentsExists(e, r) {
    return $(Zn(this, l(this, x), e, r));
  }
  create(e, r) {
    return $(Vt(this, l(this, x), e, "create", r));
  }
  createIfNotExists(e, r) {
    return $(ti(this, l(this, x), e, r));
  }
  createOrReplace(e, r) {
    return $(ri(this, l(this, x), e, r));
  }
  createVersion(
    {
      document: e,
      publishedId: r,
      releaseId: n,
      baseId: i,
      ifBaseRevisionId: s,
    },
    o,
  ) {
    if (!e) return Bt(ii(this, l(this, x), r, i, n, s, o));
    const a = Rt("createVersion", {
        document: e,
        publishedId: r,
        releaseId: n,
      }),
      u = { ...e, _id: a },
      c = r || Lt(e._id);
    return Bt(ni(this, l(this, x), u, c, o));
  }
  delete(e, r) {
    return $(si(this, l(this, x), e, r));
  }
  discardVersion({ releaseId: e, publishedId: r }, n, i) {
    const s = Tt(r, e);
    return $(oi(this, l(this, x), s, n, i));
  }
  replaceVersion({ document: e, publishedId: r, releaseId: n }, i) {
    const s = Rt("replaceVersion", {
        document: e,
        publishedId: r,
        releaseId: n,
      }),
      o = { ...e, _id: s };
    return Bt(ai(this, l(this, x), o, i));
  }
  unpublishVersion({ releaseId: e, publishedId: r }, n) {
    const i = gt(r, e);
    return $(ci(this, l(this, x), i, r, n));
  }
  mutate(e, r) {
    return $(ui(this, l(this, x), e, r));
  }
  patch(e, r) {
    return new ge(e, r, this);
  }
  transaction(e) {
    return new Ot(e, this);
  }
  action(e, r) {
    return $(k(this, l(this, x), e, r));
  }
  request(e) {
    return $(F(this, l(this, x), e));
  }
  dataRequest(e, r, n) {
    return $(_e(this, l(this, x), e, r, n));
  }
  getUrl(e, r) {
    return hr(this, e, r);
  }
  getDataUrl(e, r) {
    return Q(this, e, r);
  }
};
((ae = new WeakMap()), (Le = new WeakMap()), (x = new WeakMap()));
let jt = Ze;
function Ua(t, e) {
  return {
    requester: Dr(t),
    createClient: (r) => {
      const n = Dr(t, { ignoreWarnings: r.ignoreWarnings });
      return new e(
        (i, s) =>
          (s || n)({
            maxRedirects: 0,
            maxRetries: r.maxRetries,
            retryDelay: r.retryDelay,
            lineage: r.lineage,
            ...i,
          }),
        r,
      );
    },
  };
}
var Va = [];
const Na = Ua(Va, jt),
  Ha = Na.createClient,
  zr = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
function Ba(t) {
  const [, e, r, n] = t.split("-");
  if (!e || !r || !n)
    throw new Error(
      `Malformed asset _ref '${t}'. Expected an id like "${zr}".`,
    );
  const [i, s] = r.split("x"),
    o = +i,
    a = +s;
  if (!(isFinite(o) && isFinite(a)))
    throw new Error(
      `Malformed asset _ref '${t}'. Expected an id like "${zr}".`,
    );
  return { id: e, width: o, height: a, format: n };
}
const Wa = (t) => {
    const e = t;
    return e ? typeof e._ref == "string" : !1;
  },
  za = (t) => {
    const e = t;
    return e ? typeof e._id == "string" : !1;
  },
  Ga = (t) => {
    const e = t;
    return e && e.asset ? typeof e.asset.url == "string" : !1;
  },
  Qa = (t) => {
    if (typeof t == "object" && t !== null) {
      const e = t;
      return e._upload && (!e.asset || !e.asset._ref);
    }
    return !1;
  };
function Ja(t) {
  if (!t) return null;
  let e;
  if (typeof t == "string" && Ya(t)) e = { asset: { _ref: Gr(t) } };
  else if (typeof t == "string") e = { asset: { _ref: t } };
  else if (Wa(t)) e = { asset: t };
  else if (za(t)) e = { asset: { _ref: t._id || "" } };
  else if (Ga(t)) e = { asset: { _ref: Gr(t.asset.url) } };
  else if (typeof t.asset == "object") e = { ...t };
  else return null;
  const r = t;
  return (
    r.crop && (e.crop = r.crop),
    r.hotspot && (e.hotspot = r.hotspot),
    Xa(e)
  );
}
function Ya(t) {
  return /^https?:\/\//.test(`${t}`);
}
function Gr(t) {
  return `image-${t.split("/").slice(-1)[0]}`.replace(/\.([a-z]+)$/, "-$1");
}
function Xa(t) {
  if (t.crop && t.hotspot) return t;
  const e = { ...t };
  return (
    e.crop || (e.crop = { left: 0, top: 0, bottom: 0, right: 0 }),
    e.hotspot || (e.hotspot = { x: 0.5, y: 0.5, height: 1, width: 1 }),
    e
  );
}
const Ei = [
  ["width", "w"],
  ["height", "h"],
  ["format", "fm"],
  ["download", "dl"],
  ["blur", "blur"],
  ["sharpen", "sharp"],
  ["invert", "invert"],
  ["orientation", "or"],
  ["minHeight", "min-h"],
  ["maxHeight", "max-h"],
  ["minWidth", "min-w"],
  ["maxWidth", "max-w"],
  ["quality", "q"],
  ["fit", "fit"],
  ["crop", "crop"],
  ["saturation", "sat"],
  ["auto", "auto"],
  ["dpr", "dpr"],
  ["pad", "pad"],
  ["frame", "frame"],
];
function Ka(t) {
  let e = { ...(t || {}) };
  const r = e.source;
  delete e.source;
  const n = Ja(r);
  if (!n) {
    if (r && Qa(r))
      return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=";
    throw new Error(
      `Unable to resolve image URL from source (${JSON.stringify(r)})`,
    );
  }
  const i = n.asset._ref || n.asset._id || "",
    s = Ba(i),
    o = Math.round(n.crop.left * s.width),
    a = Math.round(n.crop.top * s.height),
    u = {
      left: o,
      top: a,
      width: Math.round(s.width - n.crop.right * s.width - o),
      height: Math.round(s.height - n.crop.bottom * s.height - a),
    },
    c = (n.hotspot.height * s.height) / 2,
    h = (n.hotspot.width * s.width) / 2,
    y = n.hotspot.x * s.width,
    d = n.hotspot.y * s.height,
    p = { left: y - h, top: d - c, right: y + h, bottom: d + c };
  return (
    e.rect ||
      e.focalPoint ||
      e.ignoreImageParams ||
      e.crop ||
      (e = { ...e, ...ec({ crop: u, hotspot: p }, e) }),
    Za({ ...e, asset: s })
  );
}
function Za(t) {
  const e = (t.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""),
    r = t.vanityName ? `/${t.vanityName}` : "",
    n = `${t.asset.id}-${t.asset.width}x${t.asset.height}.${t.asset.format}${r}`;
  let i;
  t.mediaLibraryId
    ? (i = `${e}/media-libraries/${t.mediaLibraryId}/images/${n}`)
    : t.canvasId
      ? (i = `${e}/images/canvases/${t.canvasId}/${n}`)
      : (i = `${e}/images/${t.projectId}/${t.dataset}/${n}`);
  const s = [];
  if (t.rect) {
    const { left: a, top: u, width: c, height: h } = t.rect;
    (a !== 0 || u !== 0 || h !== t.asset.height || c !== t.asset.width) &&
      s.push(`rect=${a},${u},${c},${h}`);
  }
  (t.bg && s.push(`bg=${t.bg}`),
    t.focalPoint &&
      (s.push(`fp-x=${t.focalPoint.x}`), s.push(`fp-y=${t.focalPoint.y}`)));
  const o = [t.flipHorizontal && "h", t.flipVertical && "v"]
    .filter(Boolean)
    .join("");
  return (
    o && s.push(`flip=${o}`),
    Ei.forEach((a) => {
      const [u, c] = a;
      typeof t[u] < "u"
        ? s.push(`${c}=${encodeURIComponent(t[u])}`)
        : typeof t[c] < "u" && s.push(`${c}=${encodeURIComponent(t[c])}`);
    }),
    s.length === 0 ? i : `${i}?${s.join("&")}`
  );
}
function ec(t, e) {
  let r;
  const n = e.width,
    i = e.height;
  if (!(n && i)) return { width: n, height: i, rect: t.crop };
  const s = t.crop,
    o = t.hotspot,
    a = n / i;
  if (s.width / s.height > a) {
    const u = Math.round(s.height),
      c = Math.round(u * a),
      h = Math.max(0, Math.round(s.top)),
      y = Math.round((o.right - o.left) / 2 + o.left);
    let d = Math.max(0, Math.round(y - c / 2));
    (d < s.left
      ? (d = s.left)
      : d + c > s.left + s.width && (d = s.left + s.width - c),
      (r = { left: d, top: h, width: c, height: u }));
  } else {
    const u = s.width,
      c = Math.round(u / a),
      h = Math.max(0, Math.round(s.left)),
      y = Math.round((o.bottom - o.top) / 2 + o.top);
    let d = Math.max(0, Math.round(y - c / 2));
    (d < s.top
      ? (d = s.top)
      : d + c > s.top + s.height && (d = s.top + s.height - c),
      (r = { left: h, top: d, width: u, height: c }));
  }
  return { width: n, height: i, rect: r };
}
const tc = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
  rc = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
  nc = ["format"];
function ic(t) {
  return t && "config" in t ? typeof t.config == "function" : !1;
}
function sc(t) {
  return t && "clientConfig" in t ? typeof t.clientConfig == "object" : !1;
}
function Qr(t) {
  const { apiHost: e, projectId: r, dataset: n } = t,
    i = {
      baseUrl: (e || "https://api.sanity.io").replace(
        /^https:\/\/api\./,
        "https://cdn.",
      ),
    },
    s = t.resource ?? t["~experimental_resource"];
  if ((s == null ? void 0 : s.type) === "media-library") {
    if (typeof s.id != "string" || s.id.length === 0)
      throw new Error('Media library clients must include an id in "resource"');
    return { ...i, mediaLibraryId: s.id };
  }
  if ((s == null ? void 0 : s.type) === "canvas") {
    if (typeof s.id != "string" || s.id.length === 0)
      throw new Error('Canvas clients must include an id in "resource"');
    return { ...i, canvasId: s.id };
  }
  if ((s == null ? void 0 : s.type) === "dataset") {
    if (typeof s.id != "string" || s.id.length === 0)
      throw new Error('Dataset clients must include an id in "resource"');
    const [o, a] = s.id.split(".");
    if (!o || !a)
      throw new Error(
        'Dataset resource id must be in the format "projectId.dataset", got: ' +
          s.id,
      );
    return { ...i, projectId: o, dataset: a };
  }
  return { ...i, projectId: r, dataset: n };
}
function oc(t) {
  const e = Ei;
  for (const r of e) {
    const [n, i] = r;
    if (t === n || t === i) return n;
  }
  return t;
}
function Ci(t) {
  let e = {};
  return (
    ic(t)
      ? (e = Qr(t.config()))
      : sc(t)
        ? (e = Qr(t.clientConfig))
        : (e = t || {}),
    e
  );
}
function ac(t, e) {
  const r = Ci(e);
  return new t(null, r);
}
function cc(t) {
  return ac(Pt, t);
}
function uc(t, e) {
  const r = e.baseUrl || t.baseUrl,
    n = { baseUrl: r };
  for (const i in e)
    if (e.hasOwnProperty(i)) {
      const s = oc(i);
      n[s] = e[i];
    }
  return { baseUrl: r, ...n };
}
class Pt {
  constructor(e, r) {
    E(this, "options");
    this.options = e
      ? { ...(e.options || {}), ...(r || {}) }
      : { ...(r || {}) };
  }
  withOptions(e) {
    const r = uc(this.options, e);
    return new Pt(this, r);
  }
  image(e) {
    return this.withOptions({ source: e });
  }
  dataset(e) {
    return this.withOptions({ dataset: e });
  }
  projectId(e) {
    return this.withOptions({ projectId: e });
  }
  withClient(e) {
    const r = Ci(e),
      n = { ...this.options };
    return (
      delete n.baseUrl,
      delete n.projectId,
      delete n.dataset,
      delete n.mediaLibraryId,
      delete n.canvasId,
      new Pt(null, { ...r, ...n })
    );
  }
  bg(e) {
    return this.withOptions({ bg: e });
  }
  dpr(e) {
    return this.withOptions(e && e !== 1 ? { dpr: e } : {});
  }
  width(e) {
    return this.withOptions({ width: e });
  }
  height(e) {
    return this.withOptions({ height: e });
  }
  focalPoint(e, r) {
    return this.withOptions({ focalPoint: { x: e, y: r } });
  }
  maxWidth(e) {
    return this.withOptions({ maxWidth: e });
  }
  minWidth(e) {
    return this.withOptions({ minWidth: e });
  }
  maxHeight(e) {
    return this.withOptions({ maxHeight: e });
  }
  minHeight(e) {
    return this.withOptions({ minHeight: e });
  }
  size(e, r) {
    return this.withOptions({ width: e, height: r });
  }
  blur(e) {
    return this.withOptions({ blur: e });
  }
  sharpen(e) {
    return this.withOptions({ sharpen: e });
  }
  rect(e, r, n, i) {
    return this.withOptions({ rect: { left: e, top: r, width: n, height: i } });
  }
  format(e) {
    return this.withOptions({ format: e });
  }
  invert(e) {
    return this.withOptions({ invert: e });
  }
  orientation(e) {
    return this.withOptions({ orientation: e });
  }
  quality(e) {
    return this.withOptions({ quality: e });
  }
  forceDownload(e) {
    return this.withOptions({ download: e });
  }
  flipHorizontal() {
    return this.withOptions({ flipHorizontal: !0 });
  }
  flipVertical() {
    return this.withOptions({ flipVertical: !0 });
  }
  ignoreImageParams() {
    return this.withOptions({ ignoreImageParams: !0 });
  }
  fit(e) {
    if (tc.indexOf(e) === -1) throw new Error(`Invalid fit mode "${e}"`);
    return this.withOptions({ fit: e });
  }
  crop(e) {
    if (rc.indexOf(e) === -1) throw new Error(`Invalid crop mode "${e}"`);
    return this.withOptions({ crop: e });
  }
  saturation(e) {
    return this.withOptions({ saturation: e });
  }
  auto(e) {
    if (nc.indexOf(e) === -1) throw new Error(`Invalid auto mode "${e}"`);
    return this.withOptions({ auto: e });
  }
  pad(e) {
    return this.withOptions({ pad: e });
  }
  vanityName(e) {
    return this.withOptions({ vanityName: e });
  }
  frame(e) {
    if (e !== 1) throw new Error(`Invalid frame value "${e}"`);
    return this.withOptions({ frame: e });
  }
  url() {
    return Ka(this.options);
  }
  toString() {
    return this.url();
  }
}
function lc(t) {
  let e = !1,
    r;
  return (...n) => (e || ((r = t(...n)), (e = !0)), r);
}
const hc = (t) =>
    lc((...e) => {
      console.warn(t.join(" "), ...e);
    }),
  fc = hc([
    "The default export of @sanity/image-url has been deprecated. Use the named export `createImageUrlBuilder` instead.",
  ]);
function dc(t) {
  return function (e) {
    return (fc(), t(e));
  };
}
const pc = dc(cc),
  Ii = "uh01905c",
  yc = "production",
  Si = !!Ii,
  kt = Si
    ? Ha({ projectId: Ii, dataset: yc, apiVersion: "2024-01-01", useCdn: !0 })
    : null,
  Jr = kt ? pc(kt) : null;
function Yr(t) {
  if (!Jr || !t) {
    const e = {
      width: () => e,
      height: () => e,
      quality: () => e,
      url: () => "",
    };
    return e;
  }
  return Jr.image(t).auto("format").quality(75);
}
const xe = "order(orderRank asc, order asc)",
  mc = `{
  "projects": *[_type == "project"] | ${xe}{
    "slug": slug.current, name, company, mark, year, type, tagline, live, order,
    meta, metrics, sections, results, gallery, heroImage, intro, quote, showcase, card, blocks,
    accent, accentSoft
  },
  "copy": {
    "home": *[_type == "homeCopy"][0],
    "work": *[_type == "workCopy"][0],
    "ai": *[_type == "aiCopy"][0],
    "about": *[_type == "aboutCopy"][0],
    "contact": *[_type == "contactCopy"][0],
    "notFound": *[_type == "notFoundCopy"][0],
    "privacy": *[_type == "privacyCopy"][0]
  },
  "settings": *[_type == "siteSettings"][0]{
    stats, email, availability, location, disciplines, responseTime, socials, lifeShots, mosaic,
    mosaicLead, nav, navItems, navCta, streetAhead
  },
  "focus": *[_type == "focus"] | ${xe}{ yr, unit, title, desc, iso },
  "tools": *[_type == "aiTool"] | ${xe}{ "id": slug.current, name, opt, ext, kind },
  "builds": *[_type == "aiBuild"] | ${xe}{
    "id": slug.current, title, year, tag, cmd, desc, purpose, tags, stack, flow, facts, run
  },
  "work": *[_type == "workPost"] | ${xe}{ name, date, badge, fx, lead, full, tags, reacts, comments, image },
  "companies": *[_type == "company"] | ${xe}{ name, tag, span, role, note, logo },
  "screenshots": *[_type == "screenshot"] | order(order asc){ "id": _id, title, tag, "group": group, tone, order, "createdAt": _createdAt, image }
}`,
  W = (t, e = 1600, r) =>
    t ? (r ? Yr(t).width(e).quality(r) : Yr(t).width(e)).url() : void 0,
  Xr = (t) => {
    const e = /-(\d+)x(\d+)-/.exec(t || "");
    return e ? Number(e[1]) / Number(e[2]) : void 0;
  };
function gc(t) {
  var n;
  const e = (i) => ({
      src: W(i == null ? void 0 : i.image, 1800),
      cap: (i == null ? void 0 : i.cap) || "",
      ...(i != null && i.contain ? { contain: !0 } : {}),
    }),
    r = [];
  for (const i of t || [])
    if ((i == null ? void 0 : i._type) === "chapter") {
      const s = (i.body || []).filter((o) => o && o.trim());
      (i.title || s.length) &&
        r.push({
          k: "section",
          eye: i.eye || "",
          title: i.title || "",
          body: s,
          ...((n = i.tags) != null && n.length ? { tags: i.tags } : {}),
        });
    } else if ((i == null ? void 0 : i._type) === "figure")
      i.image && r.push({ k: "figure", ...e(i) });
    else if ((i == null ? void 0 : i._type) === "gallery") {
      const s = (i.items || [])
        .filter((o) => (o == null ? void 0 : o.image))
        .map(e);
      s.length && r.push({ k: s.length >= 3 ? "trio" : "duo", items: s });
    } else if ((i == null ? void 0 : i._type) === "metricsRow") {
      const s = (i.items || [])
        .filter((o) => (o == null ? void 0 : o.value))
        .map((o) => [o.value, o.label || ""]);
      s.length && r.push({ k: "metrics", items: s });
    } else
      (i == null ? void 0 : i._type) === "pullQuote" &&
        i.text &&
        r.push({ k: "quote", text: i.text, who: i.who || "" });
  return r;
}
function vc(t) {
  var n, i;
  const e = {},
    r = [];
  for (const s of t || []) {
    if (!(s != null && s.slug)) continue;
    r.push(s.slug);
    const o = (s.sections || []).map((c) => [
        c.kicker,
        c.title,
        c.body,
        W(c.image, 1800),
        c.cap || "",
      ]),
      a = gc(s.blocks),
      u = (s.showcase || [])
        .filter((c) => (c == null ? void 0 : c.image))
        .map((c, h) => ({
          id: `${s.slug}-sc-${h}`,
          label: c.label || "",
          span: c.span ? "full" : void 0,
          url: W(c.image, 1800),
        }));
    e[s.slug] = {
      name: s.name,
      company: s.company,
      mark: s.mark,
      year: s.year,
      type: s.type,
      tagline: s.tagline,
      meta: (s.meta || []).map((c) => [c.label, c.value]),
      live: s.live || void 0,
      metrics:
        (n = s.metrics) != null && n.length
          ? s.metrics.map((c) => [c.value, c.label])
          : null,
      sections: o,
      ...(o.length ? { story: o } : {}),
      ...(u.length ? { showcase: u } : {}),
      ...(a.length ? { blocks: a } : {}),
      ...(s.accent ? { accent: s.accent } : {}),
      ...(s.accentSoft ? { accentSoft: s.accentSoft } : {}),
      results: s.results || [],
      ...(s.intro ? { intro: s.intro } : {}),
      ...((i = s.quote) != null && i.text
        ? { quote: { text: s.quote.text, who: s.quote.who || "" } }
        : {}),
      hero: W(s.heroImage),
      gallery: (s.gallery || []).map((c) => W(c)).filter(Boolean),
    };
  }
  return { PROJECTS: e, PROJECT_ORDER: r };
}
async function wc() {
  var t, e, r, n, i, s, o, a, u, c, h, y, d, p, g, f, b, S, A, O;
  if (!Si || !kt) return {};
  try {
    const w = await kt.fetch(mc),
      { PROJECTS: _, PROJECT_ORDER: q } = vc(w.projects),
      T = {};
    Object.keys(_).length && ((T.PROJECTS = _), (T.PROJECT_ORDER = q));
    const ve = (w.projects || [])
      .filter((m) => {
        var v;
        return (
          (m == null ? void 0 : m.slug) &&
          ((v = m == null ? void 0 : m.card) == null ? void 0 : v.image)
        );
      })
      .map((m) => {
        var v, J;
        return {
          id: m.slug,
          name: m.name,
          date: m.card.date || m.year || "",
          badge: m.card.badge || "Case study",
          kind: m.card.kind || "",
          fx: m.card.fx || "rings",
          logo: m.card.logo ? W(m.card.logo, 160) : void 0,
          image: W(m.card.image, 1600),
          ar:
            Xr(
              (J = (v = m.card.image) == null ? void 0 : v.asset) == null
                ? void 0
                : J._ref,
            ) || 1.6,
          lead: m.card.lead || m.tagline || "",
          tags: m.card.tags || [],
          reacts: m.card.reacts || "",
          comments: m.card.comments || "",
          href: `/work/${m.slug}`,
        };
      });
    if (
      (ve.length && (T.WORK_FEED = ve),
      (e = (t = w.settings) == null ? void 0 : t.stats) != null &&
        e.length &&
        (T.STATS = w.settings.stats.map((m) => ({ v: m.v, l: m.l }))),
      (r = w.focus) != null && r.length && (T.FOCUS = w.focus),
      (n = w.tools) != null && n.length)
    ) {
      const m = new Map(Oi.map((v) => [v.id, v]));
      T.AI_TOOLS = w.tools.map((v) => {
        const J = Object.fromEntries(
          Object.entries(v).filter(([, X]) => X != null && X !== ""),
        );
        return { ...(m.get(v.id) ?? {}), ...J };
      });
    }
    if ((i = w.builds) != null && i.length) {
      const m = (v, J, X) =>
        (v || []).map((G) => [
          (G == null ? void 0 : G[J]) ?? "",
          (G == null ? void 0 : G[X]) ?? "",
        ]);
      T.AI_WORK = w.builds
        .filter((v) => (v == null ? void 0 : v.id))
        .map((v) => ({
          id: v.id,
          title: v.title || "",
          year: v.year || "",
          tag: v.tag || "",
          cmd: v.cmd || "",
          desc: v.desc || "",
          purpose: v.purpose || "",
          tags: v.tags || [],
          stack: v.stack || [],
          flow: m(v.flow, "label", "detail"),
          facts: m(v.facts, "value", "label"),
          run: m(v.run, "level", "text"),
        }));
    }
    ((s = w.work) != null &&
      s.length &&
      (T.WORK = w.work.map((m) => ({
        ...m,
        ...(m.image ? { image: W(m.image, 1600) } : {}),
        ...(m.full
          ? {
              full: m.full.map((v) =>
                typeof v == "string"
                  ? v
                  : (v == null ? void 0 : v._type) === "para"
                    ? v.text || ""
                    : (v == null ? void 0 : v.items) || [],
              ),
            }
          : {}),
      }))),
      (o = w.companies) != null &&
        o.length &&
        (T.COMPANIES = w.companies.map((m) => ({
          ...m,
          logo: m.logo ? W(m.logo, 240) : void 0,
        }))),
      (a = w.screenshots) != null &&
        a.length &&
        (T.SCREENSHOTS = w.screenshots
          .filter((m) => (m == null ? void 0 : m.image))
          .map((m) => ({
            id: m.id,
            title: m.title || "",
            tag: m.tag || "",
            group: m.group === "apps" || m.group === "mobile" ? m.group : "web",
            url: W(m.image, 1200, 80),
            full: W(m.image, 2800, 90),
            order: m.order ?? 0,
            createdAt: m.createdAt,
            tone: typeof m.tone == "number" ? m.tone : void 0,
          }))));
    const P = w.settings || {},
      wt = {};
    for (const m of [
      "email",
      "availability",
      "location",
      "disciplines",
      "responseTime",
    ])
      P[m] && (wt[m] = P[m]);
    ((u = P.socials) != null &&
      u.length &&
      (wt.socials = P.socials
        .filter(
          (m) => (m == null ? void 0 : m.label) && (m == null ? void 0 : m.url),
        )
        .map((m) => ({ label: m.label, url: m.url }))),
      Object.keys(wt).length && (T.SITE = wt));
    const bt = {};
    for (const m of [
      "home",
      "work",
      "ai",
      "about",
      "contact",
      "notFound",
      "privacy",
    ]) {
      const v = (c = w.copy) == null ? void 0 : c[m];
      if (!v) continue;
      const J = {};
      for (const [X, G] of Object.entries(v))
        X.startsWith("_") ||
          ((Array.isArray(G)
            ? G.length
            : typeof G == "string"
              ? G.trim()
              : G != null) &&
            (J[X] = G));
      Object.keys(J).length && (bt[m] = J);
    }
    const z = bt.work;
    if (
      (z &&
        (!((h = z.railTitle) != null && h.length) &&
          (y = z.heroTitle) != null &&
          y.length &&
          (z.railTitle = z.heroTitle),
        !z.railIntro && z.heroIntro && (z.railIntro = z.heroIntro),
        !((d = z.galleryHeading) != null && d.length) &&
          typeof z.galleryTitle == "string" &&
          (z.galleryHeading = [z.galleryTitle])),
      Object.keys(bt).length && (T.COPY = bt),
      (p = P.mosaic) != null && p.length)
    ) {
      const m = P.mosaic
        .map((v, J) => {
          var X;
          return {
            id: `mz-${J + 1}`,
            src: W(v, 1600),
            ar: Xr(
              (X = v == null ? void 0 : v.asset) == null ? void 0 : X._ref,
            ),
          };
        })
        .filter((v) => v.src);
      m.length && (T.MOSAIC = m);
    }
    const Et = (g = w.copy) == null ? void 0 : g.home;
    if ((f = Et == null ? void 0 : Et.streetBrands) != null && f.length) {
      const m = Et.streetBrands
        .filter((v) => (v == null ? void 0 : v.name))
        .map((v) => ({ name: v.name, role: v.role || "" }));
      m.length && (T.STREET_BRANDS = m);
    }
    if (
      (P.mosaicLead && (T.MOSAIC_LEAD = W(P.mosaicLead, 2400, 82)),
      P.streetAhead && (T.STREET_AHEAD = P.streetAhead),
      (b = P.navItems) != null && b.length)
    ) {
      const m = P.navItems
        .filter(
          (v) =>
            (v == null ? void 0 : v.label) && (v == null ? void 0 : v.href),
        )
        .map((v) => ({ label: v.label, href: v.href }));
      m.length && (T.NAV_ITEMS = m);
    }
    if (
      ((((S = P.navCta) != null && S.label) ||
        ((A = P.navCta) != null && A.href)) &&
        (T.NAV_CTA = P.navCta),
      P.nav)
    ) {
      const m = {};
      for (const v of ["home", "work", "ai", "about", "contact"])
        P.nav[v] && (m[v] = P.nav[v]);
      Object.keys(m).length && (T.NAV_LABELS = m);
    }
    if ((O = P.lifeShots) != null && O.length) {
      const m = P.lifeShots.map((v) => W(v, 900)).filter(Boolean);
      m.length && (T.LIFE_SHOTS = m);
    }
    return T;
  } catch (w) {
    return (
      console.warn("[cms] content fetch failed, using static defaults:", w),
      {}
    );
  }
}
const Sc = Object.freeze(
  Object.defineProperty(
    { __proto__: null, loadSanityContent: wc },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
export { Sc as c, Rn as i, Ic as y };
