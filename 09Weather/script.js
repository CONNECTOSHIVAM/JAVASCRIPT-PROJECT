const yellowBtn = document.querySelector('.yellow');
const orangeBtn = document.querySelector('.orange');
const randomBtn = document.querySelector('.white');
const greenBtn = document.querySelector('.olive');
const box = document.querySelector('.box');

const colorGenerator = ()=>{

    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++)
    {
        color += hex[Math.floor(Math.random()*16)]
    }

    return color
}

yellowBtn.addEventListener('click',()=>{
    box.style.backgroundColor = '#E5BA41';
    yellowBtn.style.color= '#E5BA41';
})

orangeBtn.addEventListener('click',()=>{
    box.style.backgroundColor = '#F16D34';
    orangeBtn.style.color = '#F16D34';
})

randomBtn.addEventListener('click',()=>{

    let ox = colorGenerator();
    box.style.backgroundColor = ox;
    randomBtn.style.color = ox;
})

greenBtn.addEventListener('click',()=>{
    box.style.backgroundColor = '#5C6F2B';
    greenBtn.style.color = '#5C6F2B';
})