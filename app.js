(()=>{
  'use strict';
  const projects=window.PROJECTS;
  // Preserve links shared before individual case-study pages were introduced.
  if(location.hash.startsWith('#case/')){
    const p=projects.find(x=>x.id===location.hash.slice(6));
    if(p){location.replace(p.slug+'.html');return;}
  }
  const p=projects.find(x=>x.slug===document.body.dataset.project);
  if(!p)return;
  let step=0;
  const screen=document.getElementById('story-screen');
  document.addEventListener('click',event=>{
    const selected=event.target.closest('[data-step]');
    const direction=event.target.closest('[data-direction]');
    if(!selected&&!direction)return;
    step=selected?Number(selected.dataset.step):Math.max(0,Math.min(p.steps.length-1,step+Number(direction.dataset.direction)));
    screen.innerHTML=window.storyMarkup(p,step);
    document.querySelectorAll('[data-step]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.step)===step)));
    if(direction){const next=screen.querySelector(`[data-direction="${direction.dataset.direction}"]`);if(next&&!next.disabled)next.focus({preventScroll:true});else screen.setAttribute('tabindex','-1'),screen.focus({preventScroll:true});}
  });
})();
