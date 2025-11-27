// Q3 - next/back validation and summary
const form = document.getElementById('msForm');
const steps = Array.from(form.querySelectorAll('.step'));
let current = 0;

function show(i){
  steps.forEach((s,idx)=> s.classList.toggle('hidden', idx!==i));
}

form.addEventListener('click', (e)=>{
  if (e.target.classList.contains('next')) {
    const inputs = steps[current].querySelectorAll('input');
    const ok = Array.from(inputs).every(i=> i.value.trim());
    if (!ok) { alert('Please fill required fields'); return; }
    current = Math.min(steps.length-1, current+1); show(current);
  }
  if (e.target.classList.contains('back')) {
    current = Math.max(0, current-1); show(current);
  }
});

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const data = new FormData(form);
  const obj = Object.fromEntries(data.entries());
  document.getElementById('summary').textContent = 'Summary: ' + JSON.stringify(obj);
  document.getElementById('summary').classList.remove('hidden');
  form.reset();
  current = 0; show(current);
});
show(0);
