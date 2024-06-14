import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from 'solid-js/web';
import { n } from './Footer.mjs';
import { createSignal } from 'solid-js';
import { w as wr } from '../runtime.mjs';
import { O as Ot } from './LoaderIcon.mjs';
import { A } from './components.mjs';
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

var x=["<div",' class="mt-[2.813rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-[59px] mb-[70px]"><!--$-->',"<!--/--><!--$-->","<!--/--></div>"],m=["<p",' class="text-black font-montserrat text-2xl font-medium">В избранном пока что пуста</p>'],f=["<div",' class="p-4 border border-[#E8E9EA] rounded-lg pl-[16px] pr-[16px]"><img',' alt="Product Image" class="','"><div class="','"><a href="/productinfo" class="text-[1.1rem] text-black font-montserrat text-base font-bold hover:text-orange duration-150">','</a><div class="flex justify-between items-center mt-[22px]"><p class="text-[1.3rem] text-custom-gray font-montserrat text-lg font-bold"><!--$-->','<!--/--> ₽</p><p class="cursor-pointer"><svg width="28" height="24" viewBox="0 0 28 28"',' xmlns="http://www.w3.org/2000/svg"',' strokeWidth="2.5" strokeLinejoin="round" class="',`"><desc>Created with Pixso.</desc><path d="M13.5 4.08C11 0.79 6.82 -0.22 3.69 2.79C0.56 5.79 0.12 10.82 2.58 14.37C4.62 17.33 10.81 23.57 12.84 25.58C13.06 25.81 13.18 25.92 13.31 25.97C13.42 26 13.55 26 13.66 25.97C13.8 25.92 13.91 25.81\r
                      "></path><path d="M3.69 2.79C0.56 5.79 0.12 10.82 2.58 14.37C4.62 17.33 10.81 23.57 12.84 25.58C13.06 25.81 13.18 25.92 13.31 25.97C13.42 26 13.55 26 13.66 25.97C13.8 25.92 13.91 25.81 14.14 25.58C16.17 23.57 22.35 17.33 24.4 14.37C26.86 10.82 26.47 5.76 23.28 2.79C20.1 -0.19 15.99 0.79 13.5 4.08C11 0.79 6.82 -0.22 3.69 2.79Z"></path></svg></p></div><button class="w-full bg-orange block text-center py-2 mt-4 text-white font-medium rounded-lg hover:bg-orange-dark transition duration-300 ease-in-out flex items-center justify-center">В корзину</button></div></div>`];const v=()=>{const[n,b]=createSignal(null),[l,k]=createSignal({}),[d,y]=createSignal([{id:1,name:"Royal Canin Digest Sensitive - Паучи для кошек с чувствительным пищеварением",price:140,image:"https://povodok-shop.ru/image/cache/catalog/products/royal-canin/digest-sensitive-pauchi-dlya-koshek-s-chuvstvitelnym-pischevareniem-royal-kanin-dajdgest-sensitiv-1000x1000.png"},{id:2,name:"Eukanuba Dog - Корм для взрослых собак миниатюрных пород",price:200,image:"https://povodok-shop.ru/image/cache/catalog/products/allproducts/dog-korm-dlya-vzroslyh-sobak-miniatyurnyh-porod-1000x1000.jpg"},{id:3,name:"Eukanuba Dog - Паучи корм для собак с ягненком в соусе",price:54,image:"https://povodok-shop.ru/image/cache/catalog/products/allproducts/dog-pauchi-korm-dlya-sobak-s-yagnenkom-v-souse-1000x1000.jpg"}]);return wr(),ssr(x,ssrHydrationKey(),escape(createComponent(Ot,{position:"top-right"})),d().length===0?m[0]+ssrHydrationKey()+m[1]:escape(d().map(e=>ssr(f,ssrHydrationKey()+ssrAttribute("key",escape(e.id,!0),!1),ssrAttribute("src",escape(e.image,!0),!1),`w-full object-cover transition-transform duration-300 ease-in-out transform ${n()===e.id?"scale-105":"scale-100"}`,"mt-4",escape(e.name),escape(e.price),ssrAttribute("fill",(l()[e.id],"#FF6006"),!1),ssrAttribute("stroke",(l()[e.id],"#FF6006"),!1),`transition-colors duration-300 ease-in-out ${n()===e.id?"text-[#FF6006]":"text-black"}`))))};var h=["<div",' class="mt-10"><div class="container mx-auto max-w-[1200px] pl-[16px] pr-[16px]"><div class="flex gap-2 items-center mb-[50px]"><!--$-->','<!--/--><p class="text-black font-montserrat text-base font-semibold leading-5">/</p><p class="text-orange font-montserrat text-base font-semibold leading-5 hover:text-orange duration-150">Избранные</p></div><div class="flex justify-between items-center"><h1 class="text-black font-Montserrat text-4xl font-semibold leading-10">Избранные</h1></div><!--$-->',"<!--/--></div><!--$-->","<!--/--></div>"];function S(){return ssr(h,ssrHydrationKey(),escape(createComponent(A,{href:"/",class:"text-black font-montserrat text-base font-semibold leading-5",children:"Главная"})),escape(createComponent(v,{})),escape(createComponent(n,{})))}

export { S as default };
//# sourceMappingURL=favorites.mjs.map
