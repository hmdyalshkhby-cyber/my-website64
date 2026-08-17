// ==========================================================================
// progress.js
// Handles saving/reading learner progress using localStorage.
// Also handles theme (dark/light) and language (AR/EN) persistence.
// ==========================================================================

const STORAGE_KEYS = {
    PROGRESS: "eduAcademy_progress",
    THEME: "eduAcademy_theme",
    LANG: "eduAcademy_lang"
};

/**
 * Progress shape stored in localStorage:
 * {
 *   "1-1": { completed: true, quizDone: true, score: 8, total: 10 },
 *   "1-2": { completed: false, quizDone: false }
 *   ...
 * }
 */
function getProgressData() {
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.PROGRESS);
        return raw ? JSON.parse(raw) : {};
    } catch (e) {
        console.error("Progress Error: could not read progress data.", e);
        return {};
    }
}

function saveProgressData(data) {
    try {
        localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(data));
    } catch (e) {
        console.error("Progress Error: could not save progress data.", e);
    }
}

function markLectureViewed(sectionId, lectureId) {
    const data = getProgressData();
    const key = sectionId + "-" + lectureId;
    data[key] = data[key] || {};
    data[key].completed = true;
    saveProgressData(data);
}

function saveQuizResult(sectionId, lectureId, score, total) {
    const data = getProgressData();
    const key = sectionId + "-" + lectureId;
    data[key] = data[key] || {};
    data[key].completed = true;
    data[key].quizDone = true;
    data[key].score = score;
    data[key].total = total;
    saveProgressData(data);
}

function getLectureProgress(sectionId, lectureId) {
    const data = getProgressData();
    return data[sectionId + "-" + lectureId] || { completed: false, quizDone: false };
}

/**
 * Returns percentage (0-100) of completed lectures within a section.
 */
function getSectionProgress(sectionId) {
    const section = getSection(sectionId);
    if (!section) return 0;
    const data = getProgressData();
    let done = 0;
    section.lectures.forEach(function (lec) {
        const entry = data[sectionId + "-" + lec.id];
        if (entry && entry.completed) done++;
    });
    return Math.round((done / section.lectures.length) * 100);
}

/**
 * Returns overall percentage (0-100) of completed lectures across the platform.
 */
function getOverallProgress() {
    const data = getProgressData();
    const total = getTotalLectureCount();
    if (total === 0) return 0;
    let done = 0;
    Object.keys(data).forEach(function (key) {
        if (data[key] && data[key].completed) done++;
    });
    return Math.round((done / total) * 100);
}

/* ---------------------------------------------------------------------- */
/* Theme (Dark / Light) */
/* ---------------------------------------------------------------------- */
function applyStoredTheme() {
    const theme = localStorage.getItem(STORAGE_KEYS.THEME) || "light";
    document.documentElement.setAttribute("data-theme", theme);
    updateThemeToggleLabel(theme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(STORAGE_KEYS.THEME, next);
    updateThemeToggleLabel(next);
}

function updateThemeToggleLabel(theme) {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;
    btn.innerHTML = theme === "light" ? "🌙 Dark" : "☀️ Light";
}

/* ---------------------------------------------------------------------- */
/* Language (AR / EN) */
/* ---------------------------------------------------------------------- */
function applyStoredLanguage() {
    const lang = localStorage.getItem(STORAGE_KEYS.LANG) || "en";
    setLanguage(lang, true);
}

function setLanguage(lang, silent) {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    localStorage.setItem(STORAGE_KEYS.LANG, lang);

    const btn = document.getElementById("langToggle");
    if (btn) btn.innerHTML = lang === "ar" ? "EN" : "AR";

    document.querySelectorAll("[data-en][data-ar]").forEach(function (el) {
        el.textContent = lang === "ar" ? el.getAttribute("data-ar") : el.getAttribute("data-en");
    });

    if (!silent && typeof onLanguageChanged === "function") {
        onLanguageChanged(lang);
    }
}

function toggleLanguage() {
    const current = document.documentElement.getAttribute("lang") || "en";
    setLanguage(current === "en" ? "ar" : "en");
}

function getCurrentLanguage() {
    return document.documentElement.getAttribute("lang") || "en";
}
