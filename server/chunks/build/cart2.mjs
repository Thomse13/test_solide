import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from 'solid-js/web';
import { createSignal } from 'solid-js';
import { n } from './Footer-3Yxp6Czj.mjs';
import { o } from './product-BIrgGnpd.mjs';
import { O as Ot } from './LoaderIcon-CffO8xFE.mjs';
import { A } from './components-ChzR-lMO.mjs';
import 'solid-js/store';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'node:async_hooks';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'seroval';
import 'seroval-plugins/web';
import 'solid-js/web/storage';

var v = ["<div", ' class="mt-10"><div class="container mx-auto max-w-[1200px] pl-[16px] pr-[16px]"><!--$-->', '<!--/--><div class="flex gap-2 items-center mb-[50px]"><!--$-->', '<!--/--><p class="text-black font-montserrat text-base font-semibold leading-5">/</p><p class="text-orange font-montserrat text-base font-semibold leading-5 hover:text-orange duration-150">\u041A\u043E\u0440\u0437\u0438\u043D\u0430</p></div><div class="flex justify-between items-center"><h1 class="text-black font-Montserrat text-4xl font-semibold leading-10">\u041A\u043E\u0440\u0437\u0438\u043D\u0430</h1></div><!--$-->', '<!--/--><div class="mt-[2.813rem] flex flex-wrap gap-[59px] mb-[70px]"></div></div><!--$-->', "<!--/--></div>"], p = ["<div", ' class="flex items-center mt-[50px]"><p class="text-black font-montserrat text-2xl font-medium">\u0412\u0430\u0448\u0430 \u043A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u043E\u043A\u0430 \u0447\u0442\u043E \u043F\u0443\u0441\u0442\u0430</p></div>'], b = ["<div", ' class="flex mb-[40px] mt-[42px] gap-[70px]"><div>', '</div><div class=""><div class="rounded-lg bg-white h-auto px-[30px] py-[40px]" style="height:fit-content;box-shadow:0px 1px 18.6px 0px rgba(0, 0, 0, 0.1);"><div class="flex justify-between mb-[30px]"><p class="text-black font-montserrat text-[20px] font-medium">\u0418\u0442\u043E\u0433\u043E \u043A \u043E\u043F\u043B\u0430\u0442\u0435</p><p class="text-orange font-montserrat text-[20px] font-medium"><!--$-->', '<!--/--> \u20BD</p></div><div class="flex justify-between"><p class="text-black font-montserrat text-[20px] font-medium">\u0421\u043A\u0438\u0434\u043A\u0430</p><p class="text-orange font-montserrat text-[20px] font-medium">0 \u20BD</p></div><a href="/checkout" class="rounded-lg bg-orange text-white text-center py-[13px] px-[24px] block mt-[30px]">\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437</a></div><p class="text-black font-montserrat text-[16px] font-[350] leading-4 mt-[30px]">\u041E\u0444\u043E\u0440\u043C\u043B\u044F\u044F \u0434\u0430\u043D\u043D\u044B\u0439 \u0437\u0430\u043A\u0430\u0437 \u0432\u044B \u0434\u0430\u0451\u0442\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0432\u0430\u0448\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u044B \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u043E\u0444\u0435\u0440\u0442\u044B</p></div></div>'], g = ["<div", ' class="rounded-lg w-[700px] px-[20px] py-[12px] mb-[40px]" style="box-shadow:0px 1px 18.6px 0px rgba(0, 0, 0, 0.1);"><div class="flex gap-[20px] items-center"><img', ' alt="photo" class="w-[150px]"><div class=""><a href="" class="text-black font-montserrat font-semibold text-l leading-5">', '</a><div class="flex items-end gap-[50px] items-center mt-[30px]"><div class="flex gap-[15px]"><p class="text-orange font-montserrat font-semibold text-[17px]"><!--$-->', '<!--/--> \u20BD</p><p class="text-orange font-montserrat font-semibold text-[17px]"><!--$-->', '<!--/--> \u0448\u0442</p></div><div class="border border-black rounded-lg px-[14px] py-[10px]"><button>-</button><input type="text"', ' class="', '" readonly style="outline:none;"><button>+</button></div><div class="flex gap-[10px] ml-[19px]"><button><svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.69 11.79C9.56 14.79 9.12 19.82 11.58 23.37C13.62 26.33 19.81 32.57 21.83 34.58C22.06 34.81 22.18 34.92 22.31 34.97C22.42 35 22.55 35 22.66 34.97C22.8 34.92 22.91 34.81 23.14 34.58C25.17 32.57 31.35 26.33 33.4 23.37C35.86 19.82 35.47 14.76 32.28 11.79C29.1 8.81 24.99 9.79 22.5 13.08C20 9.79 15.82 8.78 12.69 11.79Z" stroke="#FF6006" stroke-width="2.5" stroke-linejoin="round"', '></path><rect width="44" height="44" transform="translate(0.5 0.5)" stroke="#FF6006" rx="9.5"></rect></svg></button><button><svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.61 13.75C33.97 13.75 34.33 13.88 34.59 14.11C34.85 14.35 35 14.66 35 15C35 15.33 34.85 15.64 34.59 15.88C34.33 16.11 33.97 16.25 33.61 16.25L32.22 16.25L32.21 16.33L30.92 32.67C30.87 33.3 30.55 33.89 30.04 34.32C29.53 34.76 28.85 35 28.15 35L16.84 35C16.14 35 15.46 34.76 14.95 34.32C14.43 33.89 14.12 33.3 14.07 32.67L12.78 16.34C12.77 16.31 12.77 16.28 12.77 16.25L11.38 16.25C11.02 16.25 10.66 16.11 10.4 15.88C10.14 15.64 10 15.33 10 15C10 14.66 10.14 14.35 10.4 14.11C10.66 13.88 11.02 13.75 11.38 13.75L33.61 13.75ZM29.44 16.25L15.55 16.25L16.84 32.5L28.15 32.5L29.44 16.25ZM25.27 10C25.64 10 25.99 10.13 26.25 10.36C26.52 10.6 26.66 10.91 26.66 11.25C26.66 11.58 26.52 11.89 26.25 12.13C25.99 12.36 25.64 12.5 25.27 12.5L19.72 12.5C19.35 12.5 19 12.36 18.74 12.13C18.47 11.89 18.33 11.58 18.33 11.25C18.33 10.91 18.47 10.6 18.74 10.36C19 10.13 19.35 10 19.72 10L25.27 10Z" fill="#FF5F04"></path><rect width="44" height="44" transform="translate(0.5 0.5)" stroke="#FF6006" rx="9.5"></rect></svg></button></div></div></div></div></div>'];
function $() {
  const [a, u] = createSignal([{ id: 1, name: "\u0421\u0438\u043B\u0438\u043A\u0430\u0433\u0435\u043B\u0435\u0432\u044B\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u0441 \u0444\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u044B\u043C\u0438 \u0433\u0440\u0430\u043D\u0443\u043B\u0430\u043C\u0438 'DeMurr PREMIUM LAVENDER'", price: 899, quantity: 1, isFavorite: false }, { id: 2, name: "\u0421\u0438\u043B\u0438\u043A\u0430\u0433\u0435\u043B\u0435\u0432\u044B\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u0441 \u0444\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u044B\u043C\u0438 \u0433\u0440\u0430\u043D\u0443\u043B\u0430\u043C\u0438 'DeMurr PREMIUM LAVENDER'", price: 899, quantity: 1, isFavorite: false }]), l = () => a().reduce((e, o) => e + o.price * o.quantity, 0);
  return ssr(v, ssrHydrationKey(), escape(createComponent(Ot, { position: "top-right" })), escape(createComponent(A, { href: "/", class: "text-black font-montserrat text-base font-semibold leading-5", children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F" })), a().length === 0 ? p[0] + ssrHydrationKey() + p[1] : ssr(b, ssrHydrationKey(), escape(a().map((e, o$1) => ssr(g, ssrHydrationKey(), ssrAttribute("src", escape(o, true), false), escape(e.name), escape(e.price) * escape(e.quantity), escape(e.quantity), ssrAttribute("value", escape(e.quantity, true), false), "w-[70px] text-center", ssrAttribute("fill", e.isFavorite ? "#FF6006" : "none", false)))), escape(l())), escape(createComponent(n, {})));
}

export { $ as default };
//# sourceMappingURL=cart2.mjs.map
