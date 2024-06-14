import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from 'solid-js/web';
import { createSignal } from 'solid-js';
import { n as n$1 } from './Footer.mjs';
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

var f=["<div",' class="mt-10"><!--$-->','<!--/--><div class="container mx-auto max-w-[1200px] pl-[16px] pr-[16px]"><div class="flex gap-2 items-center mb-[50px]"><!--$-->','<!--/--><p class="text-black font-montserrat text-base font-semibold leading-5">/</p><p class="text-orange font-montserrat text-base font-semibold leading-5 hover:text-orange duration-150">Личный кабинет</p></div><div class="flex justify-between items-center"><h1 class="text-black font-Montserrat text-4xl font-semibold leading-10">Добро пожаловать в личный кабинет</h1></div><div class="flex xx:gap-[40px] sm:gap-[20px] mt-[40px] items-center overflow-auto"><a class="','">Заказы</a><a class="','">Прошлые заказы</a><a class="','">Личные данные</a><a href="/login" class="text-black font-montserrat text-lg font-semibold leading-6 hover:text-orange duration-150">Выход</a></div><!--$-->',"<!--/--><!--$-->","<!--/--><!--$-->","<!--/--></div><!--$-->","<!--/--></div>"],g=["<div",' class="mt-[60px] mb-[60px]"><div class="mt-[60px] mb-[60px]"><div class="py-[12px] px-[40px] flex justify-between items-center relative gap-[12px]" style="box-shadow:0px 1px 18.6px 0px rgba(0, 0, 0, 0.1);"><div class="flex gap-[40px] items-center xx:flex-wrap sm:flex-nowrap"><img src="https://basket-12.wbbasket.ru/vol1812/part181284/181284055/images/big/1.webp" class="xx:w-[60%] sm:w-[120px]"><div><h2 class="text-black font-montserrat text-lg font-semibold leading-5">Силикагелевый наполнитель с фиолетовыми гранулами "DeMurr PREMIUM LAVENDER"</h2><p class="font-montserrat text-black text-base font-medium leading-20 mt-[20px]">№ заказа : <span class="text-orange">10896</span></p><div class="flex gap-[20px] mt-[20px]"><p class="font-montserrat text-lg font-semibold leading-6 text-orange">899 ₽</p><p class="font-montserrat text-lg font-semibold leading-6 text-orange">2шт</p></div></div></div><p class="top-0 right-0 cursor-pointer xx:mt-[195px] sm:mt-0"><svg width="5.000000" height="22.000000" viewBox="0 0 5 22" fill="none" xmlns="http://www.w3.org/2000/svg"><defs></defs><path id="Vector" d="M0 19.79C0 19.21 0.26 18.65 0.73 18.24C1.2 17.83 1.83 17.6 2.5 17.6C3.16 17.6 3.79 17.83 4.26 18.24C4.73 18.65 5 19.21 5 19.79C5 20.38 4.73 20.94 4.26 21.35C3.79 21.76 3.16 22 2.5 22C1.83 22 1.2 21.76 0.73 21.35C0.26 20.94 0 20.38 0 19.79ZM0 11C0 10.41 0.26 9.85 0.73 9.44C1.2 9.03 1.83 8.79 2.5 8.79C3.16 8.79 3.79 9.03 4.26 9.44C4.73 9.85 5 10.41 5 11C5 11.58 4.73 12.14 4.26 12.55C3.79 12.96 3.16 13.2 2.5 13.2C1.83 13.2 1.2 12.96 0.73 12.55C0.26 12.14 0 11.58 0 11ZM0 2.2C0 1.61 0.26 1.05 0.73 0.64C1.2 0.23 1.83 0 2.5 0C3.16 0 3.79 0.23 4.26 0.64C4.73 1.05 5 1.61 5 2.2C5 2.78 4.73 3.34 4.26 3.75C3.79 4.16 3.16 4.4 2.5 4.4C1.83 4.4 1.2 4.16 0.73 3.75C0.26 3.34 0 2.78 0 2.2Z" fill="#FF5F04" fill-opacity="1.000000" fill-rule="nonzero"></path></svg></p><!--$-->',"<!--/--></div></div></div>"],u=["<ul",' class="absolute w-[179px] shadow-lg top-[55%] right-[50px] bg-white py-[20px] px-[20px] mt-3 rounded-[10px]" style="box-shadow:0px 1px 18.6px 0px rgba(0, 0, 0, 0.1);"><li class="flex gap-4 items-center"><a href="" class="text-black font-medium text-ms hover:text-orange duration-150">Сообщить о получении</a></li><li class="flex gap-4 items-center pt-[10px]"><button class="text-black font-medium text-ms hover:text-orange duration-150 cursor-pointer">Отменить заказ</button><!--$-->',"<!--/--></li></ul>"],n=["<div",' class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"><div class="bg-white p-8 rounded-lg w-[500px] m-[20px]"><h3 class="text-xl font-semibold mb-4">Укажите причину отмены</h3><label class="flex items-center mb-2"><input type="checkbox" class="form-checkbox mr-2"><span class="text-gray-700">Недоступность товара</span></label><label class="flex items-center mb-2"><input type="checkbox" class="form-checkbox mr-2"><span class="text-gray-700">Неверно указан адрес</span></label><label class="flex items-center mb-8"><input type="checkbox" class="form-checkbox mr-2"><span class="text-gray-700">Другая причина</span></label><div class="flex justify-end mb-2"><button class="mr-6 px-4 py-2 text-gray-700 border border-gray-400 rounded-md hover:bg-gray-200">Отмена</button><button class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Подтвердить</button></div></div></div>'],i=["<div",' class="mt-[60px] mb-[60px]"><div class="mt-[60px] mb-[60px]"><div class="py-[12px] px-[40px] flex justify-between items-center relative gap-[12px]" style="box-shadow:0px 1px 18.6px 0px rgba(0, 0, 0, 0.1);"><div class="flex gap-[40px] items-center xx:flex-wrap sm:flex-nowrap"><img src="https://basket-12.wbbasket.ru/vol1812/part181284/181284055/images/big/1.webp" class="xx:w-[60%] sm:w-[120px]"><div><h2 class="text-black font-montserrat text-lg font-semibold leading-5">Силикагелевый наполнитель с фиолетовыми гранулами<br> "DeMurr PREMIUM LAVENDER"</h2><p class="font-montserrat text-black text-base font-medium leading-20 mt-[20px]">№ заказа : <span class="text-orange">10896</span></p><div class="flex gap-[20px] mt-[20px]"><p class="font-montserrat text-lg font-semibold leading-6 text-orange">899 ₽</p><p class="font-montserrat text-lg font-semibold leading-6 text-orange">2шт</p></div></div></div><svg width="35.000000" height="35.000000" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="xx:w-[140px] sm:w-[35px] xx:mt-[195px] sm:mt-0"><path id="Vector" d="M25.99 30.16L31.52 24.72L30.3 23.5L25.99 27.75L24.14 25.85L22.92 27.08L25.99 30.16ZM5.38 8.58L25.72 8.58L25.72 6.64L5.38 6.64L5.38 8.58ZM27.22 34.61C25.05 34.61 23.21 33.85 21.7 32.34C20.19 30.83 19.44 29 19.44 26.83C19.44 24.66 20.19 22.83 21.7 21.32C23.21 19.81 25.05 19.05 27.22 19.05C29.38 19.05 31.22 19.81 32.73 21.32C34.24 22.83 35 24.66 35 26.83C35 29 34.24 30.83 32.73 32.34C31.22 33.85 29.38 34.61 27.22 34.61ZM0 31.99L0 2.52C0 1.65 0.3 0.91 0.91 0.3C1.52 -0.31 2.27 -0.62 3.14 -0.62L27.97 -0.62C28.83 -0.62 29.58 -0.31 30.19 0.3C30.8 0.91 31.11 1.65 31.11 2.52L31.11 14.08C30.79 13.97 30.48 13.87 30.16 13.78C29.85 13.7 29.52 13.64 29.16 13.59L29.16 2.53C29.16 2.23 29.04 1.95 28.79 1.7C28.54 1.45 28.26 1.33 27.97 1.33L3.14 1.33C2.84 1.33 2.56 1.45 2.31 1.7C2.06 1.95 1.94 2.23 1.94 2.52L1.94 28.65L14.27 28.65C14.36 29.18 14.48 29.7 14.62 30.21C14.76 30.71 14.96 31.2 15.21 31.66L15.14 31.73L12.93 30.12L10.32 31.99L7.7 30.12L5.08 31.99L2.46 30.12L0 31.99ZM5.38 23.24L14.54 23.24C14.61 22.89 14.7 22.55 14.81 22.24C14.91 21.93 15.04 21.61 15.18 21.3L5.38 21.3L5.38 23.24ZM5.38 15.91L19.6 15.91C20.23 15.41 20.91 14.99 21.64 14.66C22.36 14.32 23.14 14.09 23.96 13.97L5.38 13.97L5.38 15.91Z" fill="#FF6006" fill-opacity="1.000000" fill-rule="evenodd"></path></svg></div></div></div>'],v=["<div",' class="mt-14 mb-14"><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div><label class="block font-montserrat text-base font-medium leading-5 text-black" for="input1">ФИО</label><input type="text"',' class="mt-2 mb-12 border border-solid border-black border-opacity-25 rounded-lg shadow-md px-4 py-2 w-full focus:outline-none text-black font-montserrat text-base font-light leading-6 placeholder-gray" placeholder="Иванов Иван Иванович"><label class="block font-montserrat text-base font-medium leading-5 text-black" for="input2">Электронная почта</label><input type="email"',' class="mt-2 mb-12 border border-solid border-black border-opacity-25 rounded-lg shadow-md px-4 py-2 w-full focus:outline-none text-black font-montserrat text-base font-light leading-6 placeholder-gray" placeholder="example@yandex.ru"></div><div><label class="block font-montserrat text-base font-medium leading-5 text-black" for="input2">Номер телефона</label><input type="text" id="phone" placeholder="+7 (999) 999-99-99" class="mt-2 mb-12 border border-solid border-black border-opacity-25 rounded-lg shadow-md px-4 py-2 w-full focus:outline-none text-black font-montserrat text-base font-light leading-6 placeholder-gray"><label class="block font-montserrat text-base font-medium leading-5 text-black" for="input2">Адрес</label><input type="text" class="mt-2 mb-12 border border-solid border-black border-opacity-25 rounded-lg shadow-md px-4 py-2 w-full focus:outline-none text-black font-montserrat text-base font-light leading-6 placeholder-gray" placeholder="Например: г. Сызрань, Озерная ул., д. 19 кв.158"','></div></div><div><button class="timer rounded-lg shadow-md bg-orange py-[12px] px-[50px] text-white font-montserrat text-sm font-medium leading-16 tracking-wider">Обновить данные</button></div></div>'];const[h,I]=createSignal(""),[w,P]=createSignal("");createSignal("");const[C,z]=createSignal("");function B(){wr();const[p,y]=createSignal(!1);createSignal(!1);const[e,k]=createSignal("orders"),[d,L]=createSignal(!1);return ssr(f,ssrHydrationKey(),escape(createComponent(Ot,{position:"top-right"})),escape(createComponent(A,{href:"/",class:"text-black font-montserrat text-base font-semibold leading-5",children:"Главная"})),`font-montserrat text-lg font-semibold leading-6 hover:text-orange duration-150 cursor-pointer ${e()==="orders"&&"text-orange"}`,`text-black font-montserrat text-lg font-semibold leading-6 hover:text-orange duration-150 min-w-[150px] cursor-pointer ${e()==="pastOrders"&&"text-orange"}`,`text-black font-montserrat text-lg font-semibold leading-6 hover:text-orange duration-150 min-w-[150px] cursor-pointer ${e()==="personalData"&&"text-orange"}`,e()==="orders"&&ssr(g,ssrHydrationKey(),p()&&ssr(u,ssrHydrationKey(),d()&&n[0]+ssrHydrationKey()+n[1])),e()==="pastOrders"&&i[0]+ssrHydrationKey()+i[1],e()==="personalData"&&ssr(v,ssrHydrationKey(),ssrAttribute("value",escape(h(),!0),!1),ssrAttribute("value",escape(w(),!0),!1),ssrAttribute("value",escape(C(),!0),!1)),escape(createComponent(n$1,{})))}

export { B as default };
//# sourceMappingURL=profile.mjs.map
