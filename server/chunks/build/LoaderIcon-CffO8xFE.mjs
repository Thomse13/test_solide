import { ssr, ssrHydrationKey, ssrStyle, ssrAttribute, escape, createComponent, mergeProps, ssrElement } from 'solid-js/web';
import { createSignal, untrack, createEffect, onCleanup, For, createMemo, onMount, createRoot, Switch, Match } from 'solid-js';
import { createStore, produce } from 'solid-js/store';

const K = (t) => typeof t == "function", w = (t, e) => K(t) ? t(e) : t;
var r;
(function(t) {
  t[t.ADD_TOAST = 0] = "ADD_TOAST", t[t.UPDATE_TOAST = 1] = "UPDATE_TOAST", t[t.UPSERT_TOAST = 2] = "UPSERT_TOAST", t[t.DISMISS_TOAST = 3] = "DISMISS_TOAST", t[t.REMOVE_TOAST = 4] = "REMOVE_TOAST", t[t.START_PAUSE = 5] = "START_PAUSE", t[t.END_PAUSE = 6] = "END_PAUSE";
})(r || (r = {}));
const [p, h] = createStore({ toasts: [], pausedAt: void 0 }), Q = () => {
  const { pausedAt: t, toasts: e } = p;
  if (t)
    return;
  const a = Date.now();
  return e.map((s) => {
    if (s.duration === 1 / 0)
      return;
    const o = (s.duration || 0) + s.pauseDuration - (a - s.createdAt);
    if (o <= 0) {
      s.visible && T({ type: r.DISMISS_TOAST, toastId: s.id });
      return;
    }
    return setTimeout(() => {
      T({ type: r.DISMISS_TOAST, toastId: s.id });
    }, o);
  });
}, x = /* @__PURE__ */ new Map(), I = (t, e) => {
  if (x.has(t))
    return;
  const a = setTimeout(() => {
    x.delete(t), T({ type: r.REMOVE_TOAST, toastId: t });
  }, e);
  x.set(t, a);
}, Y = (t) => {
  const e = x.get(t);
  x.delete(t), e && clearTimeout(e);
}, T = (t) => {
  switch (t.type) {
    case r.ADD_TOAST:
      h("toasts", (s) => {
        const o = s;
        return [t.toast, ...o];
      });
      break;
    case r.DISMISS_TOAST:
      const { toastId: e } = t, a = p.toasts;
      if (e) {
        const s = a.find((o) => o.id === e);
        s && I(e, s.unmountDelay), h("toasts", (o) => o.id === e, produce((o) => o.visible = false));
      } else
        a.forEach((s) => {
          I(s.id, s.unmountDelay);
        }), h("toasts", (s) => s.id !== void 0, produce((s) => s.visible = false));
      break;
    case r.REMOVE_TOAST:
      if (!t.toastId) {
        h("toasts", []);
        break;
      }
      h("toasts", (s) => s.filter((C) => C.id !== t.toastId));
      break;
    case r.UPDATE_TOAST:
      t.toast.id && Y(t.toast.id), h("toasts", (s) => s.id === t.toast.id, (s) => ({ ...s, ...t.toast }));
      break;
    case r.UPSERT_TOAST:
      p.toasts.find((s) => s.id === t.toast.id) ? T({ type: r.UPDATE_TOAST, toast: t.toast }) : T({ type: r.ADD_TOAST, toast: t.toast });
      break;
    case r.START_PAUSE:
      h(produce((s) => {
        s.pausedAt = Date.now(), s.toasts.forEach((o) => {
          o.paused = true;
        });
      }));
      break;
    case r.END_PAUSE:
      const l = t.time - (p.pausedAt || 0);
      h(produce((s) => {
        s.pausedAt = void 0, s.toasts.forEach((o) => {
          o.pauseDuration += l, o.paused = false;
        });
      }));
      break;
  }
}, q = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 }, b = { id: "", icon: "", unmountDelay: 500, duration: 3e3, ariaProps: { role: "status", "aria-live": "polite" }, className: "", style: {}, position: "top-right", iconTheme: {} }, N = { position: "top-right", toastOptions: b, gutter: 8, containerStyle: {}, containerClassName: "" }, A = "16px", J = { position: "fixed", "z-index": 9999, top: A, bottom: A, left: A, right: A, "pointer-events": "none" }, X = /* @__PURE__ */ (() => {
  let t = 0;
  return () => String(++t);
})(), Z = (t) => {
  ot((e) => {
    var _a, _b, _c, _d;
    return { containerClassName: (_a = t.containerClassName) != null ? _a : e.containerClassName, containerStyle: (_b = t.containerStyle) != null ? _b : e.containerStyle, gutter: (_c = t.gutter) != null ? _c : e.gutter, position: (_d = t.position) != null ? _d : e.position, toastOptions: { ...t.toastOptions } };
  });
}, tt = (t, e) => {
  const l = t.includes("top") ? { top: 0, "margin-top": `${e}px` } : { bottom: 0, "margin-bottom": `${e}px` }, s = t.includes("center") ? { "justify-content": "center" } : t.includes("right") ? { "justify-content": "flex-end" } : {};
  return { left: 0, right: 0, display: "flex", position: "absolute", transition: "all 230ms cubic-bezier(.21,1.02,.73,1)", ...l, ...s };
}, et = (t, e) => {
  const { toasts: a } = p, l = v().gutter || N.gutter || 8, s = a.filter((S) => (S.position || e) === e && S.height), o = s.findIndex((S) => S.id === t.id), C = s.filter((S, M) => M < o && S.visible).length;
  return s.slice(0, C).reduce((S, M) => S + l + (M.height || 0), 0);
}, st = { display: "flex", "align-items": "center", color: "#363636", background: "white", "box-shadow": "0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05)", "max-width": "350px", "pointer-events": "auto", padding: "8px 10px", "border-radius": "4px", "line-height": "1.3", "will-change": "transform" }, at = { display: "flex", "align-items": "center", flex: "1 1 auto", margin: "4px 10px", "white-space": "pre-line" }, E = { "flex-shrink": 0, "min-width": "20px", "min-height": "20px", display: "flex", "align-items": "center", "justify-content": "center", "text-align": "center" }, $ = (t) => ({ calcMode: "spline", keyTimes: "0; 1", keySplines: t }), [v, ot] = createSignal(N), it = (t, e = "blank", a) => {
  var _a, _b, _c;
  return { ...b, ...v().toastOptions, ...a, type: e, message: t, pauseDuration: 0, createdAt: Date.now(), visible: true, id: a.id || X(), paused: false, style: { ...b.style, ...(_a = v().toastOptions) == null ? void 0 : _a.style, ...a.style }, duration: a.duration || ((_b = v().toastOptions) == null ? void 0 : _b.duration) || q[e], position: a.position || ((_c = v().toastOptions) == null ? void 0 : _c.position) || v().position || b.position };
}, O = (t) => (e, a = {}) => createRoot(() => {
  const l = p.toasts.find((o) => o.id === a.id), s = it(e, t, { ...l, duration: void 0, ...a });
  return T({ type: r.UPSERT_TOAST, toast: s }), s.id;
}), f = (t, e) => O("blank")(t, e);
untrack(() => f);
f.error = O("error");
f.success = O("success");
f.loading = O("loading");
f.custom = O("custom");
f.dismiss = (t) => {
  T({ type: r.DISMISS_TOAST, toastId: t });
};
f.promise = (t, e, a) => {
  const l = f.loading(e.loading, { ...a });
  return t.then((s) => (f.success(w(e.success, s), { id: l, ...a }), s)).catch((s) => {
    f.error(w(e.error, s), { id: l, ...a });
  }), t;
};
f.remove = (t) => {
  T({ type: r.REMOVE_TOAST, toastId: t });
};
var rt = ["<div", ' style="', '"', "><style>.sldt-active{z-index:9999;}.sldt-active>*{pointer-events:auto;}</style><!--$-->", "<!--/--></div>"];
const Ot = (t) => (createEffect(() => {
  Z(t);
}), createEffect(() => {
  const e = Q();
  onCleanup(() => {
    e && e.forEach((a) => a && clearTimeout(a));
  });
}), ssr(rt, ssrHydrationKey(), ssrStyle({ ...J, ...t.containerStyle }), ssrAttribute("class", escape(t.containerClassName, true), false), escape(createComponent(For, { get each() {
  return p.toasts;
}, children: (e) => createComponent(ut, { toast: e }) }))));
var D = ["<div", ' style="', '">', "</div>"], nt = ["<div", ' style="', '"><!--$-->', "<!--/-->", "</div>"];
const lt = (t) => (createEffect(() => {
}), ssr(nt, ssrHydrationKey() + ssrAttribute("class", escape(t.toast.className, true), false), ssrStyle({ ...st, ...t.toast.style }), escape(createComponent(Switch, { get children() {
  return [createComponent(Match, { get when() {
    return t.toast.icon;
  }, get children() {
    return ssr(D, ssrHydrationKey(), ssrStyle(E), escape(t.toast.icon));
  } }), createComponent(Match, { get when() {
    return t.toast.type === "loading";
  }, get children() {
    return ssr(D, ssrHydrationKey(), ssrStyle(E), escape(createComponent(yt, mergeProps(() => t.toast.iconTheme))));
  } }), createComponent(Match, { get when() {
    return t.toast.type === "success";
  }, get children() {
    return ssr(D, ssrHydrationKey(), ssrStyle(E), escape(createComponent(St, mergeProps(() => t.toast.iconTheme))));
  } }), createComponent(Match, { get when() {
    return t.toast.type === "error";
  }, get children() {
    return ssr(D, ssrHydrationKey(), ssrStyle(E), escape(createComponent(gt, mergeProps(() => t.toast.iconTheme))));
  } })];
} })), ssrElement("div", mergeProps({ style: at }, () => t.toast.ariaProps), () => escape(w(t.toast.message, t.toast)), false)));
var ct = ["<div", ' style="', '"', ">", "</div>"];
const ut = (t) => {
  const e = () => {
    const l = t.toast.position || b.position, s = et(t.toast, l);
    return tt(l, s);
  }, a = createMemo(() => e());
  return onMount(() => {
  }), ssr(ct, ssrHydrationKey(), ssrStyle(a()), ssrAttribute("class", t.toast.visible ? "sldt-active" : "", false), t.toast.type === "custom" ? escape(w(t.toast.message, t.toast)) : escape(createComponent(lt, { get toast() {
    return t.toast;
  }, get position() {
    return t.toast.position || b.position;
  } })));
};
var dt = ["<circle", ' cx="16" cy="16" r="0">', "", "</circle>"], ft = ["<circle", ' cx="16" cy="16" r="12" opacity="0">', "", "</circle>"];
const F = (t) => {
  const e = { dur: "0.35s", begin: "100ms", fill: "freeze", calcMode: "spline", keyTimes: "0; 0.6; 1", keySplines: "0.25 0.71 0.4 0.88; .59 .22 .87 .63" };
  return ssr(dt, ssrHydrationKey() + ssrAttribute("fill", escape(t.fill, true), false), ssrElement("animate", mergeProps({ attributeName: "opacity", values: "0; 1; 1" }, e), void 0, false), ssrElement("animate", mergeProps({ attributeName: "r", values: "0; 17.5; 16" }, e), void 0, false));
}, R = (t) => {
  const e = { dur: "1s", begin: t.begin || "320ms", fill: "freeze", ...$("0.0 0.0 0.2 1") };
  return ssr(ft, ssrHydrationKey() + ssrAttribute("fill", escape(t.fill, true), false), ssrElement("animate", mergeProps({ attributeName: "opacity", values: "1; 0" }, e), void 0, false), ssrElement("animate", mergeProps({ attributeName: "r", values: "12; 26" }, e), void 0, false));
};
var mt = ["<svg", ' style="', '" viewBox="0 0 32 32" width="1.25rem" height="1.25rem"><!--$-->', "<!--/--><!--$-->", '<!--/--><path fill="none"', ' stroke-width="4" stroke-dasharray="22" stroke-dashoffset="22" stroke-linecap="round" stroke-miterlimit="10" d="M9.8,17.2l3.8,3.6c0.1,0.1,0.3,0.1,0.4,0l9.6-9.7">', "</path></svg>"];
const St = (t) => {
  const e = t.primary || "#34C759";
  return ssr(mt, ssrHydrationKey(), "overflow:visible", escape(createComponent(F, { fill: e })), escape(createComponent(R, { fill: e, begin: "350ms" })), ssrAttribute("stroke", escape(t.secondary, true) || "#FCFCFC", false), ssrElement("animate", mergeProps({ attributeName: "stroke-dashoffset", values: "22;0", dur: "0.25s", begin: "250ms", fill: "freeze" }, () => $("0.0, 0.0, 0.58, 1.0")), void 0, false));
};
var ht = ["<svg", ' style="', '" viewBox="0 0 32 32" width="1.25rem" height="1.25rem"><!--$-->', "<!--/--><!--$-->", '<!--/--><path fill="none"', ' stroke-width="4" stroke-dasharray="9" stroke-dashoffset="9" stroke-linecap="round" d="M16,7l0,9">', "</path><circle", ' cx="16" cy="23" r="2.5" opacity="0">', "</circle></svg>"];
const gt = (t) => {
  const e = t.primary || "#FF3B30";
  return ssr(ht, ssrHydrationKey(), "overflow:visible", escape(createComponent(F, { fill: e })), escape(createComponent(R, { fill: e })), ssrAttribute("stroke", escape(t.secondary, true) || "#FFFFFF", false), ssrElement("animate", mergeProps({ attributeName: "stroke-dashoffset", values: "9;0", dur: "0.2s", begin: "250ms", fill: "freeze" }, () => $("0.0, 0.0, 0.58, 1.0")), void 0, false), ssrAttribute("fill", escape(t.secondary, true) || "#FFFFFF", false), ssrElement("animate", mergeProps({ attributeName: "opacity", values: "0;1", dur: "0.25s", begin: "350ms", fill: "freeze" }, () => $("0.0, 0.0, 0.58, 1.0")), void 0, false));
};
var Tt = ["<svg", ' style="', '" viewBox="0 0 32 32" width="1.25rem" height="1.25rem"><path fill="none"', ' stroke-width="4" stroke-miterlimit="10" d="M16,6c3,0,5.7,1.3,7.5,3.4c1.5,1.8,2.5,4,2.5,6.6c0,5.5-4.5,10-10,10S6,21.6,6,16S10.5,6,16,6z"></path><path fill="none"', ' stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" d="M16,6c3,0,5.7,1.3,7.5,3.4c0.6,0.7,1.1,1.4,1.5,2.2"><animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.75s" repeatCount="indefinite"></animateTransform></path></svg>'];
const yt = (t) => ssr(Tt, ssrHydrationKey(), "overflow:visible", ssrAttribute("stroke", escape(t.primary, true) || "#E5E7EB", false), ssrAttribute("stroke", escape(t.secondary, true) || "#4b5563", false));

export { Ot as O };
//# sourceMappingURL=LoaderIcon-CffO8xFE.mjs.map
