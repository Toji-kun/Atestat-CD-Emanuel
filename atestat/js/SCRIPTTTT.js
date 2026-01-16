const questions = [
  {
    question: "Câtă apă ar trebui să bei zilnic?",
    answers: [
      { text: "Cel puțin 2 litri", correct: true },
      { text: "Cel puțin 1 litru", correct: false },
      { text: "Nu mai mult de 2 litri", correct: false },
      { text: "Cel puțin 3 litri", correct: false },
    ],
  },
  {
    question:
      "Ce ar trebui să faci înainte de antrenamente pentru a preveni accidentările și a îmbunătăți flexibilitatea?",
    answers: [
      { text: "Să bei apă", correct: false },
      { text: "Stretching", correct: true },
      { text: "Să mănânci ceva dulce", correct: false },
      { text: "Să respiri rar", correct: false },
    ],
  },
  {
    question: "Cât timp ar trebui să petreci zilnic la soare cel puțin?",
    answers: [
      { text: "15 minute", correct: true },
      { text: "5 minute", correct: false },
      { text: "25 minute", correct: false },
      { text: "10 minute", correct: false },
    ],
  },
  {
    question:
      "Ce ar trebui să adaugi în mesele tale pentru a susține creșterea musculară?",
    answers: [
      { text: "Carbohidrați", correct: false },
      { text: "Lipide", correct: false },
      { text: "Vitamine", correct: false },
      { text: "Proteine", correct: true },
    ],
  },
  {
    question: "Care este cel mai bun site pe care l-ai văzut astăzi?",
    answers: [
      { text: "MTX", correct: true },
      { text: "Altul", correct: false },
      { text: "Altul", correct: false },
      { text: "Altul", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Următoarea";
  nextButton.style.display = "none";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () =>
      selectAnswer(button, answer.correct)
    );
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(button, isCorrect) {
  if (isCorrect) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach((btn) => (btn.disabled = true));
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionElement.innerHTML = `Ai obținut ${score} din ${questions.length}!`;
  nextButton.innerHTML = "Joacă din nou";
  nextButton.style.display = "block";
  nextButton.removeEventListener("click", showQuestion);
  nextButton.addEventListener("click", startQuiz);
}

startQuiz();
