import{S as t,i as s,s as a,n as e,e as n,y as o,z as i,d as r,q as c,c as l,a as u,A as h,b as d,f,v as m,D as p,F as v}from"./client.854ded4c.js";function g(t){let s,a,g,j,x,y,E=t[0].title+"",H=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=n("h1"),j=o(E),x=e(),y=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=c(t),g=l(t,"H1",{});var s=u(g);j=h(s,E),s.forEach(r),x=c(t),y=l(t,"DIV",{class:!0}),u(y).forEach(r),this.h()},h(){d(y,"class","content svelte-emm3f3")},m(t,s){f(t,a,s),f(t,g,s),m(g,j),f(t,x,s),f(t,y,s),y.innerHTML=H},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&E!==(E=t[0].title+"")&&p(j,E),1&a&&H!==(H=t[0].html+"")&&(y.innerHTML=H)},i:v,o:v,d(t){t&&r(a),t&&r(g),t&&r(x),t&&r(y)}}}async function j({params:t}){const s=await this.fetch(`blog/${t.slug}.json`),a=await s.json();if(200===s.status)return{post:a};this.error(s.status,a.message)}function x(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,x,g,a,{post:0})}}export{j as preload};
