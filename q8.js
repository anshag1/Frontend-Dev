// Q8 - toggle list, choose option, close on outside using capturing
const dd = document.getElementById('dd');
const btn = document.getElementById('ddBtn');
const list = document.getElementById('ddList');

btn.addEventListener('click', (e)=>{ list.classList.toggle('show'); });

list.addEventListener('click', (e)=>{
  const opt = e.target.closest('.opt');
  if (!opt) return;
  btn.textContent = opt.getAttribute('data-val');
  list.classList.remove('show');
});

// capturing listener on document to close when clicking outside
document.addEventListener('click', (e)=>{
  if (!dd.contains(e.target)) list.classList.remove('show');
}, true);
