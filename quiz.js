let currentQuestion = 0;

const scores = {
  spade: 0,
  club: 0,
  diamond: 0,
  heart: 0
};

const questions = [
  {
    text: "You open a book and immediately want…",
    answers: [
      ["♠️ To follow something unfamiliar", "spade"],
      ["♣️ To be comforted by the story", "club"],
      ["♦️ To be surprised or unsettled", "diamond"],
      ["♥️ To understand how everything fits together", "heart"]
    ]
  },
  {
    text: "You stop reading when…",
    answers: [
      ["♠️ The world stops changing", "spade"],
      ["♣️ You stop caring about the characters", "club"],
      ["♦️ The story becomes predictable", "diamond"],
      ["♥️ The rules stop making sense", "heart"]
    ]
  },
  {
    text: "Your favorite stories feel like…",
    answers: [
      ["♠️ A door you weren’t meant to open", "spade"],
      ["♣️ A familiar voice calling your name", "club"],
      ["♦️ A game with missing instructions", "diamond"],
      ["♥️ A puzzle that slowly reveals itself", "heart"]
    ]
  },
  {
    text: "In a strange place, you would…",
    answers: [
      ["♠️ Keep walking to see where it leads", "spade"],
      ["♣️ Look for something recognizable", "club"],
      ["♦️ Do the opposite of what’s expected of you", "diamond"],
      ["♥️ Observe quietly before acting", "heart"]
    ]
  },
  {
    text: "You remember a story mostly for…",
    answers: [
      ["♠️ The world", "spade"],
      ["♣️ The characters", "club"],
      ["♦️ The feelings", "diamond"],
      ["♥️ The idea", "heart"]
    ]
  },
  {
    text: "A good story leaves you feeling…",
    answers: [
      ["♠️ Curious", "spade"],
      ["♣️ Comforted", "club"],
      ["♦️ Challenged", "diamond"],
      ["♥️ Thoughtful", "heart"]
    ]
  }
];

function startQuiz() {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("question").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question-text").textContent = q.text;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer[0];
    btn.className = "answer-btn";
    btn.onclick = () => selectAnswer(answer[1]);
    answersDiv.appendChild(btn);
  });
}

function selectAnswer(type) {
  scores[type]++;
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("question").classList.add("hidden");
  const resultDiv = document.getElementById("result");
  resultDiv.classList.remove("hidden");

  const winner = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  const results = {
  spade: `
    <p><em>You’ve wandered, wondered, and discovered your reader self… Each answer was a step deeper into the story, and now your Reader Identity Card has been revealed.</em></p>
    <h2>♠️ The Curious Wanderer</h2>
    <p><em>“If you drink much from a bottle marked ‘poison,’ it is certain to disagree with you sooner or later.”</em></p>
    <p>Curiosity before clarity. You explore the unfamiliar and delight in stories that slowly reveal their meaning.</p>
    <p class="result-note">Go get your card at the Atlas House Stand.</p>
  `,
  club: `
    <p><em>You’ve wandered, wondered, and discovered your reader self… Each answer was a step deeper into the story, and now your Reader Identity Card has been revealed.</em></p>
    <h2>♣️ The Comfort Keeper</h2>
    <p><em>“And what is the use of a book without pictures or conversation?”</em></p>
    <p>You find home in stories that feel grounding, warm, and familiar.</p>
    <p class="result-note">Go get your card at the Atlas House Stand.</p>
  `,
  diamond: `
    <p><em>You’ve wandered, wondered, and discovered your reader self… Each answer was a step deeper into the story, and now your Reader Identity Card has been revealed.</em></p>
    <h2>♦️ The Rule-Breaker</h2>
    <p><em>“If I had a world of my own, everything would be nonsense.”</em></p>
    <p>You love disruption and experimentation, enjoying stories that resist neat rules.</p>
    <p class="result-note">Go get your card at the Atlas House Stand.</p>
  `,
  heart: `
    <p><em>You’ve wandered, wondered, and discovered your reader self… Each answer was a step deeper into the story, and now your Reader Identity Card has been revealed.</em></p>
    <h2>♥️ The Observer</h2>
    <p><em>“It’s no use going back to yesterday, because I was a different person then.”</em></p>
    <p>You notice what others miss, seeing the patterns, structure, and hidden details of stories.</p>
    <p class="result-note">Go get your card at the Atlas House Stand.</p>
  `
};

 resultDiv.innerHTML = results[winner] + `
  <p><strong>Take your card from the Atlas House Stand and carry your Wonderland adventure with you.</strong></p>
`;
}
