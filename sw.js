self.addEventListener("install", e=>{
   e.waitUntil(
    caches.open("static").then(cache =>{
        return cache.addAll(["./", "./src/custom.css", "./images/logo.png"]);
    })
   );
});

self.addEventListener("fetch", e =>{
    e.waitUntil(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    );

});