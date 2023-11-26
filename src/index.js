if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration =>{
        console.log("SW Register");
        console.log(registration);
    }).catch(error =>{
        console.log("SW registration fail");
        console.log(error);
    });
}