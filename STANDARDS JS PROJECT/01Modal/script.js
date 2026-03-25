const openModalBtn = document.querySelector('.openModalBtn');
const closeBtn = document.querySelector('.closeBtn');
const modalContainer = document.querySelector('.modalContainer');

const openModal = ()=>{
    modalContainer.classList.add('active');
    document.body.style.overflow = 'hidden';
}

const closeModal = ()=>{
    modalContainer.classList.remove('active');
    document.body.style.overflow = '';
}

// Open
openModalBtn.addEventListener('click', openModal);

// Close on overlay click (NOT modal content)
modalContainer.addEventListener('click', (e)=>{
    if(e.target === modalContainer) closeModal();
})

// Close button
closeBtn.addEventListener('click', closeModal);