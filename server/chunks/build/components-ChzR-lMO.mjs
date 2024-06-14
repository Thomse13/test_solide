import { ssrElement, mergeProps as mergeProps$1 } from 'solid-js/web';
import { mergeProps, splitProps, createMemo } from 'solid-js';
import { B as Be, a as Oe, _ as _e, S } from '../runtime.mjs';

function A(t) {
  t = mergeProps({ inactiveClass: "inactive", activeClass: "active" }, t);
  const [, r] = splitProps(t, ["href", "state", "class", "activeClass", "inactiveClass", "end"]), i = Be(() => t.href), o = Oe(i), l = _e(), e = createMemo(() => {
    const n = i();
    if (n === void 0)
      return [false, false];
    const s = S(n.split(/[?#]/, 1)[0]).toLowerCase(), a = S(l.pathname).toLowerCase();
    return [t.end ? s === a : a.startsWith(s), s === a];
  });
  return ssrElement("a", mergeProps$1(r, { get href() {
    return o() || t.href;
  }, get state() {
    return JSON.stringify(t.state);
  }, get classList() {
    return { ...t.class && { [t.class]: true }, [t.inactiveClass]: !e()[0], [t.activeClass]: e()[0], ...r.classList };
  }, link: true, get "aria-current"() {
    return e()[1] ? "page" : void 0;
  } }), void 0, true);
}

export { A };
//# sourceMappingURL=components-ChzR-lMO.mjs.map
