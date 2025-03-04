const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nikola Tesla"],
        answer: "Albert Einstein"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    if (currentQuestionIndex < quizData.length) {
        const currentQuestion = quizData[currentQuestionIndex];
        questionEl.innerText = currentQuestion.question;
        optionsContainer.innerHTML = "";

        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.classList.add("option");
            button.innerText = option;
            button.addEventListener("click", () => checkAnswer(option));
            optionsContainer.appendChild(button);
        });
    } else {
        showScore();
    }
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function showScore() {
    questionEl.style.display = "none";
    optionsContainer.style.display = "none";
    nextBtn.style.display = "none";
    scoreEl.style.display = "block";
    scoreEl.innerText = `You scored ${score} out of ${quizData.length}!`;
}

nextBtn.addEventListener("click", loadQuestion);

// Load the first question
loadQuestion();
