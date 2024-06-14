import { ssr, ssrHydrationKey, ssrStyle, ssrAttribute, escape, createComponent } from 'solid-js/web';
import { onMount } from 'solid-js';
import s from 'swiper';
import { y as y$1 } from './Card2.mjs';
import { s as s$1 } from './Base.mjs';
import { n as n$1 } from './Footer.mjs';
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
import './LoaderIcon.mjs';
import 'solid-js/store';

const n="/_server/assets/category1-DW47B9lk.png",f="/_server/assets/catcategoty-DZWzhche.png",h="/_server/assets/parrotcategory-CUne2f9q.png",x="/_server/assets/fishcategory-BzFKVmMT.png",m="/_server/assets/rodents-Bp5pXC5h.png";var g=["<div",' class="mt-[4.375rem] container mx-auto max-w-[1200px] pl-[16px] pr-[16px] "><h1 class="text-black font-montserrat text-3xl font-semibold leading-11">Категория товаров</h1><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[59px] mt-[2.813rem] gap-[3.686rem]"><div><img',' class="mb-[1.563rem] w-full"><a href="/catalog" class="text-black font-montserrat text-xl font-semibold leading-7 hover:text-orange duration-150">Товары для собак</a></div><div><img',' class="mb-[1.563rem] w-full"><a href="/catalog" class="text-black font-montserrat text-xl font-semibold leading-7 hover:text-orange duration-150">Товары для кошек</a></div><div><img',' class="mb-[1.563rem] w-full"><a href="/catalog" class="text-black font-montserrat text-xl font-semibold leading-7 hover:text-orange duration-150">Товары для птиц</a></div><div><img',' class="mb-[1.563rem] w-full"><a href="/catalog" class="text-black font-montserrat text-xl font-semibold leading-7 hover:text-orange duration-150">Товары для рыб</a></div><div><img',' class="mb-[1.563rem] w-full"><a href="/catalog" class="text-black font-montserrat text-xl font-semibold leading-7 hover:text-orange duration-150">Товары для грызунов</a></div></div></div>'];const F=()=>ssr(g,ssrHydrationKey(),ssrAttribute("src",escape(n,!0),!1),ssrAttribute("src",escape(f,!0),!1),ssrAttribute("src",escape(h,!0),!1),ssrAttribute("src",escape(x,!0),!1),ssrAttribute("src",escape(m,!0),!1)),M=F,a="/_server/assets/banner-CMWWeWHk.png",r="/_server/assets/logobanner1-BeZw9Phg.png";var u=["<div",' class="mt-[4.375rem] container mx-auto m-10 max-w-[1200px] pl-[16px] pr-[16px]"><div class="flex justify-between items-center flex-wrap gap-[20px]"><h1 class="text-black font-montserrat text-3xl font-semibold leading-11">Выгодные предложения</h1><div class="flex items-center gap-[1.25rem]"><a href="/catalog" class="text-orange font-montserrat text-lg font-semibold leading-6">В каталог</a><svg width="10.192627" height="17.719238" viewBox="0 0 10.1926 17.7192" fill="none" xmlns="http://www.w3.org/2000/svg"><desc>Created with Pixso.</desc><defs></defs><path id="Vector" d="M9.80225 7.91699C10.0522 8.16699 10.1926 8.5061 10.1926 8.85962C10.1926 9.21313 10.0522 9.55225 9.80225 9.80225L2.25952 17.345C2.00806 17.5878 1.67126 17.7222 1.32166 17.7192C0.972168 17.7162 0.637695 17.5759 0.390503 17.3287C0.143311 17.0815 0.00305176 16.7471 0 16.3975C-0.00305176 16.0479 0.131348 15.7111 0.374268 15.4596L6.97424 8.85962L0.374268 2.25964C0.131348 2.00818 -0.00305176 1.67139 0 1.32178C0.00305176 0.972168 0.143311 0.637695 0.390503 0.390503C0.637695 0.143311 0.972168 0.00305176 1.32166 0C1.67126 -0.00292969 2.00806 0.131348 2.25952 0.374268L9.80225 7.91699Z" fill="#FF6006" fill-opacity="1.000000" fill-rule="evenodd"></path></svg></div></div><!--$-->',"<!--/--></div>"];const Z=()=>ssr(u,ssrHydrationKey(),escape(createComponent(y$1,{}))),v=Z;var w=["<div",' class="mt-[70px] container mx-auto max-w-[1200px] pl-[16px] pr-[16px]"><h1 class="text-black font-montserrat text-3xl font-semibold leading-11">Наши бренды</h1><ul class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[59px] mt-[40px]"><li><svg class="w-full" width="223.000000" height="84.000000" viewBox="0 0 223 84" fill="none" xmlns="http://www.w3.org/2000/svg"><desc>Created with Pixso.</desc><defs><clipPath id="clip592_9649"><rect id="Layer_1" width="223.000000" height="84.000000" fill="white" fill-opacity="0"></rect></clipPath></defs><rect id="Layer_1" width="223.000000" height="84.000000" fill="#FFFFFF" fill-opacity="0"></rect><g clip-path="url(#clip592_9649)"><path id="Vector" d="M98 75.02L92 75.02C91.8 75.02 91.7 74.82 91.7 74.72L91.7 56.56C91.8 56.26 91.8 55.86 91.7 55.56C91.4 53.86 89.8 52.75 88.1 52.95C86.4 53.25 85.3 54.86 85.5 56.56L85.5 79.23C85.5 80.13 86.2 80.94 87.2 81.04L98 81.04C98.1 81.04 98.2 81.04 98.3 81.04C99.9 80.94 101.1 79.53 101 77.93C101 76.02 99.7 74.92 98 75.02ZM76.3 54.46L60.3 76.12C59.9 76.62 59.7 77.23 59.7 77.93C59.7 78.83 60.1 79.83 61 80.33C62.4 81.24 64.1 80.94 65.1 79.73L68.19 75.52L75.69 75.52L75.69 77.93C75.8 79.63 77.19 80.94 78.8 80.84C80.5 80.84 81.69 79.43 81.69 77.93L81.69 56.46C81.69 55.56 81.3 54.66 80.69 54.16C79.4 52.95 77.4 53.05 76.3 54.46ZM75.6 69.4L72.8 69.4C72.69 69.4 72.6 69.3 72.6 69.2L75.6 65.09C75.6 64.99 75.6 69.4 75.6 69.4ZM67.5 56.56C67.5 54.96 66.19 53.65 64.69 53.65C63.9 53.65 63.1 53.96 62.6 54.46L55.8 61.58C55.7 61.68 55.6 61.68 55.5 61.68C55.4 61.68 55.3 61.68 55.3 61.58L48.5 54.46C48 53.96 47.2 53.55 46.4 53.55C44.8 53.55 43.6 54.86 43.6 56.36C43.6 57.06 43.9 57.87 44.3 58.37L52.6 67.9L52.7 77.93C52.7 79.53 54 80.84 55.6 80.84C57.2 80.84 58.5 79.53 58.5 77.93L58.7 68L66.8 58.47C67.3 57.87 67.5 57.17 67.5 56.56ZM32.4 53.55C24.9 53.55 18.79 59.67 18.79 67.19C18.79 74.72 24.9 80.84 32.4 80.84C39.9 80.84 46 74.62 46 67.09C46 59.77 39.9 53.65 32.4 53.55ZM32.4 74.42C28.3 74.42 25.1 71.21 25.1 67.09C25.1 62.98 28.3 59.77 32.4 59.77C36.5 59.77 39.7 62.98 39.7 67.09C39.7 71.21 36.5 74.42 32.4 74.42ZM175.9 52.95C174.4 53.05 173.2 54.26 173.2 55.66L173.2 68.4C173.2 68.5 173.1 68.6 173 68.6C172.9 68.6 172.9 68.6 172.9 68.5L165.5 55.36C164.4 53.35 161.8 52.75 159.89 53.96C158.8 54.66 158 55.96 157.89 57.27L157.89 78.13C158 79.83 159.5 81.04 161 80.94C162.5 80.84 163.7 79.63 163.8 78.13L163.8 65.39C163.8 65.29 163.9 65.19 164 65.19C164.1 65.19 164.1 65.19 164.1 65.29L171.7 78.73C172.7 80.64 175.1 81.24 177 80.23C178.3 79.53 179 78.23 179 76.92L179 55.76C178.9 54.16 177.6 52.85 175.9 52.95ZM14 69.7C16.4 68.2 18 65.59 17.9 62.78C17.9 62.78 17.9 62.78 17.9 62.68C18 57.77 14 53.65 9.1 53.55C6.7 53.35 4.19 54.16 2.5 55.86C0.59 57.77 0 60.17 0 62.78L0.4 77.93C0.4 79.53 1.7 80.84 3.3 80.84C4.9 80.84 6.2 79.53 6.2 77.93L6.3 70.71C6.3 70.51 6.4 70.4 6.6 70.4C6.6 70.4 6.7 70.4 6.8 70.4L13.9 80.13C14.4 80.64 15 80.84 15.8 80.84C17.4 80.84 18.6 79.53 18.7 78.03C18.7 77.63 18.6 77.23 18.4 76.72L14 69.7ZM8.89 65.49C8.7 65.49 8.6 65.49 8.39 65.49C6.7 65.39 5.6 63.89 5.7 62.38C5.8 60.68 7.3 59.57 8.8 59.67C9 59.67 9.1 59.67 9.3 59.67C11 59.77 12.1 61.28 12 62.78C11.9 64.39 10.4 65.89 8.89 65.49ZM129.8 71.71C129.39 71.71 128.89 71.81 128.39 72.01L126 73.61C124.9 74.32 123.5 74.72 122.1 74.72C117.9 74.52 114.8 70.91 115 66.89C115.2 62.98 118.2 59.97 122.1 59.77C123.5 59.77 124.8 60.17 126 60.88L128.3 62.48C128.7 62.68 129.1 62.78 129.7 62.78C131.3 62.78 132.6 61.48 132.6 59.87C132.6 59.27 132.39 58.47 131.89 57.97C129.6 55.26 126.2 53.65 122.5 53.65C115 53.65 108.9 59.77 108.9 67.3C108.9 74.52 114.5 80.53 121.7 80.94C125.6 80.94 129.2 79.33 131.89 76.52C132.3 76.02 132.6 75.42 132.5 74.62C132.8 73.01 131.39 71.71 129.8 71.71ZM185.4 52.85C183.6 52.85 182.3 54.36 182.3 55.96L182.3 77.93C182.3 79.73 183.8 81.04 185.4 81.04C187.2 81.04 188.5 79.53 188.5 77.93L188.5 55.96C188.5 54.26 187.2 52.85 185.4 52.85ZM139.89 54.36C139.3 53.76 138.39 53.35 137.5 53.35C135.7 53.35 134.39 54.16 134.39 55.96L134.39 77.93C134.39 79.63 135.8 80.84 137.39 80.84C139 80.84 140.39 79.53 140.5 77.93L140.5 75.52L148 75.52L151.1 79.73C151.6 80.43 152.6 80.84 153.5 80.84C155.2 80.84 156.39 79.43 156.39 77.93C156.39 77.33 156.2 76.62 155.8 76.12L139.89 54.36ZM143.5 69.2C143.5 69.3 143.39 69.4 143.3 69.4L140.5 69.4L140.5 64.89L143.5 69.1C143.6 69.1 143.6 69.1 143.5 69.2ZM209.9 52.95C208.4 53.05 207.2 54.26 207.2 55.66L207.2 68.4C207.2 68.5 207.1 68.6 207 68.6C206.9 68.6 206.9 68.6 206.8 68.5L199.5 55.36C198.4 53.35 195.8 52.75 193.9 53.96C192.8 54.66 192 55.96 191.9 57.27L191.9 78.13C191.9 79.83 193.3 81.14 194.9 81.14C196.5 81.14 197.9 79.73 197.9 78.13L197.9 65.39C197.9 65.29 198 65.19 198.1 65.19C198.2 65.19 198.2 65.19 198.2 65.29L205.8 78.73C206.8 80.64 209.2 81.24 211.1 80.23C212.4 79.53 213.1 78.23 213.1 76.92L213.1 55.76C212.9 54.16 211.5 52.85 209.9 52.95ZM220.7 55.46C220.7 55.36 220.7 55.36 220.7 55.26C220.7 54.46 220.1 54.26 219.4 54.26L218.5 54.26C218.2 54.26 218.1 54.46 218.1 54.56L218.1 57.27C218.1 57.57 218.2 57.67 218.5 57.67C218.8 57.67 218.9 57.47 218.9 57.27L218.9 56.26L219.1 56.26L219.6 57.27C219.7 57.47 219.8 57.67 220.1 57.67C220.4 57.67 220.5 57.57 220.5 57.37C220.5 57.27 220.5 57.27 220.5 57.17L219.9 56.26C220.3 56.36 220.7 55.86 220.7 55.46ZM219.5 55.66L218.9 55.66L218.9 54.86L219.5 54.86C219.8 54.86 220 54.96 220 55.26C220 55.56 219.8 55.66 219.5 55.66ZM219.4 52.75C217.6 52.75 216.2 54.26 216.2 55.96C216.2 57.67 217.7 59.17 219.4 59.17C221.1 59.17 222.6 57.67 222.6 55.96C222.5 54.26 221.1 52.75 219.4 52.75ZM219.4 58.37C218 58.37 217 57.37 217 55.96C217 54.56 218 53.55 219.4 53.55C220.8 53.55 221.8 54.56 221.8 55.96C221.8 57.27 220.7 58.37 219.4 58.37Z" fill="#E2001A" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M132.7 38.91C126.3 34.2 116.7 31.39 106.8 31.39C96.9 31.39 87.2 34.2 80.9 38.91C80.3 39.31 80 40.01 80 40.82C80 42.22 81 43.22 82.4 43.22C82.9 43.22 83.4 43.02 83.9 42.72C88.2 39.51 96.5 36.1 107 36.1C117.5 36.1 125.7 39.51 130 42.72L130.1 42.82C131.1 43.52 132.7 43.32 133.39 42.22C134 41.12 133.8 39.61 132.7 38.91ZM106.8 37.11C97.6 37.11 88.9 39.81 83.5 44.33C83.5 44.33 83.5 44.33 83.4 44.33C82.8 44.93 82.7 45.93 83.2 46.63C83.5 47.04 83.9 47.24 84.5 47.24C84.9 47.24 85.2 47.14 85.5 46.83C90.3 42.82 98.3 40.32 106.7 40.32C115.1 40.32 123 42.72 127.9 46.83C128.6 47.44 129.7 47.34 130.2 46.63C130.8 45.93 130.7 44.83 130 44.33C124.6 39.91 115.9 37.11 106.8 37.11ZM77 19.75C77.69 16.85 76 13.94 73 13.03C72.6 12.93 72.1 12.83 71.6 12.83C68.6 12.83 66.19 15.24 66.19 18.25C66.19 21.26 68.6 23.67 71.6 23.67C74.3 23.87 76.4 22.16 77 19.75ZM106.8 28.18C109.8 28.18 112.2 25.77 112.2 22.76C112.2 19.75 109.8 17.35 106.8 17.35C103.8 17.35 101.4 19.75 101.4 22.76C101.4 25.77 103.7 28.18 106.8 28.18ZM106.8 14.34C109.8 14.34 112.2 11.93 112.2 8.92C112.2 5.91 109.8 3.41 106.8 3.41C103.8 3.41 101.4 5.81 101.4 8.82C101.3 11.93 103.7 14.34 106.8 14.34ZM90.8 19.25C87.9 20.05 86.2 23.16 87 26.07C87.6 28.38 89.8 29.98 92.2 30.08L92.3 30.08C92.7 30.08 93.2 29.98 93.7 29.88C96.6 29.08 98.3 26.07 97.6 23.16C97 20.76 94.8 19.05 92.3 19.05C91.7 19.05 91.3 19.15 90.8 19.25ZM84 31.59C84.7 28.68 83 25.57 80 24.87C79.6 24.77 79.1 24.67 78.6 24.67C77.69 24.67 76.69 24.97 75.8 25.37C74.5 26.07 73.6 27.38 73.3 28.68C72.9 30.18 73.1 31.59 73.9 32.89C74.8 34.6 76.6 35.5 78.6 35.6C79.5 35.6 80.6 35.4 81.4 34.9C82.7 34.2 83.7 32.99 84 31.59ZM119.9 29.78C120.4 29.88 120.8 29.98 121.4 29.98C124.4 29.98 126.8 27.48 126.8 24.57C126.8 22.06 125.1 19.95 122.8 19.35C122.3 19.25 121.9 19.15 121.3 19.15C118.3 19.15 115.9 21.66 115.9 24.67C115.8 26.98 117.5 29.18 119.9 29.78ZM123.5 16.54C123.9 16.64 124.4 16.74 125 16.74C128 16.74 130.39 14.24 130.39 11.33C130.39 8.82 128.7 6.71 126.4 6.11C125.9 6.01 125.5 5.91 124.9 5.91C121.9 5.91 119.5 8.42 119.5 11.43C119.5 13.64 121.2 15.84 123.5 16.54ZM137.7 25.47C136.89 24.97 135.89 24.77 135 24.77C132 24.77 129.6 27.18 129.6 30.18C129.6 30.59 129.7 31.09 129.8 31.59C130.1 32.99 131.1 34.2 132.3 34.9C134.89 36.5 138.3 35.5 139.8 32.89C140.5 31.59 140.7 30.18 140.39 28.68C139.8 27.48 138.89 26.27 137.7 25.47ZM147.2 17.05C146.89 15.64 145.89 14.44 144.7 13.74C142.1 12.13 138.7 13.13 137.2 15.74C136.5 17.05 136.3 18.45 136.6 19.95C136.89 21.36 137.89 22.56 139.1 23.26C141.7 24.87 145.1 23.97 146.6 21.36C147.39 19.95 147.6 18.25 147.2 17.05ZM88.7 16.74C89.2 16.74 89.7 16.64 90.2 16.54C93.1 15.74 94.8 12.63 94.1 9.82C93.5 7.42 91.3 5.81 88.9 5.81C88.4 5.81 88 5.91 87.4 6.01C84.5 6.82 82.8 9.92 83.5 12.73C84.1 15.04 86.2 16.74 88.7 16.74Z" fill="#E2001A" fill-opacity="1.000000" fill-rule="nonzero"></path></g></svg></li><li><svg class="w-full" width="223.000000" height="84.000000" viewBox="0 0 223 84" fill="none" xmlns="http://www.w3.org/2000/svg"><desc>Created with Pixso.</desc><defs><clipPath id="clip592_9652"><rect id="Layer_1" width="223.000000" height="84.000000" transform="translate(-0.299988 0.000000)" fill="white" fill-opacity="0"></rect></clipPath></defs><rect id="Layer_1" width="223.000000" height="84.000000" transform="translate(-0.299988 0.000000)" fill="#FFFFFF" fill-opacity="0"></rect><g clip-path="url(#clip592_9652)"><path id="Vector" d="M8.43 72.93L2.48 62.89L5.08 62.89L9.54 70.68L14.19 62.89L16.61 62.89L10.85 72.93L10.85 78.87L8.43 78.87L8.43 72.93Z" fill="#231F20" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M23.67 72.93C23.67 70.47 22.92 69.04 20.51 69.04C18.09 69.04 17.35 70.47 17.35 72.93C17.35 75.39 18.09 77.03 20.51 77.03C22.74 77.03 23.67 75.39 23.67 72.93ZM14.75 72.93C14.75 68.83 16.23 66.58 20.32 66.58C24.23 66.58 25.9 68.83 25.9 72.93C25.9 77.03 24.41 79.28 20.32 79.28C16.42 79.28 14.75 77.03 14.75 72.93Z" fill="#231F20" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M28.13 73.55L28.13 66.79L30.36 66.79L30.36 73.55C30.36 75.39 30.36 76.82 33.15 76.82C35.75 76.82 35.75 75.39 35.75 73.55L35.75 66.79L37.98 66.79L37.98 73.55C37.98 77.44 37.23 79.28 32.96 79.28C28.87 79.28 28.13 77.44 28.13 73.55Z" fill="#231F20" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M40.39 66.99L42.25 66.79L42.44 68.22C42.81 67.4 44.3 66.79 46.15 66.79L46.15 69.24C43.55 69.24 42.81 70.68 42.81 72.73L42.81 79.08L40.58 79.08L40.58 66.99L40.39 66.99Z" fill="#231F20" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M59.16 71.09C61.21 71.09 62.14 70.27 62.14 68.22C62.14 65.97 61.21 65.35 59.16 65.35L54.89 65.35L54.89 71.09L59.16 71.09ZM52.47 62.89L59.16 62.89C63.06 62.89 64.55 64.74 64.55 68.01C64.55 71.29 63.25 73.55 58.98 73.55L54.7 73.55L54.7 79.08L52.29 79.08L52.29 62.89L52.47 62.89Z" fill="#231F20" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M68.08 71.7L74.03 71.7C73.84 69.86 73.84 68.63 71.43 68.63C69.01 68.83 68.27 69.86 68.08 71.7ZM65.85 72.93C65.85 69.45 66.78 66.58 71.43 66.58C76.07 66.58 76.26 70.06 76.26 73.96L68.27 73.96C68.45 75.8 69.01 77.03 71.61 77.03C73.29 77.03 74.21 76.62 75.14 75.8L76.44 77.64C75.14 78.67 73.84 79.28 71.8 79.28C66.78 79.28 65.85 76.41 65.85 72.93Z" fill="#231F20" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M77.37 66.79L79.42 66.79L79.79 63.51L81.65 63.1L81.65 66.79L84.44 66.79L84.44 69.04L81.65 69.04L81.65 74.98C81.65 76 81.83 76.62 83.13 76.62L84.44 76.62L84.44 78.87C84.06 78.87 83.13 78.87 82.76 78.87C79.98 78.87 79.42 77.85 79.42 75.39L79.42 69.04L77.56 69.04L77.56 66.79L77.37 66.79Z" fill="#231F20" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M86.67 80.72C87.78 80.1 87.97 79.9 87.97 79.08L86.67 79.08L86.67 75.8L89.45 75.8L89.45 78.26C89.45 80.51 89.08 81.33 87.22 82.15L86.67 80.72Z" fill="#231F20" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M108.59 70.88C108.59 67.19 107.11 65.15 103.39 65.15C99.67 65.15 98.19 67.19 98.19 70.88C98.19 74.57 99.67 76.62 103.39 76.62C107.11 76.82 108.59 74.57 108.59 70.88ZM95.77 70.88C95.77 64.94 98.56 62.48 103.39 62.48C108.04 62.48 111.01 64.94 111.01 70.88C111.01 76.82 108.04 79.28 103.39 79.28C98.74 79.28 95.77 76.82 95.77 70.88Z" fill="#231F20" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M113.05 73.55L113.05 66.79L115.28 66.79L115.28 73.55C115.28 75.39 115.28 76.82 118.07 76.82C120.67 76.82 120.67 75.39 120.67 73.55L120.67 66.79L122.9 66.79L122.9 73.55C122.9 77.44 122.16 79.28 117.89 79.28C113.8 79.28 113.05 77.44 113.05 73.55Z" fill="#231F20" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M125.32 66.99L127.18 66.79L127.36 68.22C127.73 67.4 129.22 66.79 131.08 66.79L131.08 69.24C128.48 69.24 127.73 70.68 127.73 72.73L127.73 79.08L125.5 79.08L125.5 66.99L125.32 66.99Z" fill="#231F20" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M144.27 71.09C146.32 71.09 147.25 70.27 147.25 68.22C147.25 65.97 146.32 65.35 144.27 65.35L140 65.35L140 71.09L144.27 71.09ZM137.58 62.89L144.27 62.89C148.18 62.89 149.66 64.74 149.66 68.01C149.66 71.29 148.36 73.55 144.09 73.55L139.81 73.55L139.81 79.08L137.4 79.08L137.4 62.89L137.58 62.89Z" fill="#231F20" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M158.58 73.75L158.58 73.14L158.21 73.14C153.94 73.14 153.01 73.75 153.01 75.39C153.01 76.62 153.57 77.23 155.24 77.23C157.47 77.03 158.58 76 158.58 73.75ZM150.78 75.39C150.78 71.91 152.64 70.88 158.03 70.88L158.58 70.88C158.58 69.45 158.21 68.83 155.98 68.83C154.68 68.83 153.57 69.45 152.82 69.86L151.71 67.81C152.45 67.19 154.31 66.38 156.35 66.38C160.25 66.38 161 67.81 161 71.29L161 75.39C161 76.41 161 76.62 162.11 76.62L162.11 78.87C161.93 78.87 161.74 78.87 161.18 78.87C160.07 78.87 159.51 78.67 159.33 77.64C158.77 78.67 157.47 79.08 155.24 79.08C151.52 79.28 150.78 77.44 150.78 75.39Z" fill="#231F20" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M163.04 77.64L164.16 75.59C165.46 76.41 166.76 76.82 168.06 76.82C169.92 76.82 170.48 76.62 170.48 75.39C170.48 74.37 169.92 74.16 168.06 73.96C165.46 73.55 163.6 73.14 163.6 70.06C163.6 67.81 164.72 66.38 168.06 66.38C169.73 66.38 171.41 66.79 172.33 67.4L171.22 69.45C170.48 69.04 169.18 68.63 168.06 68.63C166.2 68.63 165.83 69.04 165.83 69.86C165.83 70.88 166.39 71.09 168.06 71.29C170.85 71.7 172.71 72.11 172.71 74.98C172.71 77.85 171.41 78.87 167.87 78.87C166.39 79.28 164.53 78.87 163.04 77.64Z" fill="#231F20" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M174.01 77.64L175.12 75.59C176.42 76.41 177.72 76.82 179.02 76.82C180.88 76.82 181.44 76.62 181.44 75.39C181.44 74.37 180.88 74.16 179.02 73.96C176.42 73.55 174.56 73.14 174.56 70.06C174.56 67.81 175.68 66.38 179.02 66.38C180.7 66.38 182.37 66.79 183.3 67.4L182.18 69.45C181.44 69.04 180.14 68.63 179.02 68.63C177.17 68.63 176.79 69.04 176.79 69.86C176.79 70.88 177.35 71.09 179.02 71.29C181.81 71.7 183.67 72.11 183.67 74.98C183.67 77.85 182.37 78.87 178.84 78.87C177.17 79.28 175.49 78.87 174.01 77.64Z" fill="#231F20" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M185.71 78.87L187.94 78.87L187.94 66.58L185.71 66.58L185.71 78.87ZM185.71 65.35L187.94 65.35L187.94 62.48L185.71 62.48L185.71 65.35Z" fill="#231F20" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M198.72 72.93C198.72 70.47 197.98 69.04 195.56 69.04C193.15 69.04 192.4 70.47 192.4 72.93C192.4 75.39 193.15 77.03 195.56 77.03C197.98 77.03 198.72 75.39 198.72 72.93ZM189.99 72.93C189.99 68.83 191.48 66.58 195.56 66.58C199.47 66.58 201.14 68.83 201.14 72.93C201.14 77.03 199.65 79.28 195.56 79.28C191.66 79.28 189.99 77.03 189.99 72.93Z" fill="#231F20" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M203.18 66.99L205.04 66.79L205.23 67.81C205.78 66.99 206.9 66.38 209.32 66.38C212.66 66.38 213.22 68.42 213.22 71.5L213.22 78.87L210.99 78.87L210.99 71.91C210.99 70.06 210.8 68.83 208.57 68.83C205.97 68.83 205.6 70.27 205.6 72.11L205.6 78.87L203.37 78.87L203.37 66.99L203.18 66.99Z" fill="#231F20" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M215.63 75.8L218.42 75.8L218.42 79.08L215.63 79.08L215.63 75.8Z" fill="#231F20" fill-opacity="1.000000" fill-rule="evenodd"></path><path id="Vector" d="M218.98 64.74C219.54 64.74 219.72 64.53 219.72 64.12C219.72 63.71 219.54 63.51 218.98 63.51L217.86 63.51L217.86 64.74L218.98 64.74ZM218.98 65.56L218.05 65.56L218.05 66.99L217.12 66.99L217.12 62.69L218.98 62.69C220.28 62.69 220.47 63.3 220.47 64.12C220.47 64.74 220.28 65.35 219.72 65.56L220.47 67.19L219.54 67.19L218.98 65.56ZM221.58 64.94C221.58 63.1 220.84 61.87 218.79 61.87C216.75 61.87 216.01 63.3 216.01 64.94C216.01 66.58 216.75 68.01 218.79 68.01C220.65 68.01 221.58 66.58 221.58 64.94ZM215.45 64.94C215.45 62.89 216.56 61.25 218.61 61.25C220.84 61.25 221.95 62.89 221.95 64.94C221.95 66.99 220.84 68.63 218.61 68.63C216.56 68.63 215.45 66.99 215.45 64.94Z" fill="#231F20" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M1 2.04L214.52 2.04L214.52 51.62L1 51.62L1 2.04Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd"></path><path id="Vector" d="M44.67 45.27L44.67 3.48L2.48 3.48L2.48 49.99L213.22 49.99L213.22 45.27L44.67 45.27ZM40.21 45.27L6.76 45.27L6.76 8.39L40.21 8.39L40.21 45.27Z" fill="#ED1C24" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M8.24 10.03L18.46 10.03L18.46 21.3L8.24 21.3L8.24 10.03Z" fill="#ED1C24" fill-opacity="1.000000" fill-rule="evenodd"></path><path id="Vector" d="M8.24 32.37L18.46 32.37L18.46 43.63L8.24 43.63L8.24 32.37Z" fill="#ED1C24" fill-opacity="1.000000" fill-rule="evenodd"></path><path id="Vector" d="M18.46 21.1L28.69 21.1L28.69 32.37L18.46 32.37L18.46 21.1Z" fill="#ED1C24" fill-opacity="1.000000" fill-rule="evenodd"></path><path id="Vector" d="M28.69 10.03L38.91 10.03L38.91 21.3L28.69 21.3L28.69 10.03Z" fill="#ED1C24" fill-opacity="1.000000" fill-rule="evenodd"></path><path id="Vector" d="M28.69 32.37L38.91 32.37L38.91 43.63L28.69 43.63L28.69 32.37Z" fill="#ED1C24" fill-opacity="1.000000" fill-rule="evenodd"></path><path id="Vector" d="M44.67 3.48L213.22 3.48L213.22 45.07L44.67 45.07L44.67 3.48Z" fill="#231F20" fill-opacity="1.000000" fill-rule="evenodd"></path><path id="Vector" d="M151.89 12.9C151.89 12.49 152.08 12.08 152.64 12.08L155.98 12.08C156.35 12.08 156.54 12.29 156.72 12.49L164.9 26.01C165.64 27.24 166.57 28.68 167.32 30.32C167.5 30.52 167.69 30.52 167.69 30.32C167.69 28.88 167.5 26.63 167.5 24.99L167.5 12.7C167.5 12.29 167.69 11.88 168.25 11.88L171.03 11.88C171.41 11.88 171.78 12.08 171.78 12.7L171.78 37.28C171.78 37.69 171.59 38.1 171.03 38.1L167.87 38.1C167.5 38.1 167.32 37.9 167.13 37.69L158.95 24.17C158.21 22.94 157.28 21.51 156.54 19.87C156.35 19.66 156.17 19.66 156.17 19.87C156.17 21.3 156.35 23.56 156.35 25.2L156.35 37.49C156.35 37.9 156.17 38.31 155.61 38.31L152.82 38.31C152.45 38.31 152.08 38.1 152.08 37.49L152.08 12.9L151.89 12.9Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M137.4 12.9C137.4 12.49 137.58 12.08 138.14 12.08L140.93 12.08C141.3 12.08 141.67 12.29 141.67 12.9L141.67 37.49C141.67 37.9 141.49 38.31 140.93 38.31L138.14 38.31C137.77 38.31 137.4 38.1 137.4 37.49L137.4 12.9Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M128.66 34.41C127.73 34.41 126.99 34.41 126.62 34.21C126.06 34 125.88 33.8 125.69 33.39L122.9 28.88C122.72 28.68 122.9 28.47 123.09 28.47C123.83 28.06 124.58 27.45 125.32 26.83C126.62 25.4 127.55 23.15 127.55 20.69C127.55 18.23 126.81 15.98 125.32 14.54C124.02 13.11 122.35 12.29 119.74 12.29L110.45 12.29C110.08 12.29 109.71 12.49 109.71 13.11L109.71 37.69C109.71 38.1 109.89 38.51 110.45 38.51L113.24 38.51C113.61 38.51 113.98 38.31 113.98 37.69L113.98 29.7C113.98 29.5 114.17 29.29 114.35 29.29L117.7 29.29C118.07 29.29 118.44 29.5 118.63 29.91L122.53 36.26C123.83 38.51 125.32 38.92 127.36 38.92C127.73 38.92 128.66 38.92 128.85 38.72C129.22 38.51 129.41 38.31 129.41 38.1L129.41 35.44C129.41 34.62 129.22 34.41 128.66 34.41ZM122.16 23.56C121.42 24.17 120.67 24.58 119.37 24.58L114.17 24.58C113.98 24.58 113.8 24.38 113.8 24.17L113.8 17C113.8 16.79 113.98 16.59 114.17 16.59L119.37 16.59C120.67 16.59 121.42 17 122.16 17.61C122.9 18.23 123.27 19.46 123.27 20.69C123.27 21.71 122.9 22.94 122.16 23.56Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M83.13 35.64C81.46 33.8 80.53 31.34 80.53 27.65L80.53 12.9C80.53 12.49 80.72 12.08 81.28 12.08L84.06 12.08C84.44 12.08 84.81 12.29 84.81 12.9L84.81 28.27C84.81 30.32 85.36 31.55 86.29 32.78C87.22 34 88.71 34.41 90.38 34.41C92.05 34.41 93.54 33.8 94.47 32.78C95.4 31.55 95.96 30.32 95.96 28.27L95.96 12.9C95.96 12.49 96.14 12.08 96.7 12.08L99.49 12.08C99.86 12.08 100.23 12.29 100.23 12.9L100.23 27.86C100.23 31.55 99.3 33.8 97.63 35.64C95.96 37.69 93.17 38.72 90.38 38.72C87.59 38.72 84.81 37.49 83.13 35.64Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M70.31 14.54C68.83 12.9 67.15 12.08 64.37 12.08L54.7 12.08C54.33 12.08 53.96 12.29 53.96 12.9L53.96 37.49C53.96 37.9 54.14 38.31 54.7 38.31L57.3 38.31C57.68 38.31 58.05 38.1 58.05 37.49L58.05 30.73C58.05 30.52 58.23 30.32 58.42 30.32L64.18 30.32C67.15 30.32 68.83 29.5 70.31 27.86C71.8 26.22 72.73 23.76 72.73 21.3C72.73 18.64 71.8 16.18 70.31 14.54ZM67.34 24.58C66.6 25.4 65.67 25.81 64.18 25.81L58.42 25.81C58.23 25.81 58.05 25.6 58.05 25.4L58.05 17C58.05 16.79 58.23 16.59 58.42 16.59L64.18 16.59C65.67 16.59 66.6 17 67.34 17.82C68.08 18.64 68.64 20.07 68.64 21.3C68.45 22.53 68.08 23.76 67.34 24.58Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M202.44 37.28L193.15 12.7C192.96 12.29 192.78 12.08 192.4 12.08L188.87 12.08C188.5 12.08 188.32 12.29 188.13 12.7L179.02 37.28C178.84 37.9 179.02 38.1 179.58 38.1L182.56 38.1C182.93 38.1 183.11 37.9 183.3 37.49L185.16 32.57C185.34 32.37 185.34 32.16 185.71 32.16L195.75 32.16C195.94 32.16 196.12 32.37 196.31 32.57L198.17 37.49C198.35 37.9 198.54 38.1 198.91 38.1L201.88 38.1C202.44 38.1 202.63 37.9 202.44 37.28ZM194.08 27.86L187.39 27.86C187.02 27.86 186.83 27.65 187.02 27.24L188.5 22.94C189.25 21.1 189.8 19.25 190.55 17.41C190.73 17 190.92 17 191.1 17.41C191.85 19.46 192.4 21.1 193.15 22.94L194.63 27.24C194.45 27.65 194.45 27.86 194.08 27.86Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M203 10.24C200.77 10.24 199.09 12.08 199.09 14.54C199.09 17 200.77 18.84 203 18.84C205.23 18.84 206.9 17 206.9 14.54C206.71 12.08 205.04 10.24 203 10.24ZM203 18.02C201.32 18.02 199.84 16.39 199.84 14.54C199.84 12.7 201.32 11.06 203 11.06C204.67 11.06 206.16 12.7 206.16 14.54C206.16 16.39 204.67 18.02 203 18.02Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M204.11 15.77L203.74 14.95C204.3 14.75 204.67 14.13 204.67 13.52C204.67 12.7 204.11 12.08 203.37 12.08L201.7 12.08L201.7 16.59L202.44 16.59L202.44 15.16L203.18 15.16L203.93 16.39C204.3 16.79 204.48 16.79 205.04 16.79L205.04 15.98C204.48 15.98 204.3 15.98 204.11 15.77ZM203.18 14.34L202.25 14.34L202.25 12.9L203.18 12.9C203.55 12.9 203.74 13.11 203.74 13.52C203.74 14.13 203.55 14.34 203.18 14.34Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"></path></g></svg></li><li><svg class="w-full" width="223.000000" height="75.000000" viewBox="0 0 223 75" fill="none" xmlns="http://www.w3.org/2000/svg"><desc>Created with Pixso.</desc><defs><clipPath id="clip592_9696"><rect id="Calque_1" width="223.000000" height="75.000000" transform="translate(-0.599976 -0.500000)" fill="white" fill-opacity="0"></rect></clipPath></defs><rect id="Calque_1" width="223.000000" height="75.000000" transform="translate(-0.599976 -0.500000)" fill="#FFFFFF" fill-opacity="0"></rect><g clip-path="url(#clip592_9696)"><path id="Fill-1" d="M-0.6 74.5L222.4 74.5L222.4 -0.5L-0.6 -0.5L-0.6 74.5Z" fill="#332687" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Fill-2" d="M207.53 26.93C207.71 26.93 207.9 26.93 207.9 26.73C207.9 26.53 207.71 26.53 207.53 26.53L207.16 26.53L207.16 27.13L207.53 27.13L207.53 26.93ZM207.16 28.11L206.79 28.11L206.79 26.14L207.53 26.14C208.09 26.14 208.27 26.34 208.27 26.73C208.27 27.13 208.09 27.32 207.71 27.32L208.27 28.31L207.71 28.31L207.34 27.32L207.16 27.32L207.16 28.11ZM207.53 25.55C206.79 25.55 206.23 26.14 206.23 27.13C206.23 28.11 206.79 28.71 207.53 28.71C208.27 28.71 208.83 28.11 208.83 27.13C208.83 26.14 208.27 25.55 207.53 25.55ZM207.53 29.1C206.6 29.1 205.67 28.31 205.67 27.13C205.67 25.94 206.6 25.15 207.53 25.15C208.46 25.15 209.39 25.94 209.39 27.13C209.39 28.31 208.46 29.1 207.53 29.1Z" fill="#FEFEFE" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Fill-4" d="M198.79 24.56L192.85 35.42L186.9 24.56L179.84 24.56L189.69 41.53L189.69 52.59L195.82 52.59L195.82 41.34L205.67 24.36L198.79 24.36L198.79 24.56ZM172.78 40.55L169.8 32.65L166.83 40.55L172.78 40.55ZM172.78 24.56L183.74 52.59L177.42 52.59L175.19 46.47L164.79 46.47L162.56 52.59L156.42 52.59L156.61 52.19L167.57 24.36L172.78 24.56ZM152.52 24.56L147.5 42.52L142.12 24.36L136.91 24.36L131.52 42.52L126.51 24.76L126.51 24.56L120 24.56L128.74 52.59L128.74 52.78L133.94 52.78L139.51 35.42L145.09 52.78L150.29 52.78L159.03 24.56L152.52 24.56ZM110.15 52.59L116.28 52.59L116.28 24.56L110.15 24.56L110.15 52.59ZM93.61 24.56L87.48 24.56L87.48 52.59L106.06 52.59L106.06 46.47L93.43 46.47L93.43 24.56L93.61 24.56ZM69.45 41.34L81.35 41.34L81.35 35.42L69.45 35.42L69.45 30.48L83.02 30.48L83.02 24.56L63.32 24.56L63.32 52.59L83.02 52.59L83.02 46.67L69.27 46.67L69.27 41.34L69.45 41.34ZM39.72 52.59L45.85 52.59L45.85 41.93L57.93 41.93L57.93 35.81L45.85 35.81L45.85 30.48L59.42 30.48L59.42 24.56L39.72 24.56L39.72 52.59ZM33.4 24.36C33.4 24.76 33.4 24.76 33.59 25.15C33.77 25.35 34.7 26.73 34.7 27.32C35.08 30.09 34.33 32.65 33.96 35.22C33.77 36.21 33.03 37.39 32.66 38.38C32.1 39.96 32.1 41.73 31.73 43.31C31.54 45.28 31.17 46.86 31.54 48.84C31.54 49.43 32.29 49.82 32.47 50.22C32.84 50.42 32.84 51.4 32.66 51.8C32.47 52.39 31.73 52.39 31.17 52.39C30.62 52.39 29.5 52.39 29.5 51.6C29.13 50.22 28.76 50.22 28.39 51.6C28.2 52.39 27.46 52.39 27.08 52.39C26.71 52.39 25.78 52.39 25.6 51.8C25.6 51.4 25.41 50.81 25.04 50.81C24.11 50.81 24.3 52.59 20.21 52.39C19.46 52.39 18.54 52.39 17.98 52C17.42 52 16.86 52 16.31 52L15.38 52C14.63 52 13.89 52 13.15 52C12.96 52 12.78 52 12.59 52C11.66 52 8.32 51.8 7.2 49.63C6.83 49.03 6.64 48.25 6.64 47.65C7.01 44.5 9.8 44.3 10.55 44.3L10.73 44.3C11.85 44.3 12.59 44.69 13.15 45.09C13.15 45.09 13.33 45.28 13.33 45.48C13.33 45.68 13.15 45.68 13.15 45.68C11.1 45.68 9.8 46.07 9.24 46.67C8.87 47.06 8.69 47.65 8.69 48.05C8.87 49.23 10.73 49.63 12.59 49.63C13.33 49.63 13.89 49.63 14.63 49.63C15.01 49.63 15.38 49.63 15.75 49.63L16.86 49.63C16.49 48.25 16.12 46.47 16.12 45.09C16.31 42.92 16.49 43.11 16.31 41.53C16.12 39.96 16.31 35.61 17.05 32.65C17.42 31.47 18.72 28.51 20.02 27.32C21.32 26.14 22.62 25.94 23 25.75C24.48 25.55 24.85 24.56 24.85 24.36C24.85 23.57 24.11 22.78 23.93 22.19C23.55 21.21 23.74 20.61 23.74 19.82C23.74 19.82 24.11 18.25 23.74 17.46C23.55 16.86 23.18 14.69 23.55 13.71C23.93 12.72 25.23 13.9 26.53 15.68C26.71 15.88 27.08 15.88 27.27 15.68C28.94 15.09 30.24 15.28 30.99 15.88C31.54 16.07 31.54 16.07 31.73 15.88C33.03 14.1 34.15 12.92 34.52 13.71C35.08 14.5 34.7 16.86 34.52 17.65C34.33 18.44 34.7 20.02 34.7 20.02C34.7 21.01 35.08 21.4 34.52 22.78C34.52 22.98 33.4 23.97 33.4 24.36Z" fill="#FEFEFE" fill-opacity="1.000000" fill-rule="nonzero"></path></g></svg></li><li><svg class="w-full" width="223.000000" height="75.000000" viewBox="0 0 223 75" fill="none" xmlns="http://www.w3.org/2000/svg"><desc>Created with Pixso.</desc><defs><clipPath id="clip592_9701"><rect id="Frame" width="223.000000" height="75.000000" transform="translate(-0.899902 -0.500000)" fill="white" fill-opacity="0"></rect></clipPath></defs><rect id="Frame" width="223.000000" height="75.000000" transform="translate(-0.899902 -0.500000)" fill="#FFFFFF" fill-opacity="0"></rect><g clip-path="url(#clip592_9701)"><path id="Path" d="M-0.9 74L13.01 36.75L-0.9 -0.5L221.74 -0.5L221.74 74L-0.9 74Z" fill="#E9078A" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Shape" d="M174.63 49.91C177.98 49.91 179.24 46.07 179.24 42.86C175.89 42.86 171.88 43.94 171.88 47.1C171.88 48.92 172.85 49.91 174.63 49.91L174.63 49.91ZM179.24 50.5L179.15 50.5C178.45 52.03 176.91 53.75 173.37 53.75C169.63 53.75 166.84 51.39 166.84 47.59C166.84 39.8 176.17 39.75 179.24 39.64L179.24 37.32C179.24 35 178.68 33.02 176.12 33.02C173.29 33.02 172.72 35.04 172.72 36.63L167.68 36.63C167.68 32.14 170.48 29.18 176.12 29.18C181.62 29.18 184.2 31.69 184.2 36.47L184.2 53.2L179.24 53.2L179.24 50.5ZM156.72 49.91C160.03 49.91 160.59 45.32 160.59 41.48C160.59 37.24 160.18 32.69 156.72 32.69C153.6 32.69 152.62 37.53 152.62 41.48C152.62 47.35 153.45 49.91 156.72 49.91ZM152.61 32.55L152.7 32.55C153.4 31.37 155.03 29.21 158.44 29.21C163.75 29.21 166.08 33.98 166.08 41.49C166.08 48.04 163.94 53.76 156.71 53.76C150.88 53.76 147.42 50.26 147.42 43.26L147.42 19.19L152.61 19.19L152.61 32.55ZM139.61 48.85L139.52 48.85C138.82 50.62 137.01 53.78 132.95 53.78C129.68 53.78 126.93 51.42 126.93 46.04L126.93 29.74L132.11 29.74L132.11 43.16C132.11 47.94 132.57 48.63 134.39 48.63C137.84 48.63 139.61 43.65 139.61 39.9L139.61 29.74L144.79 29.74L144.79 53.23L139.61 53.23L139.61 48.85ZM106.05 29.74L111.23 29.74L111.23 34.14L111.31 34.14C112.02 32.35 113.79 29.21 117.9 29.21C121.16 29.21 123.91 31.58 123.91 36.94L123.91 53.23L118.73 53.23L118.73 39.8C118.73 35.03 118.27 34.33 116.45 34.33C112.95 34.33 111.23 39.37 111.23 43.07L111.23 53.23L106.05 53.23L106.05 29.74ZM93.55 49.91C96.91 49.91 98.17 46.07 98.17 42.86C94.81 42.86 90.8 43.94 90.8 47.1C90.8 48.92 91.78 49.91 93.55 49.91L93.55 49.91ZM98.17 50.5L98.07 50.5C97.38 52.03 95.83 53.75 92.29 53.75C88.56 53.75 85.76 51.39 85.76 47.59C85.76 39.8 95.09 39.75 98.17 39.64L98.17 37.32C98.17 35 97.6 33.02 95.04 33.02C92.21 33.02 91.64 35.04 91.64 36.63L86.6 36.63C86.6 32.14 89.4 29.18 95.04 29.18C100.55 29.18 103.12 31.69 103.12 36.47L103.12 53.2L98.17 53.2L98.17 50.5ZM67.63 19.19L72.8 19.19L72.8 38.72L79.99 29.75L86.19 29.75L77.98 39.88L86.93 53.21L80.73 53.21L72.9 41.39L72.8 41.39L72.8 53.23L67.63 53.23L67.63 19.19ZM59.43 48.85L59.33 48.85C58.64 50.62 56.82 53.78 52.76 53.78C49.5 53.78 46.75 51.42 46.75 46.04L46.75 29.74L51.92 29.74L51.92 43.16C51.92 47.94 52.39 48.63 54.21 48.63C57.65 48.63 59.43 43.65 59.43 39.9L59.43 29.74L64.61 29.74L64.61 53.23L59.43 53.23L59.43 48.85ZM26.1 19.19L44.89 19.19L44.89 23.58L31.56 23.58L31.56 33.39L44.19 33.39L44.19 37.79L31.56 37.79L31.56 48.85L45.26 48.85L45.26 53.25L26.1 53.25L26.1 19.19Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Path" d="M186.96 30.64L186.01 30.64L186.01 29.85L188.46 29.85L188.46 30.64L187.5 30.64L187.5 34.68L186.96 34.68L186.96 30.64Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Path" d="M189.23 29.85L189.8 29.85L190.71 32.14L191.63 29.85L192.19 29.85L192.19 34.68L191.66 34.68L191.66 31.22L190.71 33.5L190.69 33.5L189.75 31.23L189.75 34.68L189.23 34.68L189.23 29.85Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"></path></g></svg></li></ul></div>'];const y=()=>ssr(w,ssrHydrationKey()),b=y;var V=["<div",' class="mt-[70px] bg-orange 55% bg-opacity-50 pl-[16px] pr-[16px]" style="background-image:linear-gradient(to right, rgb(255, 249, 249) 55%, white 80%)"><div class="container mx-auto max-w-[1200px]"><div class="flex justify-between items-center xx:gap-0 lg:gap-12 xx:flex-wrap-reverse md:flex-wrap-reverse lg:flex-nowrap"><div class="mb-[30px]"><h1 class="text-black font-Montserrat text-3xl font-bold leading-10">О нас</h1><p class="text-black font-Montserrat text-base font-normal leading-7 mt-8 xx:w-full lg:w-[500px]">Наш зоомагазин - это удивительное место для всех любителей домашних питомцев. Мы являемся ведущей компанией в индустрии зоо-товаров, предлагающей широчайший ассортимент продуктов и услуг для ухода за животными. <br>В нашей компании мы стремимся предложить только самые высококачественные товары для ваших питомцев. Наш ассортимент включает в себя различные виды кормов для собак, кошек, грызунов, птиц и рыб, а также широкий выбор аксессуаров, игрушек и товаров для ухода.</p></div><img',' alt="photo" class="mt-[50px] mb-[50px] overflow-hidden"></div></div></div>'];const z=()=>ssr(V,ssrHydrationKey(),ssrAttribute("src",escape(s$1,!0),!1)),_=z;var P=["<main",'><div class="swiper-container container mx-auto m-10 max-w-[1200px] pl-[16px] pr-[16px]" style="overflow:hidden;"><div class="swiper-wrapper"><div class="swiper-slide"><div class="bg-cover bg-center h-[450px] rounded-[10px]" style="','"><div class="h-full text-white px-[30px] py-[24px] sm:px-[54px]"><img',' alt="cart"><h2 class="text-5xl sm:text-4xl sm:text-[2.4rem] xs:text-[2.3rem] xx:text-[2rem] font-semibold py-12">Скидка 25% при <br> покупке на 300 ₽</h2><a href="/catalog" class="bg-white text-black px-[80px] py-[12px] rounded-[10px] font-montserrat font-medium text-base flex items-center w-[fit-content] hover:bg-hover_banner duration-150">Перейти</a></div></div></div><div class="swiper-slide"><div class="bg-cover bg-center h-[450px] rounded-[10px]" style="','"><div class="h-full text-white px-[30px] py-[24px] sm:px-[54px]"><img',' alt="cart"><h2 class="text-5xl sm:text-4xl sm:text-[2.4rem] xs:text-[2.3rem] xx:text-[2rem] font-semibold py-12">Скидка 25% при <br> покупке на 300 ₽</h2><a href="/catalog" class="bg-white text-black px-[80px] py-[12px] rounded-[10px] font-montserrat font-medium text-base flex items-center w-[fit-content] hover:bg-hover_banner duration-150">Перейти</a></div></div></div></div><div class="swiper-pagination"></div></div><!--$-->',"<!--/--><!--$-->","<!--/--><!--$-->","<!--/--><!--$-->","<!--/--><!--$-->","<!--/--></main>"];function G(){return onMount(()=>{new s(".swiper-container",{loop:!0,spaceBetween:20,slidesPerView:1,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:5e3},wrapperClass:"swiper-wrapper",slideClass:"swiper-slide",containerModifierClass:"swiper-container-",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev"});}),ssr(P,ssrHydrationKey(),ssrStyle(`background-image: url(${a})`),ssrAttribute("src",escape(r,!0),!1),ssrStyle(`background-image: url(${a})`),ssrAttribute("src",escape(r,!0),!1),escape(createComponent(M,{})),escape(createComponent(v,{})),escape(createComponent(b,{})),escape(createComponent(_,{})),escape(createComponent(n$1,{})))}

export { G as default };
//# sourceMappingURL=index.mjs.map