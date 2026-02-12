const yellowBtn = document.querySelector('.yellow');
const orangeBtn = document.querySelector('.orange');
const randomBtn = document.querySelector('.white');
const greenBtn = document.querySelector('.olive');
const box = document.querySelector('.box');

yellowBtn.addEventListener('click',()=>{
    box.style.backgroundColor = '#E5BA41';
    yellowBtn.style.color= '#E5BA41';
})