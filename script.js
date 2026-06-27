let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const options = document.getElementById("options");
const result = document.getElementById("result");
const counter = document.getElementById("counter");

function loadQuestion() {

    counter.innerText =
    `Question ${currentQuestion + 1} / ${quizData.length}`;

    result.innerHTML = "";

    let q = quizData[currentQuestion];

    question.innerText =
    `Q${currentQuestion + 1}. ${q.question}`;

    options.innerHTML = "";

    q.options.forEach((option, index) => {

        let btn = document.createElement("button");

        btn.innerText = option;

        btn.classList.add("option");

        btn.onclick = () => checkAnswer(index);

        options.appendChild(btn);

    });
}

function checkAnswer(selected) {

    let correct = quizData[currentQuestion].answer;

    let buttons = document.querySelectorAll(".option");

    buttons.forEach((btn, index) => {

        btn.disabled = true;

        if (index === correct) {
            btn.classList.add("correct");
        }

        if (index === selected && selected !== correct) {
            btn.classList.add("wrong");
        }

    });

    if (selected === correct) {

        score++;

        result.innerHTML =
        `✅ Correct!<br><br>${quizData[currentQuestion].explanation}`;

    } else {

        result.innerHTML =
        `❌ Wrong!<br><br>${quizData[currentQuestion].explanation}`;

    }
}

document.getElementById("nextBtn").addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < quizData.length) {

        loadQuestion();

    } else {

        document.querySelector(".container").innerHTML = `
        <h2>Quiz Completed 🎉</h2>
        <h3>Your Score: ${score}/${quizData.length}</h3>
        <h3>Percentage: ${((score / quizData.length) * 100).toFixed(0)}%</h3>
        <button onclick="location.reload()">Restart Quiz</button>
        `;
    }
});

loadQuestion();