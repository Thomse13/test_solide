import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from 'solid-js/web';
import { createSignal } from 'solid-js';
import { _ as _e } from '../runtime.mjs';
import { O as Ot } from './LoaderIcon-CffO8xFE.mjs';

var m = ["<div", ' class="mt-[2.813rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-[59px] mb-[70px]"><!--$-->', "<!--/--><!--$-->", "<!--/--></div>"], g = ["<div", ' class="p-4 border border-[#E8E9EA] rounded-lg pl-[16px] pr-[16px]"><img', ' alt="Product Image" class="', '"><div class="', '"><a href="/productinfo" class="text-[1.1rem] text-black font-montserrat text-base font-bold hover:text-orange duration-150">', '</a><div class="flex justify-between items-center mt-[22px]"><p class="text-[1.3rem] text-custom-gray font-montserrat text-lg font-bold"><!--$-->', '<!--/--> \u20BD</p><p class="cursor-pointer"><svg width="28" height="24" viewBox="0 0 28 28"', ' xmlns="http://www.w3.org/2000/svg"', ' stroke-width="2.5" stroke-linejoin="round" class="', '"><desc>Created with Pixso.</desc><path d="M13.5 4.08C11 0.79 6.82 -0.22 3.69 2.79C0.56 5.79 0.12 10.82 2.58 14.37C4.62 17.33 10.81 23.57 12.84 25.58C13.06 25.81 13.18 25.92 13.31 25.97C13.42 26 13.55 26 13.66 25.97C13.8 25.92 13.91 25.81 14.14 25.58C16.17 23.57 22.35 17.33 24.4 14.37C26.86 10.82 26.47 5.76 23.28 2.79C20.1 -0.19 15.99 0.79 13.5 4.08Z"></path><path d="M3.69 2.79C0.56 5.79 0.12 10.82 2.58 14.37C4.62 17.33 10.81 23.57 12.84 25.58C13.06 25.81 13.18 25.92 13.31 25.97C13.42 26 13.55 26 13.66 25.97C13.8 25.92 13.91 25.81 14.14 25.58C16.17 23.57 22.35 17.33 24.4 14.37C26.86 10.82 26.47 5.76 23.28 2.79C20.1 -0.19 15.99 0.79 13.5 4.08C11 0.79 6.82 -0.22 3.69 2.79Z"></path></svg></p></div><button class="w-full bg-orange block text-center py-2 mt-4 text-white font-medium rounded-lg hover:bg-orange-dark transition duration-300 ease-in-out flex items-center justify-center">\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button></div></div>'];
const y = () => {
  const [s, u] = createSignal(null), [a, h] = createSignal({});
  _e();
  const l = [{ id: 1, name: "Royal Canin Digest Sensitive - \u041F\u0430\u0443\u0447\u0438 \u0434\u043B\u044F \u043A\u043E\u0448\u0435\u043A \u0441 \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043F\u0438\u0449\u0435\u0432\u0430\u0440\u0435\u043D\u0438\u0435\u043C", price: 140, image: "https://povodok-shop.ru/image/cache/catalog/products/royal-canin/digest-sensitive-pauchi-dlya-koshek-s-chuvstvitelnym-pischevareniem-royal-kanin-dajdgest-sensitiv-1000x1000.png" }, { id: 2, name: "Eukanuba Dog - \u041A\u043E\u0440\u043C \u0434\u043B\u044F \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0445 \u0441\u043E\u0431\u0430\u043A \u043C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u043D\u044B\u0445 \u043F\u043E\u0440\u043E\u0434", price: 200, image: "https://povodok-shop.ru/image/cache/catalog/products/allproducts/dog-korm-dlya-vzroslyh-sobak-miniatyurnyh-porod-1000x1000.jpg" }, { id: 3, name: "Eukanuba Dog - \u041F\u0430\u0443\u0447\u0438 \u043A\u043E\u0440\u043C \u0434\u043B\u044F \u0441\u043E\u0431\u0430\u043A \u0441 \u044F\u0433\u043D\u0435\u043D\u043A\u043E\u043C \u0432 \u0441\u043E\u0443\u0441\u0435", price: 54, image: "https://povodok-shop.ru/image/cache/catalog/products/allproducts/dog-pauchi-korm-dlya-sobak-s-yagnenkom-v-souse-1000x1000.jpg" }, { id: 4, name: "Pro Plan Adult 7+ Sterilised - \u0421\u0443\u0445\u043E\u0439 \u043A\u043E\u0440\u043C \u041F\u0440\u043E\u043F\u043B\u0430\u043D \u0434\u043B\u044F \u0441\u0442\u0435\u0440\u0438\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043A\u043E\u0448\u0435\u043A \u0441\u0442\u0430\u0440\u0448\u0435 7 \u043B\u0435\u0442 \u0441 \u0418\u043D\u0434\u0435\u0439\u043A\u043E\u0439", price: 250, image: "https://povodok-shop.ru/image/cache/catalog/products/purina/pro_plan/434041176-purina-pro-plan-longevis-sterilised-suhoj-korm-purina-dlya-kastrirovannyh-kotov-i-sterilizovannyh-koshek-starshe-7-let-indejka-1000x1000.png" }];
  return ssr(m, ssrHydrationKey(), escape(createComponent(Ot, { position: "top-right" })), escape(l.map((t) => ssr(g, ssrHydrationKey() + ssrAttribute("key", escape(t.id, true), false), ssrAttribute("src", escape(t.image, true), false), `w-full object-cover transition-transform duration-300 ease-in-out transform ${s() === t.id ? "scale-105" : "scale-100"}`, "mt-4", escape(t.name), escape(t.price), ssrAttribute("fill", a()[t.id] ? "#FF6006" : "none", false), ssrAttribute("stroke", (a()[t.id], "#FF6006"), false), `transition-colors duration-300 ease-in-out ${s() === t.id ? "text-[#FF6006]" : "text-black"}`))));
};

export { y };
//# sourceMappingURL=Card2-B-hOhevk.mjs.map