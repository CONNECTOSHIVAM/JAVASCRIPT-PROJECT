    const randomBtn = document.querySelector(".random");
    const applyBtn = document.querySelector(".apply");
    const colorInput = document.querySelector(".inp");
    const currentColorText = document.querySelector(".color-text");

    randomBtn.addEventListener("click", () => {
        const colorCode = "0123456789abcdef";
        let color = '#';
        for(let i=0;i<=5; i++){
            color += colorCode[Math.floor(Math.random()*16)];
        }
        console.log(color);
        
        document.body.style.backgroundColor = color;
        currentColorText.textContent = `color code: ${color}`;
    })

    applyBtn.addEventListener("click",()=>{
        
        if(colorInput.value !== ""){
            document.body.style.backgroundColor = colorInput.value;
            currentColorText.textContent = `color code: ${colorInput.value}`;
        }else{
            alert("please enter valid color or color code like : #232365.")
        }
    })

