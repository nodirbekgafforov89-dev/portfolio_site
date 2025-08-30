// Home sahifasida sarlavhani almashtirish
const btn = document.getElementById('changeTitleBtn');
if (btn) {
  btn.addEventListener('click', () => {
    const title = document.getElementById('title');
    title.textContent = "Matn o'zgartirildi! 🚀";
  });
}

// Contact sahifasida forma tekshiruvi (frontend)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('message').value.trim();
    const out = document.getElementById('formMsg');

    if (name.length < 2) { out.textContent = "Ism juda qisqa."; out.className="error"; return; }
    if (!email.includes('@')) { out.textContent = "Email noto‘g‘ri."; out.className="error"; return; }
    if (msg.length < 5) { out.textContent = "Xabar juda qisqa."; out.className="error"; return; }

    out.textContent = "Xabaringiz qabul qilindi! (demo)";
    out.className = "success";
    form.reset();
  });
}