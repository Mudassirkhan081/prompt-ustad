if('serviceWorker' in navigator){window.addEventListener('load',()=>{navigator.serviceWorker.register('/prompt-ustad/sw.js').catch(()=>{});});}
