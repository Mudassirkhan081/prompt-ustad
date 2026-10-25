/* Move existing controls only. No duplicate generation/copy handlers or stored state. */
(function(){
'use strict';
const media=matchMedia('(max-width:830px)'),dock=document.getElementById('mobile-actions');
const generate=document.querySelector('.generate-button'),copy=document.getElementById('copy-wrap');
const generateHome=document.createComment('generate desktop position'),copyHome=document.createComment('copy desktop position');
generate.before(generateHome);copy.before(copyHome);
const brand=document.querySelector('.brand'),history=document.querySelector('.recent-section');
const brandHome=document.createComment('brand desktop position'),historyHome=document.createComment('history desktop position');
brand.before(brandHome);history.before(historyHome);
function layout(){
 if(media.matches){dock.append(generate,copy);document.querySelector('.topbar').prepend(brand);document.querySelector('.intro').after(history);}
 else{generateHome.after(generate);copyHome.after(copy);brandHome.after(brand);historyHome.after(history);}
}
media.addEventListener('change',layout);layout();
function revealPanel(event){
 if(!media.matches)return;
 const button=document.querySelector('.nav-item[aria-selected="true"]');
 const target=document.querySelector(button.dataset.view==='prompt'?'.brief':'#result');
 target.scrollIntoView({block:'start',behavior:event.type==='keydown'||matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});
}
document.querySelectorAll('.nav-item').forEach(button=>{
 button.addEventListener('click',revealPanel);
 button.addEventListener('keydown',event=>{if(['ArrowRight','ArrowLeft','ArrowUp','ArrowDown','Home','End'].includes(event.key))revealPanel(event);});
});
})();
