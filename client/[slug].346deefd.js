import{S as t,i as s,s as a,n as e,e as n,z as o,A as i,d as r,q as c,c as l,a as u,B as h,b as f,f as m,v as p,E as d,G as v}from"./client.8191a560.js";function E(t){let s,a,E,g,j,x,H=t[0].title+"",$=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),E=n("h1"),g=o(H),j=e(),x=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=c(t),E=l(t,"H1",{});var s=u(E);g=h(s,H),s.forEach(r),j=c(t),x=l(t,"DIV",{class:!0}),u(x).forEach(r),this.h()},h(){f(x,"class","content svelte-emm3f3")},m(t,s){m(t,a,s),m(t,E,s),p(E,g),m(t,j,s),m(t,x,s),x.innerHTML=$},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&H!==(H=t[0].title+"")&&d(g,H),1&a&&$!==($=t[0].html+"")&&(x.innerHTML=$)},i:v,o:v,d(t){t&&r(a),t&&r(E),t&&r(j),t&&r(x)}}}async function g({params:t}){const s=await this.fetch(`blog/${t.slug}.json`),a=await s.json();if(200===s.status)return{post:a};this.error(s.status,a.message)}function j(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,j,E,a,{post:0})}}export{g as preload};
