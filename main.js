(function(){
  var $=function(s,c){return (c||document).querySelector(s)}, $$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};
  var nav=$('#nav'),prog=$('#progress'),totop=$('#totop');
  function onScroll(){
    var y=window.scrollY,h=document.documentElement.scrollHeight-innerHeight;
    nav.classList.toggle('scrolled',y>30);prog.style.width=(h>0?y/h*100:0)+'%';totop.classList.toggle('show',y>500);
  }
  addEventListener('scroll',onScroll,{passive:true});onScroll();

  // mobile menu
  var burger=$('#burger'),links=$('#links');
  burger.addEventListener('click',function(){var o=links.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
  $$('a',links).forEach(function(a){a.addEventListener('click',function(){links.classList.remove('open');burger.setAttribute('aria-expanded','false')})});

  // typed role
  var phrases=['Front-End Developer','React Developer','UI Builder'],pi=0,ci=0,del=false,t=$('#typed');
  (function type(){
    var cur=phrases[pi];
    t.textContent=cur.slice(0,del?--ci:++ci);
    var d=del?45:85;
    if(!del&&ci===cur.length){del=true;d=1700}
    else if(del&&ci===0){del=false;pi=(pi+1)%phrases.length;d=350}
    setTimeout(type,d);
  })();

  // reveal + counters + rings
  function count(el){
    var to=+el.dataset.count,s=performance.now(),dur=1400;
    (function f(n){var p=Math.min((n-s)/dur,1);el.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(s);
  }
  function ring(el){
    var to=+el.style.getPropertyValue('--p'),s=performance.now(),dur=1400;
    (function f(n){var p=Math.min((n-s)/dur,1);el.style.setProperty('--v',to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(s);
  }
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(!e.isIntersecting)return;
    e.target.classList.add('in');
    $$('[data-count]',e.target).forEach(count);
    $$('.ring',e.target).forEach(ring);
    io.unobserve(e.target);
  })},{threshold:.15});
  $$('.reveal').forEach(function(el){io.observe(el)});
  $$('.hero-right .stat strong').forEach(function(el){setTimeout(function(){count(el)},900)});
  if(!('IntersectionObserver' in window)){$$('.reveal').forEach(function(e){e.classList.add('in')})}

  // hero parallax (desktop pointer)
  var stage=$('#stage'),wb=$('.word-back'),wf=$('.word-front'),pt=$('.portrait'),glow=$('.cursor-glow');
  var fine=matchMedia('(pointer:fine)').matches;
  if(fine){
    addEventListener('pointermove',function(e){
      glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';
      var x=(e.clientX/innerWidth-.5),y=(e.clientY/innerHeight-.5);
      wb.style.translate=(-x*34)+'px '+(-y*14)+'px';
      wf.style.translate=(-x*34)+'px '+(-y*14)+'px';
      pt.style.translate=(x*14)+'px '+(y*6)+'px';
    },{passive:true});
    // tilt cards
    $$('.tilt').forEach(function(c){
      c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
        c.style.transform='perspective(900px) rotateY('+x*7+'deg) rotateX('+(-y*7)+'deg) translateY(-6px)'});
      c.addEventListener('pointerleave',function(){c.style.transform=''});
    });
  }

  // lightbox
  var lb=$('#lightbox'),lbi=$('img',lb);
  $$('.cert').forEach(function(c){c.addEventListener('click',function(){lbi.src=c.dataset.full;lbi.alt=$('img',c).alt;lb.hidden=false})});
  lb.addEventListener('click',function(){lb.hidden=true});
  addEventListener('keydown',function(e){if(e.key==='Escape')lb.hidden=true});

  // contact form (same EmailJS service as the original portfolio)
  var form=$('#contactForm'),msg=$('#fmsg');
  form.addEventListener('submit',function(e){
    e.preventDefault();msg.className='fmsg';
    var ok=true;$$('[required]',form).forEach(function(i){if(!i.value.trim())ok=false});
    if(!ok){msg.textContent='Please fill in all the fields.';msg.classList.add('err');return}
    var b=$('button',form),old=b.innerHTML;b.disabled=true;b.textContent='Sending...';
    if(!window.emailjs){msg.textContent='Could not send right now, please email me directly.';msg.classList.add('err');b.disabled=false;b.innerHTML=old;return}
    emailjs.sendForm('service_u5ltalu','template_0o21efa',form,'xHxXyRbMscR6-b2KY')
      .then(function(){msg.textContent='Message sent! I will get back to you soon.';msg.classList.add('ok');form.reset()})
      .catch(function(){msg.textContent='Something went wrong. Please try again or email me directly.';msg.classList.add('err')})
      .finally(function(){b.disabled=false;b.innerHTML=old});
  });
})();
