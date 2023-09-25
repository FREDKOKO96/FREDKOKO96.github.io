const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        choices: ["Londres", "Madrid", "París", "Berlín"],
        correct: 2
    },
    {
        question: "¿Cuántos continentes hay en el mundo?",
        choices: ["4", "6", "7", "8"],
        correct: 2
    },
    // Agrega más preguntas aquí
];

let currentQuestionIndex = 0;
let score = 0;

const startContainer = document.getElementById("start-container");
const quizContainer = document.getElementById("quiz-container");
const startButton = document.getElementById("start-button");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const scoreElement = document.getElementById("score");

startButton.addEventListener("click", startGame);

function startGame() {
    startContainer.style.display = "none";
    quizContainer.style.display = "block";
    displayQuestion();
}

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = "";

    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.className = "choice";
        button.addEventListener("click", () => checkAnswer(index));
        choicesElement.appendChild(button);
    });
}

function checkAnswer(choiceIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    if (choiceIndex === currentQuestion.correct) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }

    updateScore();
}

function updateScore() {
    scoreElement.textContent = `número de aciertos: ${score}`;
}

function endGame() {
    questionElement.textContent = "¡Bien Hecho!";
    choicesElement.innerHTML = "";
    scoreElement.textContent = `Puntuación final: ${score} de ${questions.length}`;
}
