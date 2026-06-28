const correctSound = new Audio("correct.mp3");
const wrongSound = new Audio("wrong.mp3");
const finishSound = new Audio("finish.mp3");

correctSound.volume = 1;
wrongSound.volume = 1;
finishSound.volume = 1;

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const options = document.getElementById("options");
const result = document.getElementById("result");
const counter = document.getElementById("counter");
const timerText = document.getElementById("timer");

const loginPage = document.getElementById("loginPage");
const quizPage = document.getElementById("quizPage");

let timeLeft = 30;
let timer;

// START QUIZ
function startQuiz(){
    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value.trim();
    let department=document.getElementById("department").value;
    let regno=document.getElementById("regno").value.trim();

    if(name=="" || email=="" || department=="" || regno==""){
        alert("Please fill all details.");
        return;
    }

    loginPage.style.display="none";
    quizPage.style.display="block";

    currentQuestion=0;
    score=0;

    loadQuestion();
}

// LOAD QUESTION
function loadQuestion(){
    clearInterval(timer);

    counter.innerText="Question "+(currentQuestion+1)+" / "+quizData.length;

    result.innerHTML="";

    let q=quizData[currentQuestion];

    question.innerText="Q"+(currentQuestion+1)+". "+q.question;

    options.innerHTML="";

    q.options.forEach((option,index)=>{
        let btn=document.createElement("button");
        btn.innerText=option;
        btn.classList.add("option");
        btn.onclick=()=>checkAnswer(index);
        options.appendChild(btn);
    });

    startTimer();
}

// CHECK ANSWER
function checkAnswer(selected){
    clearInterval(timer);

    let correct = quizData[currentQuestion].answer;

    let buttons = document.querySelectorAll(".option");

    buttons.forEach((btn,index)=>{
        btn.disabled = true;

        if(index === correct){
            btn.classList.add("correct");
        }

        if(index === selected && selected !== correct){
            btn.classList.add("wrong");
        }
    });

    if(selected === correct){
        score++;
        correctSound.currentTime = 0;
        correctSound.play();

        result.innerHTML =
        "✅ Correct!<br><br>" + quizData[currentQuestion].explanation;
    }
    else{
        wrongSound.currentTime = 0;
        wrongSound.play();

        result.innerHTML =
        "❌ Wrong!<br><br>" + quizData[currentQuestion].explanation;
    }
}

// NEXT BUTTON
document.getElementById("nextBtn").addEventListener("click", () => {
    clearInterval(timer);
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        quizCompleted();
    }
});

// TIMER
function startTimer() {
    clearInterval(timer);

    timeLeft = 30;

    timerText.innerText = "⏰ Time Left : " + timeLeft + " sec";

    timer = setInterval(() => {
        timeLeft--;

        timerText.innerText = "⏰ Time Left : " + timeLeft + " sec";

        if (timeLeft <= 0) {
            clearInterval(timer);
            currentQuestion++;

            if (currentQuestion < quizData.length) {
                loadQuestion();
            } else {
                quizCompleted();
            }
        }
    }, 1000);
}

// 🎉 QUIZ COMPLETED + PDF GENERATE
function quizCompleted() {

    finishSound.currentTime = 0;
    finishSound.play();

    let name = document.getElementById("name").value;

    quizPage.innerHTML = `
        <h2>🎉 Quiz Completed</h2>
        <h3>Your Score : ${score}/${quizData.length}</h3>
        <h3>Percentage : ${((score / quizData.length) * 100).toFixed(0)}%</h3>

        <button onclick="generateCertificate('${name}', ${score})">
            📄 Download Certificate
        </button>

        <button onclick="location.reload()">🔄 Restart Quiz</button>
    `;
}

// 📄 PDF GENERATOR (jsPDF)
function generateCertificate(name, score) {

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF("landscape"); // 👉 horizontal A4 look

    let email = document.getElementById("email").value;
    let department = document.getElementById("department").value;
    let regno = document.getElementById("regno").value;

    let date = new Date().toLocaleDateString();

    let total = quizData.length;
    let percentage = ((score / total) * 100).toFixed(0);

    // 🟦 BORDER (real certificate frame)
    doc.setLineWidth(2);
    doc.rect(10, 10, 270, 190);

    doc.setLineWidth(0.5);
    doc.rect(15, 15, 260, 180);

    // 🏆 TITLE
    doc.setFont("helvetica", "bold");
    doc.setFontSize(26);
    doc.text("CERTIFICATE OF COMPLETION", 70, 40);

    // ✨ SUB TITLE
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.text("This is proudly presented to", 95, 55);

    // 👤 NAME (BIG STYLE)
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text(name.toUpperCase(), 90, 75);

    // 📄 DETAILS BOX
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    doc.text("Email: " + email, 20, 100);
    doc.text("Department: " + department, 20, 110);
    doc.text("Register No: " + regno, 20, 120);

    // 📊 SCORE SECTION
    doc.text("Score: " + score + " / " + total, 20, 135);
    doc.text("Percentage: " + percentage + "%", 20, 145);

    // 📅 DATE
    doc.text("Date: " + date, 20, 160);

    // 🏅 FOOTER
    doc.setFontSize(11);
    doc.text("Successfully completed Java MCQ Quiz Assessment", 80, 175);

    // 💾 DOWNLOAD
    doc.save("Java_Certificate.pdf");
}