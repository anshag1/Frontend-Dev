// Q2 - remaining chars, color warnings, prevent further typing
const ta = document.getElementById('ta');
const remaining = document.getElementById('remaining');
const resetBtn = document.getElementById('resetBtn');
const MAX = 100;

ta.addEventListener('input', () => update());
ta.addEventListener('keydown', (e) => {
  if (ta.value.length >= MAX && e.key.length === 1) {
    e.preventDefault();
  }
});
function update(){
  const left = MAX - ta.value.length;
  remaining.textContent = left;
  remaining.className = 'counter';
  if (left <= 0) remaining.classList.add('red');
  else if (left <= 20) remaining.classList.add('yellow');
}
resetBtn.addEventListener('click', ()=>{ ta.value=''; update(); });
update();
