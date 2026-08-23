import * as ce from "react";
import ht, { useRef as On, useEffect as Vi } from "react";
var Yt = { exports: {} }, kt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var en;
function Yi() {
  if (en) return kt;
  en = 1;
  var s = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(r, n, i) {
    var o = null;
    if (i !== void 0 && (o = "" + i), n.key !== void 0 && (o = "" + n.key), "key" in n) {
      i = {};
      for (var a in n)
        a !== "key" && (i[a] = n[a]);
    } else i = n;
    return n = i.ref, {
      $$typeof: s,
      type: r,
      key: o,
      ref: n !== void 0 ? n : null,
      props: i
    };
  }
  return kt.Fragment = e, kt.jsx = t, kt.jsxs = t, kt;
}
var Tt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tn;
function Ui() {
  return tn || (tn = 1, process.env.NODE_ENV !== "production" && (function() {
    function s(v) {
      if (v == null) return null;
      if (typeof v == "function")
        return v.$$typeof === A ? null : v.displayName || v.name || null;
      if (typeof v == "string") return v;
      switch (v) {
        case f:
          return "Fragment";
        case y:
          return "Profiler";
        case m:
          return "StrictMode";
        case g:
          return "Suspense";
        case S:
          return "SuspenseList";
        case w:
          return "Activity";
      }
      if (typeof v == "object")
        switch (typeof v.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), v.$$typeof) {
          case p:
            return "Portal";
          case T:
            return (v.displayName || "Context") + ".Provider";
          case x:
            return (v._context.displayName || "Context") + ".Consumer";
          case k:
            var E = v.render;
            return v = v.displayName, v || (v = E.displayName || E.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
          case P:
            return E = v.displayName || null, E !== null ? E : s(v.type) || "Memo";
          case b:
            E = v._payload, v = v._init;
            try {
              return s(v(E));
            } catch {
            }
        }
      return null;
    }
    function e(v) {
      return "" + v;
    }
    function t(v) {
      try {
        e(v);
        var E = !1;
      } catch {
        E = !0;
      }
      if (E) {
        E = console;
        var z = E.error, D = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return z.call(
          E,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          D
        ), e(v);
      }
    }
    function r(v) {
      if (v === f) return "<>";
      if (typeof v == "object" && v !== null && v.$$typeof === b)
        return "<...>";
      try {
        var E = s(v);
        return E ? "<" + E + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var v = j.A;
      return v === null ? null : v.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(v) {
      if (I.call(v, "key")) {
        var E = Object.getOwnPropertyDescriptor(v, "key").get;
        if (E && E.isReactWarning) return !1;
      }
      return v.key !== void 0;
    }
    function a(v, E) {
      function z() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          E
        ));
      }
      z.isReactWarning = !0, Object.defineProperty(v, "key", {
        get: z,
        configurable: !0
      });
    }
    function l() {
      var v = s(this.type);
      return F[v] || (F[v] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), v = this.props.ref, v !== void 0 ? v : null;
    }
    function u(v, E, z, D, L, $, st, Z) {
      return z = $.ref, v = {
        $$typeof: _,
        type: v,
        key: E,
        props: $,
        _owner: L
      }, (z !== void 0 ? z : null) !== null ? Object.defineProperty(v, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(v, "ref", { enumerable: !1, value: null }), v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(v, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(v, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: st
      }), Object.defineProperty(v, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    }
    function c(v, E, z, D, L, $, st, Z) {
      var ne = E.children;
      if (ne !== void 0)
        if (D)
          if (V(ne)) {
            for (D = 0; D < ne.length; D++)
              d(ne[D]);
            Object.freeze && Object.freeze(ne);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(ne);
      if (I.call(E, "key")) {
        ne = s(v);
        var Pe = Object.keys(E).filter(function(wt) {
          return wt !== "key";
        });
        D = 0 < Pe.length ? "{key: someKey, " + Pe.join(": ..., ") + ": ...}" : "{key: someKey}", Ce[ne + D] || (Pe = 0 < Pe.length ? "{" + Pe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          D,
          ne,
          Pe,
          ne
        ), Ce[ne + D] = !0);
      }
      if (ne = null, z !== void 0 && (t(z), ne = "" + z), o(E) && (t(E.key), ne = "" + E.key), "key" in E) {
        z = {};
        for (var Fe in E)
          Fe !== "key" && (z[Fe] = E[Fe]);
      } else z = E;
      return ne && a(
        z,
        typeof v == "function" ? v.displayName || v.name || "Unknown" : v
      ), u(
        v,
        ne,
        $,
        L,
        n(),
        z,
        st,
        Z
      );
    }
    function d(v) {
      typeof v == "object" && v !== null && v.$$typeof === _ && v._store && (v._store.validated = 1);
    }
    var h = ht, _ = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), T = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), w = Symbol.for("react.activity"), A = Symbol.for("react.client.reference"), j = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, V = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(v) {
        return v();
      }
    };
    var U, F = {}, Y = h.react_stack_bottom_frame.bind(
      h,
      i
    )(), R = q(r(i)), Ce = {};
    Tt.Fragment = f, Tt.jsx = function(v, E, z, D, L) {
      var $ = 1e4 > j.recentlyCreatedOwnerStacks++;
      return c(
        v,
        E,
        z,
        !1,
        D,
        L,
        $ ? Error("react-stack-top-frame") : Y,
        $ ? q(r(v)) : R
      );
    }, Tt.jsxs = function(v, E, z, D, L) {
      var $ = 1e4 > j.recentlyCreatedOwnerStacks++;
      return c(
        v,
        E,
        z,
        !0,
        D,
        L,
        $ ? Error("react-stack-top-frame") : Y,
        $ ? q(r(v)) : R
      );
    };
  })()), Tt;
}
var rn;
function Bi() {
  return rn || (rn = 1, process.env.NODE_ENV === "production" ? Yt.exports = Yi() : Yt.exports = Ui()), Yt.exports;
}
var G = Bi();
function nn(s, e) {
  if (typeof s == "function")
    return s(e);
  s != null && (s.current = e);
}
function Gi(...s) {
  return (e) => {
    let t = !1;
    const r = s.map((n) => {
      const i = nn(n, e);
      return !t && typeof i == "function" && (t = !0), i;
    });
    if (t)
      return () => {
        for (let n = 0; n < r.length; n++) {
          const i = r[n];
          typeof i == "function" ? i() : nn(s[n], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function Wi(s) {
  const e = /* @__PURE__ */ qi(s), t = ce.forwardRef((r, n) => {
    const { children: i, ...o } = r, a = ce.Children.toArray(i), l = a.find($i);
    if (l) {
      const u = l.props.children, c = a.map((d) => d === l ? ce.Children.count(u) > 1 ? ce.Children.only(null) : ce.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ G.jsx(e, { ...o, ref: n, children: ce.isValidElement(u) ? ce.cloneElement(u, void 0, c) : null });
    }
    return /* @__PURE__ */ G.jsx(e, { ...o, ref: n, children: i });
  });
  return t.displayName = `${s}.Slot`, t;
}
var Dr = /* @__PURE__ */ Wi("Slot");
// @__NO_SIDE_EFFECTS__
function qi(s) {
  const e = ce.forwardRef((t, r) => {
    const { children: n, ...i } = t;
    if (ce.isValidElement(n)) {
      const o = Ji(n), a = Hi(i, n.props);
      return n.type !== ce.Fragment && (a.ref = r ? Gi(r, o) : o), ce.cloneElement(n, a);
    }
    return ce.Children.count(n) > 1 ? ce.Children.only(null) : null;
  });
  return e.displayName = `${s}.SlotClone`, e;
}
var Xi = Symbol("radix.slottable");
function $i(s) {
  return ce.isValidElement(s) && typeof s.type == "function" && "__radixId" in s.type && s.type.__radixId === Xi;
}
function Hi(s, e) {
  const t = { ...e };
  for (const r in e) {
    const n = s[r], i = e[r];
    /^on[A-Z]/.test(r) ? n && i ? t[r] = (...a) => {
      const l = i(...a);
      return n(...a), l;
    } : n && (t[r] = n) : r === "style" ? t[r] = { ...n, ...i } : r === "className" && (t[r] = [n, i].filter(Boolean).join(" "));
  }
  return { ...s, ...t };
}
function Ji(s) {
  let e = Object.getOwnPropertyDescriptor(s.props, "ref")?.get, t = e && "isReactWarning" in e && e.isReactWarning;
  return t ? s.ref : (e = Object.getOwnPropertyDescriptor(s, "ref")?.get, t = e && "isReactWarning" in e && e.isReactWarning, t ? s.props.ref : s.props.ref || s.ref);
}
function Rn(s) {
  var e, t, r = "";
  if (typeof s == "string" || typeof s == "number") r += s;
  else if (typeof s == "object") if (Array.isArray(s)) {
    var n = s.length;
    for (e = 0; e < n; e++) s[e] && (t = Rn(s[e])) && (r && (r += " "), r += t);
  } else for (t in s) s[t] && (r && (r += " "), r += t);
  return r;
}
function En() {
  for (var s, e, t = 0, r = "", n = arguments.length; t < n; t++) (s = arguments[t]) && (e = Rn(s)) && (r && (r += " "), r += e);
  return r;
}
const sn = (s) => typeof s == "boolean" ? `${s}` : s === 0 ? "0" : s, on = En, tr = (s, e) => (t) => {
  var r;
  if (e?.variants == null) return on(s, t?.class, t?.className);
  const { variants: n, defaultVariants: i } = e, o = Object.keys(n).map((u) => {
    const c = t?.[u], d = i?.[u];
    if (c === null) return null;
    const h = sn(c) || sn(d);
    return n[u][h];
  }), a = t && Object.entries(t).reduce((u, c) => {
    let [d, h] = c;
    return h === void 0 || (u[d] = h), u;
  }, {}), l = e == null || (r = e.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c) => {
    let { class: d, className: h, ..._ } = c;
    return Object.entries(_).every((p) => {
      let [f, m] = p;
      return Array.isArray(m) ? m.includes({
        ...i,
        ...a
      }[f]) : {
        ...i,
        ...a
      }[f] === m;
    }) ? [
      ...u,
      d,
      h
    ] : u;
  }, []);
  return on(s, o, l, t?.class, t?.className);
}, Nr = "-", Zi = (s) => {
  const e = Ki(s), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = s;
  return {
    getClassGroupId: (o) => {
      const a = o.split(Nr);
      return a[0] === "" && a.length !== 1 && a.shift(), Mn(a, e) || Qi(o);
    },
    getConflictingClassGroupIds: (o, a) => {
      const l = t[o] || [];
      return a && r[o] ? [...l, ...r[o]] : l;
    }
  };
}, Mn = (s, e) => {
  if (s.length === 0)
    return e.classGroupId;
  const t = s[0], r = e.nextPart.get(t), n = r ? Mn(s.slice(1), r) : void 0;
  if (n)
    return n;
  if (e.validators.length === 0)
    return;
  const i = s.join(Nr);
  return e.validators.find(({
    validator: o
  }) => o(i))?.classGroupId;
}, an = /^\[(.+)\]$/, Qi = (s) => {
  if (an.test(s)) {
    const e = an.exec(s)[1], t = e?.substring(0, e.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, Ki = (s) => {
  const {
    theme: e,
    classGroups: t
  } = s, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in t)
    pr(t[n], r, n, e);
  return r;
}, pr = (s, e, t, r) => {
  s.forEach((n) => {
    if (typeof n == "string") {
      const i = n === "" ? e : ln(e, n);
      i.classGroupId = t;
      return;
    }
    if (typeof n == "function") {
      if (es(n)) {
        pr(n(r), e, t, r);
        return;
      }
      e.validators.push({
        validator: n,
        classGroupId: t
      });
      return;
    }
    Object.entries(n).forEach(([i, o]) => {
      pr(o, ln(e, i), t, r);
    });
  });
}, ln = (s, e) => {
  let t = s;
  return e.split(Nr).forEach((r) => {
    t.nextPart.has(r) || t.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(r);
  }), t;
}, es = (s) => s.isThemeGetter, ts = (s) => {
  if (s < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const n = (i, o) => {
    t.set(i, o), e++, e > s && (e = 0, r = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let o = t.get(i);
      if (o !== void 0)
        return o;
      if ((o = r.get(i)) !== void 0)
        return n(i, o), o;
    },
    set(i, o) {
      t.has(i) ? t.set(i, o) : n(i, o);
    }
  };
}, mr = "!", gr = ":", rs = gr.length, ns = (s) => {
  const {
    prefix: e,
    experimentalParseClassName: t
  } = s;
  let r = (n) => {
    const i = [];
    let o = 0, a = 0, l = 0, u;
    for (let p = 0; p < n.length; p++) {
      let f = n[p];
      if (o === 0 && a === 0) {
        if (f === gr) {
          i.push(n.slice(l, p)), l = p + rs;
          continue;
        }
        if (f === "/") {
          u = p;
          continue;
        }
      }
      f === "[" ? o++ : f === "]" ? o-- : f === "(" ? a++ : f === ")" && a--;
    }
    const c = i.length === 0 ? n : n.substring(l), d = is(c), h = d !== c, _ = u && u > l ? u - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: h,
      baseClassName: d,
      maybePostfixModifierPosition: _
    };
  };
  if (e) {
    const n = e + gr, i = r;
    r = (o) => o.startsWith(n) ? i(o.substring(n.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: o,
      maybePostfixModifierPosition: void 0
    };
  }
  if (t) {
    const n = r;
    r = (i) => t({
      className: i,
      parseClassName: n
    });
  }
  return r;
}, is = (s) => s.endsWith(mr) ? s.substring(0, s.length - 1) : s.startsWith(mr) ? s.substring(1) : s, ss = (s) => {
  const e = Object.fromEntries(s.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const n = [];
    let i = [];
    return r.forEach((o) => {
      o[0] === "[" || e[o] ? (n.push(...i.sort(), o), i = []) : i.push(o);
    }), n.push(...i.sort()), n;
  };
}, os = (s) => ({
  cache: ts(s.cacheSize),
  parseClassName: ns(s),
  sortModifiers: ss(s),
  ...Zi(s)
}), as = /\s+/, ls = (s, e) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: n,
    sortModifiers: i
  } = e, o = [], a = s.trim().split(as);
  let l = "";
  for (let u = a.length - 1; u >= 0; u -= 1) {
    const c = a[u], {
      isExternal: d,
      modifiers: h,
      hasImportantModifier: _,
      baseClassName: p,
      maybePostfixModifierPosition: f
    } = t(c);
    if (d) {
      l = c + (l.length > 0 ? " " + l : l);
      continue;
    }
    let m = !!f, y = r(m ? p.substring(0, f) : p);
    if (!y) {
      if (!m) {
        l = c + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (y = r(p), !y) {
        l = c + (l.length > 0 ? " " + l : l);
        continue;
      }
      m = !1;
    }
    const x = i(h).join(":"), T = _ ? x + mr : x, k = T + y;
    if (o.includes(k))
      continue;
    o.push(k);
    const g = n(y, m);
    for (let S = 0; S < g.length; ++S) {
      const P = g[S];
      o.push(T + P);
    }
    l = c + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function us() {
  let s = 0, e, t, r = "";
  for (; s < arguments.length; )
    (e = arguments[s++]) && (t = An(e)) && (r && (r += " "), r += t);
  return r;
}
const An = (s) => {
  if (typeof s == "string")
    return s;
  let e, t = "";
  for (let r = 0; r < s.length; r++)
    s[r] && (e = An(s[r])) && (t && (t += " "), t += e);
  return t;
};
function cs(s, ...e) {
  let t, r, n, i = o;
  function o(l) {
    const u = e.reduce((c, d) => d(c), s());
    return t = os(u), r = t.cache.get, n = t.cache.set, i = a, a(l);
  }
  function a(l) {
    const u = r(l);
    if (u)
      return u;
    const c = ls(l, t);
    return n(l, c), c;
  }
  return function() {
    return i(us.apply(null, arguments));
  };
}
const ie = (s) => {
  const e = (t) => t[s] || [];
  return e.isThemeGetter = !0, e;
}, zn = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Dn = /^\((?:(\w[\w-]*):)?(.+)\)$/i, fs = /^\d+\/\d+$/, ds = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, hs = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, _s = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ps = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ms = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ot = (s) => fs.test(s), M = (s) => !!s && !Number.isNaN(Number(s)), Le = (s) => !!s && Number.isInteger(Number(s)), sr = (s) => s.endsWith("%") && M(s.slice(0, -1)), Ae = (s) => ds.test(s), gs = () => !0, bs = (s) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  hs.test(s) && !_s.test(s)
), Nn = () => !1, ys = (s) => ps.test(s), xs = (s) => ms.test(s), vs = (s) => !C(s) && !O(s), ws = (s) => xt(s, Ln, Nn), C = (s) => zn.test(s), Xe = (s) => xt(s, jn, bs), or = (s) => xt(s, Cs, M), un = (s) => xt(s, In, Nn), ks = (s) => xt(s, Fn, xs), Ut = (s) => xt(s, Vn, ys), O = (s) => Dn.test(s), St = (s) => vt(s, jn), Ts = (s) => vt(s, Os), cn = (s) => vt(s, In), Ss = (s) => vt(s, Ln), Ps = (s) => vt(s, Fn), Bt = (s) => vt(s, Vn, !0), xt = (s, e, t) => {
  const r = zn.exec(s);
  return r ? r[1] ? e(r[1]) : t(r[2]) : !1;
}, vt = (s, e, t = !1) => {
  const r = Dn.exec(s);
  return r ? r[1] ? e(r[1]) : t : !1;
}, In = (s) => s === "position" || s === "percentage", Fn = (s) => s === "image" || s === "url", Ln = (s) => s === "length" || s === "size" || s === "bg-size", jn = (s) => s === "length", Cs = (s) => s === "number", Os = (s) => s === "family-name", Vn = (s) => s === "shadow", Rs = () => {
  const s = ie("color"), e = ie("font"), t = ie("text"), r = ie("font-weight"), n = ie("tracking"), i = ie("leading"), o = ie("breakpoint"), a = ie("container"), l = ie("spacing"), u = ie("radius"), c = ie("shadow"), d = ie("inset-shadow"), h = ie("text-shadow"), _ = ie("drop-shadow"), p = ie("blur"), f = ie("perspective"), m = ie("aspect"), y = ie("ease"), x = ie("animate"), T = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], k = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], g = () => [...k(), O, C], S = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", "contain", "none"], b = () => [O, C, l], w = () => [ot, "full", "auto", ...b()], A = () => [Le, "none", "subgrid", O, C], j = () => ["auto", {
    span: ["full", Le, O, C]
  }, Le, O, C], I = () => [Le, "auto", O, C], V = () => ["auto", "min", "max", "fr", O, C], q = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], U = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], F = () => ["auto", ...b()], Y = () => [ot, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...b()], R = () => [s, O, C], Ce = () => [...k(), cn, un, {
    position: [O, C]
  }], v = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], E = () => ["auto", "cover", "contain", Ss, ws, {
    size: [O, C]
  }], z = () => [sr, St, Xe], D = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    O,
    C
  ], L = () => ["", M, St, Xe], $ = () => ["solid", "dashed", "dotted", "double"], st = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Z = () => [M, sr, cn, un], ne = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    p,
    O,
    C
  ], Pe = () => ["none", M, O, C], Fe = () => ["none", M, O, C], wt = () => [M, O, C], Vt = () => [ot, "full", ...b()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ae],
      breakpoint: [Ae],
      color: [gs],
      container: [Ae],
      "drop-shadow": [Ae],
      ease: ["in", "out", "in-out"],
      font: [vs],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Ae],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Ae],
      shadow: [Ae],
      spacing: ["px", M],
      text: [Ae],
      "text-shadow": [Ae],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", ot, C, O, m]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [M, C, O, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": T()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": T()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: g()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: S()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": S()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": S()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: P()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": P()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": P()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: w()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": w()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": w()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: w()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: w()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: w()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: w()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: w()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: w()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Le, "auto", O, C]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ot, "full", "auto", a, ...b()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [M, ot, "auto", "initial", "none", C]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", M, O, C]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", M, O, C]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Le, "first", "last", "none", O, C]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": A()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: j()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": I()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": I()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": A()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: j()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": I()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": I()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": V()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": V()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: b()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": b()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": b()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...q(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...U(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...U()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...q()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...U(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...U(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": q()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...U(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...U()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: b()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: b()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: b()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: b()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: b()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: b()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: b()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: b()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: b()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: F()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: F()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: F()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: F()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: F()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: F()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: F()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: F()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: F()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": b()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": b()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: Y()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...Y()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          a,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...Y()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          a,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [o]
          },
          ...Y()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Y()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Y()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Y()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, St, Xe]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, O, or]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", sr, C]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ts, C, e]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [n, O, C]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [M, "none", O, or]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...b()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", O, C]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", O, C]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: R()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: R()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...$(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [M, "from-font", "auto", O, Xe]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: R()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [M, "auto", O, C]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: b()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", O, C]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", O, C]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: Ce()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: v()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: E()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Le, O, C],
          radial: ["", O, C],
          conic: [Le, O, C]
        }, Ps, ks]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: R()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: z()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: z()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: z()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: R()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: R()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: R()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: D()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": D()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": D()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": D()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": D()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": D()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": D()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": D()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": D()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": D()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": D()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": D()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": D()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": D()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": D()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: L()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": L()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": L()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": L()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": L()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": L()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": L()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": L()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": L()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": L()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": L()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...$(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...$(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: R()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": R()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": R()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": R()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": R()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": R()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": R()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": R()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": R()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: R()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...$(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [M, O, C]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", M, St, Xe]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: R()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          c,
          Bt,
          Ut
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: R()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", d, Bt, Ut]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": R()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: L()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: R()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [M, Xe]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": R()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": L()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": R()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, Bt, Ut]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": R()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [M, O, C]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...st(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": st()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [M]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": Z()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": Z()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": R()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": R()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": Z()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": Z()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": R()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": R()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": Z()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": Z()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": R()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": R()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": Z()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": Z()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": R()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": R()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": Z()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": Z()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": R()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": R()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": Z()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": Z()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": R()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": R()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": Z()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": Z()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": R()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": R()
      }],
      "mask-image-radial": [{
        "mask-radial": [O, C]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": Z()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": Z()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": R()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": R()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": k()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [M]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": Z()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": Z()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": R()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": R()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: Ce()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: v()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: E()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", O, C]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          O,
          C
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ne()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [M, O, C]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [M, O, C]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          _,
          Bt,
          Ut
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": R()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", M, O, C]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [M, O, C]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", M, O, C]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [M, O, C]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", M, O, C]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          O,
          C
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ne()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [M, O, C]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [M, O, C]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", M, O, C]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [M, O, C]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", M, O, C]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [M, O, C]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [M, O, C]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", M, O, C]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": b()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": b()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": b()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", O, C]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [M, "initial", O, C]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", y, O, C]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [M, O, C]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, O, C]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [f, O, C]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": g()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Pe()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Pe()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Pe()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Pe()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Fe()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Fe()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Fe()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Fe()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: wt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": wt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": wt()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [O, C, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: g()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Vt()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Vt()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Vt()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Vt()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: R()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: R()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", O, C]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": b()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": b()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": b()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": b()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": b()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": b()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": b()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": b()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": b()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": b()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": b()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": b()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": b()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": b()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": b()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": b()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": b()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": b()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", O, C]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...R()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [M, St, Xe, or]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...R()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Es = /* @__PURE__ */ cs(Rs);
function Qe(...s) {
  return Es(En(s));
}
function ze(s) {
  if (s === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function Yn(s, e) {
  s.prototype = Object.create(e.prototype), s.prototype.constructor = s, s.__proto__ = e;
}
/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var ye = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, _t = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Ir, oe, X, ke = 1e8, W = 1 / ke, br = Math.PI * 2, Ms = br / 4, As = 0, Un = Math.sqrt, zs = Math.cos, Ds = Math.sin, se = function(e) {
  return typeof e == "string";
}, Q = function(e) {
  return typeof e == "function";
}, Ne = function(e) {
  return typeof e == "number";
}, Fr = function(e) {
  return typeof e > "u";
}, Me = function(e) {
  return typeof e == "object";
}, fe = function(e) {
  return e !== !1;
}, Lr = function() {
  return typeof window < "u";
}, Gt = function(e) {
  return Q(e) || se(e);
}, Bn = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, le = Array.isArray, yr = /(?:-?\.?\d|\.)+/gi, Gn = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, lt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ar = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Wn = /[+-]=-?[.\d]+/, qn = /[^,'"\[\]\s]+/gi, Ns = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, H, Oe, xr, jr, xe = {}, $t = {}, Xn, $n = function(e) {
  return ($t = pt(e, xe)) && pe;
}, Vr = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, At = function(e, t) {
  return !t && console.warn(e);
}, Hn = function(e, t) {
  return e && (xe[e] = t) && $t && ($t[e] = t) || xe;
}, zt = function() {
  return 0;
}, Is = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Wt = {
  suppressEvents: !0,
  kill: !1
}, Fs = {
  suppressEvents: !0
}, Yr = {}, Ue = [], vr = {}, Jn, me = {}, lr = {}, fn = 30, qt = [], Ur = "", Br = function(e) {
  var t = e[0], r, n;
  if (Me(t) || Q(t) || (e = [e]), !(r = (t._gsap || {}).harness)) {
    for (n = qt.length; n-- && !qt[n].targetTest(t); )
      ;
    r = qt[n];
  }
  for (n = e.length; n--; )
    e[n] && (e[n]._gsap || (e[n]._gsap = new xi(e[n], r))) || e.splice(n, 1);
  return e;
}, Ke = function(e) {
  return e._gsap || Br(Te(e))[0]._gsap;
}, Zn = function(e, t, r) {
  return (r = e[t]) && Q(r) ? e[t]() : Fr(r) && e.getAttribute && e.getAttribute(t) || r;
}, de = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, ee = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, re = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, ct = function(e, t) {
  var r = t.charAt(0), n = parseFloat(t.substr(2));
  return e = parseFloat(e), r === "+" ? e + n : r === "-" ? e - n : r === "*" ? e * n : e / n;
}, Ls = function(e, t) {
  for (var r = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < r; )
    ;
  return n < r;
}, Ht = function() {
  var e = Ue.length, t = Ue.slice(0), r, n;
  for (vr = {}, Ue.length = 0, r = 0; r < e; r++)
    n = t[r], n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
}, Gr = function(e) {
  return !!(e._initted || e._startAt || e.add);
}, Qn = function(e, t, r, n) {
  Ue.length && !oe && Ht(), e.render(t, r, !!(oe && t < 0 && Gr(e))), Ue.length && !oe && Ht();
}, Kn = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(qn).length < 2 ? t : se(e) ? e.trim() : e;
}, ei = function(e) {
  return e;
}, ve = function(e, t) {
  for (var r in t)
    r in e || (e[r] = t[r]);
  return e;
}, js = function(e) {
  return function(t, r) {
    for (var n in r)
      n in t || n === "duration" && e || n === "ease" || (t[n] = r[n]);
  };
}, pt = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, dn = function s(e, t) {
  for (var r in t)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = Me(t[r]) ? s(e[r] || (e[r] = {}), t[r]) : t[r]);
  return e;
}, Jt = function(e, t) {
  var r = {}, n;
  for (n in e)
    n in t || (r[n] = e[n]);
  return r;
}, Rt = function(e) {
  var t = e.parent || H, r = e.keyframes ? js(le(e.keyframes)) : ve;
  if (fe(e.inherit))
    for (; t; )
      r(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, Vs = function(e, t) {
  for (var r = e.length, n = r === t.length; n && r-- && e[r] === t[r]; )
    ;
  return r < 0;
}, ti = function(e, t, r, n, i) {
  var o = e[n], a;
  if (i)
    for (a = t[i]; o && o[i] > a; )
      o = o._prev;
  return o ? (t._next = o._next, o._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[n] = t, t._prev = o, t.parent = t._dp = e, t;
}, rr = function(e, t, r, n) {
  r === void 0 && (r = "_first"), n === void 0 && (n = "_last");
  var i = t._prev, o = t._next;
  i ? i._next = o : e[r] === t && (e[r] = o), o ? o._prev = i : e[n] === t && (e[n] = i), t._next = t._prev = t.parent = null;
}, Ge = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, et = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var r = e; r; )
      r._dirty = 1, r = r.parent;
  return e;
}, Ys = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, wr = function(e, t, r, n) {
  return e._startAt && (oe ? e._startAt.revert(Wt) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, n));
}, Us = function s(e) {
  return !e || e._ts && s(e.parent);
}, hn = function(e) {
  return e._repeat ? mt(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, mt = function(e, t) {
  var r = Math.floor(e = re(e / t));
  return e && r === e ? r - 1 : r;
}, Zt = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, nr = function(e) {
  return e._end = re(e._start + (e._tDur / Math.abs(e._ts || e._rts || W) || 0));
}, ir = function(e, t) {
  var r = e._dp;
  return r && r.smoothChildTiming && e._ts && (e._start = re(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), nr(e), r._dirty || et(r, e)), e;
}, ri = function(e, t) {
  var r;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = Zt(e.rawTime(), t), (!t._dur || jt(0, t.totalDuration(), r) - t._tTime > W) && t.render(r, !0)), et(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (r = e; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    e._zTime = -W;
  }
}, Re = function(e, t, r, n) {
  return t.parent && Ge(t), t._start = re((Ne(r) ? r : r || e !== H ? we(e, r, t) : e._time) + t._delay), t._end = re(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), ti(e, t, "_first", "_last", e._sort ? "_start" : 0), kr(t) || (e._recent = t), n || ri(e, t), e._ts < 0 && ir(e, e._tTime), e;
}, ni = function(e, t) {
  return (xe.ScrollTrigger || Vr("scrollTrigger", t)) && xe.ScrollTrigger.create(t, e);
}, ii = function(e, t, r, n, i) {
  if (qr(e, t, i), !e._initted)
    return 1;
  if (!r && e._pt && !oe && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Jn !== ge.frame)
    return Ue.push(e), e._lazy = [i, n], 1;
}, Bs = function s(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || s(t));
}, kr = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, Gs = function(e, t, r, n) {
  var i = e.ratio, o = t < 0 || !t && (!e._start && Bs(e) && !(!e._initted && kr(e)) || (e._ts < 0 || e._dp._ts < 0) && !kr(e)) ? 0 : 1, a = e._rDelay, l = 0, u, c, d;
  if (a && e._repeat && (l = jt(0, e._tDur, t), c = mt(l, a), e._yoyo && c & 1 && (o = 1 - o), c !== mt(e._tTime, a) && (i = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== i || oe || n || e._zTime === W || !t && e._zTime) {
    if (!e._initted && ii(e, t, n, r, l))
      return;
    for (d = e._zTime, e._zTime = t || (r ? W : 0), r || (r = t && !d), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = l, u = e._pt; u; )
      u.r(o, u.d), u = u._next;
    t < 0 && wr(e, t, r, !0), e._onUpdate && !r && be(e, "onUpdate"), l && e._repeat && !r && e.parent && be(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === o && (o && Ge(e, 1), !r && !oe && (be(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else e._zTime || (e._zTime = t);
}, Ws = function(e, t, r) {
  var n;
  if (r > t)
    for (n = e._first; n && n._start <= r; ) {
      if (n.data === "isPause" && n._start > t)
        return n;
      n = n._next;
    }
  else
    for (n = e._last; n && n._start >= r; ) {
      if (n.data === "isPause" && n._start < t)
        return n;
      n = n._prev;
    }
}, gt = function(e, t, r, n) {
  var i = e._repeat, o = re(t) || 0, a = e._tTime / e._tDur;
  return a && !n && (e._time *= o / e._dur), e._dur = o, e._tDur = i ? i < 0 ? 1e10 : re(o * (i + 1) + e._rDelay * i) : o, a > 0 && !n && ir(e, e._tTime = e._tDur * a), e.parent && nr(e), r || et(e.parent, e), e;
}, _n = function(e) {
  return e instanceof ue ? et(e) : gt(e, e._dur);
}, qs = {
  _start: 0,
  endTime: zt,
  totalDuration: zt
}, we = function s(e, t, r) {
  var n = e.labels, i = e._recent || qs, o = e.duration() >= ke ? i.endTime(!1) : e._dur, a, l, u;
  return se(t) && (isNaN(t) || t in n) ? (l = t.charAt(0), u = t.substr(-1) === "%", a = t.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (l === "<" ? i._start : i.endTime(i._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (u ? (a < 0 ? i : r).totalDuration() / 100 : 1)) : a < 0 ? (t in n || (n[t] = o), n[t]) : (l = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), u && r && (l = l / 100 * (le(r) ? r[0] : r).totalDuration()), a > 1 ? s(e, t.substr(0, a - 1), r) + l : o + l)) : t == null ? o : +t;
}, Et = function(e, t, r) {
  var n = Ne(t[1]), i = (n ? 2 : 1) + (e < 2 ? 0 : 1), o = t[i], a, l;
  if (n && (o.duration = t[1]), o.parent = r, e) {
    for (a = o, l = r; l && !("immediateRender" in a); )
      a = l.vars.defaults || {}, l = fe(l.vars.inherit) && l.parent;
    o.immediateRender = fe(a.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[i - 1];
  }
  return new te(t[0], o, t[i + 1]);
}, qe = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, jt = function(e, t, r) {
  return r < e ? e : r > t ? t : r;
}, ae = function(e, t) {
  return !se(e) || !(t = Ns.exec(e)) ? "" : t[1];
}, Xs = function(e, t, r) {
  return qe(r, function(n) {
    return jt(e, t, n);
  });
}, Tr = [].slice, si = function(e, t) {
  return e && Me(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Me(e[0])) && !e.nodeType && e !== Oe;
}, $s = function(e, t, r) {
  return r === void 0 && (r = []), e.forEach(function(n) {
    var i;
    return se(n) && !t || si(n, 1) ? (i = r).push.apply(i, Te(n)) : r.push(n);
  }) || r;
}, Te = function(e, t, r) {
  return X && !t && X.selector ? X.selector(e) : se(e) && !r && (xr || !bt()) ? Tr.call((t || jr).querySelectorAll(e), 0) : le(e) ? $s(e, r) : si(e) ? Tr.call(e, 0) : e ? [e] : [];
}, Sr = function(e) {
  return e = Te(e)[0] || At("Invalid scope") || {}, function(t) {
    var r = e.current || e.nativeElement || e;
    return Te(t, r.querySelectorAll ? r : r === e ? At("Invalid scope") || jr.createElement("div") : e);
  };
}, oi = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, ai = function(e) {
  if (Q(e))
    return e;
  var t = Me(e) ? e : {
    each: e
  }, r = tt(t.ease), n = t.from || 0, i = parseFloat(t.base) || 0, o = {}, a = n > 0 && n < 1, l = isNaN(n) || a, u = t.axis, c = n, d = n;
  return se(n) ? c = d = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[n] || 0 : !a && l && (c = n[0], d = n[1]), function(h, _, p) {
    var f = (p || t).length, m = o[f], y, x, T, k, g, S, P, b, w;
    if (!m) {
      if (w = t.grid === "auto" ? 0 : (t.grid || [1, ke])[1], !w) {
        for (P = -ke; P < (P = p[w++].getBoundingClientRect().left) && w < f; )
          ;
        w < f && w--;
      }
      for (m = o[f] = [], y = l ? Math.min(w, f) * c - 0.5 : n % w, x = w === ke ? 0 : l ? f * d / w - 0.5 : n / w | 0, P = 0, b = ke, S = 0; S < f; S++)
        T = S % w - y, k = x - (S / w | 0), m[S] = g = u ? Math.abs(u === "y" ? k : T) : Un(T * T + k * k), g > P && (P = g), g < b && (b = g);
      n === "random" && oi(m), m.max = P - b, m.min = b, m.v = f = (parseFloat(t.amount) || parseFloat(t.each) * (w > f ? f - 1 : u ? u === "y" ? f / w : w : Math.max(w, f / w)) || 0) * (n === "edges" ? -1 : 1), m.b = f < 0 ? i - f : i, m.u = ae(t.amount || t.each) || 0, r = r && f < 0 ? gi(r) : r;
    }
    return f = (m[h] - m.min) / m.max || 0, re(m.b + (r ? r(f) : f) * m.v) + m.u;
  };
}, Pr = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(r) {
    var n = re(Math.round(parseFloat(r) / e) * e * t);
    return (n - n % 1) / t + (Ne(r) ? 0 : ae(r));
  };
}, li = function(e, t) {
  var r = le(e), n, i;
  return !r && Me(e) && (n = r = e.radius || ke, e.values ? (e = Te(e.values), (i = !Ne(e[0])) && (n *= n)) : e = Pr(e.increment)), qe(t, r ? Q(e) ? function(o) {
    return i = e(o), Math.abs(i - o) <= n ? i : o;
  } : function(o) {
    for (var a = parseFloat(i ? o.x : o), l = parseFloat(i ? o.y : 0), u = ke, c = 0, d = e.length, h, _; d--; )
      i ? (h = e[d].x - a, _ = e[d].y - l, h = h * h + _ * _) : h = Math.abs(e[d] - a), h < u && (u = h, c = d);
    return c = !n || u <= n ? e[c] : o, i || c === o || Ne(o) ? c : c + ae(o);
  } : Pr(e));
}, ui = function(e, t, r, n) {
  return qe(le(e) ? !t : r === !0 ? !!(r = 0) : !n, function() {
    return le(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + r * 0.99)) / r) * r * n) / n;
  });
}, Hs = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return t.reduce(function(i, o) {
      return o(i);
    }, n);
  };
}, Js = function(e, t) {
  return function(r) {
    return e(parseFloat(r)) + (t || ae(r));
  };
}, Zs = function(e, t, r) {
  return fi(e, t, 0, 1, r);
}, ci = function(e, t, r) {
  return qe(r, function(n) {
    return e[~~t(n)];
  });
}, Qs = function s(e, t, r) {
  var n = t - e;
  return le(e) ? ci(e, s(0, e.length), t) : qe(r, function(i) {
    return (n + (i - e) % n) % n + e;
  });
}, Ks = function s(e, t, r) {
  var n = t - e, i = n * 2;
  return le(e) ? ci(e, s(0, e.length - 1), t) : qe(r, function(o) {
    return o = (i + (o - e) % i) % i || 0, e + (o > n ? i - o : o);
  });
}, Dt = function(e) {
  for (var t = 0, r = "", n, i, o, a; ~(n = e.indexOf("random(", t)); )
    o = e.indexOf(")", n), a = e.charAt(n + 7) === "[", i = e.substr(n + 7, o - n - 7).match(a ? qn : yr), r += e.substr(t, n - t) + ui(a ? i : +i[0], a ? 0 : +i[1], +i[2] || 1e-5), t = o + 1;
  return r + e.substr(t, e.length - t);
}, fi = function(e, t, r, n, i) {
  var o = t - e, a = n - r;
  return qe(i, function(l) {
    return r + ((l - e) / o * a || 0);
  });
}, eo = function s(e, t, r, n) {
  var i = isNaN(e + t) ? 0 : function(_) {
    return (1 - _) * e + _ * t;
  };
  if (!i) {
    var o = se(e), a = {}, l, u, c, d, h;
    if (r === !0 && (n = 1) && (r = null), o)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (le(e) && !le(t)) {
      for (c = [], d = e.length, h = d - 2, u = 1; u < d; u++)
        c.push(s(e[u - 1], e[u]));
      d--, i = function(p) {
        p *= d;
        var f = Math.min(h, ~~p);
        return c[f](p - f);
      }, r = t;
    } else n || (e = pt(le(e) ? [] : {}, e));
    if (!c) {
      for (l in t)
        Wr.call(a, e, l, "get", t[l]);
      i = function(p) {
        return Hr(p, a) || (o ? e.p : e);
      };
    }
  }
  return qe(r, i);
}, pn = function(e, t, r) {
  var n = e.labels, i = ke, o, a, l;
  for (o in n)
    a = n[o] - t, a < 0 == !!r && a && i > (a = Math.abs(a)) && (l = o, i = a);
  return l;
}, be = function(e, t, r) {
  var n = e.vars, i = n[t], o = X, a = e._ctx, l, u, c;
  if (i)
    return l = n[t + "Params"], u = n.callbackScope || e, r && Ue.length && Ht(), a && (X = a), c = l ? i.apply(u, l) : i.call(u), X = o, c;
}, Ct = function(e) {
  return Ge(e), e.scrollTrigger && e.scrollTrigger.kill(!!oe), e.progress() < 1 && be(e, "onInterrupt"), e;
}, ut, di = [], hi = function(e) {
  if (e)
    if (e = !e.name && e.default || e, Lr() || e.headless) {
      var t = e.name, r = Q(e), n = t && !r && e.init ? function() {
        this._props = [];
      } : e, i = {
        init: zt,
        render: Hr,
        add: Wr,
        kill: go,
        modifier: mo,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: $r,
        aliases: {},
        register: 0
      };
      if (bt(), e !== n) {
        if (me[t])
          return;
        ve(n, ve(Jt(e, i), o)), pt(n.prototype, pt(i, Jt(e, o))), me[n.prop = t] = n, e.targetTest && (qt.push(n), Yr[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      Hn(t, n), e.register && e.register(pe, n, he);
    } else
      di.push(e);
}, B = 255, Ot = {
  aqua: [0, B, B],
  lime: [0, B, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, B],
  navy: [0, 0, 128],
  white: [B, B, B],
  olive: [128, 128, 0],
  yellow: [B, B, 0],
  orange: [B, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [B, 0, 0],
  pink: [B, 192, 203],
  cyan: [0, B, B],
  transparent: [B, B, B, 0]
}, ur = function(e, t, r) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (r - t) * e * 6 : e < 0.5 ? r : e * 3 < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * B + 0.5 | 0;
}, _i = function(e, t, r) {
  var n = e ? Ne(e) ? [e >> 16, e >> 8 & B, e & B] : 0 : Ot.black, i, o, a, l, u, c, d, h, _, p;
  if (!n) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Ot[e])
      n = Ot[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (i = e.charAt(1), o = e.charAt(2), a = e.charAt(3), e = "#" + i + i + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return n = parseInt(e.substr(1, 6), 16), [n >> 16, n >> 8 & B, n & B, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), n = [e >> 16, e >> 8 & B, e & B];
    } else if (e.substr(0, 3) === "hsl") {
      if (n = p = e.match(yr), !t)
        l = +n[0] % 360 / 360, u = +n[1] / 100, c = +n[2] / 100, o = c <= 0.5 ? c * (u + 1) : c + u - c * u, i = c * 2 - o, n.length > 3 && (n[3] *= 1), n[0] = ur(l + 1 / 3, i, o), n[1] = ur(l, i, o), n[2] = ur(l - 1 / 3, i, o);
      else if (~e.indexOf("="))
        return n = e.match(Gn), r && n.length < 4 && (n[3] = 1), n;
    } else
      n = e.match(yr) || Ot.transparent;
    n = n.map(Number);
  }
  return t && !p && (i = n[0] / B, o = n[1] / B, a = n[2] / B, d = Math.max(i, o, a), h = Math.min(i, o, a), c = (d + h) / 2, d === h ? l = u = 0 : (_ = d - h, u = c > 0.5 ? _ / (2 - d - h) : _ / (d + h), l = d === i ? (o - a) / _ + (o < a ? 6 : 0) : d === o ? (a - i) / _ + 2 : (i - o) / _ + 4, l *= 60), n[0] = ~~(l + 0.5), n[1] = ~~(u * 100 + 0.5), n[2] = ~~(c * 100 + 0.5)), r && n.length < 4 && (n[3] = 1), n;
}, pi = function(e) {
  var t = [], r = [], n = -1;
  return e.split(Be).forEach(function(i) {
    var o = i.match(lt) || [];
    t.push.apply(t, o), r.push(n += o.length + 1);
  }), t.c = r, t;
}, mn = function(e, t, r) {
  var n = "", i = (e + n).match(Be), o = t ? "hsla(" : "rgba(", a = 0, l, u, c, d;
  if (!i)
    return e;
  if (i = i.map(function(h) {
    return (h = _i(h, t, 1)) && o + (t ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")";
  }), r && (c = pi(e), l = r.c, l.join(n) !== c.c.join(n)))
    for (u = e.replace(Be, "1").split(lt), d = u.length - 1; a < d; a++)
      n += u[a] + (~l.indexOf(a) ? i.shift() || o + "0,0,0,0)" : (c.length ? c : i.length ? i : r).shift());
  if (!u)
    for (u = e.split(Be), d = u.length - 1; a < d; a++)
      n += u[a] + i[a];
  return n + u[d];
}, Be = (function() {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in Ot)
    s += "|" + e + "\\b";
  return new RegExp(s + ")", "gi");
})(), to = /hsl[a]?\(/, mi = function(e) {
  var t = e.join(" "), r;
  if (Be.lastIndex = 0, Be.test(t))
    return r = to.test(t), e[1] = mn(e[1], r), e[0] = mn(e[0], r, pi(e[1])), !0;
}, Nt, ge = (function() {
  var s = Date.now, e = 500, t = 33, r = s(), n = r, i = 1e3 / 240, o = i, a = [], l, u, c, d, h, _, p = function f(m) {
    var y = s() - n, x = m === !0, T, k, g, S;
    if ((y > e || y < 0) && (r += y - t), n += y, g = n - r, T = g - o, (T > 0 || x) && (S = ++d.frame, h = g - d.time * 1e3, d.time = g = g / 1e3, o += T + (T >= i ? 4 : i - T), k = 1), x || (l = u(f)), k)
      for (_ = 0; _ < a.length; _++)
        a[_](g, h, S, m);
  };
  return d = {
    time: 0,
    frame: 0,
    tick: function() {
      p(!0);
    },
    deltaRatio: function(m) {
      return h / (1e3 / (m || 60));
    },
    wake: function() {
      Xn && (!xr && Lr() && (Oe = xr = window, jr = Oe.document || {}, xe.gsap = pe, (Oe.gsapVersions || (Oe.gsapVersions = [])).push(pe.version), $n($t || Oe.GreenSockGlobals || !Oe.gsap && Oe || {}), di.forEach(hi)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && d.sleep(), u = c || function(m) {
        return setTimeout(m, o - d.time * 1e3 + 1 | 0);
      }, Nt = 1, p(2));
    },
    sleep: function() {
      (c ? cancelAnimationFrame : clearTimeout)(l), Nt = 0, u = zt;
    },
    lagSmoothing: function(m, y) {
      e = m || 1 / 0, t = Math.min(y || 33, e);
    },
    fps: function(m) {
      i = 1e3 / (m || 240), o = d.time * 1e3 + i;
    },
    add: function(m, y, x) {
      var T = y ? function(k, g, S, P) {
        m(k, g, S, P), d.remove(T);
      } : m;
      return d.remove(m), a[x ? "unshift" : "push"](T), bt(), T;
    },
    remove: function(m, y) {
      ~(y = a.indexOf(m)) && a.splice(y, 1) && _ >= y && _--;
    },
    _listeners: a
  }, d;
})(), bt = function() {
  return !Nt && ge.wake();
}, N = {}, ro = /^[\d.\-M][\d.\-,\s]/, no = /["']/g, io = function(e) {
  for (var t = {}, r = e.substr(1, e.length - 3).split(":"), n = r[0], i = 1, o = r.length, a, l, u; i < o; i++)
    l = r[i], a = i !== o - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, a), t[n] = isNaN(u) ? u.replace(no, "").trim() : +u, n = l.substr(a + 1).trim();
  return t;
}, so = function(e) {
  var t = e.indexOf("(") + 1, r = e.indexOf(")"), n = e.indexOf("(", t);
  return e.substring(t, ~n && n < r ? e.indexOf(")", r + 1) : r);
}, oo = function(e) {
  var t = (e + "").split("("), r = N[t[0]];
  return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [io(t[1])] : so(e).split(",").map(Kn)) : N._CE && ro.test(e) ? N._CE("", e) : r;
}, gi = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, bi = function s(e, t) {
  for (var r = e._first, n; r; )
    r instanceof ue ? s(r, t) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== t && (r.timeline ? s(r.timeline, t) : (n = r._ease, r._ease = r._yEase, r._yEase = n, r._yoyo = t)), r = r._next;
}, tt = function(e, t) {
  return e && (Q(e) ? e : N[e] || oo(e)) || t;
}, it = function(e, t, r, n) {
  r === void 0 && (r = function(l) {
    return 1 - t(1 - l);
  }), n === void 0 && (n = function(l) {
    return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
  });
  var i = {
    easeIn: t,
    easeOut: r,
    easeInOut: n
  }, o;
  return de(e, function(a) {
    N[a] = xe[a] = i, N[o = a.toLowerCase()] = r;
    for (var l in i)
      N[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = N[a + "." + l] = i[l];
  }), i;
}, yi = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, cr = function s(e, t, r) {
  var n = t >= 1 ? t : 1, i = (r || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), o = i / br * (Math.asin(1 / n) || 0), a = function(c) {
    return c === 1 ? 1 : n * Math.pow(2, -10 * c) * Ds((c - o) * i) + 1;
  }, l = e === "out" ? a : e === "in" ? function(u) {
    return 1 - a(1 - u);
  } : yi(a);
  return i = br / i, l.config = function(u, c) {
    return s(e, u, c);
  }, l;
}, fr = function s(e, t) {
  t === void 0 && (t = 1.70158);
  var r = function(o) {
    return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
  }, n = e === "out" ? r : e === "in" ? function(i) {
    return 1 - r(1 - i);
  } : yi(r);
  return n.config = function(i) {
    return s(e, i);
  }, n;
};
de("Linear,Quad,Cubic,Quart,Quint,Strong", function(s, e) {
  var t = e < 5 ? e + 1 : e;
  it(s + ",Power" + (t - 1), e ? function(r) {
    return Math.pow(r, t);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, t);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, t) / 2 : 1 - Math.pow((1 - r) * 2, t) / 2;
  });
});
N.Linear.easeNone = N.none = N.Linear.easeIn;
it("Elastic", cr("in"), cr("out"), cr());
(function(s, e) {
  var t = 1 / e, r = 2 * t, n = 2.5 * t, i = function(a) {
    return a < t ? s * a * a : a < r ? s * Math.pow(a - 1.5 / e, 2) + 0.75 : a < n ? s * (a -= 2.25 / e) * a + 0.9375 : s * Math.pow(a - 2.625 / e, 2) + 0.984375;
  };
  it("Bounce", function(o) {
    return 1 - i(1 - o);
  }, i);
})(7.5625, 2.75);
it("Expo", function(s) {
  return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
});
it("Circ", function(s) {
  return -(Un(1 - s * s) - 1);
});
it("Sine", function(s) {
  return s === 1 ? 1 : -zs(s * Ms) + 1;
});
it("Back", fr("in"), fr("out"), fr());
N.SteppedEase = N.steps = xe.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var r = 1 / e, n = e + (t ? 0 : 1), i = t ? 1 : 0, o = 1 - W;
    return function(a) {
      return ((n * jt(0, o, a) | 0) + i) * r;
    };
  }
};
_t.ease = N["quad.out"];
de("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s) {
  return Ur += s + "," + s + "Params,";
});
var xi = function(e, t) {
  this.id = As++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Zn, this.set = t ? t.getSetter : $r;
}, It = /* @__PURE__ */ (function() {
  function s(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, gt(this, +t.duration, 1, 1), this.data = t.data, X && (this._ctx = X, X.data.push(this)), Nt || ge.wake();
  }
  var e = s.prototype;
  return e.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, e.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, gt(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(r, n) {
    if (bt(), !arguments.length)
      return this._tTime;
    var i = this._dp;
    if (i && i.smoothChildTiming && this._ts) {
      for (ir(this, r), !i._dp || i.parent || ri(i, this); i && i.parent; )
        i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Re(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !n || this._initted && Math.abs(this._zTime) === W || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), Qn(this, r, n)), this;
  }, e.time = function(r, n) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + hn(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), n) : this._time;
  }, e.totalProgress = function(r, n) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, n) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(r, n) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + hn(this), n) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(r, n) {
    var i = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * i, n) : this._repeat ? mt(this._tTime, i) + 1 : 1;
  }, e.timeScale = function(r, n) {
    if (!arguments.length)
      return this._rts === -W ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var i = this.parent && this._ts ? Zt(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -W ? 0 : this._rts, this.totalTime(jt(-Math.abs(this._delay), this.totalDuration(), i), n !== !1), nr(this), Ys(this);
  }, e.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (bt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== W && (this._tTime -= W)))), this) : this._ps;
  }, e.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var n = this.parent || this._dp;
      return n && (n._sort || !this.parent) && Re(n, this, r - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(r) {
    return this._start + (fe(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(r) {
    var n = this.parent || this._dp;
    return n ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Zt(n.rawTime(r), this) : this._tTime : this._tTime;
  }, e.revert = function(r) {
    r === void 0 && (r = Fs);
    var n = oe;
    return oe = r, Gr(this) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), oe = n, this;
  }, e.globalTime = function(r) {
    for (var n = this, i = arguments.length ? r : n.rawTime(); n; )
      i = n._start + i / (Math.abs(n._ts) || 1), n = n._dp;
    return !this.parent && this._sat ? this._sat.globalTime(r) : i;
  }, e.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, _n(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(r) {
    if (arguments.length) {
      var n = this._time;
      return this._rDelay = r, _n(this), n ? this.time(n) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, e.seek = function(r, n) {
    return this.totalTime(we(this, r), fe(n));
  }, e.restart = function(r, n) {
    return this.play().totalTime(r ? -this._delay : 0, fe(n)), this._dur || (this._zTime = -W), this;
  }, e.play = function(r, n) {
    return r != null && this.seek(r, n), this.reversed(!1).paused(!1);
  }, e.reverse = function(r, n) {
    return r != null && this.seek(r || this.totalDuration(), n), this.reversed(!0).paused(!1);
  }, e.pause = function(r, n) {
    return r != null && this.seek(r, n), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -W : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -W, this;
  }, e.isActive = function() {
    var r = this.parent || this._dp, n = this._start, i;
    return !!(!r || this._ts && this._initted && r.isActive() && (i = r.rawTime(!0)) >= n && i < this.endTime(!0) - W);
  }, e.eventCallback = function(r, n, i) {
    var o = this.vars;
    return arguments.length > 1 ? (n ? (o[r] = n, i && (o[r + "Params"] = i), r === "onUpdate" && (this._onUpdate = n)) : delete o[r], this) : o[r];
  }, e.then = function(r) {
    var n = this;
    return new Promise(function(i) {
      var o = Q(r) ? r : ei, a = function() {
        var u = n.then;
        n.then = null, Q(o) && (o = o(n)) && (o.then || o === n) && (n.then = u), i(o), n.then = u;
      };
      n._initted && n.totalProgress() === 1 && n._ts >= 0 || !n._tTime && n._ts < 0 ? a() : n._prom = a;
    });
  }, e.kill = function() {
    Ct(this);
  }, s;
})();
ve(It.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -W,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var ue = /* @__PURE__ */ (function(s) {
  Yn(e, s);
  function e(r, n) {
    var i;
    return r === void 0 && (r = {}), i = s.call(this, r) || this, i.labels = {}, i.smoothChildTiming = !!r.smoothChildTiming, i.autoRemoveChildren = !!r.autoRemoveChildren, i._sort = fe(r.sortChildren), H && Re(r.parent || H, ze(i), n), r.reversed && i.reverse(), r.paused && i.paused(!0), r.scrollTrigger && ni(ze(i), r.scrollTrigger), i;
  }
  var t = e.prototype;
  return t.to = function(n, i, o) {
    return Et(0, arguments, this), this;
  }, t.from = function(n, i, o) {
    return Et(1, arguments, this), this;
  }, t.fromTo = function(n, i, o, a) {
    return Et(2, arguments, this), this;
  }, t.set = function(n, i, o) {
    return i.duration = 0, i.parent = this, Rt(i).repeatDelay || (i.repeat = 0), i.immediateRender = !!i.immediateRender, new te(n, i, we(this, o), 1), this;
  }, t.call = function(n, i, o) {
    return Re(this, te.delayedCall(0, n, i), o);
  }, t.staggerTo = function(n, i, o, a, l, u, c) {
    return o.duration = i, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = c, o.parent = this, new te(n, o, we(this, l)), this;
  }, t.staggerFrom = function(n, i, o, a, l, u, c) {
    return o.runBackwards = 1, Rt(o).immediateRender = fe(o.immediateRender), this.staggerTo(n, i, o, a, l, u, c);
  }, t.staggerFromTo = function(n, i, o, a, l, u, c, d) {
    return a.startAt = o, Rt(a).immediateRender = fe(a.immediateRender), this.staggerTo(n, i, a, l, u, c, d);
  }, t.render = function(n, i, o) {
    var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = n <= 0 ? 0 : re(n), d = this._zTime < 0 != n < 0 && (this._initted || !u), h, _, p, f, m, y, x, T, k, g, S, P;
    if (this !== H && c > l && n >= 0 && (c = l), c !== this._tTime || o || d) {
      if (a !== this._time && u && (c += this._time - a, n += this._time - a), h = c, k = this._start, T = this._ts, y = !T, d && (u || (a = this._zTime), (n || !i) && (this._zTime = n)), this._repeat) {
        if (S = this._yoyo, m = u + this._rDelay, this._repeat < -1 && n < 0)
          return this.totalTime(m * 100 + n, i, o);
        if (h = re(c % m), c === l ? (f = this._repeat, h = u) : (g = re(c / m), f = ~~g, f && f === g && (h = u, f--), h > u && (h = u)), g = mt(this._tTime, m), !a && this._tTime && g !== f && this._tTime - g * m - this._dur <= 0 && (g = f), S && f & 1 && (h = u - h, P = 1), f !== g && !this._lock) {
          var b = S && g & 1, w = b === (S && f & 1);
          if (f < g && (b = !b), a = b ? 0 : c % u ? u : c, this._lock = 1, this.render(a || (P ? 0 : re(f * m)), i, !u)._lock = 0, this._tTime = c, !i && this.parent && be(this, "onRepeat"), this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1), a && a !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, l = this._tDur, w && (this._lock = 2, a = b ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !P && this.invalidate()), this._lock = 0, !this._ts && !y)
            return this;
          bi(this, P);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (x = Ws(this, re(a), re(h)), x && (c -= h - (h = x._start))), this._tTime = c, this._time = h, this._act = !T, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = n, a = 0), !a && c && !i && !g && (be(this, "onStart"), this._tTime !== c))
        return this;
      if (h >= a && n >= 0)
        for (_ = this._first; _; ) {
          if (p = _._next, (_._act || h >= _._start) && _._ts && x !== _) {
            if (_.parent !== this)
              return this.render(n, i, o);
            if (_.render(_._ts > 0 ? (h - _._start) * _._ts : (_._dirty ? _.totalDuration() : _._tDur) + (h - _._start) * _._ts, i, o), h !== this._time || !this._ts && !y) {
              x = 0, p && (c += this._zTime = -W);
              break;
            }
          }
          _ = p;
        }
      else {
        _ = this._last;
        for (var A = n < 0 ? n : h; _; ) {
          if (p = _._prev, (_._act || A <= _._end) && _._ts && x !== _) {
            if (_.parent !== this)
              return this.render(n, i, o);
            if (_.render(_._ts > 0 ? (A - _._start) * _._ts : (_._dirty ? _.totalDuration() : _._tDur) + (A - _._start) * _._ts, i, o || oe && Gr(_)), h !== this._time || !this._ts && !y) {
              x = 0, p && (c += this._zTime = A ? -W : W);
              break;
            }
          }
          _ = p;
        }
      }
      if (x && !i && (this.pause(), x.render(h >= a ? 0 : -W)._zTime = h >= a ? 1 : -1, this._ts))
        return this._start = k, nr(this), this.render(n, i, o);
      this._onUpdate && !i && be(this, "onUpdate", !0), (c === l && this._tTime >= this.totalDuration() || !c && a) && (k === this._start || Math.abs(T) !== Math.abs(this._ts)) && (this._lock || ((n || !u) && (c === l && this._ts > 0 || !c && this._ts < 0) && Ge(this, 1), !i && !(n < 0 && !a) && (c || a || !l) && (be(this, c === l && n >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(n, i) {
    var o = this;
    if (Ne(i) || (i = we(this, i, n)), !(n instanceof It)) {
      if (le(n))
        return n.forEach(function(a) {
          return o.add(a, i);
        }), this;
      if (se(n))
        return this.addLabel(n, i);
      if (Q(n))
        n = te.delayedCall(0, n);
      else
        return this;
    }
    return this !== n ? Re(this, n, i) : this;
  }, t.getChildren = function(n, i, o, a) {
    n === void 0 && (n = !0), i === void 0 && (i = !0), o === void 0 && (o = !0), a === void 0 && (a = -ke);
    for (var l = [], u = this._first; u; )
      u._start >= a && (u instanceof te ? i && l.push(u) : (o && l.push(u), n && l.push.apply(l, u.getChildren(!0, i, o)))), u = u._next;
    return l;
  }, t.getById = function(n) {
    for (var i = this.getChildren(1, 1, 1), o = i.length; o--; )
      if (i[o].vars.id === n)
        return i[o];
  }, t.remove = function(n) {
    return se(n) ? this.removeLabel(n) : Q(n) ? this.killTweensOf(n) : (n.parent === this && rr(this, n), n === this._recent && (this._recent = this._last), et(this));
  }, t.totalTime = function(n, i) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = re(ge.time - (this._ts > 0 ? n / this._ts : (this.totalDuration() - n) / -this._ts))), s.prototype.totalTime.call(this, n, i), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(n, i) {
    return this.labels[n] = we(this, i), this;
  }, t.removeLabel = function(n) {
    return delete this.labels[n], this;
  }, t.addPause = function(n, i, o) {
    var a = te.delayedCall(0, i || zt, o);
    return a.data = "isPause", this._hasPause = 1, Re(this, a, we(this, n));
  }, t.removePause = function(n) {
    var i = this._first;
    for (n = we(this, n); i; )
      i._start === n && i.data === "isPause" && Ge(i), i = i._next;
  }, t.killTweensOf = function(n, i, o) {
    for (var a = this.getTweensOf(n, o), l = a.length; l--; )
      je !== a[l] && a[l].kill(n, i);
    return this;
  }, t.getTweensOf = function(n, i) {
    for (var o = [], a = Te(n), l = this._first, u = Ne(i), c; l; )
      l instanceof te ? Ls(l._targets, a) && (u ? (!je || l._initted && l._ts) && l.globalTime(0) <= i && l.globalTime(l.totalDuration()) > i : !i || l.isActive()) && o.push(l) : (c = l.getTweensOf(a, i)).length && o.push.apply(o, c), l = l._next;
    return o;
  }, t.tweenTo = function(n, i) {
    i = i || {};
    var o = this, a = we(o, n), l = i, u = l.startAt, c = l.onStart, d = l.onStartParams, h = l.immediateRender, _, p = te.to(o, ve({
      ease: i.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: i.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || W,
      onStart: function() {
        if (o.pause(), !_) {
          var m = i.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale());
          p._dur !== m && gt(p, m, 0, 1).render(p._time, !0, !0), _ = 1;
        }
        c && c.apply(p, d || []);
      }
    }, i));
    return h ? p.render(0) : p;
  }, t.tweenFromTo = function(n, i, o) {
    return this.tweenTo(i, ve({
      startAt: {
        time: we(this, n)
      }
    }, o));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(n) {
    return n === void 0 && (n = this._time), pn(this, we(this, n));
  }, t.previousLabel = function(n) {
    return n === void 0 && (n = this._time), pn(this, we(this, n), 1);
  }, t.currentLabel = function(n) {
    return arguments.length ? this.seek(n, !0) : this.previousLabel(this._time + W);
  }, t.shiftChildren = function(n, i, o) {
    o === void 0 && (o = 0);
    for (var a = this._first, l = this.labels, u; a; )
      a._start >= o && (a._start += n, a._end += n), a = a._next;
    if (i)
      for (u in l)
        l[u] >= o && (l[u] += n);
    return et(this);
  }, t.invalidate = function(n) {
    var i = this._first;
    for (this._lock = 0; i; )
      i.invalidate(n), i = i._next;
    return s.prototype.invalidate.call(this, n);
  }, t.clear = function(n) {
    n === void 0 && (n = !0);
    for (var i = this._first, o; i; )
      o = i._next, this.remove(i), i = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), n && (this.labels = {}), et(this);
  }, t.totalDuration = function(n) {
    var i = 0, o = this, a = o._last, l = ke, u, c, d;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -n : n));
    if (o._dirty) {
      for (d = o.parent; a; )
        u = a._prev, a._dirty && a.totalDuration(), c = a._start, c > l && o._sort && a._ts && !o._lock ? (o._lock = 1, Re(o, a, c - a._delay, 1)._lock = 0) : l = c, c < 0 && a._ts && (i -= c, (!d && !o._dp || d && d.smoothChildTiming) && (o._start += c / o._ts, o._time -= c, o._tTime -= c), o.shiftChildren(-c, !1, -1 / 0), l = 0), a._end > i && a._ts && (i = a._end), a = u;
      gt(o, o === H && o._time > i ? o._time : i, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, e.updateRoot = function(n) {
    if (H._ts && (Qn(H, Zt(n, H)), Jn = ge.frame), ge.frame >= fn) {
      fn += ye.autoSleep || 120;
      var i = H._first;
      if ((!i || !i._ts) && ye.autoSleep && ge._listeners.length < 2) {
        for (; i && !i._ts; )
          i = i._next;
        i || ge.sleep();
      }
    }
  }, e;
})(It);
ve(ue.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var ao = function(e, t, r, n, i, o, a) {
  var l = new he(this._pt, e, t, 0, 1, Pi, null, i), u = 0, c = 0, d, h, _, p, f, m, y, x;
  for (l.b = r, l.e = n, r += "", n += "", (y = ~n.indexOf("random(")) && (n = Dt(n)), o && (x = [r, n], o(x, e, t), r = x[0], n = x[1]), h = r.match(ar) || []; d = ar.exec(n); )
    p = d[0], f = n.substring(u, d.index), _ ? _ = (_ + 1) % 5 : f.substr(-5) === "rgba(" && (_ = 1), p !== h[c++] && (m = parseFloat(h[c - 1]) || 0, l._pt = {
      _next: l._pt,
      p: f || c === 1 ? f : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: p.charAt(1) === "=" ? ct(m, p) - m : parseFloat(p) - m,
      m: _ && _ < 4 ? Math.round : 0
    }, u = ar.lastIndex);
  return l.c = u < n.length ? n.substring(u, n.length) : "", l.fp = a, (Wn.test(n) || y) && (l.e = 0), this._pt = l, l;
}, Wr = function(e, t, r, n, i, o, a, l, u, c) {
  Q(n) && (n = n(i || 0, e, o));
  var d = e[t], h = r !== "get" ? r : Q(d) ? u ? e[t.indexOf("set") || !Q(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](u) : e[t]() : d, _ = Q(d) ? u ? ho : Ti : Xr, p;
  if (se(n) && (~n.indexOf("random(") && (n = Dt(n)), n.charAt(1) === "=" && (p = ct(h, n) + (ae(h) || 0), (p || p === 0) && (n = p))), !c || h !== n || Cr)
    return !isNaN(h * n) && n !== "" ? (p = new he(this._pt, e, t, +h || 0, n - (h || 0), typeof d == "boolean" ? po : Si, 0, _), u && (p.fp = u), a && p.modifier(a, this, e), this._pt = p) : (!d && !(t in e) && Vr(t, n), ao.call(this, e, t, h, n, _, l || ye.stringFilter, u));
}, lo = function(e, t, r, n, i) {
  if (Q(e) && (e = Mt(e, i, t, r, n)), !Me(e) || e.style && e.nodeType || le(e) || Bn(e))
    return se(e) ? Mt(e, i, t, r, n) : e;
  var o = {}, a;
  for (a in e)
    o[a] = Mt(e[a], i, t, r, n);
  return o;
}, vi = function(e, t, r, n, i, o) {
  var a, l, u, c;
  if (me[e] && (a = new me[e]()).init(i, a.rawVars ? t[e] : lo(t[e], n, i, o, r), r, n, o) !== !1 && (r._pt = l = new he(r._pt, i, e, 0, 1, a.render, a, 0, a.priority), r !== ut))
    for (u = r._ptLookup[r._targets.indexOf(i)], c = a._props.length; c--; )
      u[a._props[c]] = l;
  return a;
}, je, Cr, qr = function s(e, t, r) {
  var n = e.vars, i = n.ease, o = n.startAt, a = n.immediateRender, l = n.lazy, u = n.onUpdate, c = n.runBackwards, d = n.yoyoEase, h = n.keyframes, _ = n.autoRevert, p = e._dur, f = e._startAt, m = e._targets, y = e.parent, x = y && y.data === "nested" ? y.vars.targets : m, T = e._overwrite === "auto" && !Ir, k = e.timeline, g, S, P, b, w, A, j, I, V, q, U, F, Y;
  if (k && (!h || !i) && (i = "none"), e._ease = tt(i, _t.ease), e._yEase = d ? gi(tt(d === !0 ? i : d, _t.ease)) : 0, d && e._yoyo && !e._repeat && (d = e._yEase, e._yEase = e._ease, e._ease = d), e._from = !k && !!n.runBackwards, !k || h && !n.stagger) {
    if (I = m[0] ? Ke(m[0]).harness : 0, F = I && n[I.prop], g = Jt(n, Yr), f && (f._zTime < 0 && f.progress(1), t < 0 && c && a && !_ ? f.render(-1, !0) : f.revert(c && p ? Wt : Is), f._lazy = 0), o) {
      if (Ge(e._startAt = te.set(m, ve({
        data: "isStart",
        overwrite: !1,
        parent: y,
        immediateRender: !0,
        lazy: !f && fe(l),
        startAt: null,
        delay: 0,
        onUpdate: u && function() {
          return be(e, "onUpdate");
        },
        stagger: 0
      }, o))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (oe || !a && !_) && e._startAt.revert(Wt), a && p && t <= 0 && r <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (c && p && !f) {
      if (t && (a = !1), P = ve({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !f && fe(l),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: y
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, g), F && (P[I.prop] = F), Ge(e._startAt = te.set(m, P)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (oe ? e._startAt.revert(Wt) : e._startAt.render(-1, !0)), e._zTime = t, !a)
        s(e._startAt, W, W);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, l = p && fe(l) || l && !p, S = 0; S < m.length; S++) {
      if (w = m[S], j = w._gsap || Br(m)[S]._gsap, e._ptLookup[S] = q = {}, vr[j.id] && Ue.length && Ht(), U = x === m ? S : x.indexOf(w), I && (V = new I()).init(w, F || g, e, U, x) !== !1 && (e._pt = b = new he(e._pt, w, V.name, 0, 1, V.render, V, 0, V.priority), V._props.forEach(function(R) {
        q[R] = b;
      }), V.priority && (A = 1)), !I || F)
        for (P in g)
          me[P] && (V = vi(P, g, e, U, w, x)) ? V.priority && (A = 1) : q[P] = b = Wr.call(e, w, P, "get", g[P], U, x, 0, n.stringFilter);
      e._op && e._op[S] && e.kill(w, e._op[S]), T && e._pt && (je = e, H.killTweensOf(w, q, e.globalTime(t)), Y = !e.parent, je = 0), e._pt && l && (vr[j.id] = 1);
    }
    A && Ci(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = u, e._initted = (!e._op || e._pt) && !Y, h && t <= 0 && k.render(ke, !0, !0);
}, uo = function(e, t, r, n, i, o, a, l) {
  var u = (e._pt && e._ptCache || (e._ptCache = {}))[t], c, d, h, _;
  if (!u)
    for (u = e._ptCache[t] = [], h = e._ptLookup, _ = e._targets.length; _--; ) {
      if (c = h[_][t], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== t && c.fp !== t; )
          c = c._next;
      if (!c)
        return Cr = 1, e.vars[t] = "+=0", qr(e, a), Cr = 0, l ? At(t + " not eligible for reset") : 1;
      u.push(c);
    }
  for (_ = u.length; _--; )
    d = u[_], c = d._pt || d, c.s = (n || n === 0) && !i ? n : c.s + (n || 0) + o * c.c, c.c = r - c.s, d.e && (d.e = ee(r) + ae(d.e)), d.b && (d.b = c.s + ae(d.b));
}, co = function(e, t) {
  var r = e[0] ? Ke(e[0]).harness : 0, n = r && r.aliases, i, o, a, l;
  if (!n)
    return t;
  i = pt({}, t);
  for (o in n)
    if (o in i)
      for (l = n[o].split(","), a = l.length; a--; )
        i[l[a]] = i[o];
  return i;
}, fo = function(e, t, r, n) {
  var i = t.ease || n || "power1.inOut", o, a;
  if (le(t))
    a = r[e] || (r[e] = []), t.forEach(function(l, u) {
      return a.push({
        t: u / (t.length - 1) * 100,
        v: l,
        e: i
      });
    });
  else
    for (o in t)
      a = r[o] || (r[o] = []), o === "ease" || a.push({
        t: parseFloat(e),
        v: t[o],
        e: i
      });
}, Mt = function(e, t, r, n, i) {
  return Q(e) ? e.call(t, r, n, i) : se(e) && ~e.indexOf("random(") ? Dt(e) : e;
}, wi = Ur + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", ki = {};
de(wi + ",id,stagger,delay,duration,paused,scrollTrigger", function(s) {
  return ki[s] = 1;
});
var te = /* @__PURE__ */ (function(s) {
  Yn(e, s);
  function e(r, n, i, o) {
    var a;
    typeof n == "number" && (i.duration = n, n = i, i = null), a = s.call(this, o ? n : Rt(n)) || this;
    var l = a.vars, u = l.duration, c = l.delay, d = l.immediateRender, h = l.stagger, _ = l.overwrite, p = l.keyframes, f = l.defaults, m = l.scrollTrigger, y = l.yoyoEase, x = n.parent || H, T = (le(r) || Bn(r) ? Ne(r[0]) : "length" in n) ? [r] : Te(r), k, g, S, P, b, w, A, j;
    if (a._targets = T.length ? Br(T) : At("GSAP target " + r + " not found. https://gsap.com", !ye.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = _, p || h || Gt(u) || Gt(c)) {
      if (n = a.vars, k = a.timeline = new ue({
        data: "nested",
        defaults: f || {},
        targets: x && x.data === "nested" ? x.vars.targets : T
      }), k.kill(), k.parent = k._dp = ze(a), k._start = 0, h || Gt(u) || Gt(c)) {
        if (P = T.length, A = h && ai(h), Me(h))
          for (b in h)
            ~wi.indexOf(b) && (j || (j = {}), j[b] = h[b]);
        for (g = 0; g < P; g++)
          S = Jt(n, ki), S.stagger = 0, y && (S.yoyoEase = y), j && pt(S, j), w = T[g], S.duration = +Mt(u, ze(a), g, w, T), S.delay = (+Mt(c, ze(a), g, w, T) || 0) - a._delay, !h && P === 1 && S.delay && (a._delay = c = S.delay, a._start += c, S.delay = 0), k.to(w, S, A ? A(g, w, T) : 0), k._ease = N.none;
        k.duration() ? u = c = 0 : a.timeline = 0;
      } else if (p) {
        Rt(ve(k.vars.defaults, {
          ease: "none"
        })), k._ease = tt(p.ease || n.ease || "none");
        var I = 0, V, q, U;
        if (le(p))
          p.forEach(function(F) {
            return k.to(T, F, ">");
          }), k.duration();
        else {
          S = {};
          for (b in p)
            b === "ease" || b === "easeEach" || fo(b, p[b], S, p.easeEach);
          for (b in S)
            for (V = S[b].sort(function(F, Y) {
              return F.t - Y.t;
            }), I = 0, g = 0; g < V.length; g++)
              q = V[g], U = {
                ease: q.e,
                duration: (q.t - (g ? V[g - 1].t : 0)) / 100 * u
              }, U[b] = q.v, k.to(T, U, I), I += U.duration;
          k.duration() < u && k.to({}, {
            duration: u - k.duration()
          });
        }
      }
      u || a.duration(u = k.duration());
    } else
      a.timeline = 0;
    return _ === !0 && !Ir && (je = ze(a), H.killTweensOf(T), je = 0), Re(x, ze(a), i), n.reversed && a.reverse(), n.paused && a.paused(!0), (d || !u && !p && a._start === re(x._time) && fe(d) && Us(ze(a)) && x.data !== "nested") && (a._tTime = -W, a.render(Math.max(0, -c) || 0)), m && ni(ze(a), m), a;
  }
  var t = e.prototype;
  return t.render = function(n, i, o) {
    var a = this._time, l = this._tDur, u = this._dur, c = n < 0, d = n > l - W && !c ? l : n < W ? 0 : n, h, _, p, f, m, y, x, T, k;
    if (!u)
      Gs(this, n, i, o);
    else if (d !== this._tTime || !n || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
      if (h = d, T = this.timeline, this._repeat) {
        if (f = u + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(f * 100 + n, i, o);
        if (h = re(d % f), d === l ? (p = this._repeat, h = u) : (m = re(d / f), p = ~~m, p && p === m ? (h = u, p--) : h > u && (h = u)), y = this._yoyo && p & 1, y && (k = this._yEase, h = u - h), m = mt(this._tTime, f), h === a && !o && this._initted && p === m)
          return this._tTime = d, this;
        p !== m && (T && this._yEase && bi(T, y), this.vars.repeatRefresh && !y && !this._lock && h !== f && this._initted && (this._lock = o = 1, this.render(re(f * p), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (ii(this, c ? n : h, o, i, d))
          return this._tTime = 0, this;
        if (a !== this._time && !(o && this.vars.repeatRefresh && p !== m))
          return this;
        if (u !== this._dur)
          return this.render(n, i, o);
      }
      if (this._tTime = d, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = x = (k || this._ease)(h / u), this._from && (this.ratio = x = 1 - x), !a && d && !i && !m && (be(this, "onStart"), this._tTime !== d))
        return this;
      for (_ = this._pt; _; )
        _.r(x, _.d), _ = _._next;
      T && T.render(n < 0 ? n : T._dur * T._ease(h / this._dur), i, o) || this._startAt && (this._zTime = n), this._onUpdate && !i && (c && wr(this, n, i, o), be(this, "onUpdate")), this._repeat && p !== m && this.vars.onRepeat && !i && this.parent && be(this, "onRepeat"), (d === this._tDur || !d) && this._tTime === d && (c && !this._onUpdate && wr(this, n, !0, !0), (n || !u) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && Ge(this, 1), !i && !(c && !a) && (d || a || y) && (be(this, d === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(n) {
    return (!n || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(n), s.prototype.invalidate.call(this, n);
  }, t.resetTo = function(n, i, o, a, l) {
    Nt || ge.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || qr(this, u), c = this._ease(u / this._dur), uo(this, n, i, o, a, c, u, l) ? this.resetTo(n, i, o, a, 1) : (ir(this, 0), this.parent || ti(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(n, i) {
    if (i === void 0 && (i = "all"), !n && (!i || i === "all"))
      return this._lazy = this._pt = 0, this.parent ? Ct(this) : this.scrollTrigger && this.scrollTrigger.kill(!!oe), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(n, i, je && je.vars.overwrite !== !0)._first || Ct(this), this.parent && o !== this.timeline.totalDuration() && gt(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, l = n ? Te(n) : a, u = this._ptLookup, c = this._pt, d, h, _, p, f, m, y;
    if ((!i || i === "all") && Vs(a, l))
      return i === "all" && (this._pt = 0), Ct(this);
    for (d = this._op = this._op || [], i !== "all" && (se(i) && (f = {}, de(i, function(x) {
      return f[x] = 1;
    }), i = f), i = co(a, i)), y = a.length; y--; )
      if (~l.indexOf(a[y])) {
        h = u[y], i === "all" ? (d[y] = i, p = h, _ = {}) : (_ = d[y] = d[y] || {}, p = i);
        for (f in p)
          m = h && h[f], m && ((!("kill" in m.d) || m.d.kill(f) === !0) && rr(this, m, "_pt"), delete h[f]), _ !== "all" && (_[f] = 1);
      }
    return this._initted && !this._pt && c && Ct(this), this;
  }, e.to = function(n, i) {
    return new e(n, i, arguments[2]);
  }, e.from = function(n, i) {
    return Et(1, arguments);
  }, e.delayedCall = function(n, i, o, a) {
    return new e(i, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: n,
      onComplete: i,
      onReverseComplete: i,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: a
    });
  }, e.fromTo = function(n, i, o) {
    return Et(2, arguments);
  }, e.set = function(n, i) {
    return i.duration = 0, i.repeatDelay || (i.repeat = 0), new e(n, i);
  }, e.killTweensOf = function(n, i, o) {
    return H.killTweensOf(n, i, o);
  }, e;
})(It);
ve(te.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
de("staggerTo,staggerFrom,staggerFromTo", function(s) {
  te[s] = function() {
    var e = new ue(), t = Tr.call(arguments, 0);
    return t.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), e[s].apply(e, t);
  };
});
var Xr = function(e, t, r) {
  return e[t] = r;
}, Ti = function(e, t, r) {
  return e[t](r);
}, ho = function(e, t, r, n) {
  return e[t](n.fp, r);
}, _o = function(e, t, r) {
  return e.setAttribute(t, r);
}, $r = function(e, t) {
  return Q(e[t]) ? Ti : Fr(e[t]) && e.setAttribute ? _o : Xr;
}, Si = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, po = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, Pi = function(e, t) {
  var r = t._pt, n = "";
  if (!e && t.b)
    n = t.b;
  else if (e === 1 && t.e)
    n = t.e;
  else {
    for (; r; )
      n = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + n, r = r._next;
    n += t.c;
  }
  t.set(t.t, t.p, n, t);
}, Hr = function(e, t) {
  for (var r = t._pt; r; )
    r.r(e, r.d), r = r._next;
}, mo = function(e, t, r, n) {
  for (var i = this._pt, o; i; )
    o = i._next, i.p === n && i.modifier(e, t, r), i = o;
}, go = function(e) {
  for (var t = this._pt, r, n; t; )
    n = t._next, t.p === e && !t.op || t.op === e ? rr(this, t, "_pt") : t.dep || (r = 1), t = n;
  return !r;
}, bo = function(e, t, r, n) {
  n.mSet(e, t, n.m.call(n.tween, r, n.mt), n);
}, Ci = function(e) {
  for (var t = e._pt, r, n, i, o; t; ) {
    for (r = t._next, n = i; n && n.pr > t.pr; )
      n = n._next;
    (t._prev = n ? n._prev : o) ? t._prev._next = t : i = t, (t._next = n) ? n._prev = t : o = t, t = r;
  }
  e._pt = i;
}, he = /* @__PURE__ */ (function() {
  function s(t, r, n, i, o, a, l, u, c) {
    this.t = r, this.s = i, this.c = o, this.p = n, this.r = a || Si, this.d = l || this, this.set = u || Xr, this.pr = c || 0, this._next = t, t && (t._prev = this);
  }
  var e = s.prototype;
  return e.modifier = function(r, n, i) {
    this.mSet = this.mSet || this.set, this.set = bo, this.m = r, this.mt = i, this.tween = n;
  }, s;
})();
de(Ur + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(s) {
  return Yr[s] = 1;
});
xe.TweenMax = xe.TweenLite = te;
xe.TimelineLite = xe.TimelineMax = ue;
H = new ue({
  sortChildren: !1,
  defaults: _t,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
ye.stringFilter = mi;
var rt = [], Xt = {}, yo = [], gn = 0, xo = 0, dr = function(e) {
  return (Xt[e] || yo).map(function(t) {
    return t();
  });
}, Or = function() {
  var e = Date.now(), t = [];
  e - gn > 2 && (dr("matchMediaInit"), rt.forEach(function(r) {
    var n = r.queries, i = r.conditions, o, a, l, u;
    for (a in n)
      o = Oe.matchMedia(n[a]).matches, o && (l = 1), o !== i[a] && (i[a] = o, u = 1);
    u && (r.revert(), l && t.push(r));
  }), dr("matchMediaRevert"), t.forEach(function(r) {
    return r.onMatch(r, function(n) {
      return r.add(null, n);
    });
  }), gn = e, dr("matchMedia"));
}, Oi = /* @__PURE__ */ (function() {
  function s(t, r) {
    this.selector = r && Sr(r), this.data = [], this._r = [], this.isReverted = !1, this.id = xo++, t && this.add(t);
  }
  var e = s.prototype;
  return e.add = function(r, n, i) {
    Q(r) && (i = n, n = r, r = Q);
    var o = this, a = function() {
      var u = X, c = o.selector, d;
      return u && u !== o && u.data.push(o), i && (o.selector = Sr(i)), X = o, d = n.apply(o, arguments), Q(d) && o._r.push(d), X = u, o.selector = c, o.isReverted = !1, d;
    };
    return o.last = a, r === Q ? a(o, function(l) {
      return o.add(null, l);
    }) : r ? o[r] = a : a;
  }, e.ignore = function(r) {
    var n = X;
    X = null, r(this), X = n;
  }, e.getTweens = function() {
    var r = [];
    return this.data.forEach(function(n) {
      return n instanceof s ? r.push.apply(r, n.getTweens()) : n instanceof te && !(n.parent && n.parent.data === "nested") && r.push(n);
    }), r;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(r, n) {
    var i = this;
    if (r ? (function() {
      for (var a = i.getTweens(), l = i.data.length, u; l--; )
        u = i.data[l], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(c) {
          return a.splice(a.indexOf(c), 1);
        }));
      for (a.map(function(c) {
        return {
          g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
          t: c
        };
      }).sort(function(c, d) {
        return d.g - c.g || -1 / 0;
      }).forEach(function(c) {
        return c.t.revert(r);
      }), l = i.data.length; l--; )
        u = i.data[l], u instanceof ue ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof te) && u.revert && u.revert(r);
      i._r.forEach(function(c) {
        return c(r, i);
      }), i.isReverted = !0;
    })() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), n)
      for (var o = rt.length; o--; )
        rt[o].id === this.id && rt.splice(o, 1);
  }, e.revert = function(r) {
    this.kill(r || {});
  }, s;
})(), vo = /* @__PURE__ */ (function() {
  function s(t) {
    this.contexts = [], this.scope = t, X && X.data.push(this);
  }
  var e = s.prototype;
  return e.add = function(r, n, i) {
    Me(r) || (r = {
      matches: r
    });
    var o = new Oi(0, i || this.scope), a = o.conditions = {}, l, u, c;
    X && !o.selector && (o.selector = X.selector), this.contexts.push(o), n = o.add("onMatch", n), o.queries = r;
    for (u in r)
      u === "all" ? c = 1 : (l = Oe.matchMedia(r[u]), l && (rt.indexOf(o) < 0 && rt.push(o), (a[u] = l.matches) && (c = 1), l.addListener ? l.addListener(Or) : l.addEventListener("change", Or)));
    return c && n(o, function(d) {
      return o.add(null, d);
    }), this;
  }, e.revert = function(r) {
    this.kill(r || {});
  }, e.kill = function(r) {
    this.contexts.forEach(function(n) {
      return n.kill(r, !0);
    });
  }, s;
})(), Qt = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    t.forEach(function(n) {
      return hi(n);
    });
  },
  timeline: function(e) {
    return new ue(e);
  },
  getTweensOf: function(e, t) {
    return H.getTweensOf(e, t);
  },
  getProperty: function(e, t, r, n) {
    se(e) && (e = Te(e)[0]);
    var i = Ke(e || {}).get, o = r ? ei : Kn;
    return r === "native" && (r = ""), e && (t ? o((me[t] && me[t].get || i)(e, t, r, n)) : function(a, l, u) {
      return o((me[a] && me[a].get || i)(e, a, l, u));
    });
  },
  quickSetter: function(e, t, r) {
    if (e = Te(e), e.length > 1) {
      var n = e.map(function(c) {
        return pe.quickSetter(c, t, r);
      }), i = n.length;
      return function(c) {
        for (var d = i; d--; )
          n[d](c);
      };
    }
    e = e[0] || {};
    var o = me[t], a = Ke(e), l = a.harness && (a.harness.aliases || {})[t] || t, u = o ? function(c) {
      var d = new o();
      ut._pt = 0, d.init(e, r ? c + r : c, ut, 0, [e]), d.render(1, d), ut._pt && Hr(1, ut);
    } : a.set(e, l);
    return o ? u : function(c) {
      return u(e, l, r ? c + r : c, a, 1);
    };
  },
  quickTo: function(e, t, r) {
    var n, i = pe.to(e, ve((n = {}, n[t] = "+=0.1", n.paused = !0, n.stagger = 0, n), r || {})), o = function(l, u, c) {
      return i.resetTo(t, l, u, c);
    };
    return o.tween = i, o;
  },
  isTweening: function(e) {
    return H.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = tt(e.ease, _t.ease)), dn(_t, e || {});
  },
  config: function(e) {
    return dn(ye, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, r = e.effect, n = e.plugins, i = e.defaults, o = e.extendTimeline;
    (n || "").split(",").forEach(function(a) {
      return a && !me[a] && !xe[a] && At(t + " effect requires " + a + " plugin.");
    }), lr[t] = function(a, l, u) {
      return r(Te(a), ve(l || {}, i), u);
    }, o && (ue.prototype[t] = function(a, l, u) {
      return this.add(lr[t](a, Me(l) ? l : (u = l) && {}, this), u);
    });
  },
  registerEase: function(e, t) {
    N[e] = tt(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? tt(e, t) : N;
  },
  getById: function(e) {
    return H.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var r = new ue(e), n, i;
    for (r.smoothChildTiming = fe(e.smoothChildTiming), H.remove(r), r._dp = 0, r._time = r._tTime = H._time, n = H._first; n; )
      i = n._next, (t || !(!n._dur && n instanceof te && n.vars.onComplete === n._targets[0])) && Re(r, n, n._start - n._delay), n = i;
    return Re(H, r, 0), r;
  },
  context: function(e, t) {
    return e ? new Oi(e, t) : X;
  },
  matchMedia: function(e) {
    return new vo(e);
  },
  matchMediaRefresh: function() {
    return rt.forEach(function(e) {
      var t = e.conditions, r, n;
      for (n in t)
        t[n] && (t[n] = !1, r = 1);
      r && e.revert();
    }) || Or();
  },
  addEventListener: function(e, t) {
    var r = Xt[e] || (Xt[e] = []);
    ~r.indexOf(t) || r.push(t);
  },
  removeEventListener: function(e, t) {
    var r = Xt[e], n = r && r.indexOf(t);
    n >= 0 && r.splice(n, 1);
  },
  utils: {
    wrap: Qs,
    wrapYoyo: Ks,
    distribute: ai,
    random: ui,
    snap: li,
    normalize: Zs,
    getUnit: ae,
    clamp: Xs,
    splitColor: _i,
    toArray: Te,
    selector: Sr,
    mapRange: fi,
    pipe: Hs,
    unitize: Js,
    interpolate: eo,
    shuffle: oi
  },
  install: $n,
  effects: lr,
  ticker: ge,
  updateRoot: ue.updateRoot,
  plugins: me,
  globalTimeline: H,
  core: {
    PropTween: he,
    globals: Hn,
    Tween: te,
    Timeline: ue,
    Animation: It,
    getCache: Ke,
    _removeLinkedListItem: rr,
    reverting: function() {
      return oe;
    },
    context: function(e) {
      return e && X && (X.data.push(e), e._ctx = X), X;
    },
    suppressOverwrites: function(e) {
      return Ir = e;
    }
  }
};
de("to,from,fromTo,delayedCall,set,killTweensOf", function(s) {
  return Qt[s] = te[s];
});
ge.add(ue.updateRoot);
ut = Qt.to({}, {
  duration: 0
});
var wo = function(e, t) {
  for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
    r = r._next;
  return r;
}, ko = function(e, t) {
  var r = e._targets, n, i, o;
  for (n in t)
    for (i = r.length; i--; )
      o = e._ptLookup[i][n], o && (o = o.d) && (o._pt && (o = wo(o, n)), o && o.modifier && o.modifier(t[n], e, r[i], n));
}, hr = function(e, t) {
  return {
    name: e,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(n, i, o) {
      o._onInit = function(a) {
        var l, u;
        if (se(i) && (l = {}, de(i, function(c) {
          return l[c] = 1;
        }), i = l), t) {
          l = {};
          for (u in i)
            l[u] = t(i[u]);
          i = l;
        }
        ko(a, i);
      };
    }
  };
}, pe = Qt.registerPlugin({
  name: "attr",
  init: function(e, t, r, n, i) {
    var o, a, l;
    this.tween = r;
    for (o in t)
      l = e.getAttribute(o) || "", a = this.add(e, "setAttribute", (l || 0) + "", t[o], n, i, 0, 0, o), a.op = o, a.b = l, this._props.push(o);
  },
  render: function(e, t) {
    for (var r = t._pt; r; )
      oe ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(e, t) {
    for (var r = t.length; r--; )
      this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1);
  }
}, hr("roundProps", Pr), hr("modifiers"), hr("snap", li)) || Qt;
te.version = ue.version = pe.version = "3.13.0";
Xn = 1;
Lr() && bt();
N.Power0;
N.Power1;
N.Power2;
N.Power3;
N.Power4;
N.Linear;
N.Quad;
N.Cubic;
N.Quart;
N.Quint;
N.Strong;
N.Elastic;
N.Back;
N.SteppedEase;
N.Bounce;
N.Sine;
N.Expo;
N.Circ;
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var bn, Ve, ft, Jr, Ze, yn, Zr, To = function() {
  return typeof window < "u";
}, Ie = {}, Je = 180 / Math.PI, dt = Math.PI / 180, at = Math.atan2, xn = 1e8, Qr = /([A-Z])/g, So = /(left|right|width|margin|padding|x)/i, Po = /[\s,\(]\S/, Ee = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Rr = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Co = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Oo = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, Ro = function(e, t) {
  var r = t.s + t.c * e;
  t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
}, Ri = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, Ei = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, Eo = function(e, t, r) {
  return e.style[t] = r;
}, Mo = function(e, t, r) {
  return e.style.setProperty(t, r);
}, Ao = function(e, t, r) {
  return e._gsap[t] = r;
}, zo = function(e, t, r) {
  return e._gsap.scaleX = e._gsap.scaleY = r;
}, Do = function(e, t, r, n, i) {
  var o = e._gsap;
  o.scaleX = o.scaleY = r, o.renderTransform(i, o);
}, No = function(e, t, r, n, i) {
  var o = e._gsap;
  o[t] = r, o.renderTransform(i, o);
}, J = "transform", _e = J + "Origin", Io = function s(e, t) {
  var r = this, n = this.target, i = n.style, o = n._gsap;
  if (e in Ie && i) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = Ee[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(a) {
        return r.tfm[a] = De(n, a);
      }) : this.tfm[e] = o.x ? o[e] : De(n, e), e === _e && (this.tfm.zOrigin = o.zOrigin);
    else
      return Ee.transform.split(",").forEach(function(a) {
        return s.call(r, a, t);
      });
    if (this.props.indexOf(J) >= 0)
      return;
    o.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(_e, t, "")), e = J;
  }
  (i || t) && this.props.push(e, t, i[e]);
}, Mi = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, Fo = function() {
  var e = this.props, t = this.target, r = t.style, n = t._gsap, i, o;
  for (i = 0; i < e.length; i += 3)
    e[i + 1] ? e[i + 1] === 2 ? t[e[i]](e[i + 2]) : t[e[i]] = e[i + 2] : e[i + 2] ? r[e[i]] = e[i + 2] : r.removeProperty(e[i].substr(0, 2) === "--" ? e[i] : e[i].replace(Qr, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      n[o] = this.tfm[o];
    n.svg && (n.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), i = Zr(), (!i || !i.isStart) && !r[J] && (Mi(r), n.zOrigin && r[_e] && (r[_e] += " " + n.zOrigin + "px", n.zOrigin = 0, n.renderTransform()), n.uncache = 1);
  }
}, Ai = function(e, t) {
  var r = {
    target: e,
    props: [],
    revert: Fo,
    save: Io
  };
  return e._gsap || pe.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(n) {
    return r.save(n);
  }), r;
}, zi, Er = function(e, t) {
  var r = Ve.createElementNS ? Ve.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Ve.createElement(e);
  return r && r.style ? r : Ve.createElement(e);
}, Se = function s(e, t, r) {
  var n = getComputedStyle(e);
  return n[t] || n.getPropertyValue(t.replace(Qr, "-$1").toLowerCase()) || n.getPropertyValue(t) || !r && s(e, yt(t) || t, 1) || "";
}, vn = "O,Moz,ms,Ms,Webkit".split(","), yt = function(e, t, r) {
  var n = t || Ze, i = n.style, o = 5;
  if (e in i && !r)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(vn[o] + e in i); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? vn[o] : "") + e;
}, Mr = function() {
  To() && window.document && (bn = window, Ve = bn.document, ft = Ve.documentElement, Ze = Er("div") || {
    style: {}
  }, Er("div"), J = yt(J), _e = J + "Origin", Ze.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", zi = !!yt("perspective"), Zr = pe.core.reverting, Jr = 1);
}, wn = function(e) {
  var t = e.ownerSVGElement, r = Er("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = e.cloneNode(!0), i;
  n.style.display = "block", r.appendChild(n), ft.appendChild(r);
  try {
    i = n.getBBox();
  } catch {
  }
  return r.removeChild(n), ft.removeChild(r), i;
}, kn = function(e, t) {
  for (var r = t.length; r--; )
    if (e.hasAttribute(t[r]))
      return e.getAttribute(t[r]);
}, Di = function(e) {
  var t, r;
  try {
    t = e.getBBox();
  } catch {
    t = wn(e), r = 1;
  }
  return t && (t.width || t.height) || r || (t = wn(e)), t && !t.width && !t.x && !t.y ? {
    x: +kn(e, ["x", "cx", "x1"]) || 0,
    y: +kn(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, Ni = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Di(e));
}, nt = function(e, t) {
  if (t) {
    var r = e.style, n;
    t in Ie && t !== _e && (t = J), r.removeProperty ? (n = t.substr(0, 2), (n === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), r.removeProperty(n === "--" ? t : t.replace(Qr, "-$1").toLowerCase())) : r.removeAttribute(t);
  }
}, Ye = function(e, t, r, n, i, o) {
  var a = new he(e._pt, t, r, 0, 1, o ? Ei : Ri);
  return e._pt = a, a.b = n, a.e = i, e._props.push(r), a;
}, Tn = {
  deg: 1,
  rad: 1,
  turn: 1
}, Lo = {
  grid: 1,
  flex: 1
}, We = function s(e, t, r, n) {
  var i = parseFloat(r) || 0, o = (r + "").trim().substr((i + "").length) || "px", a = Ze.style, l = So.test(t), u = e.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (l ? "Width" : "Height"), d = 100, h = n === "px", _ = n === "%", p, f, m, y;
  if (n === o || !i || Tn[n] || Tn[o])
    return i;
  if (o !== "px" && !h && (i = s(e, t, r, "px")), y = e.getCTM && Ni(e), (_ || o === "%") && (Ie[t] || ~t.indexOf("adius")))
    return p = y ? e.getBBox()[l ? "width" : "height"] : e[c], ee(_ ? i / p * d : i / 100 * p);
  if (a[l ? "width" : "height"] = d + (h ? o : n), f = n !== "rem" && ~t.indexOf("adius") || n === "em" && e.appendChild && !u ? e : e.parentNode, y && (f = (e.ownerSVGElement || {}).parentNode), (!f || f === Ve || !f.appendChild) && (f = Ve.body), m = f._gsap, m && _ && m.width && l && m.time === ge.time && !m.uncache)
    return ee(i / m.width * d);
  if (_ && (t === "height" || t === "width")) {
    var x = e.style[t];
    e.style[t] = d + n, p = e[c], x ? e.style[t] = x : nt(e, t);
  } else
    (_ || o === "%") && !Lo[Se(f, "display")] && (a.position = Se(e, "position")), f === e && (a.position = "static"), f.appendChild(Ze), p = Ze[c], f.removeChild(Ze), a.position = "absolute";
  return l && _ && (m = Ke(f), m.time = ge.time, m.width = f[c]), ee(h ? p * i / d : p && i ? d / p * i : 0);
}, De = function(e, t, r, n) {
  var i;
  return Jr || Mr(), t in Ee && t !== "transform" && (t = Ee[t], ~t.indexOf(",") && (t = t.split(",")[0])), Ie[t] && t !== "transform" ? (i = Lt(e, n), i = t !== "transformOrigin" ? i[t] : i.svg ? i.origin : er(Se(e, _e)) + " " + i.zOrigin + "px") : (i = e.style[t], (!i || i === "auto" || n || ~(i + "").indexOf("calc(")) && (i = Kt[t] && Kt[t](e, t, r) || Se(e, t) || Zn(e, t) || (t === "opacity" ? 1 : 0))), r && !~(i + "").trim().indexOf(" ") ? We(e, t, i, r) + r : i;
}, jo = function(e, t, r, n) {
  if (!r || r === "none") {
    var i = yt(t, e, 1), o = i && Se(e, i, 1);
    o && o !== r ? (t = i, r = o) : t === "borderColor" && (r = Se(e, "borderTopColor"));
  }
  var a = new he(this._pt, e.style, t, 0, 1, Pi), l = 0, u = 0, c, d, h, _, p, f, m, y, x, T, k, g;
  if (a.b = r, a.e = n, r += "", n += "", n.substring(0, 6) === "var(--" && (n = Se(e, n.substring(4, n.indexOf(")")))), n === "auto" && (f = e.style[t], e.style[t] = n, n = Se(e, t) || n, f ? e.style[t] = f : nt(e, t)), c = [r, n], mi(c), r = c[0], n = c[1], h = r.match(lt) || [], g = n.match(lt) || [], g.length) {
    for (; d = lt.exec(n); )
      m = d[0], x = n.substring(l, d.index), p ? p = (p + 1) % 5 : (x.substr(-5) === "rgba(" || x.substr(-5) === "hsla(") && (p = 1), m !== (f = h[u++] || "") && (_ = parseFloat(f) || 0, k = f.substr((_ + "").length), m.charAt(1) === "=" && (m = ct(_, m) + k), y = parseFloat(m), T = m.substr((y + "").length), l = lt.lastIndex - T.length, T || (T = T || ye.units[t] || k, l === n.length && (n += T, a.e += T)), k !== T && (_ = We(e, t, f, T) || 0), a._pt = {
        _next: a._pt,
        p: x || u === 1 ? x : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: _,
        c: y - _,
        m: p && p < 4 || t === "zIndex" ? Math.round : 0
      });
    a.c = l < n.length ? n.substring(l, n.length) : "";
  } else
    a.r = t === "display" && n === "none" ? Ei : Ri;
  return Wn.test(n) && (a.e = 0), this._pt = a, a;
}, Sn = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Vo = function(e) {
  var t = e.split(" "), r = t[0], n = t[1] || "50%";
  return (r === "top" || r === "bottom" || n === "left" || n === "right") && (e = r, r = n, n = e), t[0] = Sn[r] || r, t[1] = Sn[n] || n, t.join(" ");
}, Yo = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var r = t.t, n = r.style, i = t.u, o = r._gsap, a, l, u;
    if (i === "all" || i === !0)
      n.cssText = "", l = 1;
    else
      for (i = i.split(","), u = i.length; --u > -1; )
        a = i[u], Ie[a] && (l = 1, a = a === "transformOrigin" ? _e : J), nt(r, a);
    l && (nt(r, J), o && (o.svg && r.removeAttribute("transform"), n.scale = n.rotate = n.translate = "none", Lt(r, 1), o.uncache = 1, Mi(n)));
  }
}, Kt = {
  clearProps: function(e, t, r, n, i) {
    if (i.data !== "isFromStart") {
      var o = e._pt = new he(e._pt, t, r, 0, 0, Yo);
      return o.u = n, o.pr = -10, o.tween = i, e._props.push(r), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, Ft = [1, 0, 0, 1, 0, 0], Ii = {}, Fi = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, Pn = function(e) {
  var t = Se(e, J);
  return Fi(t) ? Ft : t.substr(7).match(Gn).map(ee);
}, Kr = function(e, t) {
  var r = e._gsap || Ke(e), n = e.style, i = Pn(e), o, a, l, u;
  return r.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, i = [l.a, l.b, l.c, l.d, l.e, l.f], i.join(",") === "1,0,0,1,0,0" ? Ft : i) : (i === Ft && !e.offsetParent && e !== ft && !r.svg && (l = n.display, n.display = "block", o = e.parentNode, (!o || !e.offsetParent && !e.getBoundingClientRect().width) && (u = 1, a = e.nextElementSibling, ft.appendChild(e)), i = Pn(e), l ? n.display = l : nt(e, "display"), u && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : ft.removeChild(e))), t && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i);
}, Ar = function(e, t, r, n, i, o) {
  var a = e._gsap, l = i || Kr(e, !0), u = a.xOrigin || 0, c = a.yOrigin || 0, d = a.xOffset || 0, h = a.yOffset || 0, _ = l[0], p = l[1], f = l[2], m = l[3], y = l[4], x = l[5], T = t.split(" "), k = parseFloat(T[0]) || 0, g = parseFloat(T[1]) || 0, S, P, b, w;
  r ? l !== Ft && (P = _ * m - p * f) && (b = k * (m / P) + g * (-f / P) + (f * x - m * y) / P, w = k * (-p / P) + g * (_ / P) - (_ * x - p * y) / P, k = b, g = w) : (S = Di(e), k = S.x + (~T[0].indexOf("%") ? k / 100 * S.width : k), g = S.y + (~(T[1] || T[0]).indexOf("%") ? g / 100 * S.height : g)), n || n !== !1 && a.smooth ? (y = k - u, x = g - c, a.xOffset = d + (y * _ + x * f) - y, a.yOffset = h + (y * p + x * m) - x) : a.xOffset = a.yOffset = 0, a.xOrigin = k, a.yOrigin = g, a.smooth = !!n, a.origin = t, a.originIsAbsolute = !!r, e.style[_e] = "0px 0px", o && (Ye(o, a, "xOrigin", u, k), Ye(o, a, "yOrigin", c, g), Ye(o, a, "xOffset", d, a.xOffset), Ye(o, a, "yOffset", h, a.yOffset)), e.setAttribute("data-svg-origin", k + " " + g);
}, Lt = function(e, t) {
  var r = e._gsap || new xi(e);
  if ("x" in r && !t && !r.uncache)
    return r;
  var n = e.style, i = r.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(e), u = Se(e, _e) || "0", c, d, h, _, p, f, m, y, x, T, k, g, S, P, b, w, A, j, I, V, q, U, F, Y, R, Ce, v, E, z, D, L, $;
  return c = d = h = f = m = y = x = T = k = 0, _ = p = 1, r.svg = !!(e.getCTM && Ni(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (n[J] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[J] !== "none" ? l[J] : "")), n.scale = n.rotate = n.translate = "none"), P = Kr(e, r.svg), r.svg && (r.uncache ? (R = e.getBBox(), u = r.xOrigin - R.x + "px " + (r.yOrigin - R.y) + "px", Y = "") : Y = !t && e.getAttribute("data-svg-origin"), Ar(e, Y || u, !!Y || r.originIsAbsolute, r.smooth !== !1, P)), g = r.xOrigin || 0, S = r.yOrigin || 0, P !== Ft && (j = P[0], I = P[1], V = P[2], q = P[3], c = U = P[4], d = F = P[5], P.length === 6 ? (_ = Math.sqrt(j * j + I * I), p = Math.sqrt(q * q + V * V), f = j || I ? at(I, j) * Je : 0, x = V || q ? at(V, q) * Je + f : 0, x && (p *= Math.abs(Math.cos(x * dt))), r.svg && (c -= g - (g * j + S * V), d -= S - (g * I + S * q))) : ($ = P[6], D = P[7], v = P[8], E = P[9], z = P[10], L = P[11], c = P[12], d = P[13], h = P[14], b = at($, z), m = b * Je, b && (w = Math.cos(-b), A = Math.sin(-b), Y = U * w + v * A, R = F * w + E * A, Ce = $ * w + z * A, v = U * -A + v * w, E = F * -A + E * w, z = $ * -A + z * w, L = D * -A + L * w, U = Y, F = R, $ = Ce), b = at(-V, z), y = b * Je, b && (w = Math.cos(-b), A = Math.sin(-b), Y = j * w - v * A, R = I * w - E * A, Ce = V * w - z * A, L = q * A + L * w, j = Y, I = R, V = Ce), b = at(I, j), f = b * Je, b && (w = Math.cos(b), A = Math.sin(b), Y = j * w + I * A, R = U * w + F * A, I = I * w - j * A, F = F * w - U * A, j = Y, U = R), m && Math.abs(m) + Math.abs(f) > 359.9 && (m = f = 0, y = 180 - y), _ = ee(Math.sqrt(j * j + I * I + V * V)), p = ee(Math.sqrt(F * F + $ * $)), b = at(U, F), x = Math.abs(b) > 2e-4 ? b * Je : 0, k = L ? 1 / (L < 0 ? -L : L) : 0), r.svg && (Y = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !Fi(Se(e, J)), Y && e.setAttribute("transform", Y))), Math.abs(x) > 90 && Math.abs(x) < 270 && (i ? (_ *= -1, x += f <= 0 ? 180 : -180, f += f <= 0 ? 180 : -180) : (p *= -1, x += x <= 0 ? 180 : -180)), t = t || r.uncache, r.x = c - ((r.xPercent = c && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + o, r.y = d - ((r.yPercent = d && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + o, r.z = h + o, r.scaleX = ee(_), r.scaleY = ee(p), r.rotation = ee(f) + a, r.rotationX = ee(m) + a, r.rotationY = ee(y) + a, r.skewX = x + a, r.skewY = T + a, r.transformPerspective = k + o, (r.zOrigin = parseFloat(u.split(" ")[2]) || !t && r.zOrigin || 0) && (n[_e] = er(u)), r.xOffset = r.yOffset = 0, r.force3D = ye.force3D, r.renderTransform = r.svg ? Bo : zi ? Li : Uo, r.uncache = 0, r;
}, er = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, _r = function(e, t, r) {
  var n = ae(t);
  return ee(parseFloat(t) + parseFloat(We(e, "x", r + "px", n))) + n;
}, Uo = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Li(e, t);
}, $e = "0deg", Pt = "0px", He = ") ", Li = function(e, t) {
  var r = t || this, n = r.xPercent, i = r.yPercent, o = r.x, a = r.y, l = r.z, u = r.rotation, c = r.rotationY, d = r.rotationX, h = r.skewX, _ = r.skewY, p = r.scaleX, f = r.scaleY, m = r.transformPerspective, y = r.force3D, x = r.target, T = r.zOrigin, k = "", g = y === "auto" && e && e !== 1 || y === !0;
  if (T && (d !== $e || c !== $e)) {
    var S = parseFloat(c) * dt, P = Math.sin(S), b = Math.cos(S), w;
    S = parseFloat(d) * dt, w = Math.cos(S), o = _r(x, o, P * w * -T), a = _r(x, a, -Math.sin(S) * -T), l = _r(x, l, b * w * -T + T);
  }
  m !== Pt && (k += "perspective(" + m + He), (n || i) && (k += "translate(" + n + "%, " + i + "%) "), (g || o !== Pt || a !== Pt || l !== Pt) && (k += l !== Pt || g ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + He), u !== $e && (k += "rotate(" + u + He), c !== $e && (k += "rotateY(" + c + He), d !== $e && (k += "rotateX(" + d + He), (h !== $e || _ !== $e) && (k += "skew(" + h + ", " + _ + He), (p !== 1 || f !== 1) && (k += "scale(" + p + ", " + f + He), x.style[J] = k || "translate(0, 0)";
}, Bo = function(e, t) {
  var r = t || this, n = r.xPercent, i = r.yPercent, o = r.x, a = r.y, l = r.rotation, u = r.skewX, c = r.skewY, d = r.scaleX, h = r.scaleY, _ = r.target, p = r.xOrigin, f = r.yOrigin, m = r.xOffset, y = r.yOffset, x = r.forceCSS, T = parseFloat(o), k = parseFloat(a), g, S, P, b, w;
  l = parseFloat(l), u = parseFloat(u), c = parseFloat(c), c && (c = parseFloat(c), u += c, l += c), l || u ? (l *= dt, u *= dt, g = Math.cos(l) * d, S = Math.sin(l) * d, P = Math.sin(l - u) * -h, b = Math.cos(l - u) * h, u && (c *= dt, w = Math.tan(u - c), w = Math.sqrt(1 + w * w), P *= w, b *= w, c && (w = Math.tan(c), w = Math.sqrt(1 + w * w), g *= w, S *= w)), g = ee(g), S = ee(S), P = ee(P), b = ee(b)) : (g = d, b = h, S = P = 0), (T && !~(o + "").indexOf("px") || k && !~(a + "").indexOf("px")) && (T = We(_, "x", o, "px"), k = We(_, "y", a, "px")), (p || f || m || y) && (T = ee(T + p - (p * g + f * P) + m), k = ee(k + f - (p * S + f * b) + y)), (n || i) && (w = _.getBBox(), T = ee(T + n / 100 * w.width), k = ee(k + i / 100 * w.height)), w = "matrix(" + g + "," + S + "," + P + "," + b + "," + T + "," + k + ")", _.setAttribute("transform", w), x && (_.style[J] = w);
}, Go = function(e, t, r, n, i) {
  var o = 360, a = se(i), l = parseFloat(i) * (a && ~i.indexOf("rad") ? Je : 1), u = l - n, c = n + u + "deg", d, h;
  return a && (d = i.split("_")[1], d === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), d === "cw" && u < 0 ? u = (u + o * xn) % o - ~~(u / o) * o : d === "ccw" && u > 0 && (u = (u - o * xn) % o - ~~(u / o) * o)), e._pt = h = new he(e._pt, t, r, n, u, Co), h.e = c, h.u = "deg", e._props.push(r), h;
}, Cn = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, Wo = function(e, t, r) {
  var n = Cn({}, r._gsap), i = "perspective,force3D,transformOrigin,svgOrigin", o = r.style, a, l, u, c, d, h, _, p;
  n.svg ? (u = r.getAttribute("transform"), r.setAttribute("transform", ""), o[J] = t, a = Lt(r, 1), nt(r, J), r.setAttribute("transform", u)) : (u = getComputedStyle(r)[J], o[J] = t, a = Lt(r, 1), o[J] = u);
  for (l in Ie)
    u = n[l], c = a[l], u !== c && i.indexOf(l) < 0 && (_ = ae(u), p = ae(c), d = _ !== p ? We(r, l, u, p) : parseFloat(u), h = parseFloat(c), e._pt = new he(e._pt, a, l, d, h - d, Rr), e._pt.u = p || 0, e._props.push(l));
  Cn(a, n);
};
de("padding,margin,Width,Radius", function(s, e) {
  var t = "Top", r = "Right", n = "Bottom", i = "Left", o = (e < 3 ? [t, r, n, i] : [t + i, t + r, n + r, n + i]).map(function(a) {
    return e < 2 ? s + a : "border" + a + s;
  });
  Kt[e > 1 ? "border" + s : s] = function(a, l, u, c, d) {
    var h, _;
    if (arguments.length < 4)
      return h = o.map(function(p) {
        return De(a, p, u);
      }), _ = h.join(" "), _.split(h[0]).length === 5 ? h[0] : _;
    h = (c + "").split(" "), _ = {}, o.forEach(function(p, f) {
      return _[p] = h[f] = h[f] || h[(f - 1) / 2 | 0];
    }), a.init(l, _, d);
  };
});
var ji = {
  name: "css",
  register: Mr,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, r, n, i) {
    var o = this._props, a = e.style, l = r.vars.startAt, u, c, d, h, _, p, f, m, y, x, T, k, g, S, P, b;
    Jr || Mr(), this.styles = this.styles || Ai(e), b = this.styles.props, this.tween = r;
    for (f in t)
      if (f !== "autoRound" && (c = t[f], !(me[f] && vi(f, t, r, n, e, i)))) {
        if (_ = typeof c, p = Kt[f], _ === "function" && (c = c.call(r, n, e, i), _ = typeof c), _ === "string" && ~c.indexOf("random(") && (c = Dt(c)), p)
          p(this, e, f, c, r) && (P = 1);
        else if (f.substr(0, 2) === "--")
          u = (getComputedStyle(e).getPropertyValue(f) + "").trim(), c += "", Be.lastIndex = 0, Be.test(u) || (m = ae(u), y = ae(c)), y ? m !== y && (u = We(e, f, u, y) + y) : m && (c += m), this.add(a, "setProperty", u, c, n, i, 0, 0, f), o.push(f), b.push(f, 0, a[f]);
        else if (_ !== "undefined") {
          if (l && f in l ? (u = typeof l[f] == "function" ? l[f].call(r, n, e, i) : l[f], se(u) && ~u.indexOf("random(") && (u = Dt(u)), ae(u + "") || u === "auto" || (u += ye.units[f] || ae(De(e, f)) || ""), (u + "").charAt(1) === "=" && (u = De(e, f))) : u = De(e, f), h = parseFloat(u), x = _ === "string" && c.charAt(1) === "=" && c.substr(0, 2), x && (c = c.substr(2)), d = parseFloat(c), f in Ee && (f === "autoAlpha" && (h === 1 && De(e, "visibility") === "hidden" && d && (h = 0), b.push("visibility", 0, a.visibility), Ye(this, a, "visibility", h ? "inherit" : "hidden", d ? "inherit" : "hidden", !d)), f !== "scale" && f !== "transform" && (f = Ee[f], ~f.indexOf(",") && (f = f.split(",")[0]))), T = f in Ie, T) {
            if (this.styles.save(f), _ === "string" && c.substring(0, 6) === "var(--" && (c = Se(e, c.substring(4, c.indexOf(")"))), d = parseFloat(c)), k || (g = e._gsap, g.renderTransform && !t.parseTransform || Lt(e, t.parseTransform), S = t.smoothOrigin !== !1 && g.smooth, k = this._pt = new he(this._pt, a, J, 0, 1, g.renderTransform, g, 0, -1), k.dep = 1), f === "scale")
              this._pt = new he(this._pt, g, "scaleY", g.scaleY, (x ? ct(g.scaleY, x + d) : d) - g.scaleY || 0, Rr), this._pt.u = 0, o.push("scaleY", f), f += "X";
            else if (f === "transformOrigin") {
              b.push(_e, 0, a[_e]), c = Vo(c), g.svg ? Ar(e, c, 0, S, 0, this) : (y = parseFloat(c.split(" ")[2]) || 0, y !== g.zOrigin && Ye(this, g, "zOrigin", g.zOrigin, y), Ye(this, a, f, er(u), er(c)));
              continue;
            } else if (f === "svgOrigin") {
              Ar(e, c, 1, S, 0, this);
              continue;
            } else if (f in Ii) {
              Go(this, g, f, h, x ? ct(h, x + c) : c);
              continue;
            } else if (f === "smoothOrigin") {
              Ye(this, g, "smooth", g.smooth, c);
              continue;
            } else if (f === "force3D") {
              g[f] = c;
              continue;
            } else if (f === "transform") {
              Wo(this, c, e);
              continue;
            }
          } else f in a || (f = yt(f) || f);
          if (T || (d || d === 0) && (h || h === 0) && !Po.test(c) && f in a)
            m = (u + "").substr((h + "").length), d || (d = 0), y = ae(c) || (f in ye.units ? ye.units[f] : m), m !== y && (h = We(e, f, u, y)), this._pt = new he(this._pt, T ? g : a, f, h, (x ? ct(h, x + d) : d) - h, !T && (y === "px" || f === "zIndex") && t.autoRound !== !1 ? Ro : Rr), this._pt.u = y || 0, m !== y && y !== "%" && (this._pt.b = u, this._pt.r = Oo);
          else if (f in a)
            jo.call(this, e, f, u, x ? x + c : c);
          else if (f in e)
            this.add(e, f, u || e[f], x ? x + c : c, n, i);
          else if (f !== "parseTransform") {
            Vr(f, c);
            continue;
          }
          T || (f in a ? b.push(f, 0, a[f]) : typeof e[f] == "function" ? b.push(f, 2, e[f]()) : b.push(f, 1, u || e[f])), o.push(f);
        }
      }
    P && Ci(this);
  },
  render: function(e, t) {
    if (t.tween._time || !Zr())
      for (var r = t._pt; r; )
        r.r(e, r.d), r = r._next;
    else
      t.styles.revert();
  },
  get: De,
  aliases: Ee,
  getSetter: function(e, t, r) {
    var n = Ee[t];
    return n && n.indexOf(",") < 0 && (t = n), t in Ie && t !== _e && (e._gsap.x || De(e, "x")) ? r && yn === r ? t === "scale" ? zo : Ao : (yn = r || {}) && (t === "scale" ? Do : No) : e.style && !Fr(e.style[t]) ? Eo : ~t.indexOf("-") ? Mo : $r(e, t);
  },
  core: {
    _removeProperty: nt,
    _getMatrix: Kr
  }
};
pe.utils.checkPrefix = yt;
pe.core.getStyleSaver = Ai;
(function(s, e, t, r) {
  var n = de(s + "," + e + "," + t, function(i) {
    Ie[i] = 1;
  });
  de(e, function(i) {
    ye.units[i] = "deg", Ii[i] = 1;
  }), Ee[n[13]] = s + "," + e, de(r, function(i) {
    var o = i.split(":");
    Ee[o[1]] = n[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
de("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s) {
  ye.units[s] = "px";
});
pe.registerPlugin(ji);
var K = pe.registerPlugin(ji) || pe;
K.core.Tween;
const qo = {
  fadeIn: (s) => K.fromTo(s, { opacity: 0 }, { opacity: 1, duration: 0.8 }),
  scaleIn: (s) => K.fromTo(
    s,
    { scale: 0 },
    { scale: 1, duration: 0.6, ease: "back.out(1.7)" }
  ),
  slideUp: (s) => K.fromTo(s, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }),
  bounceIn: (s) => K.fromTo(
    s,
    { scale: 0 },
    { scale: 1, duration: 0.8, ease: "bounce.out" }
  ),
  none: () => {
  }
}, zr = {
  jiggle: (s) => {
    K.killTweensOf(s), K.to(s, {
      keyframes: [
        { scale: 1.1, rotation: 2, duration: 0.15, ease: "power1.out" },
        { scale: 0.95, rotation: -2, duration: 0.15, ease: "power1.inOut" },
        { scale: 1.05, rotation: 1, duration: 0.15, ease: "power1.out" },
        { scale: 1, rotation: 0, duration: 0.2, ease: "back.out(2)" }
      ]
    });
  },
  scale: (s) => {
    K.to(s, { scale: 1.05, duration: 0.2, ease: "power1.out" });
  },
  bounce: (s) => {
    K.to(s, {
      y: -5,
      duration: 0.3,
      ease: "bounce.out",
      yoyo: !0,
      repeat: 1
    });
  },
  shadowPulse: (s) => {
    K.fromTo(
      s,
      { boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
      {
        boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
        duration: 0.4,
        ease: "power2.inOut"
      }
    );
  },
  float3D: (s) => {
    const e = s.querySelector("img"), t = s.querySelector("h3"), r = s.querySelector("p"), n = s.querySelector("div:last-child");
    K.to(s, {
      // y: -10,
      scale: 1.03,
      rotateX: 5,
      rotateY: 2,
      transformPerspective: 700,
      duration: 0.1,
      ease: "power3.out"
    }), K.to(e, { y: -10, scale: 1.05, duration: 0.5, ease: "power3.out" }), K.to(t, { y: -8, duration: 0.4, ease: "power3.out" }), K.to(r, { y: -6, duration: 0.4, ease: "power3.out" }), K.to(n, { y: -5, opacity: 1, duration: 0.4, ease: "power3.out" });
  },
  reset: (s) => {
    const e = s.querySelector("img"), t = s.querySelector("h3"), r = s.querySelector("p"), n = s.querySelector("div:last-child");
    K.to(s, {
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.1,
      ease: "power3.inOut"
    }), K.to([e, t, r, n], {
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: "power3.inOut"
    });
  },
  wobbleFollow: (s) => {
    const e = s.getBoundingClientRect(), t = (n) => {
      const i = n.clientX - e.left, o = n.clientY - e.top, a = e.width / 2, l = e.height / 2, u = (o - l) / l * 5, c = (i - a) / a * 5;
      K.to(s, {
        rotationX: u,
        rotationY: c,
        transformPerspective: 800,
        transformOrigin: "center",
        ease: "power2.out",
        duration: 0.01
      });
    }, r = () => {
      K.to(s, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.3,
        ease: "elastic.out(1, 0.3)"
      });
    };
    return s.addEventListener("mousemove", t), s.addEventListener("mouseleave", r), () => {
      s.removeEventListener("mousemove", t), s.removeEventListener("mouseleave", r);
    };
  },
  none: () => {
  }
}, Xo = tr(
  "inline-flex items-center cursor-pointer justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        dark: "bg-slate-900 text-white",
        primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
        secondary: "bg-indigo-500 hover:bg-indigo-700 text-white",
        destructive: "bg-red-700 text-white hover:bg-red-900",
        ok: "bg-green-500 hover:bg-green-700",
        ghost: "bg-gray-50 hover:bg-gray-100 text-gray-700",
        link: "bg-transparent hover:bg-transparent text-indigo-600",
        outline: "bg-transparent hover:bg-gray-100 text-gray-700 border border-gray-300"
      },
      size: {
        default: "px-9 py-3",
        sm: "px-4 py-2",
        lg: "px-14 py-4",
        xl: "px-16 py-4",
        icon: "w-12 h-12",
        full: "w-full h-12",
        auto: "w-auto h-auto"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
), $o = ht.forwardRef(
  ({
    className: s,
    variant: e,
    size: t,
    asChild: r = !1,
    animation: n = "fadeIn",
    hoverAnimation: i = "jiggle",
    ...o
  }, a) => {
    const l = r ? Dr : "button", u = On(null);
    Vi(() => {
      const p = u.current;
      !p || n === "none" || qo[n]?.(p);
    }, [n]);
    const c = () => {
      const p = u.current;
      p && zr[i]?.(p);
    }, d = () => {
      gsap.to(u.current, {
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 0.3
      });
    }, h = () => {
      gsap.to(u.current, { scale: 0.92, duration: 0.1 });
    }, _ = () => {
      gsap.to(u.current, {
        scale: 1.05,
        duration: 0.15,
        ease: "back.out(2)"
      });
    };
    return /* @__PURE__ */ G.jsx(
      l,
      {
        ref: (p) => {
          u.current = p, typeof a == "function" ? a(p) : a && (a.current = p);
        },
        className: Qe(Xo({ variant: e, size: t, className: s })),
        onMouseEnter: c,
        onMouseLeave: d,
        onMouseDown: h,
        onMouseUp: _,
        ...o
      }
    );
  }
);
$o.displayName = "Button";
const Ho = tr(
  "rounded-lg transition-all duration-300 cursor-pointer overflow-hidden",
  {
    variants: {
      variant: {
        light: "bg-white text-gray-800 shadow-lg hover:shadow-xl",
        dark: "bg-slate-800 text-white shadow-md hover:shadow-lg",
        outline: "border border-gray-300 bg-transparent text-gray-800 dark:border-gray-700"
      },
      // hoverEffect: {
      //   none: "",
      //   scale: "hover:scale-[1.02]",
      //   shadow: "hover:shadow-xl",
      //   lift: "hover:-translate-y-1 hover:shadow-xl",
      //   rotate: "hover:rotate-1",
      // },
      size: {
        sm: "p-3 text-sm",
        md: "p-6 text-base",
        lg: "p-8 text-lg"
      }
    },
    defaultVariants: {
      variant: "light",
      size: "md"
    }
  }
), Jo = ht.forwardRef(
  ({
    asChild: s = !1,
    title: e,
    description: t,
    children: r,
    className: n,
    variant: i,
    image: o,
    ratio: a = "16:9",
    size: l,
    footer: u,
    animate: c = !0,
    hoverAnimation: d = "none",
    ...h
  }, _) => {
    const p = s ? Dr : "div", f = On(null), m = () => {
      const g = f.current;
      g && zr[d]?.(g);
    }, y = () => {
      const g = f.current;
      g && zr.reset(g);
    }, x = () => {
      const g = f.current;
      g && K.to(g, { scale: 0.95, duration: 0.1, ease: "power1.inOut" });
    }, T = () => {
      const g = f.current;
      g && K.to(g, { scale: 1.05, duration: 0.1, ease: "back.out(2)" });
    }, k = a === "16:9" ? "aspect-video" : a === "4:3" ? "aspect-[4/3]" : "aspect-square";
    return /* @__PURE__ */ G.jsxs(
      p,
      {
        ref: (g) => {
          f.current = g, typeof _ == "function" ? _(g) : _ && (_.current = g);
        },
        onMouseEnter: m,
        onMouseLeave: y,
        onMouseDown: x,
        onMouseUp: T,
        className: Qe(Ho({ variant: i, size: l }), n),
        role: "article",
        tabIndex: 0,
        ...h,
        children: [
          o && /* @__PURE__ */ G.jsx("div", { className: `${k} mb-4`, children: /* @__PURE__ */ G.jsx(
            "img",
            {
              src: o,
              alt: e || "Card image",
              className: "w-full h-full object-cover rounded-md"
            }
          ) }),
          e && /* @__PURE__ */ G.jsx("h3", { className: "font-semibold text-lg mb-2 text-[inherit]", children: e }),
          t && /* @__PURE__ */ G.jsx("p", { className: "text-gray-500 mb-4 text-[inherit]", children: t }),
          r,
          u && /* @__PURE__ */ G.jsx("div", { className: "mt-4", children: u })
        ]
      }
    );
  }
);
Jo.displayName = "Card";
const Zo = tr(
  "fixed inset-0 flex items-center justify-center z-50 transition-all duration-300",
  {
    variants: {
      variant: {
        light: "bg-white text-gray-900 shadow-2xl border border-gray-200 hover:shadow-xl",
        dark: "bg-slate-900 text-white shadow-lg border border-slate-700 hover:shadow-xl",
        outline: "bg-transparent border border-gray-400 text-gray-800 dark:border-gray-600 dark:text-gray-100 backdrop-blur-md"
      },
      size: {
        sm: "w-[90%] max-w-sm p-4",
        md: "w-[90%] max-w-md p-6",
        lg: "w-[90%] max-w-lg p-8"
      }
    },
    defaultVariants: {
      variant: "light",
      size: "md"
    }
  }
), Qo = ht.forwardRef(
  ({
    asChild: s = !1,
    title: e,
    description: t,
    children: r,
    className: n,
    isOpen: i = !1,
    onClose: o,
    onDone: a,
    doneText: l = "Done",
    closeText: u = "Close",
    variant: c,
    size: d,
    ...h
  }, _) => {
    if (!i) return null;
    const p = s ? Dr : "div";
    return /* @__PURE__ */ G.jsxs("div", { className: "fixed inset-0 flex items-center justify-center z-50", children: [
      /* @__PURE__ */ G.jsx(
        "div",
        {
          className: "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
          onClick: o
        }
      ),
      /* @__PURE__ */ G.jsx(
        p,
        {
          ref: _,
          className: Qe(
            Zo({ variant: c, size: d }),
            "relative rounded-xl transform scale-100 transition-all duration-300 animate-fadeIn",
            n
          ),
          ...h,
          children: /* @__PURE__ */ G.jsxs("div", { children: [
            e && /* @__PURE__ */ G.jsx("h3", { className: "text-xl font-semibold mb-2 text-[inherit]", children: e }),
            t && /* @__PURE__ */ G.jsx("p", { className: "text-gray-600 dark:text-gray-300 mb-4 text-[inherit]", children: t }),
            /* @__PURE__ */ G.jsx("div", { className: "mb-4", children: r }),
            /* @__PURE__ */ G.jsxs("div", { className: "flex justify-end gap-3 mt-6", children: [
              /* @__PURE__ */ G.jsx(
                "button",
                {
                  onClick: o,
                  className: Qe(
                    "px-4 py-2 rounded-md font-medium transition",
                    c === "dark" ? "border border-slate-600 hover:bg-slate-700" : "border border-gray-300 hover:bg-gray-100"
                  ),
                  children: u
                }
              ),
              /* @__PURE__ */ G.jsx(
                "button",
                {
                  onClick: a,
                  className: Qe(
                    "px-4 py-2 rounded-md text-white font-medium transition",
                    c === "dark" ? "bg-indigo-500 hover:bg-indigo-600" : "bg-indigo-600 hover:bg-indigo-700"
                  ),
                  children: l
                }
              )
            ] })
          ] })
        }
      )
    ] });
  }
);
Qo.displayName = "Modal";
const Ko = tr(
  "w-full rounded-md focus:outline-none shadow-sm transition-all duration-150 bg-white placeholder:text-gray-400",
  // w-full bg-transparent border-b border-gray-500 pb-2 pt-6 focus:outline-none transition-all
  {
    variants: {
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-lg"
      },
      tone: {
        default: "border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400",
        error: "border-red-400 focus:ring-2 focus:ring-red-400 focus:border-red-400",
        success: "border-green-400 focus:ring-2 focus:ring-green-400 focus:border-green-400"
      },
      disabled: {
        true: "bg-gray-100 text-gray-400 cursor-not-allowed opacity-80"
      }
    },
    defaultVariants: {
      size: "md",
      tone: "default",
      disabled: !1
    }
  }
), ea = ht.forwardRef(
  ({
    label: s,
    hint: e,
    error: t,
    className: r,
    size: n = "md",
    tone: i,
    disabled: o,
    id: a,
    ...l
  }, u) => {
    const c = a || ht.useId?.() || `input-${Math.random().toString(36).slice(2, 9)}`;
    return /* @__PURE__ */ G.jsxs("div", { className: "flex flex-col gap-1 w-full", children: [
      s && /* @__PURE__ */ G.jsx(
        "label",
        {
          htmlFor: c,
          className: "text-sm font-medium text-gray-700",
          children: s
        }
      ),
      /* @__PURE__ */ G.jsx(
        "input",
        {
          id: c,
          ref: u,
          className: Qe(Ko({ size: n, tone: i, disabled: o }), r),
          disabled: o ?? !1,
          ...l
        }
      ),
      t ? /* @__PURE__ */ G.jsx("p", { className: "text-sm text-red-500", children: t }) : e ? /* @__PURE__ */ G.jsx("p", { className: "text-sm text-gray-500", children: e }) : null
    ] });
  }
);
ea.displayName = "Input";
const ta = {
  top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
  right: "left-full top-1/2 ml-2 -translate-y-1/2",
  bottom: "left-1/2 top-full mt-2 -translate-x-1/2",
  left: "right-full top-1/2 mr-2 -translate-y-1/2"
}, na = ({
  content: s,
  children: e,
  position: t = "top",
  variant: r = "dark",
  className: n
}) => /* @__PURE__ */ G.jsxs("span", { className: "group relative inline-flex", children: [
  /* @__PURE__ */ G.jsx("span", { tabIndex: 0, className: "inline-flex cursor-help focus:outline-none", children: e }),
  /* @__PURE__ */ G.jsx(
    "span",
    {
      role: "tooltip",
      className: Qe(
        "pointer-events-none absolute z-10 w-max max-w-56 rounded-md px-3 py-2 text-sm opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100",
        ta[t],
        r === "light" ? "border border-gray-200 bg-white text-gray-900" : "bg-gray-900 text-white",
        n
      ),
      children: s
    }
  )
] });
export {
  $o as Button,
  Jo as Card,
  ea as Input,
  Qo as Modal,
  na as Tooltip,
  Xo as buttonVariants,
  Ho as cardVariants,
  Ko as inputVariants,
  Zo as modalVariants
};
