import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from 'solid-js/web';
import { createSignal, createEffect, Show } from 'solid-js';
import { n } from './Footer.mjs';
import { s } from './Base.mjs';
import { w as wr } from '../runtime.mjs';
import { O as Ot } from './LoaderIcon.mjs';
import { A as A$1 } from './components.mjs';
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

var D=["<div",' class="p-4 border border-[#E8E9EA] rounded-lg pl-[16px] pr-[16px]"><!--$-->',"<!--/--><img",' alt="Product Image" class="','"><div class="','"><a href="/productinfo" class="text-[1.1rem] text-black font-montserrat text-base font-bold hover:text-orange duration-150">','</a><div class="flex justify-between items-center mt-[22px]"><p class="text-[1.3rem] text-custom-gray font-montserrat text-lg font-bold"><!--$-->','<!--/--> ₽</p><p class="cursor-pointer"><svg width="28" height="24" viewBox="0 0 28 28"',' xmlns="http://www.w3.org/2000/svg"',' stroke-width="2.5" stroke-linejoin="round" class="','"><desc>Created with Pixso.</desc><path d="M13.5 4.08C11 0.79 6.82 -0.22 3.69 2.79C0.56 5.79 0.12 10.82 2.58 14.37C4.62 17.33 10.81 23.57 12.84 25.58C13.06 25.81 13.18 25.92 13.31 25.97C13.42 26 13.55 26 13.66 25.97C13.8 25.92 13.91 25.81 14.14 25.58C16.17 23.57 22.35 17.33 24.4 14.37C26.86 10.82 26.47 5.76 23.28 2.79C20.1 -0.19 15.99 0.79 13.5 4.08Z"></path><path d="M3.69 2.79C0.56 5.79 0.12 10.82 2.58 14.37C4.62 17.33 10.81 23.57 12.84 25.58C13.06 25.81 13.18 25.92 13.31 25.97C13.42 26 13.55 26 13.66 25.97C13.8 25.92 13.91 25.81 14.14 25.58C16.17 23.57 22.35 17.33 24.4 14.37C26.86 10.82 26.47 5.76 23.28 2.79C20.1 -0.19 15.99 0.79 13.5 4.08C11 0.79 6.82 -0.22 3.69 2.79Z"></path></svg></p></div><button class="timer timer w-full bg-orange block text-center py-2 mt-4 text-white font-medium rounded-lg hover:bg-orange-dark transition duration-300 ease-in-out flex items-center justify-center">В корзину</button></div></div>'];const j=n=>{const[l,e]=createSignal(!1),[m,u]=createSignal(!1);return wr(),ssr(D,ssrHydrationKey(),escape(createComponent(Ot,{position:"top-right"})),ssrAttribute("src",escape(n.product.image,!0)||escape(s,!0),!1),`w-full object-cover transition-transform duration-300 ease-in-out transform ${l()?"scale-105":"scale-100"}`,"mt-4",escape(n.product.name),escape(n.product.price),ssrAttribute("fill",m()?"#FF6006":"none",!1),ssrAttribute("stroke",(m(),"#FF6006"),!1),`transition-colors duration-300 ease-in-out ${l()?"text-[#FF6006]":"text-black"}`)},M=j;var P=["<svg",' width="11.205078" height="6.202637" viewBox="0 0 11.2051 6.20264" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6 0.6L5.6 5.6L0.6 0.6" stroke="#000000" strokeOpacity="1" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round"></path></svg>'],A=["<svg",' width="11.204102" height="6.202515" viewBox="0 0 11.2041 6.20251" fill="none" xmlns="http://www.w3.org/2000/svg"><defs></defs><path id="Stroke 1" d="M0.6 5.6L5.6 0.6L10.6 5.6" stroke="#000000" stroke-opacity="1.000000" stroke-width="1.200000" stroke-linejoin="round" stroke-linecap="round"></path></svg>'],B=["<div",' class="py-2">',"</div>"],R=["<div",' class="border-b border-gray-300"><button class="w-full text-left py-2 text-lg font-semibold flex gap-[138px] justify-between items-baseline"><!--$-->',"<!--/--><span>","</span></button><!--$-->","<!--/--></div>"],S=["<div",' class="px-0"><label class="flex items-center"><input type="checkbox" class="mr-2"','>Корм для щенят</label><label class="flex items-center"><input type="checkbox" class="mr-2"','>Корм для взрослых собак</label><label class="flex items-center"><input type="checkbox" class="mr-2"','>Категория 3</label><label class="flex items-center"><input type="checkbox" class="mr-2"',">Категория 4</label></div>"],E=["<div",' id="modal" class="absolute bg-white border border-gray-300 shadow-lg p-4 rounded-lg z-10 mt-[30px]" style="','"><!--$-->','<!--/--><button class="','">Сбросить</button></div>'],I=["<div",' class="mt-10 relative"><div class="container mx-auto max-w-[1200px] pl-[16px] pr-[16px]"><div class="flex gap-2 items-center mb-[50px]"><!--$-->','<!--/--><p class="text-black font-montserrat text-base font-semibold leading-5">/</p><p class="text-orange font-montserrat text-base font-semibold leading-5 hover:text-orange duration-150">Каталог</p></div><div class="flex justify-between items-center"><h1 class="text-black font-Montserrat text-4xl font-semibold leading-10">Каталог товаров</h1><div class="cursor-pointer" id="modalIcon"><svg width="44" height="26" viewBox="0 0 44 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 23.5C44 23.01 43.8 22.54 43.46 22.2C43.11 21.85 42.65 21.66 42.16 21.66L31.16 21.66C30.68 21.66 30.21 21.85 29.87 22.2C29.52 22.54 29.33 23.01 29.33 23.5C29.33 23.98 29.52 24.45 29.87 24.79C30.21 25.14 30.68 25.33 31.16 25.33L42.16 25.33C42.65 25.33 43.11 25.14 43.46 24.79C43.8 24.45 44 23.98 44 23.5ZM44 12.5C44 12.01 43.8 11.54 43.46 11.2C43.11 10.85 42.65 10.66 42.16 10.66L16.5 10.66C16.01 10.66 15.54 10.85 15.2 11.2C14.85 11.54 14.66 12.01 14.66 12.5C14.66 12.98 14.85 13.45 15.2 13.79C15.54 14.14 16.01 14.33 16.5 14.33L42.16 14.33C42.65 14.33 43.11 14.14 43.46 13.79C43.8 13.45 44 12.98 44 12.5ZM44 1.5C44 1.01 43.8 0.54 43.46 0.2C43.11 -0.15 42.65 -0.34 42.16 -0.34L1.83 -0.34C1.34 -0.34 0.88 -0.15 0.53 0.2C0.19 0.54 0 1.01 0 1.5C0 1.98 0.19 2.45 0.53 2.79C0.88 3.14 1.34 3.33 1.83 3.33L42.16 3.33C42.65 3.33 43.11 3.14 43.46 2.79C43.8 2.45 44 1.98 44 1.5Z" fill="#FF5F04" fill-opacity="1.000000" fill-rule="nonzero"></path></svg></div></div><!--$-->','<!--/--><div class="mt-[2.813rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[59px] mb-[70px]">',"</div></div><!--$-->","<!--/--></div>"];const _=()=>ssr(P,ssrHydrationKey()),z=()=>ssr(A,ssrHydrationKey()),Z={products:[{id:1,name:"Силикагелевый наполнитель с фиолетовыми гранулами DeMurr PREMIUM LAVENDER 16 л",category:"category1",description:"Description for Product 1",image:"https://ir.ozone.ru/s3/multimedia-1-4/wc1000/6961446868.jpg",price:799},{id:2,name:"Royal Canin British Shorthair Adult - Корм для взрослых британских короткошерстных кошек",category:"category2",description:"Description for Product 2",image:"https://povodok-shop.ru/image/cache/catalog/products/royal-canin/british-shorthair-adult-korm-dlya-vzroslyh-britanskih-korotkosherstnyh-koshek-royal-kanin-british-shorthejr-edalt-500x500.png",price:999},{id:3,name:"Royal Canin Urinary Care - Корм для взрослых кошек, для поддержания здоровья мочевыделительной системы Роял Канин Уринари Кэа",category:"category1",description:"Description for Product 3",image:"https://povodok-shop.ru/image/cache/catalog/products/royal-canin/urinary-care-korm-dlya-vzroslyh-koshek-dlya-podderganiya-zdorovya-mochevydelitelnoj-sistemy-royal-kanin-urinari-kea-500x500.png",price:1299},{id:4,name:"Royal Canin Dental Small Dog - Корм для взрослых собак мелких пород для гигиены полости рта",category:"foodforadultdogs",description:"Description for Product 3",image:"https://povodok-shop.ru/image/cache/catalog/333-1000x1000.png",price:1299},{id:5,name:"Лежанка для кошек и собак серо-коричневая",category:"category4",description:"Description for Product 3",image:"https://povodok-shop.ru/image/cache/catalog/products/midwest/738272888-midwest-ashton-leganka-dlya-koshek-i-sobak-sero-korichnevaya-500x500.jpg",price:1299},{id:6,name:"Royal Canin German Shepherd Puppy - Корм для щенков породы немецкая овчарка",category:"puppyfood",description:"Description for Product 3",image:"https://povodok-shop.ru/image/cache/catalog/products/royal-canin/german-shepherd-puppy-korm-dlya-schenkov-porody-nemetskaya-ovcharka-royal-kanin-dgerman-sheferd-pappi-1000x1000.png",price:1299}]},T=({title:n,children:l,isOpen:e,onToggle:m})=>ssr(R,ssrHydrationKey(),escape(n),e()?escape(createComponent(z,{})):escape(createComponent(_,{})),escape(createComponent(Show,{get when(){return e()},get children(){return ssr(B,ssrHydrationKey(),escape(l))}})));function ot(){wr();const[n$1,l]=createSignal(!1),[e,m]=createSignal([]),[u,x]=createSignal([!1,!1,!1,!1]),y=Z.products,v=r=>e().length===0?!0:e().includes(r.category),b=r=>{x(s=>s.map((d,g)=>g===r?!d:d));};return createEffect(()=>{const r=document.getElementById("modalIcon"),s=document.getElementById("modal"),d=document.querySelector(".container");if(r&&s&&d){const g=r.getBoundingClientRect(),k=d.getBoundingClientRect();s.style.top=`${g.bottom+window.scrollY}px`,s.style.left=`${Math.min(g.left+window.scrollX,k.right-s.offsetWidth)}px`;}}),ssr(I,ssrHydrationKey(),escape(createComponent(A$1,{href:"/",class:"text-black font-montserrat text-base font-semibold leading-5",children:"Главная"})),escape(createComponent(Show,{get when(){return n$1()},get children(){return ssr(E,ssrHydrationKey(),"maxWidth:300px",escape(createComponent(T,{title:"Собаки",isOpen:()=>u()[0],onToggle:()=>b(0),get children(){return ssr(S,ssrHydrationKey(),ssrAttribute("checked",e().includes("puppyfood"),!0),ssrAttribute("checked",e().includes("foodforadultdogs"),!0),ssrAttribute("checked",e().includes("category3"),!0),ssrAttribute("checked",e().includes("category4"),!0))}})),"mr-2 px-[70px] py-[10px] bg-orange text-white w-full rounded-lg mt-[53px]")}})),escape(y.filter(v).map((r,s)=>createComponent(M,{key:s,product:r}))),escape(createComponent(n,{})))}

export { ot as default };
//# sourceMappingURL=catalog.mjs.map