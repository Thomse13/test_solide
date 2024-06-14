import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from 'solid-js/web';
import { createSignal } from 'solid-js';
import { n } from './Footer.mjs';
import { s } from './product.mjs';
import { y } from './Card2.mjs';
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

var f=["<div",' class="mt-10"><div class="container mx-auto max-w-[1200px] px-[16px]"><!--$-->','<!--/--><div class="flex items-center mb-6"><!--$-->','<!--/--><p class="mx-1 text-black font-montserrat text-base font-semibold leading-5">/</p><!--$-->','<!--/--><p class="mx-1 text-black font-montserrat text-base font-semibold leading-5">/</p><p class="text-orange font-montserrat text-base font-semibold leading-5 hover:text-orange duration-150">Кошки</p><p class="mx-1 text-black font-montserrat text-base font-semibold leading-5">/</p><p class="text-orange font-montserrat text-base font-semibold leading-5 hover:text-orange duration-150">Силикагелевый наполнитель с фиолетовыми гранулами "DeMurr PREMIUM LAVENDER"</p></div><div class="flex justify-between gap-[67px]"><div class="w-[500px] h-[500px]"><img',' class="w-full h-full object-cover" alt="product"></div><div class="ml-6 w-[620px] mt-[20px]"><div class="flex"><h1 class="text-black font-montserrat font-semibold text-3xl leading-10 mb-4">Силикагелевый наполнитель с фиолетовыми гранулами "DeMurr PREMIUM LAVENDER"</h1><div class="border-2 border-orange rounded-lg p-[10px]" style="height:fit-content;"><p class="cursor-pointer"><svg width="28" height="24" viewBox="0 0 28 28"',' xmlns="http://www.w3.org/2000/svg"',' stroke-width="2.5" stroke-linejoin="round" class="','"><path d="M13.5 4.08C11 0.79 6.82 -0.22 3.69 2.79C0.56 5.79 0.12 10.82 2.58 14.37C4.62 17.33 10.81 23.57 12.84 25.58C13.06 25.81 13.18 25.92 13.31 25.97C13.42 26 13.55 26 13.66 25.97C13.8 25.92 13.91 25.81 14.14 25.58C16.17 23.57 22.35 17.33 24.4 14.37C26.86 10.82 26.47 5.76 23.28 2.79C20.1 -0.19 15.99 0.79 13.5 4.08Z"></path><path d="M3.69 2.79C0.56 5.79 0.12 10.82 2.58 14.37C4.62 17.33 10.81 23.57 12.84 25.58C13.06 25.81 13.18 25.92 13.31 25.97C13.42 26 13.55 26 13.66 25.97C13.8 25.92 13.91 25.81 14.14 25.58C16.17 23.57 22.35 17.33 24.4 14.37C26.86 10.82 26.47 5.76 23.28 2.79C20.1 -0.19 15.99 0.79 13.5 4.08C11 0.79 6.82 -0.22 3.69 2.79Z"></path></svg></p></div></div><p class="text-black font-montserrat text-base font-normal leading-5">Освежите домашнюю обстановку вашего любимца с помощью силикагелевого наполнителя "DeMurr PREMIUM LAVENDER". Этот высококачественный продукт предназначен для использования в туалете для кошек и обеспечивает эффективное впитывание жидкости и запаха, оставляя ваш дом свежим и чистым.</p><div class="text-black font-montserrat text-2xl font-bold leading-relaxed mt-[10px]">899 ₽</div><div class="flex gap-[30px] mt-[20px]"><div class="border border-black rounded-lg px-[14px] py-[10px] w-[138px] flex items-center justify-between"><button>-</button><input type="text"',' class="w-[70px] text-center" readonly style="outline:none;"><button>+</button></div><button class="rounded-lg bg-orange text-white text-center py-[13px] px-[24px] block w-[300px]">В корзину</button></div></div></div><div class="mt-[70px]"><div class="text-black font-montserrat text-lg font-semibold leading-6">Оплата и доставка</div><div class="rounded-lg bg-white w-full py-[40px] px-[50px] mt-[40px]" style="box-shadow:0px 1px 18.6px 0px rgba(0, 0, 0, 0.1);"><div class="text-black font-montserrat text-base font-normal leading-5"><span class="text-xl">Оплата</span><br><br>У нас вы можете выбрать удобный для вас способ оплаты. Мы принимаем к оплате кредитные и дебетовые карты, а также предлагаем услуги онлайн-платежей. Мы гарантируем безопасную и защищенную оплату вашего заказа. При оформлении заказа вы сможете выбрать подходящий вариант оплаты из доступных для вас методов. Обратите внимание: некоторые товары или услуги могут иметь специальные условия доставки и оплаты, подробную информацию о которых можно уточнить у наших менеджеров. Не стесняйтесь связаться с нами, если у вас есть какие-либо вопросы относительно доставки или оплаты товаров для ваших питомцев. Наша команда с удовольствием поможет вам с выбором и ответит на все ваши вопросы.<br><br><span class="text-xl">Доставка</span><br><br>Мы предлагаем быструю и удобную доставку товаров для ваших любимцев прямо к вашему дверному порогу. Независимо от того, нужен вам корм для собаки, кошки или других домашних питомцев, мы с удовольствием доставим его вам в кратчайшие сроки. Мы сотрудничаем с надежными службами доставки, чтобы обеспечить быструю и безопасную доставку в любой регион.</div></div></div><div class="mt-[70px]"><div class="text-black font-montserrat text-3xl font-semibold leading-11">Похожие товары</div><!--$-->',"<!--/--></div></div><!--$-->","<!--/--></div>"];function U(v){const[l,u]=createSignal([{quantity:1}]),[n$1,g]=createSignal(!1),[a,h]=createSignal(!1);return wr(),ssr(f,ssrHydrationKey(),escape(createComponent(Ot,{position:"top-right"})),escape(createComponent(A,{href:"/",class:"text-black font-montserrat text-base font-semibold leading-5",children:"Главная"})),escape(createComponent(A,{href:"/catalog",class:"text-black font-montserrat text-base font-semibold leading-5",children:"Каталог"})),ssrAttribute("src",escape(s,!0),!1),ssrAttribute("fill",a()?"#FF6006":"none",!1),ssrAttribute("stroke",(a(),"#FF6006"),!1),`transition-colors duration-300 ease-in-out ${n$1()?"text-[#FF6006]":"text-black"}`,ssrAttribute("value",escape(l()[0].quantity,!0),!1),escape(createComponent(y,{})),escape(createComponent(n,{})))}

export { U as default };
//# sourceMappingURL=productinfo.mjs.map
