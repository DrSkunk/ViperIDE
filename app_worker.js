!function(){"use strict";const e="viper-0.4.14",s=console.log.bind(console).bind(console,"[Service Worker 0.4.14]"),t=new Set(["/index.html","/assets/favicon.png","/assets/app_1024.png","/assets/mpy-cross-v6.wasm","/assets/micropython.wasm","/assets/ruff_wasm_bg.wasm","/assets/tools_vfs.tar.gz","/assets/vm_vfs.tar.gz"]);self.addEventListener("install",(a=>{s("Install"),a.waitUntil((async()=>{const s=await caches.open(e);await Promise.all(t.values().map((e=>s.add(new Request(e,{cache:"no-store"}))))),self.skipWaiting()})())})),self.addEventListener("activate",(t=>{s("Activate"),t.waitUntil((async()=>{for(const t of await caches.keys())t!==e&&(s(`Deleting ${t}`),await caches.delete(t))})())})),self.addEventListener("fetch",(a=>{a.respondWith((async()=>{const n=await caches.open(e),c=function(e){const s=new URL(e);return"/"===s.pathname?new URL("/index.html",s.origin):s}(a.request.url),i=await n.match(c);if(i)return s(`Using cached: ${c}`),i;try{const e=await fetch(a.request);return t.has(c.pathname)&&(s(`Caching: ${c}`),n.put(a.request,e.clone())),e}catch(e){throw s(e.message),e}})())}))}();
