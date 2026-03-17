const randomBtn = document.querySelector(".random");
const applyBtn = document.querySelector(".apply");
const colorInput = document.getElementById("colorInput");
const errorMsg = document.getElementById("errorMsg");
const colorText = document.getElementById("colorText");

// validate any color and string
const isValidColor = (color) => {
  const s = new Option().style;
  s.color = color;
  return s.color !== "";
};

// Apply color to background
const applyColor = (color) => {
  document.body.style.backgroundColor = color;
  colorText.textContent = `color code: ${color}`;
  errorMsg.textContent = "";
};

// Random color generator
randomBtn.addEventListener("click", () => {
  const hex = "#" + Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0");
  colorInput.value = hex;
  applyColor(hex);
});

// Apply custom color
applyBtn.addEventListener('click', ()=>{
    const val = colorInput.value.trim();
    if(isValidColor(val)){
        applyColor(val);
        colorInput.value = "";
    }else{
        errorMsg.textContent = `⚠️ Invalid color! Try: red, #ff5733, rgb(255,0,0).`;
    }
})

// Add the enter key functionlaties.
colorInput.addEventListener('keydown', (e)=>{
   if(e.key === "Enter") applyBtn.click();
});