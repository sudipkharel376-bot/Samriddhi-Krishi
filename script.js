const header=document.getElementById('siteHeader');
const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
const navLinks=[...document.querySelectorAll('.nav-link')];
const sections=[...document.querySelectorAll('main section[id]')];

window.addEventListener('scroll',()=>{header.classList.toggle('scrolled',window.scrollY>10)}, {passive:true});
menuToggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
navLinks.forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuToggle?.setAttribute('aria-expanded','false')}));

const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const activeObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+entry.target.id))}})},{rootMargin:'-30% 0px -60% 0px',threshold:0});
sections.forEach(s=>activeObserver.observe(s));

// Seasonal crop tabs
const seasonTabs=document.querySelectorAll('.season-tab');
seasonTabs.forEach(tab=>tab.addEventListener('click',()=>{seasonTabs.forEach(t=>t.classList.remove('active'));tab.classList.add('active');document.querySelectorAll('.crop-panel').forEach(p=>p.classList.add('hidden'));document.getElementById(tab.dataset.season)?.classList.remove('hidden')}));

// Gallery filtering + lightbox
const filters=document.querySelectorAll('.filter');
const galleryItems=document.querySelectorAll('.gallery-item');
filters.forEach(filter=>filter.addEventListener('click',()=>{filters.forEach(f=>f.classList.remove('active'));filter.classList.add('active');const cat=filter.dataset.filter;galleryItems.forEach(item=>item.classList.toggle('is-hidden',cat!=='all'&&item.dataset.category!==cat))}));
const lightbox=document.getElementById('lightbox');
const lightboxImage=document.getElementById('lightboxImage');
const lightboxCaption=document.getElementById('lightboxCaption');
function closeLightbox(){lightbox.classList.remove('show');lightbox.setAttribute('aria-hidden','true');document.body.classList.remove('no-scroll')}
galleryItems.forEach(item=>item.addEventListener('click',()=>{lightboxImage.src=item.dataset.src;lightboxImage.alt=item.querySelector('img').alt;lightboxCaption.textContent=item.querySelector('span').textContent;lightbox.classList.add('show');lightbox.setAttribute('aria-hidden','false');document.body.classList.add('no-scroll')}));
document.querySelector('.lightbox-close').addEventListener('click',closeLightbox);lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});

// Product modal
const modal=document.getElementById('productModal');
const modalImg=document.getElementById('modalImage');
const modalTitle=document.getElementById('modalTitle');
const modalDescription=document.getElementById('modalDescription');
const modalSeason=document.getElementById('modalSeason');
const modalType=document.getElementById('modalType');
function openProduct(card){modalImg.src=card.querySelector('img').src;modalImg.alt=card.querySelector('img').alt;modalTitle.textContent=card.dataset.title;modalDescription.textContent=card.dataset.description;modalSeason.textContent=card.dataset.season;modalType.textContent=card.dataset.type;modal.classList.add('show');modal.setAttribute('aria-hidden','false');document.body.classList.add('no-scroll')}
function closeProduct(){modal.classList.remove('show');modal.setAttribute('aria-hidden','true');document.body.classList.remove('no-scroll')}
document.querySelectorAll('.product-card').forEach(card=>card.querySelector('.product-open').addEventListener('click',()=>openProduct(card)));
document.querySelector('.modal-close').addEventListener('click',closeProduct);document.querySelector('.modal-backdrop').addEventListener('click',closeProduct);document.getElementById('modalCta').addEventListener('click',closeProduct);

document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeProduct();closeLightbox()}});

// Frontend-only enquiry handling: creates a mailto draft, never falsely reports backend submission.
const form=document.getElementById('contactForm');
const status=document.querySelector('.form-status');
form.addEventListener('submit',e=>{e.preventDefault();status.textContent='';if(!form.reportValidity())return;const data=new FormData(form);const body=[`Full Name: ${data.get('name')}`,`Phone: ${data.get('phone')}`,`Email: ${data.get('email')||'Not provided'}`,`Customer Type: ${data.get('customerType')}`,`Product / Service: ${data.get('product')||'Not specified'}`,`Quantity: ${data.get('quantity')||'Not specified'}`,`Delivery Location: ${data.get('location')||'Not specified'}`,`Message: ${data.get('message')||'Not provided'}`].join('\n');window.location.href=`mailto:skrishiandpoultry@gmail.com?subject=${encodeURIComponent('Website Enquiry: Samriddhi Krishi and Poultry')}&body=${encodeURIComponent(body)}`;status.textContent='Your email app should open with the enquiry prepared.'});

document.getElementById('year').textContent='2024';
