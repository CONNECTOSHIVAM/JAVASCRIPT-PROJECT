<div align='center'>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=180&section=header&text=🪟%20Modal%20Flex&fontSize=48&fontColor=fff&animation=twinkling&fontAlignY=38&desc=Accessible%20Modal%20UI%20·%20Vanilla%20JS&descAlignY=58&descSize=15" width="100%"/>

[![Source Code](https://img.shields.io/badge/experience-v?style=for-the-badge&logo=github&label=source%20code&color=ff6b35)](https://github.com/CONNECTOSHIVAM/JAVASCRIPT-PROJECT/tree/main/STANDARDS%20JS%20PROJECT/01Modal-Flex)
[![License](https://img.shields.io/badge/mit-v?style=for-the-badge&logo=github&label=license&color=teal)](License)

![HTML5](https://img.shields.io/badge/HTML5-ff6b35?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-teal?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-003566?style=flat-square&logo=javascript)
![Dependency Zero](https://img.shields.io/badge/Zero-800e13?style=flat&logo=javascript&label=Dependencies)

</div>

---

## 💡 About

A clean, accessible modal dialog built with pure HTML, CSS & JavaScript — zero libraries, zero frameworks.
This repo doesn't just show code — it shows how to think about **UI patterns, accessibility, and UX** the right way.

---

## ✨ Features

- **Backdrop Blur** — frosted glass overlay with `backdrop-filter`
- **Overlay Click to Close** — click outside modal to dismiss
- **Scroll Lock** — body scroll disabled when modal is open
- **Smooth Animations** — CSS `opacity` + `visibility` + `scale` transitions
- ♿ **Accessible** — `role="dialog"`, `aria-modal`, `aria-labelledby` out of the box
- ⌨️ **Close Button** — dedicated `✕` with `aria-label`

---

## 🏗️ Architecture

```
openModalBtn.click ——> openModal() ——> classList.add('active') ——> CSS handles animation
                                  |
                                  └——> body.overflow = 'hidden' (scroll lock)

overlay.click / closeBtn.click ——> closeModal() ——> classList.remove('active')
                                               |
                                               └——> body.overflow = '' (restore)
```

## 📁 Folder Structure

```
modal-flex/
 |
 |———> 📄 index.html    # Structure + Accessibility attributes
 |———> 🎨 style.css     # Overlay, transitions, modal box
 |———> ⚙️  script.js    # Open / Close logic, overlay delegation
 |———> 📜 README.md     # About Project
 └———> 📖 LICENSE       # MIT License
```

---

## 🧠 Core Design Decisions

**CSS-only animation — no JS needed for transitions:**
```css
/* Hidden state */
.modalContainer {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}
/* Active state — JS adds this class only */
.modalContainer.active {
    opacity: 1;
    visibility: visible;
}
```
> `visibility: hidden` keeps the modal out of tab order when closed. `opacity: 0` alone doesn't — this is the correct accessible pattern.

**Overlay click — delegate smartly:**
```js
// Close ONLY when clicking the dark backdrop, not the modal box itself
modalContainer.addEventListener('click', (e) => {
    if (e.target === modalContainer) closeModal();
});
```
> `e.target === modalContainer` — event delegation at its finest. No extra wrappers needed.

**Scroll lock — prevent body scroll when modal is open:**
```js
const openModal  = () => { document.body.style.overflow = 'hidden'; }
const closeModal = () => { document.body.style.overflow = ''; }
```

---

## ♿ Accessibility Attributes

| Attribute | Element | Purpose |
|-----------|---------|---------|
| `role="dialog"` | `.modalContainer` | Tells screen readers it's a dialog |
| `aria-modal="true"` | `.modalContainer` | Hides background content from screen readers |
| `aria-labelledby="modalTitle"` | `.modalContainer` | Links dialog to its heading |
| `id="modalTitle"` | `<h1>` | Named anchor for `aria-labelledby` |
| `aria-label="Close modal"` | `.closeBtn` | Readable label for the `✕` icon button |

---

## 🚀 Getting Started

```bash
# Clone all JS projects
git clone https://github.com/CONNECTOSHIVAM/JAVASCRIPT-PROJECT.git

# Enter the folder
cd 01Modal-Flex

# Open in browser (Mac)
open index.html

# Open in browser (Windows)
start index.html

# Open in browser (Linux)
xdg-open index.html
```

---

## 🗺️ Roadmap

- [x] Open / Close modal
- [x] Overlay click to dismiss
- [x] Scroll lock
- [x] CSS transitions (scale + opacity)
- [x] Accessibility attributes
- [ ] `Escape` key to close
- [ ] Focus trap inside modal
- [ ] Multiple modals support
- [ ] Confirm / Cancel action modal variant

---

## 📚 What I Learned

- `visibility: hidden` vs `display: none` — and why it matters for transitions
- `backdrop-filter: blur()` for frosted glass overlays
- Event delegation — `e.target === element` pattern
- Scroll lock with `body.overflow = 'hidden'`
- WAI-ARIA roles & attributes for accessible dialogs
- Single Responsibility — `openModal()` and `closeModal()` each do one job

---

## 🤝 Contributing

Contributions make open source amazing. Any contribution is greatly appreciated.

```bash
# 1. Fork the project
# 2. Create your feature branch
git checkout -b feature/your-amazing-feature

# 3. Commit using Conventional Commits format
git commit -m "feat: add escape key to close modal"
# Types: feat | fix | docs | style | refactor | test | chore

# 4. Push to your branch
git push origin feature/your-amazing-feature

# 5. Open a Pull Request 🍨
# 6. Post on LinkedIn and document your Top 1% journey
# 7. Take a breath and relax forks 🥂
```

### Commit Convention Quick Reference
```
feat:     ✨ New Feature
fix:      🐛 Bug Fix
docs:     📝 Documentation Update
style:    🎨 CSS/Formatting (no logic change)
refactor: ♻️  Code Restructure (no feature/fix)
chore:    🔧 Tooling / Config Files
```

---

## 📄 License

Distributed under the **MIT License** — use it, fork it, learn from it. See [`LICENSE`](License) for full terms.

---

<div align="center">

<img src='https://github.com/connectoshivam.png' width="150" style="border-radius: 50%" alt="connectoshivam"/>

## ConnectoShivam
**Not Just Code** · Solutions That Actually Matter.

> *Towards becoming the Top 1% Brain — Engineering solutions that solve real problems and create lasting impact.*

[![GitHub](https://img.shields.io/badge/GitHub-connectoshivam-181717?style=for-the-badge&logo=github)](https://github.com/connectoshivam)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-connectoshivam-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/connectoshivam)
[![Twitter](https://img.shields.io/badge/Twitter-connectoshivam-f6b355?style=for-the-badge&logo=x)](https://twitter.com/connectoshivam)

---

**⭐ Star this repo if it helped you — it keeps me motivated to keep building! ⭐**

`#FirstPrincipleThinker · #BuildForPublic · #TowardsThoughtfulTomorrow`

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=120&section=footer&animation=twinkling" width="100%"/>

*Crafted with purpose & passion by [@ConnectoShivam](https://github.com/connectoshivam)💛*

</div>