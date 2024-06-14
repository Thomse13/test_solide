import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from 'solid-js/web';
import { n } from './Footer-3Yxp6Czj.mjs';
import { createSignal } from 'solid-js';
import { _ as _e } from '../runtime.mjs';
import { O as Ot } from './LoaderIcon-CffO8xFE.mjs';
import { A } from './components-ChzR-lMO.mjs';
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
import 'solid-js/store';

var x = ["<div", ' class="mt-[2.813rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-[59px] mb-[70px]"><!--$-->', "<!--/--><!--$-->", "<!--/--></div>"], c = ["<p", ' class="text-black font-montserrat text-2xl font-medium">\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u043C \u043F\u043E\u043A\u0430 \u0447\u0442\u043E \u043F\u0443\u0441\u0442\u0430</p>'], f = ["<div", ' class="p-4 border border-[#E8E9EA] rounded-lg pl-[16px] pr-[16px]"><img', ' alt="Product Image" class="', '"><div class="', '"><a href="/productinfo" class="text-[1.1rem] text-black font-montserrat text-base font-bold hover:text-orange duration-150">', '</a><div class="flex justify-between items-center mt-[22px]"><p class="text-[1.3rem] text-custom-gray font-montserrat text-lg font-bold"><!--$-->', '<!--/--> \u20BD</p><p class="cursor-pointer"><svg width="28" height="24" viewBox="0 0 28 28"', ' xmlns="http://www.w3.org/2000/svg"', ' strokeWidth="2.5" strokeLinejoin="round" class="', `"><desc>Created with Pixso.</desc><path d="M13.5 4.08C11 0.79 6.82 -0.22 3.69 2.79C0.56 5.79 0.12 10.82 2.58 14.37C4.62 17.33 10.81 23.57 12.84 25.58C13.06 25.81 13.18 25.92 13.31 25.97C13.42 26 13.55 26 13.66 25.97C13.8 25.92 13.91 25.81\r
                      "></path><path d="M3.69 2.79C0.56 5.79 0.12 10.82 2.58 14.37C4.62 17.33 10.81 23.57 12.84 25.58C13.06 25.81 13.18 25.92 13.31 25.97C13.42 26 13.55 26 13.66 25.97C13.8 25.92 13.91 25.81 14.14 25.58C16.17 23.57 22.35 17.33 24.4 14.37C26.86 10.82 26.47 5.76 23.28 2.79C20.1 -0.19 15.99 0.79 13.5 4.08C11 0.79 6.82 -0.22 3.69 2.79Z"></path></svg></p></div><button class="w-full bg-orange block text-center py-2 mt-4 text-white font-medium rounded-lg hover:bg-orange-dark transition duration-300 ease-in-out flex items-center justify-center">\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button></div></div>`];
const v = () => {
  const [n, b] = createSignal(null), [l, k] = createSignal({}), [d, y] = createSignal([{ id: 1, name: "Royal Canin Digest Sensitive - \u041F\u0430\u0443\u0447\u0438 \u0434\u043B\u044F \u043A\u043E\u0448\u0435\u043A \u0441 \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043F\u0438\u0449\u0435\u0432\u0430\u0440\u0435\u043D\u0438\u0435\u043C", price: 140, image: "https://povodok-shop.ru/image/cache/catalog/products/royal-canin/digest-sensitive-pauchi-dlya-koshek-s-chuvstvitelnym-pischevareniem-royal-kanin-dajdgest-sensitiv-1000x1000.png" }, { id: 2, name: "Eukanuba Dog - \u041A\u043E\u0440\u043C \u0434\u043B\u044F \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0445 \u0441\u043E\u0431\u0430\u043A \u043C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u043D\u044B\u0445 \u043F\u043E\u0440\u043E\u0434", price: 200, image: "https://povodok-shop.ru/image/cache/catalog/products/allproducts/dog-korm-dlya-vzroslyh-sobak-miniatyurnyh-porod-1000x1000.jpg" }, { id: 3, name: "Eukanuba Dog - \u041F\u0430\u0443\u0447\u0438 \u043A\u043E\u0440\u043C \u0434\u043B\u044F \u0441\u043E\u0431\u0430\u043A \u0441 \u044F\u0433\u043D\u0435\u043D\u043A\u043E\u043C \u0432 \u0441\u043E\u0443\u0441\u0435", price: 54, image: "https://povodok-shop.ru/image/cache/catalog/products/allproducts/dog-pauchi-korm-dlya-sobak-s-yagnenkom-v-souse-1000x1000.jpg" }]);
  return _e(), ssr(x, ssrHydrationKey(), escape(createComponent(Ot, { position: "top-right" })), d().length === 0 ? c[0] + ssrHydrationKey() + c[1] : escape(d().map((e) => ssr(f, ssrHydrationKey() + ssrAttribute("key", escape(e.id, true), false), ssrAttribute("src", escape(e.image, true), false), `w-full object-cover transition-transform duration-300 ease-in-out transform ${n() === e.id ? "scale-105" : "scale-100"}`, "mt-4", escape(e.name), escape(e.price), ssrAttribute("fill", (l()[e.id], "#FF6006"), false), ssrAttribute("stroke", (l()[e.id], "#FF6006"), false), `transition-colors duration-300 ease-in-out ${n() === e.id ? "text-[#FF6006]" : "text-black"}`))));
};
var h = ["<div", ' class="mt-10"><div class="container mx-auto max-w-[1200px] pl-[16px] pr-[16px]"><div class="flex gap-2 items-center mb-[50px]"><!--$-->', '<!--/--><p class="text-black font-montserrat text-base font-semibold leading-5">/</p><p class="text-orange font-montserrat text-base font-semibold leading-5 hover:text-orange duration-150">\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435</p></div><div class="flex justify-between items-center"><h1 class="text-black font-Montserrat text-4xl font-semibold leading-10">\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435</h1></div><!--$-->', "<!--/--></div><!--$-->", "<!--/--></div>"];
function _() {
  return ssr(h, ssrHydrationKey(), escape(createComponent(A, { href: "/", class: "text-black font-montserrat text-base font-semibold leading-5", children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F" })), escape(createComponent(v, {})), escape(createComponent(n, {})));
}

export { _ as default };
//# sourceMappingURL=favorites2.mjs.map
