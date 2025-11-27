// Q4 - setAttribute and data-theme
const buttons = document.querySelectorAll('.themeBtn');
buttons.forEach(b=> b.addEventListener('click', ()=> {
  const val = b.getAttribute('data-theme-val');
  document.body.setAttribute('data-theme', val);
  // simple visual changes by setting inline style classes
  if (val==='dark') document.body.style.background='#222', document.body.style.color='#eee';
  else if (val==='blue') document.body.style.background='#e6f0ff', document.body.style.color='#003';
  else document.body.style.background='#fff', document.body.style.color='#000';
}));
