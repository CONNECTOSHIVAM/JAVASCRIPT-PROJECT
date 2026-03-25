const openModalBtn = document.querySelector('.openModalBtn');
const modalContainer = document.querySelector('.modalContainer');
const closeBtn = document.querySelector('.closeBtn');

const openModal = () => {
    modalContainer.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent bg scroll
};

const closeModal = () => {
    modalContainer.classList.remove('active');
    document.body.style.overflow = '';
};

// Open
openModalBtn.addEventListener('click', openModal);

// Close on overlay click (NOT modal content)
modalContainer.addEventListener('click', (e) => {
    if (e.target === modalContainer) closeModal();
});

// Close button
closeBtn.addEventListener('click', closeModal);

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});