/* Launch film: muted preview loops while in view; the button restarts it with sound. */
(function(){
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-film]').forEach(function(box){
    var v=box.querySelector('video'),btn=box.querySelector('.soundon'),full=false;
    if(reduce)btn.classList.add('big');
    btn.addEventListener('click',function(){
      full=true;v.muted=false;v.loop=false;v.controls=true;v.currentTime=0;
      btn.hidden=true;v.play().catch(function(){});
    });
    v.addEventListener('ended',function(){
      if(!full)return;
      btn.textContent='↻ Watch again';btn.classList.add('big');btn.hidden=false;
    });
    if(reduce||!('IntersectionObserver' in window))return;
    new IntersectionObserver(function(es){es.forEach(function(e){
      if(full)return;
      if(e.isIntersecting){v.preload='auto';v.play().catch(function(){})}else v.pause();
    })},{threshold:.35}).observe(box);
  });
})();
