let randomNumber = parseInt(Math.floor(Math.random()*100+1))

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParse');

const p = document.createElement('p');

let prevGuesses = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
     e.preventDefault();
     let guess = parseInt(userInput.value);
     console.log(guess)
     validateGuess(guess); 
    })
}


function validateGuess(guess){
  if(isNaN(guess)||guess < 1 || guess > 100)
  {
    alert('please enter a valid number.')
  }else{
    prevGuesses.push(guess);
    if(numGuess === 11 ){
        displayGuess(guess);
        displayMessage(`Game Over! Random Number was ${guess}`)
        endGame();
    }else{
        displayGuess(guess);
        checkGuess(guess);
    }
  }
}

function checkGuess(guess){
   
    if(guess === randomNumber){
        displayMessage(`You are Winner & Won a Water glass🍻`);
        endGame()
    }else if(guess<randomNumber){
        displayMessage(`Number is tooo low..`);
    }else if(guess>randomNumber){
        displayMessage(`Number is tooo High..`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += ` ${guess}`
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}<h2/>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id='newGame'>New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame()
}

function newGame(){
    const newGame = document.querySelector('#newGame');
    newGame.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random()*100+1);
    prevGuesses = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame= true;
    })
}

