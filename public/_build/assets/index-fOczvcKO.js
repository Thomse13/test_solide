var l={9:/\d/,0:/\d?/,a:/[a-z]/i,o:/[a-z]?/i,"*":/\w/,"?":/\w?/},g=(a,e=l)=>[...a].map(i=>e[i]||i),d=(a,e)=>(i,n)=>[i.replace(a,(...t)=>{const r=e(...t),h=t[t.length-2];return n[0]+=h<n[0]?0:(r.length-t[0].length)/t[0].length*Math.max(n[0]-h,t[0].length),n[1]+=h<n[1]?0:(r.length-t[0].length)/t[0].length*Math.max(n[1]-h,t[0].length),r}),n],o=a=>(e,i)=>{let n=0;return a.forEach(t=>{if(e.length>=n+1){if(typeof t=="string"){e.slice(n).indexOf(t)!==0&&(e=e.slice(0,n)+t+e.slice(n),i[0]+=(i[0]>n)*t.length,i[1]+=(i[1]>n)*t.length),n+=t.length;return}const r=e.slice(n).match(t);if(!r||r.index===void 0){e=e.slice(0,n);return}else r.index>0&&(e=e.slice(0,n)+e.slice(n+r.index),n-=r.index-1,i[0]-=(i[0]>n)*r.index,i[1]-=(i[1]>n)*r.index);n+=r[0].length}}),[e.slice(0,n),i]},f=(a,e)=>typeof a=="function"?a:typeof a[1]=="function"&&a[0]instanceof RegExp?d(a[0],a[1]):o(Array.isArray(a)?a:g(a,e)),x=(a,e)=>{const i=f(a,e);return t=>{const r=t.currentTarget||t.target,[h,c]=i(r.value,[r.selectionStart||r.value.length,r.selectionEnd||r.value.length]);return r.value=h,r.setSelectionRange(...c),h}},p=(a,e)=>n=>{const t=a(n),h=(n.currentTarget||n.target).previousElementSibling,c=t===""?"removeAttribute":"setAttribute";return h[c]("data-mask-value",t),h[c]("data-mask-pattern",e(t).slice(t.length)),t};export{x as a,p as c};