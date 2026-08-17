// ==========================================================================
// app.js
// Main application logic: navbar, home stats, sections/lectures rendering,
// lecture detail page (tabs, PDF, translation), progress page, search.
// Pages are dynamic — lecture.html uses ?section=&lecture= URL params
// instead of 80 separate HTML files.
// ==========================================================================

document.addEventListener("DOMContentLoaded", function () {
    applyStoredTheme();
    applyStoredLanguage();
    initNavbar();
    initSearch();
    highlightActiveNavLink();

    const page = document.body.getAttribute("data-page");
    if (page === "home") renderHomeStats();
    if (page === "sections") renderSectionsPage();
    if (page === "lecture") renderLecturePage();
    if (page === "progress") renderProgressPage();
});

function onLanguageChanged() {
    // Re-render dynamic content so it can react to language changes if needed.
    const page = document.body.getAttribute("data-page");
    if (page === "sections") renderSectionsPage();
    if (page === "lecture") renderLecturePage();
    if (page === "progress") renderProgressPage();
}

/* ---------------------------------------------------------------------- */
/* Navbar */
/* ---------------------------------------------------------------------- */
function initNavbar() {
    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

    const langBtn = document.getElementById("langToggle");
    if (langBtn) langBtn.addEventListener("click", toggleLanguage);

    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    if (navToggle && navLinks) {
        navToggle.addEventListener("click", function () {
            navLinks.classList.toggle("show");
        });
    }
}

function highlightActiveNavLink() {
    const page = document.body.getAttribute("data-page");
    document.querySelectorAll(".nav-links a").forEach(function (a) {
        if (a.getAttribute("data-page") === page) a.classList.add("active");
    });
}

/* ---------------------------------------------------------------------- */
/* Home page stats */
/* ---------------------------------------------------------------------- */
function renderHomeStats() {
    const totalSections = courses.length;
    const totalLectures = getTotalLectureCount();
    const overall = getOverallProgress();

    setText("statSections", totalSections);
    setText("statLectures", totalLectures);
    setText("statProgress", overall + "%");
}

function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
}

/* ---------------------------------------------------------------------- */
/* Sections page: list of sections, or lectures within a chosen section */
/* ---------------------------------------------------------------------- */
function renderSectionsPage() {
    const params = new URLSearchParams(window.location.search);
    const sectionId = params.get("section");

    if (sectionId) {
        renderLecturesGrid(Number(sectionId));
    } else {
        renderSectionsGrid();
    }
}

function renderSectionsGrid() {
    const grid = document.getElementById("sectionsGrid");
    const breadcrumb = document.getElementById("breadcrumbArea");
    if (breadcrumb) {
        breadcrumb.innerHTML = '<a href="index.html">Home</a><span class="sep">›</span><span>Sections</span>';
    }
    if (!grid) return;

    let html = "";
    courses.forEach(function (sec) {
        const pct = getSectionProgress(sec.section);
        html += '<div class="card section-card" onclick="location.href=\'sections.html?section=' + sec.section + '\'">' +
            '<div class="card-top">' +
            '<div class="section-num">' + sec.section + '</div>' +
            '<div><h3>' + escapeHtml(sec.title) + '</h3>' +
            '<div class="meta">' + sec.lectures.length + ' Lectures</div></div>' +
            '</div>' +
            '<div class="progress-bar-track"><div class="progress-bar-fill" style="width:' + pct + '%"></div></div>' +
            '<div class="meta" style="margin-bottom:14px;">' + pct + '% complete</div>' +
            '<button class="btn btn-primary btn-block" onclick="event.stopPropagation(); location.href=\'sections.html?section=' + sec.section + '\'">View Lectures</button>' +
            '</div>';
    });
    grid.innerHTML = html;
}

function renderLecturesGrid(sectionId) {
    const section = getSection(sectionId);
    const grid = document.getElementById("sectionsGrid");
    const breadcrumb = document.getElementById("breadcrumbArea");
    const heading = document.getElementById("sectionsHeading");

    if (!section) {
        if (grid) grid.innerHTML = '<div class="empty-state">Section not found.</div>';
        return;
    }

    if (breadcrumb) {
        breadcrumb.innerHTML = '<a href="index.html">Home</a><span class="sep">›</span>' +
            '<a href="sections.html">Sections</a><span class="sep">›</span><span>' + escapeHtml(section.title) + '</span>';
    }
    if (heading) {
        heading.querySelector("h2").textContent = section.title;
        heading.querySelector("p").textContent = "Choose a lecture to begin learning.";
    }

    if (!grid) return;
    let html = "";
    section.lectures.forEach(function (lec) {
        const prog = getLectureProgress(sectionId, lec.id);
        const badge = prog.quizDone
            ? '<span class="badge badge-done">✓ Quiz ' + prog.score + '/' + prog.total + '</span>'
            : (prog.completed ? '<span class="badge badge-done">✓ Viewed</span>' : '<span class="badge badge-pending">Not started</span>');

        html += '<div class="card lecture-card">' +
            '<div class="card-top"><div class="lecture-num">' + lec.id + '</div>' +
            '<div><h3>' + escapeHtml(lec.title) + '</h3></div></div>' +
            '<p class="meta">' + escapeHtml(truncate(lec.content, 90)) + '</p>' +
            badge +
            '<button class="btn btn-primary btn-block" onclick="location.href=\'lecture.html?section=' + sectionId + '&lecture=' + lec.id + '\'">Open Lecture</button>' +
            '</div>';
    });
    grid.innerHTML = html;
}

function truncate(str, len) {
    if (!str) return "";
    return str.length > len ? str.slice(0, len).trim() + "…" : str;
}

/* ---------------------------------------------------------------------- */
/* Lecture detail page */
/* ---------------------------------------------------------------------- */
function renderLecturePage() {
    const params = new URLSearchParams(window.location.search);
    const sectionId = Number(params.get("section"));
    const lectureId = Number(params.get("lecture"));
    const lecture = getLecture(sectionId, lectureId);
    const section = getSection(sectionId);

    const breadcrumb = document.getElementById("breadcrumbArea");
    const titleEl = document.getElementById("lectureTitle");
    const subEl = document.getElementById("lectureSubtitle");

    if (!lecture || !section) {
        if (titleEl) titleEl.textContent = "Lecture not found";
        document.querySelectorAll(".tab-panel, .tabs").forEach(function (el) { el.style.display = "none"; });
        return;
    }

    if (breadcrumb) {
        breadcrumb.innerHTML = '<a href="index.html">Home</a><span class="sep">›</span>' +
            '<a href="sections.html">Sections</a><span class="sep">›</span>' +
            '<a href="sections.html?section=' + sectionId + '">' + escapeHtml(section.title) + '</a><span class="sep">›</span>' +
            '<span>' + escapeHtml(lecture.title) + '</span>';
    }
    if (titleEl) titleEl.textContent = lecture.title;
    if (subEl) subEl.textContent = section.title + " • Lecture " + lecture.id + " of " + section.lectures.length;

    markLectureViewed(sectionId, lectureId);

    // Content tab
    setHtml("lectureContent", "<p>" + escapeHtml(lecture.content) + "</p>");

    // Important points tab
    const pointsHtml = lecture.importantPoints.map(function (p, i) {
        return '<li><span class="dot">' + (i + 1) + '</span><span>' + escapeHtml(p) + '</span></li>';
    }).join("");
    setHtml("lecturePoints", '<ul class="points-list">' + pointsHtml + '</ul>');

    // Vocabulary tab
    renderVocabulary(lecture.vocabulary);

    // PDF tab
    setHtml("lecturePdfBox",
        '<div class="pdf-box">' +
        '<div class="pdf-info"><div class="icon-lg">📄</div><div><h3>Lecture PDF</h3><div class="meta">' + escapeHtml(lecture.pdf) + '</div></div></div>' +
        '<div class="pdf-actions">' +
        '<a class="btn btn-outline" href="' + encodeURI(lecture.pdf) + '" target="_blank" rel="noopener">Open PDF</a>' +
        '<a class="btn btn-secondary" href="' + encodeURI(lecture.pdf) + '" download>Download PDF</a>' +
        '</div></div>' +
        '<iframe class="pdf-frame" src="' + encodeURI(lecture.pdf) + '" title="Lecture PDF"></iframe>'
    );

    // Translation tab
    setHtml("lectureTranslateBox",
        '<div class="translate-box">' +
        '<div class="pdf-info"><div class="icon-lg">🌐</div><div><h3>Translated Lecture</h3><div class="meta">Open the full translation in Google Docs</div></div></div>' +
        '<a class="btn btn-primary" href="' + lecture.translationUrl + '" target="_blank" rel="noopener">Open Google Docs</a>' +
        '</div>'
    );

    initTabs();
    initQuiz(sectionId, lectureId);
}

function renderVocabulary(vocab) {
    window._currentVocab = vocab;
    filterVocabulary("");
    const searchInput = document.getElementById("vocabSearch");
    if (searchInput) {
        searchInput.addEventListener("input", function (e) {
            filterVocabulary(e.target.value);
        });
    }
}

function filterVocabulary(query) {
    const vocab = window._currentVocab || [];
    const q = query.trim().toLowerCase();
    const filtered = q
        ? vocab.filter(function (v) { return v.word.toLowerCase().includes(q) || v.translation.includes(q); })
        : vocab;

    let rows = filtered.map(function (v) {
        return '<tr><td>' + escapeHtml(v.word) + '</td><td>' + escapeHtml(v.translation) + '</td></tr>';
    }).join("");

    if (filtered.length === 0) {
        rows = '<tr><td colspan="2" style="text-align:center; color:var(--text-muted);">No matching words found.</td></tr>';
    }

    setHtml("vocabTableBody", rows);
}

function setHtml(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
}

/* ---------------------------------------------------------------------- */
/* Tabs */
/* ---------------------------------------------------------------------- */
function initTabs() {
    document.querySelectorAll(".tab-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const target = btn.getAttribute("data-tab");
            document.querySelectorAll(".tab-btn").forEach(function (b) { b.classList.remove("active"); });
            document.querySelectorAll(".tab-panel").forEach(function (p) { p.classList.remove("active"); });
            btn.classList.add("active");
            document.getElementById(target).classList.add("active");
        });
    });
}

function refreshLectureBadges() {
    // no-op hook kept for potential future live badge refresh
}

/* ---------------------------------------------------------------------- */
/* Progress page */
/* ---------------------------------------------------------------------- */
function renderProgressPage() {
    const overall = getOverallProgress();
    setText("overallProgressPct", overall + "%");
    const overallFill = document.getElementById("overallProgressFill");
    if (overallFill) overallFill.style.width = overall + "%";

    const list = document.getElementById("progressList");
    if (!list) return;

    let html = "";
    courses.forEach(function (sec) {
        const pct = getSectionProgress(sec.section);
        html += '<div class="progress-row">' +
            '<div class="section-num">' + sec.section + '</div>' +
            '<div class="info"><h4>' + escapeHtml(sec.title) + '</h4>' +
            '<div class="progress-bar-track"><div class="progress-bar-fill" style="width:' + pct + '%"></div></div></div>' +
            '<div class="pct">' + pct + '%</div>' +
            '</div>';
    });
    list.innerHTML = html;
}

/* ---------------------------------------------------------------------- */
/* Search */
/* ---------------------------------------------------------------------- */
function initSearch() {
    const input = document.getElementById("globalSearch");
    const resultsBox = document.getElementById("globalSearchResults");
    if (!input || !resultsBox) return;

    input.addEventListener("input", function () {
        const q = input.value.trim().toLowerCase();
        if (q.length < 2) {
            resultsBox.classList.remove("show");
            resultsBox.innerHTML = "";
            return;
        }
        const matches = searchPlatform(q);
        renderSearchResults(matches, resultsBox);
    });

    document.addEventListener("click", function (e) {
        if (!resultsBox.contains(e.target) && e.target !== input) {
            resultsBox.classList.remove("show");
        }
    });
}

function searchPlatform(q) {
    const results = [];
    courses.forEach(function (sec) {
        if (sec.title.toLowerCase().includes(q)) {
            results.push({ type: "Section", label: sec.title, url: "sections.html?section=" + sec.section });
        }
        sec.lectures.forEach(function (lec) {
            if (lec.title.toLowerCase().includes(q) || lec.content.toLowerCase().includes(q)) {
                results.push({ type: "Lecture", label: lec.title, url: "lecture.html?section=" + sec.section + "&lecture=" + lec.id });
            }
            lec.vocabulary.forEach(function (v) {
                if (v.word.toLowerCase().includes(q) || v.translation.includes(q)) {
                    results.push({ type: "Vocabulary", label: v.word + " — " + v.translation, url: "lecture.html?section=" + sec.section + "&lecture=" + lec.id });
                }
            });
        });
    });
    return results.slice(0, 12);
}

function renderSearchResults(results, box) {
    if (results.length === 0) {
        box.innerHTML = '<div class="search-result-item"><span>No results found.</span></div>';
        box.classList.add("show");
        return;
    }
    box.innerHTML = results.map(function (r) {
        return '<div class="search-result-item" onclick="location.href=\'' + r.url + '\'">' +
            '<span>' + escapeHtml(r.label) + '</span><small>' + r.type + '</small></div>';
    }).join("");
    box.classList.add("show");
}

/* ---------------------------------------------------------------------- */
/* Utility */
/* ---------------------------------------------------------------------- */
function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = String(str);
    return div.innerHTML;
}
