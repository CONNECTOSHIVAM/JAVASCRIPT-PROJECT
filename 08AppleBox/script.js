const bucketOne = document.querySelector('.box-1 h3 span');
const bucketTwo = document.querySelector('.box-2 h3 span');
const rightArrow = document.querySelector('.box button');
const leftArrow = document.querySelector('.box .btn');

let totalApple = 15;
let bucketTwoApple = 0;
let bucketOneApple = totalApple - bucketTwoApple;

rightArrow.addEventListener('click',()=>{
    bucketOneApple--;
    rightArrow.innerHTML=bucketOneApple
    bucketTwoApple++;
    leftArrow.innerHTML=bucketTwoApple
})


