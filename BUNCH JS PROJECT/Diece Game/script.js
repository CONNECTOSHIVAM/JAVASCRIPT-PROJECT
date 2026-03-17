let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*7);
let randomDiceImage1 = "dice" + randomNumber1 + ".png";
let randomDiceImage2 = "dice" + randomNumber2 + ".png";
let randomImageSource1 = "images/"+randomDiceImage1;
let randomImageSource2 = "images/"+randomDiceImage2;

let image1 = document.querySelectorAll('img')[0];
let image2 = document.querySelectorAll('img')[1];
let footer = document.querySelector('footer');

image1.setAttribute("src",randomImageSource1);
image2.setAttribute("src",randomImageSource2);

if(randomNumber1 > randomDiceImage2){
    footer.innerHTML = "Winner is Player1🏆";
}else if(randomNumber1 < randomNumber2){
    footer.innerHTML = "Winner is Player2🏆"
}else{
    footer.innerHTML = "Game is Draw  -- Now Both is Winner 🏆"
}