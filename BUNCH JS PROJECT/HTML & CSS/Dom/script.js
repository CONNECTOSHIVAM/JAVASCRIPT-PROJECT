// function addLanguage(lang){
//   const text = document.createElement('li');
//   text.textContent = `${lang}`
//   document.querySelector('.language').appendChild(text);
// }
// addLanguage("bengoli");

function addLanguageOptiz(lang) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(lang));
    document.querySelector('.language').appendChild(li);
}
addLanguageOptiz("Tamil");
addLanguageOptiz("Malayalam");