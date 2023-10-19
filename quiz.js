const checkAnswer = [
    {
        question: "What is 2 + 2?",
        answers: ["4", "5", "6", "7"],
        correctIndex: 0,
    },
    {
        question: "What is the capital of France?",
        answers: ["London", "Berlin", "Madrid", "Paris"],
        correctIndex: 3,
    },
    // Add more questions and answers here
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("nextButton");

function displayQuestion() {
    if (currentQuestionIndex < quizData.length) {
        const question = quizData[currentQuestionIndex];
        questionElement.textContent = question.question;

        answersElement.innerHTML = "";

        for (let i = 0; i < question.answers.length; i++) {
            const answerButton = document.createElement("button");
            answerButton.className = "btn";
            answerButton.textContent = question.answers[i];
            answerButton.onclick = () => checkAnswer(i);
            answersElement.appendChild(answerButton);
        }
    } else {
        questionElement.textContent = "Quiz Complete! Your Score: " + score;
        answersElement.innerHTML = "";
        nextButton.style.display = "none";
    }
}

function checkAnswer(selectedIndex) {
    const question = quizData[currentQuestionIndex];
    if (selectedIndex === question.correctIndex) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

displayQuestion();

















































