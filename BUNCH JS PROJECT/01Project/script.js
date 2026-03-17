const botons = document.querySelectorAll('.button');
const body = document.querySelector('body');

botons.forEach(function(button){
    button.addEventListener('click',function(e){

      const box = e.target.id;
      switch(box){
        case 'gray':
            console.log("radhe radhe🙏")
            body.style.backgroundColor = 'gray';
            break;
        case 'white':
            body.style.backgroundColor = 'white';
            break;
        case 'blue':
            body.style.backgroundColor = 'blue';
            break;
        case 'yellow':
            body.style.backgroundColor = 'yellow';
            break;
        default:
            console.log("radhe radhe 🙏")
      }
    });

});