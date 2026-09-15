const links=[...document.querySelectorAll('.nav-links a')],sections=[...document.querySelectorAll('.section')],menu=document.getElementById('mobileMenu'),nav=document.querySelector('.nav-links'),theme=document.getElementById('themeToggle');

const setTheme=(mode)=>{
  const light=mode==='light';
  document.body.classList.toggle('light',light);
  if(theme){
    theme.innerHTML=light?'<i class="fa-regular fa-sun"></i>':'<i class="fa-regular fa-moon"></i>';
    theme.setAttribute('aria-label',light?'Switch to dark mode':'Switch to light mode');
    theme.setAttribute('title',light?'Switch to dark mode':'Switch to light mode');
  }
  localStorage.setItem('xcode-theme',light?'light':'dark');
};

menu?.addEventListener('click',()=>{nav.classList.toggle('open');menu.innerHTML=nav.classList.contains('open')?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>'});
links.forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.innerHTML='<i class="fa-solid fa-bars"></i>'}));

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -45% 0px'});
sections.forEach(s=>io.observe(s));

theme?.addEventListener('click',()=>setTheme(document.body.classList.contains('light')?'dark':'light'));

const savedTheme=localStorage.getItem('xcode-theme');
setTheme(savedTheme==='light'?'light':'dark');