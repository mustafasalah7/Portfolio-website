(function(){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  document.querySelectorAll('.rv').forEach(function(n){io.observe(n)});
  // screenshot tour (platform page)
  var tabs=document.getElementById('tabs');
  if(tabs){
    var shots=JSON.parse(tabs.getAttribute('data-shots'));
    var img=document.getElementById('shot'),cap=document.getElementById('shotcap'),ttl=document.getElementById('shottitle');
    shots.forEach(function(s,i){
      var b=document.createElement('button');b.type='button';b.setAttribute('role','tab');b.textContent=s.t;
      b.setAttribute('aria-selected',i===0?'true':'false');
      b.addEventListener('click',function(){
        tabs.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-selected','false')});
        b.setAttribute('aria-selected','true');img.src='assets/platform-'+s.id+'.png';img.alt=s.t+' screen, synthetic data';ttl.textContent=s.t.toUpperCase();cap.innerHTML='<b>'+s.t+'.</b> '+s.p;
      });
      tabs.appendChild(b);
    });
  }
})();
