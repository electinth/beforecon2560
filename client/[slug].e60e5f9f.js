import{S as t,i as s,s as a,n as e,e as n,y as o,z as i,d as r,q as c,c as l,a as u,A as h,b as f,f as m,v as p,D as d,F as v}from"./client.8ca8175b.js";function b(t){let s,a,b,g,j,x,y=t[0].title+"",E=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),b=n("h1"),g=o(y),j=e(),x=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=c(t),b=l(t,"H1",{});var s=u(b);g=h(s,y),s.forEach(r),j=c(t),x=l(t,"DIV",{class:!0}),u(x).forEach(r),this.h()},h(){f(x,"class","content svelte-emm3f3")},m(t,s){m(t,a,s),m(t,b,s),p(b,g),m(t,j,s),m(t,x,s),x.innerHTML=E},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&y!==(y=t[0].title+"")&&d(g,y),1&a&&E!==(E=t[0].html+"")&&(x.innerHTML=E)},i:v,o:v,d(t){t&&r(a),t&&r(b),t&&r(j),t&&r(x)}}}async function g({params:t}){const s=await this.fetch(`blog/${t.slug}.json`),a=await s.json();if(200===s.status)return{post:a};this.error(s.status,a.message)}function j(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,j,b,a,{post:0})}}export{g as preload};
