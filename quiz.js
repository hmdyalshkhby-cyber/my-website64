// ==========================================================================
// quiz.js
// Fully data-driven quiz engine. Reads quiz questions from data.js
// (via getLecture) and renders them dynamically. Supports ANY number
// of questions, one at a time, with Next/Previous, scoring and retake.
// ==========================================================================

let quizState = {
    sectionId: null,
    lectureId: null,
    questions: [],
    currentIndex: 0,
    answers: [],      // selected option index per question (or null)
    locked: false      // true once current question has been answered
};

function initQuiz(sectionId, lectureId) {
    const lecture = getLecture(sectionId, lectureId);
    const container = document.getElementById("quizContainer");
    if (!container) return;

    if (!lecture) {
        container.innerHTML = '<div class="empty-state">Lecture not found.</div>';
        return;
    }

    const validQuestions = validateQuiz(sectionId, lectureId, lecture.quiz || []);

    quizState = {
        sectionId: sectionId,
        lectureId: lectureId,
        questions: validQuestions,
        currentIndex: 0,
        answers: new Array(validQuestions.length).fill(null),
        locked: false
    };

    if (validQuestions.length === 0) {
        container.innerHTML = '<div class="empty-state">⚠️ No quiz questions available for this lecture.</div>';
        return;
    }

    renderQuiz();
}

function renderQuiz() {
    const container = document.getElementById("quizContainer");
    if (!container) return;

    const total = quizState.questions.length;

    if (quizState.currentIndex >= total) {
        renderQuizResult(container);
        return;
    }

    const q = quizState.questions[quizState.currentIndex];
    const selected = quizState.answers[quizState.currentIndex];
    const letters = ["A", "B", "C", "D"];

    let optionsHtml = "";
    q.options.forEach(function (opt, idx) {
        let cls = "quiz-option";
        if (quizState.locked) {
            cls += " disabled";
            if (idx === q.correct) cls += " correct";
            else if (idx === selected) cls += " wrong";
        }
        optionsHtml += '<div class="' + cls + '" data-idx="' + idx + '" onclick="selectQuizAnswer(' + idx + ')">' +
            '<span class="opt-letter">' + letters[idx] + '</span><span>' + escapeHtml(opt) + '</span></div>';
    });

    let feedbackHtml = "";
    if (quizState.locked) {
        const isCorrect = selected === q.correct;
        feedbackHtml = '<div class="quiz-feedback show ' + (isCorrect ? "correct" : "wrong") + '">' +
            (isCorrect ? "Correct Answer ✓" : "Wrong Answer ✗ — Correct Answer: " + escapeHtml(q.options[q.correct])) +
            "</div>";
    }

    const pct = Math.round(((quizState.currentIndex) / total) * 100);

    container.innerHTML =
        '<div class="quiz-progress-track"><div class="quiz-progress-fill" style="width:' + pct + '%"></div></div>' +
        '<div class="quiz-meta"><span>Question ' + (quizState.currentIndex + 1) + ' / ' + total + '</span>' +
        '<span>' + Math.round((quizState.answers.filter(function (a) { return a !== null; }).length / total) * 100) + '% answered</span></div>' +
        '<div class="quiz-question">' + escapeHtml(q.question) + '</div>' +
        '<div class="quiz-options">' + optionsHtml + '</div>' +
        feedbackHtml +
        '<div class="quiz-nav">' +
        '<button class="btn btn-secondary" onclick="quizPrevious()" ' + (quizState.currentIndex === 0 ? "disabled" : "") + '>← Previous</button>' +
        '<button class="btn btn-primary" onclick="quizNext()" ' + (quizState.locked ? "" : "disabled") + '>' +
        (quizState.currentIndex === total - 1 ? "See Results" : "Next →") + '</button>' +
        '</div>';
}

function selectQuizAnswer(idx) {
    if (quizState.locked) return;
    quizState.answers[quizState.currentIndex] = idx;
    quizState.locked = true;
    renderQuiz();
}

function quizNext() {
    if (!quizState.locked) return;
    quizState.currentIndex++;
    quizState.locked = quizState.answers[quizState.currentIndex] !== undefined && quizState.answers[quizState.currentIndex] !== null;
    renderQuiz();
}

function quizPrevious() {
    if (quizState.currentIndex === 0) return;
    quizState.currentIndex--;
    quizState.locked = quizState.answers[quizState.currentIndex] !== null;
    renderQuiz();
}

function renderQuizResult(container) {
    const total = quizState.questions.length;
    let correct = 0;
    quizState.questions.forEach(function (q, idx) {
        if (quizState.answers[idx] === q.correct) correct++;
    });
    const wrong = total - correct;
    const pct = Math.round((correct / total) * 100);

    let message = "Keep Practicing!";
    if (pct >= 90) message = "Excellent!";
    else if (pct >= 75) message = "Very Good!";
    else if (pct >= 50) message = "Good!";

    container.innerHTML =
        '<div class="quiz-result">' +
        '<div class="score-circle"><strong>' + pct + '%</strong><span>Score</span></div>' +
        '<h3>' + message + '</h3>' +
        '<p>You answered ' + correct + ' out of ' + total + ' questions correctly.</p>' +
        '<div class="quiz-result-stats">' +
        '<div><strong style="color:var(--success)">' + correct + '</strong><span>Correct</span></div>' +
        '<div><strong style="color:var(--danger)">' + wrong + '</strong><span>Wrong</span></div>' +
        '<div><strong>' + total + '</strong><span>Total</span></div>' +
        '<div><strong>' + pct + '%</strong><span>Percentage</span></div>' +
        '</div>' +
        '<div class="quiz-result-actions">' +
        '<button class="btn btn-primary" onclick="retakeQuiz()">🔄 Retake Quiz</button>' +
        '</div>' +
        '</div>';

    saveQuizResult(quizState.sectionId, quizState.lectureId, correct, total);
    if (typeof refreshLectureBadges === "function") refreshLectureBadges();
}

function retakeQuiz() {
    initQuiz(quizState.sectionId, quizState.lectureId);
}

function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = String(str);
    return div.innerHTML;
}
