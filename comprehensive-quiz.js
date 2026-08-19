/* =========================================================
   COMPREHENSIVE QUIZ
   Combines all quizzes inside the current section
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const container =
        document.getElementById("comprehensiveQuizContainer");

    if (!container) return;


    /* -----------------------------------------------------
       Get section number from URL
       Example:
       comprehensive-quiz.html?section=1
       ----------------------------------------------------- */

    const params =
        new URLSearchParams(window.location.search);

    const sectionId =
        Number(params.get("section"));


    /* -----------------------------------------------------
       Get section
       ----------------------------------------------------- */

    let section = null;

    if (
        typeof courses !== "undefined" &&
        Array.isArray(courses)
    ) {

        section = courses.find(function (s) {
            return Number(s.section) === sectionId;
        });

    }


    /* -----------------------------------------------------
       If no section was found
       ----------------------------------------------------- */

    if (!section) {

        container.innerHTML = `
            <div class="quiz-empty">
                <h2>Section not found</h2>

                <p>
                    Please return to the sections page
                    and try again.
                </p>
            </div>
        `;

        return;
    }


    /* -----------------------------------------------------
       Collect questions from ALL lectures
       ----------------------------------------------------- */

    let allQuestions = [];


    section.lectures.forEach(function (lecture) {

        if (
            Array.isArray(lecture.quiz) &&
            lecture.quiz.length > 0
        ) {

            lecture.quiz.forEach(function (question) {

                allQuestions.push({

                    question: question.question,

                    options: [...question.options],

                    correct: question.correct,

                    lectureTitle: lecture.title,

                    lectureId: lecture.id

                });

            });

        }

    });


    /* -----------------------------------------------------
       No questions
       ----------------------------------------------------- */

    if (allQuestions.length === 0) {

        container.innerHTML = `
            <div class="quiz-empty">

                <div style="font-size:50px;margin-bottom:15px;">
                    📚
                </div>

                <h2>
                    No Quiz Questions Available
                </h2>

                <p>
                    There are currently no quiz questions
                    available for the lectures in this section.
                </p>

            </div>
        `;

        return;
    }


    /* -----------------------------------------------------
       Shuffle questions
       ----------------------------------------------------- */

    allQuestions =
        shuffleArray(allQuestions);


    /* -----------------------------------------------------
       Quiz variables
       ----------------------------------------------------- */

    let currentQuestion = 0;

    let score = 0;

    let answeredQuestions = new Array(
        allQuestions.length
    ).fill(null);


    /* -----------------------------------------------------
       Render quiz
       ----------------------------------------------------- */

    function renderQuestion() {

        const q =
            allQuestions[currentQuestion];


        const selectedAnswer =
            answeredQuestions[currentQuestion];


        const progress =
            ((currentQuestion + 1) /
                allQuestions.length) * 100;


        let optionsHTML = "";


        q.options.forEach(function (option, index) {

            let className =
                "comprehensive-option";


            if (
                selectedAnswer !== null &&
                selectedAnswer === index
            ) {

                className += " selected";

            }


            if (
                selectedAnswer !== null &&
                index === q.correct
            ) {

                className += " correct";

            }


            if (
                selectedAnswer !== null &&
                selectedAnswer !== q.correct &&
                selectedAnswer === index
            ) {

                className += " wrong";

            }


            optionsHTML += `
                <button
                    type="button"
                    class="${className}"
                    data-answer="${index}"
                    ${selectedAnswer !== null ? "disabled" : ""}>

                    ${escapeHTML(option)}

                </button>
            `;

        });


        let feedbackHTML = "";


        if (selectedAnswer !== null) {

            if (
                selectedAnswer === q.correct
            ) {

                feedbackHTML = `
                    <div class="comprehensive-feedback feedback-correct">
                        ✓ Correct Answer
                    </div>
                `;

            } else {

                feedbackHTML = `
                    <div class="comprehensive-feedback feedback-wrong">
                        ✗ Incorrect Answer
                    </div>
                `;

            }

        }


        container.innerHTML = `

            <div class="quiz-top">

                <span class="quiz-counter">
                    Question ${currentQuestion + 1}
                    / ${allQuestions.length}
                </span>

                <span class="quiz-progress-text">
                    ${Math.round(progress)}%
                </span>

            </div>


            <div class="quiz-progress-bar">

                <div
                    class="quiz-progress-fill"
                    style="width:${progress}%">
                </div>

            </div>


            <div
                style="
                    font-size:0.8rem;
                    color:var(--text-muted);
                    margin-bottom:10px;
                ">

                📚 ${escapeHTML(q.lectureTitle)}

            </div>


            <div class="comprehensive-question">

                ${escapeHTML(q.question)}

            </div>


            <div class="comprehensive-options">

                ${optionsHTML}

            </div>


            ${feedbackHTML}


            <div class="quiz-navigation">

                <button
                    type="button"
                    class="quiz-nav-btn quiz-prev"
                    id="previousQuestion"
                    ${currentQuestion === 0 ? "disabled" : ""}>

                    ← Previous

                </button>


                <button
                    type="button"
                    class="quiz-nav-btn quiz-next"
                    id="nextQuestion"
                    ${selectedAnswer === null ? "disabled" : ""}>

                    ${
                        currentQuestion ===
                        allQuestions.length - 1
                        ? "Finish Quiz"
                        : "Next →"
                    }

                </button>

            </div>

        `;


        /* -------------------------------------------------
           Answer buttons
           ------------------------------------------------- */

        const answerButtons =
            container.querySelectorAll(
                ".comprehensive-option"
            );


        answerButtons.forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const answer =
                        Number(
                            button.dataset.answer
                        );


                    if (
                        answeredQuestions[
                            currentQuestion
                        ] !== null
                    ) {
                        return;
                    }


                    answeredQuestions[
                        currentQuestion
                    ] = answer;


                    if (
                        answer === q.correct
                    ) {

                        score++;

                    }


                    renderQuestion();

                }
            );

        });


        /* -------------------------------------------------
           Previous button
           ------------------------------------------------- */

        const previousButton =
            document.getElementById(
                "previousQuestion"
            );


        if (previousButton) {

            previousButton.addEventListener(
                "click",
                function () {

                    if (
                        currentQuestion > 0
                    ) {

                        currentQuestion--;

                        renderQuestion();

                    }

                }
            );

        }


        /* -------------------------------------------------
           Next button
           ------------------------------------------------- */

        const nextButton =
            document.getElementById(
                "nextQuestion"
            );


        if (nextButton) {

            nextButton.addEventListener(
                "click",
                function () {

                    if (
                        answeredQuestions[
                            currentQuestion
                        ] === null
                    ) {
                        return;
                    }


                    if (
                        currentQuestion <
                        allQuestions.length - 1
                    ) {

                        currentQuestion++;

                        renderQuestion();

                    } else {

                        showResult();

                    }

                }
            );

        }

    }


    /* =====================================================
       Show final result
       ===================================================== */

    function showResult() {

        const total =
            allQuestions.length;


        const percentage =
            Math.round(
                (score / total) * 100
            );


        let resultIcon = "🎯";


        if (percentage >= 90) {

            resultIcon = "🏆";

        } else if (percentage >= 75) {

            resultIcon = "🎉";

        } else if (percentage >= 50) {

            resultIcon = "👍";

        } else {

            resultIcon = "📚";

        }


        container.innerHTML = `

            <div class="comprehensive-result">

                <div class="result-icon">
                    ${resultIcon}
                </div>


                <h2 class="result-title">
                    اكتمل الاختبار
                </h2>


                <div class="result-score">
                    ${percentage}%
                </div>


                <div class="result-details">

                    <div>
                        ✓ الاسئلة الصحيحة:
                        <strong>${score}</strong>
                    </div>

                    <div>
                        ✗ الاسئلة الخاطئة:
                        <strong>${total - score}</strong>
                    </div>

                    <div>
                        📝 إجمالي الأسئلة:
                        <strong>${total}</strong>
                    </div>

                </div>


                <button
                    type="button"
                    class="restart-btn"
                    id="restartQuiz">

                    🔄 Restart Quiz

                </button>

            </div>

        `;


        const restartButton =
            document.getElementById(
                "restartQuiz"
            );


        restartButton.addEventListener(
            "click",
            restartQuiz
        );

    }


    /* =====================================================
       Restart
       ===================================================== */

    function restartQuiz() {

        currentQuestion = 0;

        score = 0;

        answeredQuestions =
            new Array(
                allQuestions.length
            ).fill(null);


        allQuestions =
            shuffleArray(allQuestions);


        renderQuestion();

    }


    /* =====================================================
       Shuffle
       ===================================================== */

    function shuffleArray(array) {

        const newArray =
            [...array];


        for (
            let i = newArray.length - 1;
            i > 0;
            i--
        ) {

            const j =
                Math.floor(
                    Math.random() *
                    (i + 1)
                );


            [
                newArray[i],
                newArray[j]
            ] =
            [
                newArray[j],
                newArray[i]
            ];

        }


        return newArray;

    }


    /* =====================================================
       Escape HTML
       ===================================================== */

    function escapeHTML(value) {

        if (value === null ||
            value === undefined) {

            return "";

        }


        return String(value)

            .replace(/&/g, "&amp;")

            .replace(/</g, "&lt;")

            .replace(/>/g, "&gt;")

            .replace(/"/g, "&quot;")

            .replace(/'/g, "&#039;");

    }


    /* -----------------------------------------------------
       Start
       ----------------------------------------------------- */

    renderQuestion();

});