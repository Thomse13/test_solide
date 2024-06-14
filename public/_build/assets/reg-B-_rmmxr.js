import{e as o,i as y,k as S,j as r,a as T,b as U,u as l,r as V,h as W,w as i,t as k}from"./web-D8qGCTXe.js";import{F as X}from"./Footer-CazmUOC7.js";var Y=k('<div class=mt-10><div class="container mx-auto max-w-[1200px] pl-[16px] pr-[16px]"><div class="flex gap-2 items-center mb-4"><a href=/ class="text-black font-montserrat text-base font-semibold leading-5">Главная</a><p class="text-black font-montserrat text-base font-semibold leading-5">/</p><p class="text-orange font-montserrat text-base font-semibold leading-5 hover:text-orange duration-150">Вход в личный кабинет</p></div><form class="space-y-4 mt-[70px] max-w-[500px] mx-auto bg-white p-[52px] rounded-lg mb-[70px] lg:pl-[110px] lg:pr-[110px] xx:pl-[40px] xx:pr-[40px]"style="box-shadow:0px 1px 18.6px 0px rgba(0, 0, 0, 0.1);"><h1 class="text-center text-black font-montserrat text-3xl font-semibold leading-9">Регистрация</h1><div><label for=name class="block text-sm font-medium text-gray-700">ФИО</label><input id=name type=text class="mt-1 block w-full text-[14px] rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"style="border:1px solid rgba(0, 0, 0, 0.25);border-radius:12px;box-shadow:0px 4px 10px 0px rgba(0, 0, 0, 0.25);padding:10px 18px;outline:none;"placeholder="Иванов Иван Иванович"><p class="mt-2 text-sm text-error"></p></div><div><label for=email class="block text-sm font-medium text-gray-700">Электронная почта</label><input id=email type=email class="mt-1 block w-full text-[14px] rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"style="border:1px solid rgba(0, 0, 0, 0.25);border-radius:12px;box-shadow:0px 4px 10px 0px rgba(0, 0, 0, 0.25);padding:10px 18px;outline:none;"placeholder=example@gmail.com><p class="mt-2 text-sm text-error"></p></div><div><label for=password class="block text-sm font-medium text-gray-700">Пароль</label><input id=password type=password class="mt-1 block w-full text-[14px] rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"style="border:1px solid rgba(0, 0, 0, 0.25);border-radius:12px;box-shadow:0px 4px 10px 0px rgba(0, 0, 0, 0.25);padding:10px 18px;outline:none;"placeholder="Введите ваш пароль"><p class="mt-2 text-sm text-error"></p></div><div><label for=passwordRepeat class="block text-sm font-medium text-gray-700">Повторите пароль</label><input id=passwordRepeat type=password class="mt-1 block w-full text-[14px] rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"style="border:1px solid rgba(0, 0, 0, 0.25);border-radius:12px;box-shadow:0px 4px 10px 0px rgba(0, 0, 0, 0.25);padding:10px 18px;outline:none;"placeholder="Повторите ваш пароль"><p class="mt-2 text-sm text-error"></p><!$><!/></div><div><button type=submit class="w-full bg-orange text-white py-2 px-4 rounded-md hover:bg-orange-dark focus:outline-none focus:bg-orange-dark">Зарегистрироваться</button></div></form></div><!$><!/>'),Z=k('<p class="mt-2 text-sm text-error">');function re(){const[m,C]=o(""),[c,R]=o(""),[n,E]=o(""),[d,M]=o(""),[a,N]=o({}),P=s=>{s.preventDefault();const e={};m()||(e.name="Введите ФИО"),c()||(e.email="Введите Электронную почту"),n()||(e.password="Введите пароль"),d()||(e.passwordRepeat="Повторите пароль"),n()!==d()&&(e.passwordMismatch="Пароли не совпадают"),N(e),Object.keys(e).length===0&&(window.location.href="/login")};return(()=>{var s=y(Y),e=s.firstChild,j=e.firstChild,u=j.nextSibling,D=u.firstChild,f=D.nextSibling,F=f.firstChild,p=F.nextSibling,H=p.nextSibling,$=f.nextSibling,L=$.firstChild,x=L.nextSibling,O=x.nextSibling,w=$.nextSibling,q=w.firstChild,g=q.nextSibling,z=g.nextSibling,h=w.nextSibling,A=h.firstChild,b=A.nextSibling,v=b.nextSibling,B=v.nextSibling,[G,I]=S(B.nextSibling),J=e.nextSibling,[K,Q]=S(J.nextSibling);return u.addEventListener("submit",P),p.$$input=t=>C(t.target.value),r(H,()=>a().name),x.$$input=t=>R(t.target.value),r(O,()=>a().email),g.$$input=t=>E(t.target.value),r(z,()=>a().password),b.$$input=t=>M(t.target.value),r(v,()=>a().passwordRepeat),r(h,(()=>{var t=T(()=>!!a().passwordMismatch);return()=>t()&&(()=>{var _=y(Z);return r(_,()=>a().passwordMismatch),_})()})(),G,I),r(s,U(X,{}),K,Q),l(()=>i(p,"value",m())),l(()=>i(x,"value",c())),l(()=>i(g,"value",n())),l(()=>i(b,"value",d())),V(),s})()}W(["input"]);export{re as default};
