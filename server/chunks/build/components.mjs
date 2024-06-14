import { ssrElement, mergeProps as mergeProps$1 } from 'solid-js/web';
import { mergeProps, splitProps, createMemo } from 'solid-js';
import { e as en, t as tn, w as wr, O } from '../runtime.mjs';

function A(t){t=mergeProps({inactiveClass:"inactive",activeClass:"active"},t);const[,r]=splitProps(t,["href","state","class","activeClass","inactiveClass","end"]),i=en(()=>t.href),o=tn(i),l=wr(),e=createMemo(()=>{const n=i();if(n===void 0)return [!1,!1];const s=O(n.split(/[?#]/,1)[0]).toLowerCase(),a=O(l.pathname).toLowerCase();return [t.end?s===a:a.startsWith(s),s===a]});return ssrElement("a",mergeProps$1(r,{get href(){return o()||t.href},get state(){return JSON.stringify(t.state)},get classList(){return {...t.class&&{[t.class]:!0},[t.inactiveClass]:!e()[0],[t.activeClass]:e()[0],...r.classList}},link:!0,get"aria-current"(){return e()[1]?"page":void 0}}),void 0,!0)}

export { A };
//# sourceMappingURL=components.mjs.map
