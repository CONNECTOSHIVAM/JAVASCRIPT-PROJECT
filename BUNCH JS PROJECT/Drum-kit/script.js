// detectecting on click and mouse press..
let numberOfButton = document.querySelectorAll('.drum').length;

for (i = 0; i < numberOfButton; i++) {
    document.querySelectorAll('.drum')[i].addEventListener("click", function(){

        let button = this.innerHTML;

        makeSound(button);


    });

}

//detectecing in keyword is press
document.addEventListener('keypress',function(event){
    makeSound(event.key);
})

function makeSound(key){

            switch (key) {
            case 'w':
                let myMusicW = new Audio("sounds/tom-1.mp3");
                myMusicW.play();
                break;

            case 'a':
                let myMusicA = new Audio("sounds/tom-2.mp3");
                myMusicA.play();
                break;

            case 's':
                let myMusicS = new Audio("sounds/tom-3.mp3");
                myMusicS.play();
                break;

            case 'd':
                let myMusicD = new Audio("sounds/tom-4.mp3");
                myMusicD.play();
                break;

            case 'j':
                let myMusicJ = new Audio("sounds/snare.mp3");
                myMusicJ.play();
                break;

            case 'k':
                let myMusicK = new Audio("sounds/crash.mp3");
                myMusicK.play();
                break;

            case 'l':
                let myMusicL = new Audio("sounds/kick.mp3");
                myMusicL.play();
                break;

            default: console.log(button)
             
        }

}