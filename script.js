// Sample questions and answers
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: 2
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

// Function to load question
function loadQuestion() {
    
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    document.getElementById("option-1").innerText = q.options[0];
    document.getElementById("option-2").innerText = q.options[1];
    document.getElementById("option-3").innerText = q.options[2];
    document.getElementById("option-4").innerText = q.options[3];
    updateProgress();
    showScore();
}

// Function to handle option click
function selectOption(optionIndex) {
    const correctAnswer = questions[currentQuestion].answer;

    if (optionIndex === correctAnswer) {
        score++;
    }

    currentQuestion++;
    loadQuestion();
}

// Function to update progress bar
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById("progress-bar").style.width = `${progress}%`;
}

// Function to show score
function showScore() {
    document.getElementById("quiz-container").classList.add("d-none");
    document.getElementById("score-display").classList.remove("d-none");
    document.getElementById("score").innerText = score;
}

// Add event listeners to options
document.getElementById("option-1").addEventListener("click", () => selectOption(0));
document.getElementById("option-2").addEventListener("click", () => selectOption(1));
document.getElementById("option-3").addEventListener("click", () => selectOption(2));
document.getElementById("option-4").addEventListener("click", () => selectOption(3));

// Load the first question
loadQuestion();
