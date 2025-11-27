// Q5 - populate gallery and modal with event.stopPropagation
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
for (let i=1;i<=6;i++){
  const img = document.createElement('img');
  img.src = `https://picsum.photos/seed/${i}/400/300`;
  img.alt = 'img'+i;
  gallery.appendChild(img);
}
gallery.addEventListener('click', (e)=>{
  if (e.target.tagName!=='IMG') return;
  modal.classList.remove('hidden');
  modalImg.src = e.target.src.replace('/400/300','/800/600');
});
modal.addEventListener('click', ()=> modal.classList.add('hidden'));
document.getElementById('modalBox').addEventListener('click', (e)=> e.stopPropagation());
