import{e as i,i as P,k as b,j as r,b as c,u as f,r as A,h as H,w as u,t as M}from"./web-D8qGCTXe.js";import{F as O}from"./Footer-CazmUOC7.js";import{A as R}from"./components-CBlfzv1Q.js";import"./routing-B4bTVxWt.js";var q=M('<div class=mt-10><div class="container mx-auto max-w-[1200px] pl-[16px] pr-[16px]"><div class="flex gap-2 items-center mb-4"><!$><!/><p class="text-black font-montserrat text-base font-semibold leading-5">/</p><p class="text-orange font-montserrat text-base font-semibold leading-5 hover:text-orange duration-150">Вход в личный кабинет</p></div><form class="space-y-4 mt-[70px] max-w-[500px] mx-auto bg-white p-[52px] rounded-lg mb-[70px] lg:pl-[110px] lg:pr-[110px] xx:pl-[40px] xx:pr-[40px]"style="box-shadow:0px 1px 18.6px 0px rgba(0, 0, 0, 0.1);"><h1 class="text-center text-black font-montserrat text-2xl font-semibold leading-9">Вход в личный кабинет</h1><div><label for=email class="block text-sm font-medium text-gray-700">Email</label><input id=email type=email class="mt-1 block w-full text-[14px] rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"style="border:1px solid rgba(0, 0, 0, 0.25);border-radius:12px;box-shadow:0px 4px 10px 0px rgba(0, 0, 0, 0.25);padding:10px 18px;outline:none;"placeholder="Введите ваш email"><p class="mt-2 text-sm text-error"></p></div><div><label for=password class="block text-sm font-medium text-gray-700">Пароль</label><input id=password type=password class="mt-1 block w-full text-[14px] rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"style="border:1px solid rgba(0, 0, 0, 0.25);border-radius:12px;box-shadow:0px 4px 10px 0px rgba(0, 0, 0, 0.25);padding:10px 18px;outline:none;"placeholder="Введите ваш пароль"><p class="mt-2 text-sm text-error"></p></div><div><button type=submit class="w-full bg-orange text-white py-2 px-4 rounded-md hover:bg-orange-dark focus:outline-none focus:bg-orange-dark">Войти</button></div><p class="text-center text-[12px] font-medium font-montserrat text-gray-700">Впервые на сайте? <a href=/reg class=text-orange>Зарегистрируйтесь</a></p></form></div><!$><!/>');function J(){const[n,h]=i(""),[d,$]=i(""),[x,v]=i({}),w=t=>{t.preventDefault();const e={};n()||(e.email="Введите адрес электронной почты"),d()||(e.password="Введите пароль"),v(e),Object.keys(e).length===0&&(window.location.href="/profile")};return(()=>{var t=P(q),e=t.firstChild,a=e.firstChild,_=a.firstChild,[p,y]=b(_.nextSibling);p.nextSibling;var m=a.nextSibling,S=m.firstChild,g=S.nextSibling,k=g.firstChild,o=k.nextSibling,E=o.nextSibling,C=g.nextSibling,j=C.firstChild,s=j.nextSibling,D=s.nextSibling,F=e.nextSibling,[L,N]=b(F.nextSibling);return r(a,c(R,{href:"/",class:"text-black font-montserrat text-base font-semibold leading-5",children:"Главная"}),p,y),m.addEventListener("submit",w),o.$$input=l=>h(l.target.value),r(E,()=>x().email),s.$$input=l=>$(l.target.value),r(D,()=>x().password),r(t,c(O,{}),L,N),f(()=>u(o,"value",n())),f(()=>u(s,"value",d())),A(),t})()}H(["input"]);export{J as default};
