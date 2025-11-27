// Q9 - preventDefault, inline errors, auto-disappear on change
const form = document.getElementById('f');
const errName = document.getElementById('errName');
const errEmail = document.getElementById('errEmail');
const errPwd = document.getElementById('errPwd');
const msg = document.getElementById('msg');

function validate(fields){
  let ok = true;
  errName.textContent = ''; errEmail.textContent=''; errPwd.textContent='';
  if (!fields.name.trim()){ errName.textContent='Name required'; ok=false; }
  if (!fields.email.includes('@')){ errEmail.textContent='Email must contain @'; ok=false; }
  if (fields.password.length < 6){ errPwd.textContent='Password min 6 chars'; ok=false; }
  return ok;
}

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  if (validate(data)){
    msg.textContent = 'Form Submitted Successfully';
    msg.classList.remove('hidden');
    form.reset();
  } else {
    msg.classList.add('hidden');
  }
});

form.addEventListener('input', ()=>{
  const data = Object.fromEntries(new FormData(form).entries());
  validate(data);
});
