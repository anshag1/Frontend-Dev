// Q1 - event delegation, inline edit, auto-save on outside click
const input = document.getElementById('productInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('productList');
let editingItem = null;

addBtn.addEventListener('click', () => {
  const name = input.value.trim();
  if (!name) return;
  const li = document.createElement('li');
  li.innerHTML = `<span class="name">${escapeHtml(name)}</span>
    <span>
      <button class="edit btn">Edit</button>
      <button class="del btn">Delete</button>
    </span>`;
  list.appendChild(li);
  input.value = '';
});

// event delegation for edit/delete and handling inline edit
list.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;
  if (e.target.classList.contains('del')) {
    li.remove();
    return;
  }
  if (e.target.classList.contains('edit')) {
    enterEditMode(li);
    return;
  }
});

// auto-save if clicking outside edited item
document.addEventListener('click', (e) => {
  if (!editingItem) return;
  if (!editingItem.contains(e.target)) {
    exitEditMode(editingItem);
  }
});

function enterEditMode(li) {
  if (editingItem) exitEditMode(editingItem);
  editingItem = li;
  const span = li.querySelector('.name');
  const current = span.textContent;
  const input = document.createElement('input');
  input.value = current;
  input.style.width = '60%';
  span.replaceWith(input);
  input.focus();
  input.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') exitEditMode(li);
    if (ev.key === 'Escape') cancelEdit(li, current);
  });
}

function cancelEdit(li, prev) {
  const inputEl = li.querySelector('input');
  const span = document.createElement('span');
  span.className = 'name';
  span.textContent = prev;
  inputEl.replaceWith(span);
  editingItem = null;
}

function exitEditMode(li) {
  const inputEl = li.querySelector('input');
  if (!inputEl) { editingItem = null; return; }
  const newVal = inputEl.value.trim() || 'Untitled';
  const span = document.createElement('span');
  span.className = 'name';
  span.textContent = newVal;
  inputEl.replaceWith(span);
  editingItem = null;
}

function escapeHtml(s){ return s.replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
