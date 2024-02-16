(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode("@keyframes ripple{to{transform:scale(3);opacity:0}}:root{--m-ripple-bg: rgba(255, 255, 255, .6)}.m-ripple{position:relative;overflow:hidden;cursor:pointer}.m-ripple .m-ripple__ink{position:absolute;border-radius:50%;transform:scale(0);animation:ripple .4s linear;background-color:var(--m-ripple-bg)}.m-button{-webkit-tap-highlight-color:transparent;transition-property:all;transition-timing-function:linear;transition-duration:.2s;cursor:pointer;display:inline-flex;gap:.5rem;align-items:center;justify-content:center;vertical-align:bottom;text-align:center}.m-button__label{display:flex;align-items:center;justify-content:center;flex-grow:1}.m-button__label:first-letter{text-transform:capitalize}.m-button__icon,.m-button__icon--left{order:0}.m-button__icon--right{order:1}.m-button--loading{cursor:wait;opacity:var(--m-button-loading-opacity, var(--loading-opacity))}.m-button--primary{border-color:var(--m-button-primary, var(--primary));background-color:var(--m-button-primary, var(--primary))}.m-button--primary:enabled:focus{outline-offset:3px;outline:2px solid var(--m-button-primary, var(--primary))}.m-button--primary:enabled:hover.m-button--filled{background-color:var(--m-button-primary-filled-hover, var(--primary-filled-hover))}.m-button--primary:enabled:hover.m-button--text{background-color:var(--m-button-primary-text-hover, var(--primary-text-hover))}.m-button--primary:enabled:hover.m-button--outlined{background-color:var(--m-button-primary-outlined-hover, var(--primary-outlined-hover))}.m-button--secondary{border-color:var(--m-button-secondary, var(--secondary));background-color:var(--m-button-secondary, var(--secondary))}.m-button--secondary:enabled:focus{outline-offset:3px;outline:2px solid var(--m-button-secondary, var(--secondary))}.m-button--secondary:enabled:hover.m-button--filled{background-color:var(--m-button-secondary-filled-hover, var(--secondary-filled-hover))}.m-button--secondary:enabled:hover.m-button--text{background-color:var(--m-button-secondary-text-hover, var(--secondary-text-hover))}.m-button--secondary:enabled:hover.m-button--outlined{background-color:var(--m-button-secondary-outlined-hover, var(--secondary-outlined-hover))}.m-button--success{border-color:var(--m-button-success, var(--success));background-color:var(--m-button-success, var(--success))}.m-button--success:enabled:focus{outline-offset:3px;outline:2px solid var(--m-button-success, var(--success))}.m-button--success:enabled:hover.m-button--filled{background-color:var(--m-button-success-filled-hover, var(--success-filled-hover))}.m-button--success:enabled:hover.m-button--text{background-color:var(--m-button-success-text-hover, var(--success-text-hover))}.m-button--success:enabled:hover.m-button--outlined{background-color:var(--m-button-success-outlined-hover, var(--success-outlined-hover))}.m-button--info{border-color:var(--m-button-info, var(--info));background-color:var(--m-button-info, var(--info))}.m-button--info:enabled:focus{outline-offset:3px;outline:2px solid var(--m-button-info, var(--info))}.m-button--info:enabled:hover.m-button--filled{background-color:var(--m-button-info-filled-hover, var(--info-filled-hover))}.m-button--info:enabled:hover.m-button--text{background-color:var(--m-button-info-text-hover, var(--info-text-hover))}.m-button--info:enabled:hover.m-button--outlined{background-color:var(--m-button-info-outlined-hover, var(--info-outlined-hover))}.m-button--warning{border-color:var(--m-button-warning, var(--warning));background-color:var(--m-button-warning, var(--warning))}.m-button--warning:enabled:focus{outline-offset:3px;outline:2px solid var(--m-button-warning, var(--warning))}.m-button--warning:enabled:hover.m-button--filled{background-color:var(--m-button-warning-filled-hover, var(--warning-filled-hover))}.m-button--warning:enabled:hover.m-button--text{background-color:var(--m-button-warning-text-hover, var(--warning-text-hover))}.m-button--warning:enabled:hover.m-button--outlined{background-color:var(--m-button-warning-outlined-hover, var(--warning-outlined-hover))}.m-button--help{border-color:var(--m-button-help, var(--help));background-color:var(--m-button-help, var(--help))}.m-button--help:enabled:focus{outline-offset:3px;outline:2px solid var(--m-button-help, var(--help))}.m-button--help:enabled:hover.m-button--filled{background-color:var(--m-button-help-filled-hover, var(--help-filled-hover))}.m-button--help:enabled:hover.m-button--text{background-color:var(--m-button-help-text-hover, var(--help-text-hover))}.m-button--help:enabled:hover.m-button--outlined{background-color:var(--m-button-help-outlined-hover, var(--help-outlined-hover))}.m-button--danger{border-color:var(--m-button-danger, var(--danger));background-color:var(--m-button-danger, var(--danger))}.m-button--danger:enabled:focus{outline-offset:3px;outline:2px solid var(--m-button-danger, var(--danger))}.m-button--danger:enabled:hover.m-button--filled{background-color:var(--m-button-danger-filled-hover, var(--danger-filled-hover))}.m-button--danger:enabled:hover.m-button--text{background-color:var(--m-button-danger-text-hover, var(--danger-text-hover))}.m-button--danger:enabled:hover.m-button--outlined{background-color:var(--m-button-danger-outlined-hover, var(--danger-outlined-hover))}.m-button--text,.m-button--outlined{background:transparent}.m-button--text.m-button--primary,.m-button--outlined.m-button--primary{color:var(--m-button-primary, var(--primary))}.m-button--text.m-button--secondary,.m-button--outlined.m-button--secondary{color:var(--m-button-secondary, var(--secondary))}.m-button--text.m-button--success,.m-button--outlined.m-button--success{color:var(--m-button-success, var(--success))}.m-button--text.m-button--info,.m-button--outlined.m-button--info{color:var(--m-button-info, var(--info))}.m-button--text.m-button--warning,.m-button--outlined.m-button--warning{color:var(--m-button-warning, var(--warning))}.m-button--text.m-button--help,.m-button--outlined.m-button--help{color:var(--m-button-help, var(--help))}.m-button--text.m-button--danger,.m-button--outlined.m-button--danger{color:var(--m-button-danger, var(--danger))}.m-button--sm.m-button--icon-only{width:var(--m-button-sm-size, var(--sm-size));height:var(--m-button-sm-size, var(--sm-size))}.m-button--md.m-button--icon-only{width:var(--m-button-md-size, var(--md-size));height:var(--m-button-md-size, var(--md-size))}.m-button--lg.m-button--icon-only{width:var(--m-button-lg-size, var(--lg-size));height:var(--m-button-lg-size, var(--lg-size))}.m-button{color:var(--m-button-text-primary, var(--text-primary));box-sizing:border-box;border-radius:var(--m-button-border-radius, var(--border-radius));outline:none;border:unset}.m-button--disabled{cursor:not-allowed;opacity:var(--m-button-disabled-opacity, var(--disabled-opacity))}.m-button--rounded{border-radius:var(--m-button-rounded-radius, var(--rounded-radius))}.m-button--outlined{border-width:1px;border-style:solid}.m-button--raised{box-shadow:var(--m-button-raised-shadow, var(--raised-shadow))}.m-button--sm{font-size:var(--m-button-sm-font, var(--sm-font));padding:var(--m-button-sm-padding, var(--sm-padding));min-width:var(--m-button-sm-size, var(--sm-size));min-height:var(--m-button-sm-size, var(--sm-size))}.m-button--md{font-size:var(--m-button-md-font, var(--md-font));padding:var(--m-button-md-padding, var(--md-padding));min-width:var(--m-button-md-size, var(--md-size));min-height:var(--m-button-md-size, var(--md-size))}.m-button--lg{font-size:var(--m-button-lg-font, var(--lg-font));padding:var(--m-button-lg-padding, var(--lg-padding));min-width:var(--m-button-lg-size, var(--lg-size));min-height:var(--m-button-lg-size, var(--lg-size))}@keyframes spin{to{transform:rotate(360deg)}}.icon--spin{animation:spin 2s infinite linear}:root{--text-primary: white;--sm-font: .875rem;--md-font: 1rem;--lg-font: 1.125rem;--sm-padding: .375rem;--md-padding: .5rem;--lg-padding: .625rem;--sm-size: 1.5rem;--md-size: 2rem;--lg-size: 2.5rem;--border-radius: .25rem;--rounded-radius: 2rem;--raised-shadow: 1px 1px 3px 2px rgba(0, 0, 0, .3);--disabled-opacity: .6;--loading-opacity: .8;--primary: #3b82f6;--secondary: #475569;--success: #22c55e;--info: #0099ff;--warning: #ffa400;--help: #a855f7;--danger: #ed2c2c}:root{--primary-filled-hover: #0b63f3;--primary-text-hover: rgba(59, 130, 246, .2);--primary-outlined-hover: rgba(59, 130, 246, .2);--secondary-filled-hover: #323c4b;--secondary-text-hover: rgba(71, 85, 105, .2);--secondary-outlined-hover: rgba(71, 85, 105, .2);--success-filled-hover: #1a9a49;--success-text-hover: rgba(34, 197, 94, .2);--success-outlined-hover: rgba(34, 197, 94, .2);--info-filled-hover: #007acc;--info-text-hover: rgba(0, 153, 255, .2);--info-outlined-hover: rgba(0, 153, 255, .2);--warning-filled-hover: #cc8300;--warning-text-hover: rgba(255, 164, 0, .2);--warning-outlined-hover: rgba(255, 164, 0, .2);--help-filled-hover: #8f24f5;--help-text-hover: rgba(168, 85, 247, .2);--help-outlined-hover: rgba(168, 85, 247, .2);--danger-filled-hover: #d41212;--danger-text-hover: rgba(237, 44, 44, .2);--danger-outlined-hover: rgba(237, 44, 44, .2)}.m-button-set{display:flex}.m-button-set--row{flex-direction:row}.m-button-set--row>.m-button:not(.m-button--rounded):first-child{border-top-left-radius:var(--m-button-border-radius, var(--border-radius));border-bottom-left-radius:var(--m-button-border-radius, var(--border-radius))}.m-button-set--row>.m-button:not(.m-button--rounded):last-child{border-top-right-radius:var(--m-button-border-radius, var(--border-radius));border-bottom-right-radius:var(--m-button-border-radius, var(--border-radius))}.m-button-set--column{flex-direction:column}.m-button-set--column>.m-button:not(.m-button--rounded):first-child{border-top-left-radius:var(--m-button-border-radius, var(--border-radius));border-top-right-radius:var(--m-button-border-radius, var(--border-radius))}.m-button-set--column>.m-button:not(.m-button--rounded):last-child{border-bottom-left-radius:var(--m-button-border-radius, var(--border-radius));border-bottom-right-radius:var(--m-button-border-radius, var(--border-radius))}.m-button-set>.m-button{position:relative}.m-button-set>.m-button:not(.m-button--rounded){border-radius:0}.m-button-set>.m-button:enabled:focus{z-index:1}")),document.head.appendChild(t)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import { nextTick as x, defineComponent as $, useSlots as v, computed as f, withDirectives as h, openBlock as u, createElementBlock as c, normalizeClass as y, unref as g, Fragment as C, createCommentVNode as m, renderSlot as M, createTextVNode as P, toDisplayString as I, renderList as O, createBlock as z, resolveDynamicComponent as j, mergeProps as R } from "vue";
const w = (t, o) => {
  var e, n, i, r, a;
  return (
    // @ts-expect-error "As matarito is a custom global property"
    ((e = t == null ? void 0 : t.instance) == null ? void 0 : e.$matarito) || ((a = (r = (i = (n = o == null ? void 0 : o.ctx) == null ? void 0 : n.appContext) == null ? void 0 : i.config) == null ? void 0 : r.globalProperties) == null ? void 0 : a.$matarito)
  );
}, D = { getConfiguration: w }, T = (t, o, e = { color: "", duration: "" }) => {
  const n = Math.max(t.clientWidth, t.clientHeight), i = n / 2, r = o.clientX - t.getBoundingClientRect().left - i, a = o.clientY - t.getBoundingClientRect().top - i, s = t.getElementsByClassName("m-ripple__ink")[0], l = document.createElement("span");
  s && s.remove(), l.style.animationDuration = e.duration, l.style.backgroundColor = e.color, l.style.width = l.style.height = `${n}px`, l.style.left = o.clientX ? `${r}px` : `calc(50% - ${n / 2}px)`, l.style.top = o.clientY ? `${a}px` : `calc(50% - ${n / 2}px)`, l.classList.add("m-ripple__ink"), t.appendChild(l);
}, _ = {
  mounted: (t, o, e) => {
    x(() => {
      (D.getConfiguration(o, e).ripple || o.modifiers.force) && (t.classList.add("m-ripple"), t.onclick = (n) => T(t, n, o.value));
    });
  },
  unmounted: (t) => {
    t.onclick = null;
  }
}, L = ["type", "disabled", "title", "aria-label", "aria-labelledby"], F = /* @__PURE__ */ $({
  __name: "MButton",
  props: {
    disabled: Boolean,
    loading: Boolean,
    raised: Boolean,
    rounded: Boolean,
    propagate: Boolean,
    label: { type: String, default: null },
    loadingIcon: { type: String, default: null },
    icon: { type: String, default: null },
    type: {
      type: String,
      default: "button",
      validator: (t) => ["button", "submit", "reset"].includes(t)
    },
    size: {
      type: String,
      default: "md"
    },
    variant: {
      type: String,
      default: "filled"
    },
    severity: {
      type: String,
      default: "primary"
    },
    iconPosition: {
      type: String,
      default: "left"
    }
  },
  setup(t) {
    const o = _, e = t, n = e.label, i = v(), r = f(() => ({
      "m-button": !0,
      [`m-button--${e.severity}`]: !0,
      [`m-button--${e.size}`]: !0,
      [`m-button--${e.variant}`]: !0,
      "m-button--rounded": e.rounded,
      "m-button--disabled": e.disabled,
      "m-button--loading": e.loading,
      "m-button--icon-only": !e.label && !i.default && e.icon,
      "m-button--raised": e.raised
    })), a = f(() => ({
      "m-button__label": !0
    })), s = f(() => ({
      "m-button__icon": !0,
      [`m-button__icon--${e.iconPosition}`]: e.icon,
      [`${e.icon}`]: e.icon
    })), l = f(() => ({
      "m-button__loading-icon": !0,
      [`${e.loadingIcon}`]: e.loadingIcon,
      "icon--spin": e.loading && e.loadingIcon
    })), d = (p) => e.propagate ? null : p.stopPropagation();
    return (p, b) => h((u(), c("button", {
      type: t.type,
      class: y(r.value),
      disabled: t.disabled || t.loading,
      title: g(n),
      "aria-label": g(n),
      "aria-labelledby": g(n),
      onClick: b[0] || (b[0] = (k) => d(k))
    }, [
      t.loading && t.loadingIcon ? (u(), c("i", {
        key: 0,
        class: y(l.value)
      }, null, 2)) : (u(), c(C, { key: 1 }, [
        t.icon ? (u(), c("i", {
          key: 0,
          class: y(s.value)
        }, null, 2)) : m("", !0),
        t.label || p.$slots.default ? (u(), c("span", {
          key: 1,
          class: y(a.value)
        }, [
          M(p.$slots, "default", {}, () => [
            P(I(t.label), 1)
          ])
        ], 2)) : m("", !0)
      ], 64))
    ], 10, L)), [
      [g(o)]
    ]);
  }
}), H = /* @__PURE__ */ $({
  __name: "MButtonSet",
  props: {
    disabled: Boolean,
    loading: Boolean,
    raised: Boolean,
    rounded: Boolean,
    propagate: Boolean,
    label: { type: String, default: null },
    loadingIcon: { type: String, default: null },
    icon: { type: String, default: null },
    type: {
      type: String,
      default: "button",
      validator: (t) => ["button", "submit", "reset"].includes(t)
    },
    size: {
      type: String,
      default: "md"
    },
    variant: {
      type: String,
      default: "filled"
    },
    severity: {
      type: String,
      default: "primary"
    },
    iconPosition: {
      type: String,
      default: "left"
    },
    direction: {
      type: String,
      default: "row"
    }
  },
  setup(t) {
    var a;
    const o = t, e = JSON.parse(JSON.stringify(o));
    delete e.direction;
    const n = v(), i = (a = n == null ? void 0 : n.default) == null ? void 0 : a.call(n).filter((s) => s.type.__name === "MButton"), r = f(() => ({
      "m-button-set": !0,
      [`m-button-set--${o.direction}`]: !0
    }));
    return (s, l) => (u(), c("div", {
      class: y(r.value)
    }, [
      (u(!0), c(C, null, O(g(i) || [], (d, p) => (u(), z(j(d), R({ key: p }, Object.assign({}, g(e), d == null ? void 0 : d.props)), null, 16))), 128))
    ], 2));
  }
}), S = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MButton: F,
  MButtonSet: H
}, Symbol.toStringTag, { value: "Module" })), J = {
  ripple: !0,
  autoImport: !0
}, B = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Ripple: _
}, Symbol.toStringTag, { value: "Module" })), V = (t, o) => {
  const e = { ...J, ...o };
  if (t.config.globalProperties.$matarito = e, e.autoImport) {
    for (const n in S)
      t.component(n, S[n]);
    for (const n in B)
      t.directive(n, B[n]);
  }
}, Y = { install: V };
export {
  F as MButton,
  H as MButtonSet,
  _ as Ripple,
  Y as default
};
