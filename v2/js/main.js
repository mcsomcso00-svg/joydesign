/* =========================================================
   JOY Interior Design — Shared JS (Draft)
   ========================================================= */

/* ---------- WhatsApp number (PLACEHOLDER — replace later) ---------- */
const WHATSAPP_NUMBER = '85290159333'; // +852 9015 9333

/* ---------- Mobile menu ---------- */
function initMenu(){
  const burger = document.querySelector('.hamburger');
  const links = document.querySelector('.nav-links');
  if(burger && links){
    burger.addEventListener('click', ()=> links.classList.toggle('open'));
  }
}

/* ---------- Hero slider ---------- */
function initSlider(){
  const slides = document.querySelectorAll('.hero .slide');
  const dots = document.querySelectorAll('.hero-dots button');
  if(!slides.length) return;
  let i = 0;
  const show = n =>{
    slides.forEach((s,k)=> s.classList.toggle('active', k===n));
    dots.forEach((d,k)=> d.classList.toggle('active', k===n));
    i = n;
  };
  dots.forEach((d,k)=> d.addEventListener('click', ()=> show(k)));
  show(0);
  setInterval(()=> show((i+1) % slides.length), 5000);
}

/* ---------- Fade-in on scroll ---------- */
function initReveal(){
  const els = document.querySelectorAll('.reveal');
  // Fallback: if IntersectionObserver is unavailable, just show everything.
  if(!('IntersectionObserver' in window)){
    els.forEach(el=> el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.12});
  els.forEach(el=> io.observe(el));
  // Safety net: reveal anything still hidden after 2.5s (e.g. preview panels
  // that never fire scroll/intersection events) so content is never stuck.
  setTimeout(()=> document.querySelectorAll('.reveal:not(.in)').forEach(el=>{
    const r = el.getBoundingClientRect();
    if(r.top < window.innerHeight + 200) el.classList.add('in');
  }), 2500);
}

/* ---------- Lightbox with prev/next arrows ---------- */
function initLightbox(){
  const boxes = Array.from(document.querySelectorAll('[data-lightbox]'));
  if(!boxes.length) return;
  let lb = document.querySelector('.lightbox');
  if(!lb){
    lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = '<button class="close" aria-label="close">&times;</button>'
      + '<button class="lb-nav lb-prev" aria-label="previous">&#8249;</button>'
      + '<div class="lb-content"></div>'
      + '<button class="lb-nav lb-next" aria-label="next">&#8250;</button>';
    document.body.appendChild(lb);
  }
  const content = lb.querySelector('.lb-content');
  let current = 0;
  const render = ()=>{
    content.innerHTML = '';
    const clone = boxes[current].cloneNode(true);
    clone.style.cursor = 'default';
    clone.removeAttribute('data-lightbox');
    content.appendChild(clone);
  };
  const open = i =>{ current = i; render(); lb.classList.add('open'); };
  const close = ()=> lb.classList.remove('open');
  const step  = d =>{ current = (current + d + boxes.length) % boxes.length; render(); };

  boxes.forEach((b,i)=> b.addEventListener('click', ()=> open(i)));
  lb.querySelector('.lb-prev').addEventListener('click', e=>{ e.stopPropagation(); step(-1); });
  lb.querySelector('.lb-next').addEventListener('click', e=>{ e.stopPropagation(); step(1); });
  lb.addEventListener('click', e=>{ if(e.target===lb || e.target.classList.contains('close')) close(); });
  document.addEventListener('keydown', e=>{
    if(!lb.classList.contains('open')) return;
    if(e.key==='Escape') close();
    else if(e.key==='ArrowLeft') step(-1);
    else if(e.key==='ArrowRight') step(1);
  });
}

/* ---------- Contact form -> WhatsApp ---------- */
function initContactForm(){
  const form = document.querySelector('#contactForm');
  if(!form) return;
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const detail = form.detail.value.trim();
    const lang = document.documentElement.lang === 'zh' ? 'zh' : 'en';
    const msg = lang==='zh'
      ? `JOY 網站查詢%0A姓名：${name}%0A電話：${phone}%0AEmail：${email}%0A內容：${detail}`
      : `JOY website enquiry%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${detail}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  });
}

/* ---------- Language toggle (繁 / EN) ---------- */
function applyLang(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en]').forEach(el=>{
    const val = lang==='zh' ? el.getAttribute('data-zh') : el.getAttribute('data-en');
    if(val!==null) el.textContent = val;
  });
  document.querySelectorAll('[data-ph-en]').forEach(el=>{
    el.setAttribute('placeholder', lang==='zh' ? el.getAttribute('data-ph-zh') : el.getAttribute('data-ph-en'));
  });
  document.querySelectorAll('.lang button').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang===lang);
  });
  localStorage.setItem('joy-lang', lang);
}
function initLang(){
  document.querySelectorAll('.lang button').forEach(b=>{
    b.addEventListener('click', ()=> applyLang(b.dataset.lang));
  });
  applyLang(localStorage.getItem('joy-lang') || 'en');
}

/* ---------- WhatsApp float link ---------- */
function initWaFloat(){
  document.querySelectorAll('.wa-float').forEach(a=>{
    a.href = `https://wa.me/${WHATSAPP_NUMBER}`;
    a.target = '_blank';
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  initMenu(); initSlider(); initReveal(); initLightbox();
  initContactForm(); initLang(); initWaFloat();
});
