# Educational Academy

A complete, self-contained interactive learning platform built with pure
HTML5, CSS3, and Vanilla JavaScript — no backend, no build step, ready to
deploy directly to **GitHub Pages**.

## What's inside

- **10 Sections × 8 Lectures = 80 Lectures** (Tourism & Hospitality curriculum)
- Each lecture includes: content, important points, vocabulary table (with
  search), an interactive quiz, a PDF slot, and a Google Docs translation link
- Dark / Light mode (saved in `localStorage`)
- English / Arabic (RTL) language toggle
- Global search across sections, lectures, and vocabulary
- Progress tracking per lecture, per section, and overall (saved in
  `localStorage`, no backend required)

## Project structure

```
educational-platform/
├── index.html         Home page
├── sections.html       Sections list + lectures list (dynamic via ?section=)
├── lecture.html         Single dynamic lecture page (?section=&lecture=)
├── progress.html       Progress dashboard
├── about.html            About page
├── css/style.css        All styling (design system, dark mode, RTL)
├── js/data.js            ALL content + quiz data lives here
├── js/app.js             Rendering, navigation, search
├── js/quiz.js             Interactive quiz engine
├── js/progress.js         localStorage progress + theme + language
├── pdfs/section1..10/     Put your lecture PDFs here
└── assets/                Images / icons
```

## Editing content — you only ever touch `js/data.js`

Everything (titles, content, important points, vocabulary, quiz questions,
PDF path, Google Docs link) lives in `js/data.js`, organized with clear
`SECTION` / `LECTURE` comment headers so you can find anything fast.

### Edit a lecture title
```js
title: "New Lecture Title",
```

### Edit lecture content
```js
content: "New content text...",
```

### Add / edit / remove a quiz question
Each lecture has a `quiz: [ ... ]` array. Add a new question:
```js
{
    question: "What is sustainable tourism?",
    options: [
        "Tourism that protects resources",
        "Tourism without planning",
        "Tourism only in cities",
        "None of the above"
    ],
    correct: 0   // 0=A, 1=B, 2=C, 3=D
}
```
Delete a question by removing its `{ ... }` object. The quiz engine
automatically adapts to any number of questions — no other code needs
to change.

### Add / edit vocabulary
```js
vocabulary: [
    { word: "Tourism", translation: "السياحة" },
]
```

### Set the PDF and Google Docs link
```js
pdf: "pdfs/section1/lecture1.pdf",
translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",
```

Just replace the placeholder Google Docs links with your real ones, and
drop real PDF files into the matching `pdfs/sectionN/lectureM.pdf` path.

## Running locally

Because it uses `fetch`-free vanilla JS and relative paths, you can open
`index.html` directly, but for the PDF `<iframe>` and clean routing to
work reliably, serve it with any static server, e.g.:

```bash
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repo settings, enable **GitHub Pages** → deploy from the `main`
   branch (root).
3. Your site will be live at `https://<username>.github.io/<repo>/`.

No build step, no dependencies, no server required.
