
(() => {
 function apply(){
  const labels=['Branding','Design','Content','Social','Web','Strategy'];
  document.querySelectorAll('[data-worklume-name="Logo Ticker"] li').forEach((e,i)=>{if(!e.classList.contains('wl-service-logo')){e.classList.add('wl-service-logo');e.dataset.service=labels[i%labels.length];}});
  document.querySelectorAll('p').forEach(e=>{if(e.textContent==='Connected Feedback'){let p=e.parentElement.parentElement;const n=[...p.querySelectorAll('p')].find(x=>x.textContent==='01');if(n)n.textContent='05';}});
  const names=['Scattered briefs','Approval delays','Unclear ownership'];
  document.querySelectorAll('div[style]').forEach(e=>{
   if(e.style.fontSize!=='64px'||! /^[>+%\d\s]+$/.test(e.textContent.trim()))return;
   let p=e.parentElement;
   for(let i=0;i<5&&p;i++,p=p.parentElement){let found=names.filter(x=>p.textContent.includes(x));if(found.length===1){let n=String(names.indexOf(found[0])+1).padStart(2,'0');if(e.dataset.step!==n){e.classList.add('wl-example-counter');e.dataset.step=n;}break;}}
  });
 }
 let scheduled=false;
 function schedule(){if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;apply();});}
 document.addEventListener('DOMContentLoaded',()=>{apply();new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});});
})();
