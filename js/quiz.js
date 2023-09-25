const questions = [
    {
        question: "¿Cuál es una de las razones clave por las que la tecnología es importante?",
        choices: ["Aumenta la eficiencia y la productividad.", "Reduce la comunicación global.", "Limita la innovación y la creatividad.", "Fomenta la dependencia de la tecnología."],
        correct: 0
    },
    {
        question: "¿Qué ventaja ofrece el uso adecuado de la tecnología?",
        choices: ["Mayor dependencia en tareas repetitivas.", "Acceso lento a la información en línea.", "Facilitación de la comunicación instantánea.", "Reducción de la calidad de vida."],
        correct: 2
    },
    {
        question: "¿Cuál es una desventaja mencionada en el texto sobre la tecnología?",
        choices: ["Automatización de tareas repetitivas.", "Facilitación de la comunicación instantánea.", "Dependencia excesiva y adicción a dispositivos electrónicos", "Acceso rápido a la información en línea."],
        correct: 2
    },
    {
        question: "¿Qué otra preocupación se menciona en el texto como una desventaja de la tecnología?",
        choices: ["Mas opciones de entretenimiento", "Mejora en tiempos de trabajo", "Acceso rápido a recursos educativos en línea.", "Impacto ambiental negativo"],
        correct: 3
    },
    {
        question: "¿Qué son los dispositivos tecnológicos según el texto?",
        choices: ["Elementos químicos utilizados en la tecnología moderna.", " Equipos o herramientas que incorporan tecnología para realizar tareas específicas.", " Término técnico utilizado en la física cuántica.", "Aplicaciones informáticas avanzadas."],
        correct: 1
    },
    {
        question: "¿Cuál es la función del hardware en un dispositivo tecnológico?",
        choices: ["Proporcionar las instrucciones necesarias para que el software funcione.", " Ejecutar programas y aplicaciones informáticas.", "Realizar llamadas telefónicas y enviar mensajes de texto.", "Representar los datos en una pantalla."],
        correct: 3
    },
    {
        question: "¿Cuál es un ejemplo de dispositivo tecnológico mencionado en el texto?",
        choices: ["Una computadora de escritorio.", "Un coche deportivo.", "Un árbol de navidad.", "Un televisor antiguo."],
        correct: 0
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
