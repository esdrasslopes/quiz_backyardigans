const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const btnStart = document.getElementById("btn-start");

const questionCounter = document.getElementById("question-counter");
const progressPercent = document.getElementById("progress-percent");
const progressFill = document.getElementById("progress-fill");

const questionNumberTag = document.getElementById("question-number-tag");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

const resultName = document.getElementById("result-name");
const resultAlias = document.getElementById("result-alias");
const resultDescription = document.getElementById("result-description");

const btnRestart = document.getElementById("btn-restart");

const questions = [
  {
    id: 1,
    text: "Qual é o seu papel favorito quando vocês inventam uma aventura no quintal?",
    options: [
      {
        text: "Sou o protagonista dramático que dá vida à história com muita emoção!",
        scores: { pablo: 3, tyrone: 1, uniqua: 2, tasha: 1, austin: 1 },
      },
      {
        text: "Entro na vibe tranquilamente e curto tudo no meu ritmo.",
        scores: { pablo: 1, tyrone: 3, uniqua: 1, tasha: 1, austin: 2 },
      },
      {
        text: "Sou quem propõe a aventura e puxa o grupo para agir!",
        scores: { pablo: 2, tyrone: 1, uniqua: 3, tasha: 2, austin: 1 },
      },
      {
        text: "Organizo cada detalhe e garanto que a aventura saia perfeita.",
        scores: { pablo: 1, tyrone: 1, uniqua: 2, tasha: 3, austin: 1 },
      },
      {
        text: "Participo com jeito, ajudando discretamente onde for preciso.",
        scores: { pablo: 1, tyrone: 2, uniqua: 1, tasha: 1, austin: 3 },
      },
    ],
  },
  {
    id: 2,
    text: "Como você reage quando algo dá errado no meio da brincadeira?",
    options: [
      {
        text: "Entro em pânico por um segundo, mas logo improviso uma saída dramática!",
        scores: { pablo: 3, tyrone: 1, uniqua: 2, tasha: 1, austin: 1 },
      },
      {
        text: "Fico tranquilo, respiro fundo e penso numa solução com calma.",
        scores: { pablo: 1, tyrone: 3, uniqua: 1, tasha: 1, austin: 2 },
      },
      {
        text: "Vou direto para a ação e resolvo sem hesitar.",
        scores: { pablo: 2, tyrone: 1, uniqua: 3, tasha: 2, austin: 1 },
      },
      {
        text: "Fico irritada e quero resolver logo do jeito certo.",
        scores: { pablo: 1, tyrone: 1, uniqua: 2, tasha: 3, austin: 1 },
      },
      {
        text: "Fico quieto por um momento esperando a hora certa de agir.",
        scores: { pablo: 1, tyrone: 2, uniqua: 1, tasha: 1, austin: 3 },
      },
    ],
  },
  {
    id: 3,
    text: "Qual tipo de aventura imaginária é a sua favorita?",
    options: [
      {
        text: "Ser um artista ou performer no centro das atenções.",
        scores: { pablo: 3, tyrone: 1, uniqua: 1, tasha: 2, austin: 1 },
      },
      {
        text: "Uma aventura tranquila cheia de música e bom ritmo.",
        scores: { pablo: 1, tyrone: 3, uniqua: 1, tasha: 1, austin: 2 },
      },
      {
        text: "Uma missão cheia de ação, desafios e reviravoltas.",
        scores: { pablo: 1, tyrone: 1, uniqua: 3, tasha: 2, austin: 1 },
      },
      {
        text: "Algo onde eu possa liderar e garantir que tudo saia perfeito.",
        scores: { pablo: 1, tyrone: 1, uniqua: 2, tasha: 3, austin: 1 },
      },
      {
        text: "Uma aventura para explorar e descobrir meu lugar no grupo.",
        scores: { pablo: 2, tyrone: 2, uniqua: 1, tasha: 1, austin: 3 },
      },
    ],
  },
  {
    id: 4,
    text: "O que você faz quando um amigo está com medo durante a aventura?",
    options: [
      {
        text: "Faço uma cena engraçada e dramática para distrair e animar!",
        scores: { pablo: 3, tyrone: 1, uniqua: 2, tasha: 1, austin: 1 },
      },
      {
        text: "Fico do lado em silêncio e digo com calma que vai ficar tudo bem.",
        scores: { pablo: 1, tyrone: 3, uniqua: 1, tasha: 1, austin: 2 },
      },
      {
        text: "Tomo a frente e mostro na prática que não tem nada a temer.",
        scores: { pablo: 1, tyrone: 1, uniqua: 3, tasha: 2, austin: 1 },
      },
      {
        text: "Explico racionalmente por que não há motivo para se preocupar.",
        scores: { pablo: 1, tyrone: 2, uniqua: 1, tasha: 3, austin: 1 },
      },
      {
        text: "Fico por perto em silêncio, dando suporte sem pressionar.",
        scores: { pablo: 1, tyrone: 2, uniqua: 1, tasha: 1, austin: 3 },
      },
    ],
  },
  {
    id: 5,
    text: "Como você prefere contribuir com o grupo?",
    options: [
      {
        text: "Trago energia, entusiasmo e bastante emoção para animar todo mundo.",
        scores: { pablo: 3, tyrone: 1, uniqua: 2, tasha: 1, austin: 1 },
      },
      {
        text: "Mantenho a paz e o equilíbrio quando as coisas ficam tensas.",
        scores: { pablo: 1, tyrone: 3, uniqua: 1, tasha: 1, austin: 2 },
      },
      {
        text: "Assumo a liderança e puxo o grupo para frente.",
        scores: { pablo: 2, tyrone: 1, uniqua: 3, tasha: 2, austin: 1 },
      },
      {
        text: "Planejo, organizo e garanto que tudo funcione como combinado.",
        scores: { pablo: 1, tyrone: 1, uniqua: 2, tasha: 3, austin: 1 },
      },
      {
        text: "Faço o que for pedido com dedicação e sem chamar atenção.",
        scores: { pablo: 1, tyrone: 2, uniqua: 1, tasha: 1, austin: 3 },
      },
    ],
  },
  {
    id: 6,
    text: "Qual ritmo musical combina mais com o seu jeito de ser?",
    options: [
      {
        text: "Algo dramático e teatral, cheio de emoção e sentimento.",
        scores: { pablo: 3, tyrone: 1, uniqua: 2, tasha: 2, austin: 1 },
      },
      {
        text: "Um groove tranquilo que dá vontade de balançar devagar.",
        scores: { pablo: 1, tyrone: 3, uniqua: 1, tasha: 1, austin: 2 },
      },
      {
        text: "Uma batida animada e cheia de energia para agir.",
        scores: { pablo: 2, tyrone: 1, uniqua: 3, tasha: 1, austin: 1 },
      },
      {
        text: "Algo grandioso e imponente, digno de uma grande líder.",
        scores: { pablo: 1, tyrone: 1, uniqua: 1, tasha: 3, austin: 2 },
      },
      {
        text: "Uma melodia suave e discreta, quase um sussurro.",
        scores: { pablo: 1, tyrone: 2, uniqua: 1, tasha: 1, austin: 3 },
      },
    ],
  },
  {
    id: 7,
    text: "O que você faz quando é a sua vez de liderar a aventura do dia?",
    options: [
      {
        text: "Crio um personagem épico e mergulho na história com tudo!",
        scores: { pablo: 3, tyrone: 1, uniqua: 2, tasha: 1, austin: 1 },
      },
      {
        text: "Proponho algo divertido e descontraído para todo mundo curtir.",
        scores: { pablo: 1, tyrone: 3, uniqua: 1, tasha: 1, austin: 2 },
      },
      {
        text: "Defino logo a missão e ponho o grupo em movimento sem demora.",
        scores: { pablo: 2, tyrone: 1, uniqua: 3, tasha: 2, austin: 1 },
      },
      {
        text: "Organizo cada detalhe com antecedência para que tudo seja perfeito.",
        scores: { pablo: 1, tyrone: 1, uniqua: 1, tasha: 3, austin: 2 },
      },
      {
        text: "Fico um pouco nervoso, mas acabo me saindo bem quando menos espero.",
        scores: { pablo: 2, tyrone: 2, uniqua: 1, tasha: 1, austin: 3 },
      },
    ],
  },
  {
    id: 8,
    text: "Como você se sente quando a aventura do dia chega ao fim?",
    options: [
      {
        text: "Já estou pensando na próxima aventura, cheio de novas ideias!",
        scores: { pablo: 3, tyrone: 1, uniqua: 2, tasha: 1, austin: 1 },
      },
      {
        text: "Aproveito o momento, satisfeito e bem relaxado.",
        scores: { pablo: 1, tyrone: 3, uniqua: 1, tasha: 1, austin: 2 },
      },
      {
        text: "Feliz pela missão cumprida e animada para o próximo desafio.",
        scores: { pablo: 1, tyrone: 1, uniqua: 3, tasha: 2, austin: 1 },
      },
      {
        text: "Avalio o que funcionou e o que pode melhorar na próxima vez.",
        scores: { pablo: 1, tyrone: 2, uniqua: 1, tasha: 3, austin: 1 },
      },
      {
        text: "Aliviado e contente por ter participado, mesmo que quietinho.",
        scores: { pablo: 1, tyrone: 2, uniqua: 1, tasha: 1, austin: 3 },
      },
    ],
  },
  {
    id: 9,
    text: "Qual é o seu jeito de entrar no clima de uma nova aventura?",
    options: [
      {
        text: "Faço uma grande performance de entrada — com pose e tudo!",
        scores: { pablo: 3, tyrone: 1, uniqua: 2, tasha: 1, austin: 1 },
      },
      {
        text: "Vou chegando de boa e me envolvendo aos poucos, no meu ritmo.",
        scores: { pablo: 1, tyrone: 3, uniqua: 1, tasha: 1, austin: 2 },
      },
      {
        text: "Mergulho de cabeça sem pensar duas vezes.",
        scores: { pablo: 2, tyrone: 1, uniqua: 3, tasha: 1, austin: 1 },
      },
      {
        text: "Analiso a situação antes de entrar e garanto que faz sentido.",
        scores: { pablo: 1, tyrone: 2, uniqua: 1, tasha: 3, austin: 1 },
      },
      {
        text: "Entro quando me sinto confortável, mas sempre apareço na hora certa.",
        scores: { pablo: 1, tyrone: 2, uniqua: 1, tasha: 1, austin: 3 },
      },
    ],
  },
  {
    id: 10,
    text: "O que você faz quando surge um desafio inesperado na brincadeira?",
    options: [
      {
        text: "Transformo o problema em parte da história com um discurso épico.",
        scores: { pablo: 3, tyrone: 1, uniqua: 2, tasha: 1, austin: 1 },
      },
      {
        text: "Sugiro parar, respirar fundo e pensar com calma no que fazer.",
        scores: { pablo: 1, tyrone: 3, uniqua: 1, tasha: 1, austin: 2 },
      },
      {
        text: "Enfrento de frente e lidero o grupo para superar juntos.",
        scores: { pablo: 1, tyrone: 1, uniqua: 3, tasha: 2, austin: 1 },
      },
      {
        text: "Exijo que o grupo siga o plano original — desvios atrapalham tudo.",
        scores: { pablo: 1, tyrone: 1, uniqua: 1, tasha: 3, austin: 2 },
      },
      {
        text: "Observo a situação e ofereço ajuda quando alguém precisar.",
        scores: { pablo: 1, tyrone: 2, uniqua: 1, tasha: 1, austin: 3 },
      },
    ],
  },
];

const characters = {
  pablo: {
    name: "Pablo",
    alias: "Pinguim Azul",
    description:
      "Dramático, emotivo e cheio de energia! Pablo tem uma imaginação enorme e adora ser o protagonista das aventuras. Ele pode entrar em pânico quando as coisas não saem como planejado, mas sempre encontra uma saída criativa e cheia de estilo.",
  },
  tyrone: {
    name: "Tyrone",
    alias: "Alce Laranja",
    description:
      "Calmo, musical e sempre de bom humor. Tyrone é o mais tranquilo do grupo e raramente perde a cabeça. Ele pensa com clareza mesmo sob pressão e tem um talento natural para a música e para manter o equilíbrio entre os amigos.",
  },
  uniqua: {
    name: "Uniqua",
    alias: "Uma espécie única!",
    description:
      "Corajosa, aventureira e cheia de ideias! Uniqua é quem puxa o grupo para a próxima aventura. Ela é a mais enérgica do bando, aparece em todos os episódios e não tem medo de nenhum desafio.",
  },
  tasha: {
    name: "Tasha",
    alias: "Hipopótamo Amarelo",
    description:
      "Determinada, organizada e sabe exatamente o que quer! Tasha tem personalidade forte e gosta que tudo seja feito do jeito certo. Pode parecer mandona às vezes, mas no fundo é uma grande amiga que se preocupa com todos.",
  },
  austin: {
    name: "Austin",
    alias: "Canguru Roxo",
    description:
      "Tímido, gentil e cheio de surpresas! Austin é o mais quietinho do grupo, mas sempre aparece na hora certa com aquele apoio essencial. Por baixo da timidez mora um amigo leal que nunca abandona os companheiros.",
  },
};

class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.currentIndex = 0;
    this.answers = [];
  }

  get currentQuestion() {
    return this.questions[this.currentIndex];
  }

  get isFirst() {
    return this.currentIndex === 0;
  }

  get isLast() {
    return this.currentIndex === this.questions.length - 1;
  }

  calculateResult() {
    const totals = { pablo: 0, tyrone: 0, uniqua: 0, tasha: 0, austin: 0 };

    this.questions.forEach((question, i) => {
      const responseIndex = this.answers[i];
      if (responseIndex === undefined) return;

      const scores = question.options[responseIndex].scores;
      for (const character in scores) {
        totals[character] += scores[character];
      }
    });

    return totals;
  }

  selectOption(optionIndex) {
    this.answers[this.currentIndex] = optionIndex;
  }

  goNext() {
    if (!this.isLast) this.currentIndex++;
  }

  goPrev() {
    if (!this.isFirst) this.currentIndex--;
  }

  render() {
    const q = this.currentQuestion;
    const total = this.questions.length;
    const num = this.currentIndex + 1;
    const percent = Math.round((num / total) * 100);

    questionCounter.textContent = `Pergunta ${num} de ${total}`;
    progressPercent.textContent = `${percent}%`;
    progressFill.style.width = `${percent}%`;
    questionNumberTag.textContent = `Pergunta ${String(num).padStart(2, "0")}`;
    questionText.textContent = q.text;

    optionsContainer.innerHTML = "";

    const letters = ["A", "B", "C", "D", "E"];

    q.options.forEach((option, i) => {
      const btn = document.createElement("button");
      btn.classList.add("option-btn");
      if (this.answers[this.currentIndex] === i) btn.classList.add("selected");

      btn.innerHTML = `<span class="option-letter">${letters[i]}</span>${option.text}`;

      btn.addEventListener("click", () => {
        this.selectOption(i);
        optionsContainer
          .querySelectorAll(".option-btn")
          .forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
        btnNext.disabled = false;
      });

      optionsContainer.appendChild(btn);
    });

    btnPrev.disabled = this.isFirst;
    btnNext.textContent = this.isLast ? "Ver Resultado" : "Próxima";
    btnNext.disabled = this.answers[this.currentIndex] === undefined;
  }
}

const getResult = (quiz) => {
  const scores = quiz.calculateResult();

  const winner = Object.keys(scores).reduce((a, b) =>
    scores[a] >= scores[b] ? a : b,
  );

  const character = characters[winner];

  resultName.textContent = character.name;
  resultAlias.textContent = character.alias;
  resultDescription.textContent = character.description;
};

const quiz = new Quiz(questions);

btnStart.addEventListener("click", () => {
  welcomeScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  quiz.render();
});

btnPrev.addEventListener("click", () => {
  quiz.goPrev();
  quiz.render();
});

btnNext.addEventListener("click", () => {
  if (quiz.isLast) {
    getResult(quiz);
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    return;
  }
  quiz.goNext();
  quiz.render();
});

btnRestart.addEventListener("click", () => {
  quiz.currentIndex = 0;
  quiz.answers = [];
  resultScreen.classList.add("hidden");
  welcomeScreen.classList.remove("hidden");
});
