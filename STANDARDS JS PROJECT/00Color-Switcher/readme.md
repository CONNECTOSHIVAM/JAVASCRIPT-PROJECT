<div align='center'>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=180&section=header&text=🎨%20Color%20Switcher&fontSize=48&fontColor=fff&animation=twinkling&fontAlignY=38&desc=Real-time%20Background%20Color%20Changer%20·%20Vanilla%20JS&descAlignY=58&descSize=15" width="100%"/>

[![source code](https://img.shields.io/badge/experience-v?style=for-the-badge&logo=github&label=source%20code&color=ff6b35)](https://github.com/CONNECTOSHIVAM/JAVASCRIPT-PROJECT/tree/main/STANDARDS%20JS%20PROJECT/00Color-Switcher)
[![License](https://img.shields.io/badge/mit-v?style=for-the-badge&logo=github&label=license&color=teal)](License)

![HTML5](https://img.shields.io/badge/HTML5-ff6b35?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-teal?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-003566?style=flat-square&logo=javascript)
![Dependency Zero](https://img.shields.io/badge/Zero-800e13?style=flat&logo=javascript&label=Dependencies)


</div>

---
## 💡 About
A real-time background color switcher with pure HTML, CSS & JavaScript — zero libraries, zero framworks.
This repo just not show code it show the way of thinking to tiny thing to complex.

## ✨ Features
- **Random Color** — instant hex via one click
- **Custom Color** — accepts hex, hsl, rgb and named colors
- **Smart Validation** — browser css parser validate css color
- **Enter Key Support** — for input box color validations
- ⚠️ **Inline Errors** — no ugly `alert()` dialogs
- ⚡**Smooth Transitions** — CSS-powered fluid shifts

---

## 🏗️ Architecture
```
User Input ——> isValidColor() ——> applyColor() ——> DOM Update(Update UI)
                   |
                   |————————> showError() (if invalid)
                   
```


## 📁 Folder Structure
---

```
color-switcher/
 |
 |———> 📄index.html    #Structure
 |———> 🎨style.css     #Designing
 |———> ⚙️script.js     #Logic (DOM Manipulation)
 |———> 📜readme.md     #About Project
 └———> 📖License       #MIT License
```

## 🧠 Core Design Decisions

**Color Validation — Use the platform:**

```javascript
const isValidColor = (color) => {
    const s = new Option().style;
    s.color = color;
    return s.color !== ""; //browser does the heavy lifting
};
```
**Hex Generation — Modern ES6+:**
```javascript
const hex = '#' + Math.floor(Math.random()*0xFFFFFF)
             .toString(16)
             .padStart(6,'0');
```
**Single Responsibility — one function one job**:
```js
const isValidColor = (color) => {/* just validate color*/};
const applyColor = (color) => {/*applies only*/}
```

## 🎨 Supported Color Formats
| Format | Example | Valid |
|--------|---------|-------|
| Named  | `red, tomato` | ☑️ | 
| Hex    | `#ff5733, #f57` | ☑️ |
| RGB/RGBA | `rgb(17, 93, 134)` | ☑️ |
| HSL/HSLA | `hsl(53, 78%, 43%)`| ☑️ |
| Random string | `"hello"`| ❌ |

## 🚀 Getting Started
**Clone the all JS projects —— start contributing forks 👨‍💻👩‍💻**
```bash
  # clone the repo (with all js projects inside the folder you will get the 00Color-Switcher web app)
  git clone https://github.com/CONNECTOSHIVAM/JAVASCRIPT-PROJECT.git

  # enter the folder
  cd 00Color-Switcher

  # open in browser (Mac)
  open index.html

  # open in browser (Windows)
  start index.html

  # open in browser (Linux)
  xdg-open index.html
```

## 🗺️ Roadmap
- [x] Random Color Generator
- [x] Custom input with validation
- [x] Enter key + inline errors
- [ ] Clipboard copy
- [ ] Color History(last 10)
- [ ] Save favorites to localstorage
- [ ] Export palette as CSS variables
---

## 📚 What I Learned

- DOM Manipulation & event delegations
- `new Option().style` — native css validation trick (without regex)
- SRP(Single Responsibility Principle) in real code
- UX thinking — `alert()` vs inline errors
- `padStart()` for safe hex padding
---

## 🤝 Contributing
contributions are what make open source amazing. Any contribution is greatly appreciated.
```bash
# 1. fork the project
# 2. create your feature branch
git checkout -b feature/your-amazing-feature

# 3. Commit using Conventional commits format.
git commit -m "feat: add clipboard copy for color code"
#Type: feat | fix | docs | style | refactor | test | chore

# 4. Push to your branch
git push origin feature/your-classic-feature

# 5. Open a Pull Request.🍨
# 6. post in linkdin and document you to become a top 1% journey.
# 7.take a breath and relax forks 🥂  

```

### Commit Convention Quick Reference
```
feat:     ✨ New Feature
fix:      🐛 Bug Fix
docs:     📝 Documentation Update
style:    🎨 CSS/Formatting (no logic change)
refactor: ♻️ Code Restructure (no feature fix)
chore:    🔧 Tooling / Config Files
```

## 📄 License

Distributed under the **MIT License** — use it, fork it, learn from it. See [`LICENSE`](License) for full terms.

---

## 👨‍💻 Author

<div align="center">

<img src='https://github.com/connectoshivam.png' width="150" style="border-radius: 50%" alt="connectoshivam"  />

## ConnectoShivam
**Not Just Code** · Solutions That Actually Matter.

>*Towards becoming the Top 1% Brain — Engineering solutions that solve real problems and create lasting impact.*



[![GitHub](https://img.shields.io/badge/GitHub-connectoshivam-181717?style=for-the-badge&logo=github)](https://github.com/connectoshivam)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-connectoshivam-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/connectoshivam)
[![Twitter](https://img.shields.io/badge/Twitter-connectoshivam-f6b355?style=for-the-badge&logo=x)](https://twitter.com/connectoshivam)

</div>

---

<div align="center">


**⭐ Star this repo if it helped you — it keeps me motivated to keep building! ⭐**

`#FirstPrincipleThinker · #BuildForPublic · #TowardsThoughtfulTomorrow `
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=120&section=footer&animation=twinkling" width="100%"/>

*Crafted with purpose & passion by [@ConnectoShivam](https://github.com/connectoshivam)💛*
</div>