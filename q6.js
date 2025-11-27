// Q6 - case-insensitive filter
const students = [
  ['Ansh','CSE',8.2], ['Priya','ECE',7.5], ['Karan','ME',6.9], ['Sara','CSE',9.0]
];
const tbody = document.querySelector('#studentsTable tbody');
const nores = document.getElementById('nores');
function render(rows){
  tbody.innerHTML='';
  rows.forEach(r=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td>`;
    tbody.appendChild(tr);
  });
  nores.classList.toggle('hidden', rows.length>0);
}
render(students);
document.getElementById('search').addEventListener('input',(e)=>{
  const q = e.target.value.toLowerCase();
  const res = students.filter(r=> r.join(' ').toLowerCase().includes(q));
  render(res);
});
