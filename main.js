(function(){
  var $=function(s,c){return (c||document).querySelector(s)}, $$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};

  /* ============ I18N ============ */
  var I18N={
    en:{
      'meta.title':'Gamal Mohamed (GEMY) | Front-End Developer',
      'nav.about':'About','nav.skills':'Skills','nav.projects':'Projects','nav.education':'Education','nav.services':'Services','nav.talk':"Let's talk",
      'hero.kicker':"Hi, I'm Gamal Mohamed",
      'hero.roles':['Front-End Developer','React Developer','UI Builder'],
      'hero.lead':'I build fast, clean and responsive websites that turn designs into real experiences.',
      'hero.cta1':'View Projects <b>→</b>','hero.cta2':'Contact Me',
      'hero.s1':'Years Experience','hero.s2':'Happy Clients','hero.s3':'Client Satisfaction',
      'about.tag':'Get to know me','about.h2':'About <em>me</em>',
      'about.big':"Hi, I'm <strong>Gamal Mohamed, a Frontend Developer</strong> focused on creating functional, accessible, and high-performance web interfaces.",
      'about.f1t':'Core Expertise','about.f1d':'Tech Stack: React.js, JavaScript (ES6+), HTML5, CSS3, Bootstrap.',
      'about.f2t':'Design-to-Code Precision','about.f2d':'100% pixel-perfect conversion from any design file to responsive web layouts.',
      'about.f3t':'Code Quality','about.f3d':'Clean, modular, and maintainable code structure.',
      'about.muted':'I am driven by the challenge of bringing UI/UX concepts to life precisely as envisioned.',
      'about.c1':'Years Experience','about.c2':'Happy Clients','about.c3':'Certifications',
      'skills.tag':'What I know','skills.h2':'My <em>Tools</em>',
      'skills.p':"Technologies and tools I've mastered to build exceptional digital experiences",
      'proj.tag':'My work','proj.h2':'Recent <em>Projects</em>',
      'proj.p':'A curated selection of projects showcasing my skills and passion for exceptional web development',
      'proj.demo':'Live Demo ↗','proj.demo2':'Live Demo <b>→</b>',
      'edu.tag':'My education','edu.h2':'Academic <em>Background</em>',
      'edu.p':'My educational journey and qualifications',
      'edu.c1':'Information System','edu.c2':'Course On FrontEnd Developer','edu.c3s':'Misr Engineering & Technology','edu.c3':'Bachelor Of Information Systems',
      'svc.tag':'What I offer','svc.h2':'My <em>Services</em>',
      'svc.p':'Comprehensive front-end solutions tailored to your unique needs',
      'svc.1t':'Modern Web Design','svc.1d':'Crafting visually stunning, trend-forward websites that capture attention and deliver memorable first impressions.',
      'svc.2t':'Front-End Development','svc.2d':'Building robust, scalable front-end architectures with clean, maintainable code and optimal performance.',
      'svc.3t':'Responsive Design','svc.3d':'Pixel-perfect layouts that look and feel exceptional across all devices, screen sizes, and orientations.',
      'svc.4t':'UI/UX Optimization','svc.4d':'Elevating existing interfaces with refined interactions, improved usability, and enhanced visual hierarchy.',
      'svc.5t':'Landing Page Design','svc.5d':'High-converting, visually compelling landing pages engineered to engage visitors and drive business results.',
      'svc.6t':'Performance Optimization','svc.6d':'Turbocharging web applications for lightning-fast load times and best-in-class Core Web Vitals scores.',
      'contact.tag':'Get in touch','contact.h2':"Let's <em>Connect</em>",
      'contact.p':"Have a project in mind or want to collaborate? I'd love to hear from you!",
      'contact.email':'Email','contact.phone':'Phone',
      'form.name':'Full Name','form.namePh':'Your full name',
      'form.email':'Email Address','form.emailPh':'your@email.com',
      'form.subject':'Subject','form.subjectPh':'Project inquiry, collaboration...',
      'form.message':'Message','form.messagePh':'Tell me about your project...',
      'form.send':'Send Message <b>→</b>',
      'form.fill':'Please fill in all the fields.','form.sending':'Sending...',
      'form.nojs':'Could not send right now, please email me directly.',
      'form.sent':'Message sent! I will get back to you soon.',
      'form.err':'Something went wrong. Please try again or email me directly.',
      'foot.p':'Front-End Developer crafting premium digital experiences with passion, precision, and a deep love for clean code.',
      'foot.copy':'© 2026 Gamal Mohamed. Available for freelance projects and full-time opportunities.',
      'lang.btn':'عربي','lang.aria':'التبديل إلى العربية'
    },
    ar:{
      'meta.title':'جمال محمد (جيمي) | مطور واجهات أمامية',
      'nav.about':'عني','nav.skills':'المهارات','nav.projects':'المشاريع','nav.education':'التعليم','nav.services':'الخدمات','nav.talk':'تواصل معي',
      'hero.kicker':'أهلاً، أنا جمال محمد',
      'hero.roles':['مطور واجهات أمامية','مطور React','مصمم واجهات مستخدم'],
      'hero.lead':'ببني مواقع سريعة ونظيفة ومتجاوبة بتحوّل التصميمات إلى تجارب حقيقية.',
      'hero.cta1':'شاهد المشاريع <b>←</b>','hero.cta2':'تواصل معي',
      'hero.s1':'سنوات خبرة','hero.s2':'عميل سعيد','hero.s3':'رضا العملاء',
      'about.tag':'تعرّف عليّ','about.h2':'نبذة <em>عني</em>',
      'about.big':'أهلاً، أنا <strong>جمال محمد، مطور واجهات أمامية</strong> متخصص في بناء واجهات ويب عملية وسهلة الوصول وعالية الأداء.',
      'about.f1t':'الخبرة الأساسية','about.f1d':'التقنيات: React.js وJavaScript ‏(ES6+)‏ وHTML5 وCSS3 وBootstrap.',
      'about.f2t':'دقة تحويل التصميم إلى كود','about.f2d':'تحويل أي ملف تصميم إلى صفحات ويب متجاوبة بدقة بكسل مثالية 100%.',
      'about.f3t':'جودة الكود','about.f3d':'كود نظيف ومنظم وسهل الصيانة والتطوير.',
      'about.muted':'يدفعني التحدي في تحويل أفكار UI/UX إلى واقع تماماً كما تم تصورها.',
      'about.c1':'سنوات خبرة','about.c2':'عميل سعيد','about.c3':'شهادات معتمدة',
      'skills.tag':'ماذا أعرف','skills.h2':'أدواتي <em>التقنية</em>',
      'skills.p':'التقنيات والأدوات التي أتقنها لبناء تجارب رقمية استثنائية',
      'proj.tag':'أعمالي','proj.h2':'أحدث <em>المشاريع</em>',
      'proj.p':'مجموعة مختارة من المشاريع تعرض مهاراتي وشغفي بتطوير الويب الاستثنائي',
      'proj.demo':'عرض مباشر ↗','proj.demo2':'عرض مباشر <b>←</b>',
      'edu.tag':'تعليمي','edu.h2':'الخلفية <em>الأكاديمية</em>',
      'edu.p':'رحلتي التعليمية ومؤهلاتي الدراسية',
      'edu.c1':'نظم المعلومات','edu.c2':'كورس تطوير الواجهات الأمامية','edu.c3s':'مصر للهندسة والتكنولوجيا','edu.c3':'بكالوريوس نظم المعلومات',
      'svc.tag':'ماذا أقدم','svc.h2':'<em>خدماتي</em>',
      'svc.p':'حلول واجهات أمامية متكاملة مصممة خصيصاً لاحتياجاتك',
      'svc.1t':'تصميم ويب عصري','svc.1d':'تصميم مواقع جذابة وعصرية تلفت الانتباه وتترك انطباعاً أول لا يُنسى.',
      'svc.2t':'تطوير الواجهات الأمامية','svc.2d':'بناء واجهات قوية وقابلة للتوسع بكود نظيف وأداء مثالي.',
      'svc.3t':'تصميم متجاوب','svc.3d':'تصميمات مثالية البكسل تبدو رائعة على كل الأجهزة وأحجام الشاشات.',
      'svc.4t':'تحسين تجربة المستخدم','svc.4d':'تطوير الواجهات الحالية بتفاعلات أرقى وسهولة استخدام أفضل وتسلسل بصري أوضح.',
      'svc.5t':'تصميم صفحات الهبوط','svc.5d':'صفحات هبوط جذابة عالية التحويل مصممة لجذب الزوار وتحقيق نتائج حقيقية.',
      'svc.6t':'تحسين الأداء','svc.6d':'تسريع المواقع لأوقات تحميل فائقة وأفضل نتائج Core Web Vitals.',
      'contact.tag':'تواصل معي','contact.h2':'خلّينا <em>نتواصل</em>',
      'contact.p':'عندك مشروع في بالك أو حابب نتعاون؟ يسعدني أسمع منك!',
      'contact.email':'البريد الإلكتروني','contact.phone':'رقم الهاتف',
      'form.name':'الاسم الكامل','form.namePh':'اسمك الكامل',
      'form.email':'البريد الإلكتروني','form.emailPh':'your@email.com',
      'form.subject':'الموضوع','form.subjectPh':'استفسار عن مشروع، تعاون...',
      'form.message':'الرسالة','form.messagePh':'احكيلي عن مشروعك...',
      'form.send':'أرسل الرسالة <b>←</b>',
      'form.fill':'من فضلك املأ كل الحقول.','form.sending':'جاري الإرسال...',
      'form.nojs':'مش قادر أرسل دلوقتي، ابعتلي إيميل مباشرة من فضلك.',
      'form.sent':'تم إرسال الرسالة! هرد عليك في أقرب وقت.',
      'form.err':'حصل خطأ. حاول مرة تانية أو ابعتلي إيميل مباشرة.',
      'foot.p':'مطور واجهات أمامية بيصنع تجارب رقمية مميزة بشغف ودقة وحب حقيقي للكود النظيف.',
      'foot.copy':'© 2026 جمال محمد. متاح لمشاريع الفريلانس والفرص الوظيفية بدوام كامل.',
      'lang.btn':'EN','lang.aria':'Switch to English'
    }
  };

  var lang='en';
  try{lang=localStorage.getItem('gemy-lang')==='ar'?'ar':'en'}catch(e){}
  var langBtn=$('#langBtn');
  var phrases=I18N[lang]['hero.roles'],pi=0,ci=0,del=false,t=$('#typed');

  function applyLang(l){
    lang=(l==='ar')?'ar':'en';
    try{localStorage.setItem('gemy-lang',lang)}catch(e){}
    var d=I18N[lang];
    document.documentElement.lang=lang;
    document.documentElement.dir=lang==='ar'?'rtl':'ltr';
    document.title=d['meta.title'];
    $$('[data-i18n]').forEach(function(el){var k=el.getAttribute('data-i18n');if(d[k]!=null)el.innerHTML=d[k]});
    $$('[data-i18n-ph]').forEach(function(el){var k=el.getAttribute('data-i18n-ph');if(d[k]!=null)el.placeholder=d[k]});
    phrases=d['hero.roles'];pi=0;ci=0;del=false;t.textContent='';
    langBtn.querySelector('span').textContent=d['lang.btn'];
    langBtn.setAttribute('aria-label',d['lang.aria']);
  }
  langBtn.addEventListener('click',function(){applyLang(lang==='ar'?'en':'ar')});

  /* ============ NAV / SCROLL ============ */
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
    var d=I18N[lang];
    var ok=true;$$('[required]',form).forEach(function(i){if(!i.value.trim())ok=false});
    if(!ok){msg.textContent=d['form.fill'];msg.classList.add('err');return}
    var b=$('button',form),old=b.innerHTML;b.disabled=true;b.textContent=d['form.sending'];
    if(!window.emailjs){msg.textContent=d['form.nojs'];msg.classList.add('err');b.disabled=false;b.innerHTML=old;return}
    emailjs.sendForm('service_u5ltalu','template_0o21efa',form,'xHxXyRbMscR6-b2KY')
      .then(function(){msg.textContent=d['form.sent'];msg.classList.add('ok');form.reset()})
      .catch(function(){msg.textContent=d['form.err'];msg.classList.add('err')})
      .finally(function(){b.disabled=false;b.innerHTML=old});
  });

  // apply saved language (skip work for default English on first paint)
  if(lang==='ar')applyLang('ar');
  else{langBtn.querySelector('span').textContent=I18N.en['lang.btn']}
})();
