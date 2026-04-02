const quizData = [
{q:"Vad betyder inkludering?", a:["Alla lika","Alla delaktiga","Endast vissa"], correct:1},
{q:"Vad är autonomi?", a:["Regler","Självbestämmande","Grupp"], correct:1},
{q:"Vad är livskvalitet?", a:["Välmående","Pengar","Regler"], correct:0}
];

let current = 0;
let score = 0;
let time = 60;
let timer;

function startQuiz() {
  document.querySelector("button").style.display = "none";
  loadQuestion();
  startTimer();
}

function loadQuestion() {
  if (current >= quizData.length) {
    showResult();
    return;
  }

  let q = quizData[current];
  let html = "<h3>"+q.q+"</h3>";

  q.a.forEach((ans, i) => {
    html += `<button onclick="checkAnswer(${i})">${ans}</button>`;
  });

  document.getElementById("quiz").innerHTML = html;
}

function checkAnswer(i) {
  if (i === quizData[current].correct) {
    score++;
  }
  current++;
  loadQuestion();
}

function showResult() {
  clearInterval(timer);

  let name = document.getElementById("username").value || "Användare";
  let percent = Math.round((score / quizData.length) * 100);

  document.getElementById("result").innerHTML =
    `<h2>Resultat</h2>
     <p>${name}</p>
     <p>${percent}%</p>`;
}

function startTimer() {
  timer = setInterval(() => {
    time--;
    document.getElementById("timer").innerText = "Tid: " + time;

    if (time <= 0) {
      showResult();
    }
  }, 1000);
}
