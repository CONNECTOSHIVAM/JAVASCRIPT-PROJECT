// button access.
const buttons = {
    yellow: document.querySelector('.yellow'),
    orange: document.querySelector('orange'),
    random: document.querySelector('.random'),
    green:  document.querySelector('.green')
};

const box = document.querySelector('.box');
const h2 = document.querySelector('h2');

const generateColor = ()=>{
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++)
    {
        color += hex[Math.floor(Math.random()*16)];
    }
    return color
}