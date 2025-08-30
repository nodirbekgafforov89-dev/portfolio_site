// mobile menu
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if (menuBtn && nav) menuBtn.addEventListener('click', ()=> nav.classList.toggle('show'));

// fade-in on scroll
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
},{threshold:.1});
document.querySelectorAll('.fade').forEach(el => obs.observe(el));

// contact form demo validate
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('message').value.trim();
    const out = document.getElementById('formMsg');

    if (name.length < 2) return out.textContent = 'Ism juda qisqa.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return out.textContent = 'Email noto‘g‘ri.';
    if (msg.length < 5) return out.textContent = 'Xabar juda qisqa.';

    out.textContent = 'Xabaringiz yuborildi! (demo)';
    form.reset();
  });
}

// theme toggle
const themeBtn = document.getElementById('themeToggle');
const applyTheme = (t)=>{
  if (t==='dark'){ document.body.classList.add('dark'); if(themeBtn) themeBtn.textContent='☀️ Light'; }
  else { document.body.classList.remove('dark'); if(themeBtn) themeBtn.textContent='🌙 Dark'; }
};
applyTheme(localStorage.getItem('theme') || 'light');
if (themeBtn){
  themeBtn.addEventListener('click', ()=>{
    const next = document.body.classList.contains('dark') ? 'light' : 'dark';
    localStorage.setItem('theme', next); applyTheme(next);
  });
}
