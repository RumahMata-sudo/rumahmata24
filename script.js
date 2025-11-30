// Minimal JS for menu, subscription form, and dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.getElementById('menu-toggle');
menuToggle.addEventListener('click', ()=> {
  const nav = document.querySelector('.main-nav');
  if(nav.style.display === 'flex') nav.style.display = '';
  else nav.style.display = 'flex';
});

document.getElementById('subscribe-form').addEventListener('submit', function(e){
  e.preventDefault();
  const email = document.getElementById('email').value;
  // Simple client-side save: store in localStorage (server-side requires backend)
  const list = JSON.parse(localStorage.getItem('newsletter')||'[]');
  list.push({email: email, date: new Date().toISOString()});
  localStorage.setItem('newsletter', JSON.stringify(list));
  document.getElementById('sub-msg').textContent = 'Terima kasih — email Anda telah disimpan (contoh demo).';
  this.reset();
});
