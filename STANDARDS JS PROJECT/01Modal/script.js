const openModalBtn = document.querySelector('.openModalBtn');
const modalContainer = document.querySelector('.modalContainer');

openModalBtn.addEventListener('click',()=>{
    modalContainer.style.display = "flex";
})

modalContainer.addEventListener('click',()=>{
    modalContainer.style.display = "none"
})