/* =========================================================
   Coğrafya Projesi — Bilgi Yarışması  |  Ana Oyun Motoru
   ========================================================= */

// ===== GLOBAL STATE =====
let players = {
  1: { name: "Player 1", correct: 0, wrong: 0, skipped: 0, time: 60, currentQ: 0, questions: [], finished: false, timer: null },
  2: { name: "Player 2", correct: 0, wrong: 0, skipped: 0, time: 60, currentQ: 0, questions: [], finished: false, timer: null }
};

let gameActive = false;

// ===== UTILITY =====
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Her sorunun şıklarını da karıştır (doğru cevabı takip ederek)
function shuffleOptions(question) {
  const indices = question.options.map((_, i) => i);
  const shuffled = shuffle(indices);
  return {
    question: question.question,
    options: shuffled.map(i => question.options[i]),
    answer: shuffled.indexOf(question.answer)
  };
}

// ===== PARTICLES BACKGROUND =====
function initParticles() {
  const canvas = document.getElementById("particles-canvas");
  const ctx = canvas.getContext("2d");
  let particles = [];
  const COUNT = 60;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.3 + 0.1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 201, 167, ${p.opacity})`;
      ctx.fill();
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 201, 167, ${0.05 * (1 - dist / 150)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ===== SCREEN MANAGEMENT =====
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// ===== START GAME =====
function startGame() {
  // Get player names
  const name1 = document.getElementById("input-p1").value.trim() || "Player 1";
  const name2 = document.getElementById("input-p2").value.trim() || "Player 2";

  // Reset state
  players[1] = { name: name1, correct: 0, wrong: 0, skipped: 0, time: 60, currentQ: 0, questions: [], finished: false, timer: null };
  players[2] = { name: name2, correct: 0, wrong: 0, skipped: 0, time: 60, currentQ: 0, questions: [], finished: false, timer: null };

  // Shuffle questions differently for each player, and shuffle options too
  players[1].questions = shuffle(QUESTIONS).map(q => shuffleOptions(q));
  players[2].questions = shuffle(QUESTIONS).map(q => shuffleOptions(q));

  // Set names on game screen
  document.getElementById("p1-name-display").textContent = name1;
  document.getElementById("p2-name-display").textContent = name2;

  // Show countdown
  showScreen("screen-countdown");
  runCountdown();
}

function runCountdown() {
  const el = document.getElementById("countdown-number");
  let count = 3;
  el.textContent = count;

  const interval = setInterval(() => {
    count--;
    if (count > 0) {
      el.textContent = count;
    } else {
      clearInterval(interval);
      el.textContent = "🚀";
      setTimeout(() => {
        startRound();
      }, 400);
    }
  }, 1000);
}

// ===== START ROUND =====
function startRound() {
  gameActive = true;
  showScreen("screen-game");

  // Reset UI
  document.getElementById("p1-finished").style.display = "none";
  document.getElementById("p2-finished").style.display = "none";

  // Reset stats display
  updateStatsUI(1);
  updateStatsUI(2);

  // Show first questions
  showQuestion(1);
  showQuestion(2);

  // Update timers initially
  updateTimerUI(1);
  updateTimerUI(2);

  // Start timers
  players[1].timer = setInterval(() => tickTimer(1), 1000);
  players[2].timer = setInterval(() => tickTimer(2), 1000);
}

// ===== TIMER =====
function tickTimer(pid) {
  const p = players[pid];
  if (p.finished) return;

  p.time--;
  updateTimerUI(pid);

  if (p.time <= 0) {
    p.finished = true;
    clearInterval(p.timer);
    document.getElementById(`p${pid}-finished`).style.display = "flex";
    disableOptions(pid);
    checkGameEnd();
  }
}

function updateTimerUI(pid) {
  const el = document.getElementById(`p${pid}-timer`);
  const t = players[pid].time;
  el.textContent = t;
  el.classList.remove("warning", "danger");
  if (t <= 10) {
    el.classList.add("danger");
  } else if (t <= 20) {
    el.classList.add("warning");
  }
}

// ===== STATS UI =====
function updateStatsUI(pid) {
  const p = players[pid];
  document.getElementById(`p${pid}-correct`).textContent = p.correct;
  document.getElementById(`p${pid}-wrong`).textContent = p.wrong;
  document.getElementById(`p${pid}-skipped`).textContent = p.skipped;
}

// ===== SHOW QUESTION =====
function showQuestion(pid) {
  const p = players[pid];
  if (p.finished) return;

  // Sorular bittiyse (hepsini gördüyse)
  if (p.currentQ >= p.questions.length) {
    p.finished = true;
    clearInterval(p.timer);
    document.getElementById(`p${pid}-finished`).style.display = "flex";
    const finText = document.querySelector(`#p${pid}-finished .finished-text`);
    finText.textContent = "✅ Tüm Sorular Bitti!";
    checkGameEnd();
    return;
  }

  const q = p.questions[p.currentQ];
  const letters = ["A", "B", "C", "D"];

  document.getElementById(`p${pid}-q-number`).textContent = `Soru ${p.currentQ + 1}`;
  document.getElementById(`p${pid}-q-text`).textContent = q.question;

  const optContainer = document.getElementById(`p${pid}-options`);
  optContainer.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span class="option-text">${opt}</span>`;
    btn.addEventListener("click", () => answerQuestion(pid, i));
    optContainer.appendChild(btn);
  });
}

// ===== ANSWER =====
function answerQuestion(pid, selectedIndex) {
  const p = players[pid];
  if (p.finished) return;

  const q = p.questions[p.currentQ];
  const optContainer = document.getElementById(`p${pid}-options`);
  const buttons = optContainer.querySelectorAll(".option-btn");

  // Disable all buttons immediately
  buttons.forEach(b => b.classList.add("disabled"));
  document.getElementById(`p${pid}-pass`).style.pointerEvents = "none";

  if (selectedIndex === q.answer) {
    p.correct++;
    buttons[selectedIndex].classList.add("correct-answer");
  } else {
    p.wrong++;
    buttons[selectedIndex].classList.add("wrong-answer");
    buttons[q.answer].classList.add("correct-answer");
  }

  updateStatsUI(pid);

  // 0.5 saniye sonra sonraki soruya geç
  setTimeout(() => {
    if (p.finished) return;
    p.currentQ++;
    document.getElementById(`p${pid}-pass`).style.pointerEvents = "auto";
    showQuestion(pid);
  }, 500);
}

// ===== PASS =====
function passQuestion(pid) {
  const p = players[pid];
  if (p.finished) return;

  p.skipped++;
  updateStatsUI(pid);
  p.currentQ++;
  showQuestion(pid);
}

// ===== DISABLE OPTIONS =====
function disableOptions(pid) {
  const optContainer = document.getElementById(`p${pid}-options`);
  const buttons = optContainer.querySelectorAll(".option-btn");
  buttons.forEach(b => b.classList.add("disabled"));
  document.getElementById(`p${pid}-pass`).style.pointerEvents = "none";
}

// ===== CHECK GAME END =====
function checkGameEnd() {
  if (players[1].finished && players[2].finished) {
    gameActive = false;
    setTimeout(showResults, 1200);
  }
}

// ===== SHOW RESULTS =====
function showResults() {
  showScreen("screen-result");

  const p1 = players[1];
  const p2 = players[2];

  // Populate stats
  document.getElementById("result-p1-name").textContent = p1.name;
  document.getElementById("result-p1-correct").textContent = p1.correct;
  document.getElementById("result-p1-wrong").textContent = p1.wrong;
  document.getElementById("result-p1-skipped").textContent = p1.skipped;
  document.getElementById("result-p1-score").textContent = p1.correct * 10;

  const p1Total = p1.correct + p1.wrong;
  const p1Pct = p1Total > 0 ? Math.round((p1.correct / p1Total) * 100) : 0;
  document.getElementById("result-p1-percent").textContent = p1Pct + "%";

  document.getElementById("result-p2-name").textContent = p2.name;
  document.getElementById("result-p2-correct").textContent = p2.correct;
  document.getElementById("result-p2-wrong").textContent = p2.wrong;
  document.getElementById("result-p2-skipped").textContent = p2.skipped;
  document.getElementById("result-p2-score").textContent = p2.correct * 10;

  const p2Total = p2.correct + p2.wrong;
  const p2Pct = p2Total > 0 ? Math.round((p2.correct / p2Total) * 100) : 0;
  document.getElementById("result-p2-percent").textContent = p2Pct + "%";

  // Determine winner
  const card1 = document.getElementById("result-card-p1");
  const card2 = document.getElementById("result-card-p2");
  card1.classList.remove("winner-card");
  card2.classList.remove("winner-card");

  if (p1.correct > p2.correct) {
    document.getElementById("result-trophy").textContent = "🏆";
    document.getElementById("result-winner-title").textContent = "KAZANAN";
    document.getElementById("result-winner-name").textContent = p1.name;
    document.getElementById("result-winner-subtitle").textContent = `${p1.correct} doğru cevap ile kazandı!`;
    card1.classList.add("winner-card");
  } else if (p2.correct > p1.correct) {
    document.getElementById("result-trophy").textContent = "🏆";
    document.getElementById("result-winner-title").textContent = "KAZANAN";
    document.getElementById("result-winner-name").textContent = p2.name;
    document.getElementById("result-winner-subtitle").textContent = `${p2.correct} doğru cevap ile kazandı!`;
    card2.classList.add("winner-card");
  } else {
    document.getElementById("result-trophy").textContent = "🤝";
    document.getElementById("result-winner-title").textContent = "BERABERE";
    document.getElementById("result-winner-name").textContent = `${p1.name} & ${p2.name}`;
    document.getElementById("result-winner-subtitle").textContent = `Her iki oyuncu da ${p1.correct} doğru cevap verdi!`;
  }
}

// ===== RESTART =====
function restartGame() {
  // Clear any running timers
  if (players[1].timer) clearInterval(players[1].timer);
  if (players[2].timer) clearInterval(players[2].timer);
  gameActive = false;

  showScreen("screen-entry");
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  initParticles();
});
