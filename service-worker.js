!function(){"use strict";const e=1626534710886,g=`cache${e}`,s=["/client/client.8ca8175b.js","/client/inject_styles.5607aec6.js","/client/index.26c9e2d2.js","/client/Meta.4d12767c.js","/client/article.c4581003.js","/client/about.273def03.js","/client/index.e9c3e8dc.js","/client/[slug].e60e5f9f.js"].concat(["/service-worker-index.html","/.DS_Store","/favicon.png","/global.css","/images/.DS_Store","/images/event_01.jpg","/images/event_02.jpg","/images/event_03.jpg","/images/event_04.jpg","/images/event_05.jpg","/images/event_06.jpg","/images/event_07.jpg","/images/event_08.jpg","/images/event_09.jpg","/images/event_10.jpg","/images/event_11.jpg","/images/event_12.jpg","/images/event_13.jpg","/images/event_14.jpg","/images/event_15.jpg","/images/event_16.jpg","/images/event_17.jpg","/images/event_18.jpg","/images/event_19.jpg","/images/event_20.jpg","/images/event_21.jpg","/images/event_22.jpg","/images/event_23.jpg","/images/event_24.jpg","/images/event_25.jpg","/images/event_26.jpg","/images/event_27.jpg","/images/event_28.jpg","/images/event_29.jpg","/images/event_30.jpg","/images/event_31.jpg","/images/event_32.jpg","/images/event_33.jpg","/images/event_34.jpg","/images/event_35.jpg","/images/event_36.jpg","/images/event_37.jpg","/images/event_38.jpg","/images/event_39.jpg","/images/event_40.jpg","/images/event_41.jpg","/images/event_42.jpg","/images/event_43.jpg","/images/event_44.jpg","/images/event_45.jpg","/images/event_46.jpg","/images/event_47.jpg","/images/event_48.jpg","/images/event_49.jpg","/images/event_50.jpg","/images/event_51.jpg","/images/event_52.jpg","/images/event_53.jpg","/images/event_54.jpg","/images/event_55.jpg","/images/event_56.jpg","/images/event_57.jpg","/images/event_58.jpg","/images/event_59.jpg","/images/event_60.jpg","/images/event_61.jpg","/images/event_62.jpg","/images/event_63.jpg","/images/event_64.jpg","/images/event_65.jpg","/images/event_66.jpg","/images/event_67.jpg","/images/event_68.jpg","/images/event_69.jpg","/images/event_70.jpg","/images/og.jpg","/images/pdf.jpg","/images/person_01.jpg","/images/person_02.jpg","/images/person_03.jpg","/images/person_04.jpg","/images/person_05.jpg","/images/person_06.jpg","/images/person_07.jpg","/images/person_08.jpg","/images/person_09.jpg","/images/person_10.jpg","/images/person_11.jpg","/images/person_12.jpg","/images/person_13.jpg","/logo-192.png","/logo-512.png","/manifest.json"]),t=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(g).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==g&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(g=>{if("GET"!==g.request.method||g.request.headers.has("range"))return;const s=new URL(g.request.url),n=s.protocol.startsWith("http"),a=s.hostname===self.location.hostname&&s.port!==self.location.port,i=s.host===self.location.host&&t.has(s.pathname),p="only-if-cached"===g.request.cache&&!i;!n||a||p||g.respondWith((async()=>i&&await caches.match(g.request)||async function(g){const s=await caches.open(`offline${e}`);try{const e=await fetch(g);return s.put(g,e.clone()),e}catch(e){const t=await s.match(g);if(t)return t;throw e}}(g.request))())}))}();
