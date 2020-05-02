if('serviceWorker' in navigator){
    navigator.serviceWorker.register('js/sw.js')
    .then((reg)=> console.log('service worker registered',reg))
    .catch((err)=>console.log('service worked not registered',err));
}