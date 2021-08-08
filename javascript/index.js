const startScreen = document.querySelector("#start");
const tutorialScreen = document.querySelector("#tutorial");
const gameScreen = document.querySelector("#game_question");
const resumeScreen = document.querySelector("#resume");
const questionScreen = document.querySelector("#question");
const gameChoiceScreen = document.querySelector("#game_choice");

let currentChoice = '';
let question;
setNewRandomQuestion();

const screen = {
  show: (item) => {
    item.classList.remove("hide");
    item.classList.add("show");
  },
  hide: (item) => {
    item.classList.remove("show");
    item.classList.add("hide");
  },
  changeCardImage: (item, img) => {
    item.src = img;
  },
  changeText: (item, message) => {
    item.innerHTML = message;
  },
  changeButtonValue: (btn, txt) => {
    btn.value = txt;
  }
}

function showTutorial() {
  const startTxt = document.querySelector("#startTxt").value;

  if (startTxt.toLowerCase().includes("start")) {
    screen.hide(startScreen);
    screen.show(tutorialScreen);
  }
}

function startGame() {
  screen.hide(tutorialScreen);
  continueStory(choices.get('start'));
  screen.show(gameScreen);
}

function checkAnswer() {
  const answer = document.querySelector("#answerTxt");

  if (answer.value.toLowerCase().includes(question.questionAnswer)) {
    screen.hide(questionScreen);
    screen.changeButtonValue(answer, '[Hack@Har ~]$ ')

    showStory(choices.get(currentChoice))
    setNewRandomQuestion();
  }
  else {
    showHint();
  }
}

function chooseOption(opt) {
  if (choices.get(opt).continueTitle === 'exit') {
    location.reload();
  } else {
    continueStory(choices.get(opt));
    screen.hide(gameChoiceScreen);
    screen.show(resumeScreen)
    currentChoice = opt;
  }
}

function continueStory(story) {
  const continueTitle = document.querySelector("#continueTitle");
  const continueText = document.querySelector("#continueText");
  const continueImage = document.querySelector("#continueImage");
  const questionMessage = document.querySelector("#questionMessage");
  const questionImage = document.querySelector("#questionImage");

  screen.changeText(questionMessage, question.questionMessage);
  screen.changeCardImage(questionImage, question.questionImage);
  screen.changeCardImage(continueImage, story.continueImage);
  screen.changeText(continueTitle, story.continueTitle);
  screen.changeText(continueText, story.continueText)
}

function showStory(story) {
  const cardTitle = document.querySelector("#card-title");
  const cardText = document.querySelector("#card-text");
  const cardImage = document.querySelector('#card-image');
  const btn1 = document.querySelector("#btn1");
  const btn2 = document.querySelector("#btn2");

  screen.show(gameChoiceScreen)
  screen.changeCardImage(cardImage, story.cardImg);
  screen.changeText(cardTitle, story.cardTitle);
  screen.changeButtonValue(btn1, story.opt1);
  screen.changeButtonValue(btn2, story.opt2);
  screen.changeText(cardText, story.cardTxt);
}

function hideResume() {
  screen.hide(resumeScreen);
  screen.show(questionScreen);
}

function up () {
  window.scrollTo(0, 0);
};

function setNewRandomQuestion() {
  let randomIndexQuestion = Math.floor(Math.random() * (questions.length - 1));
  let randomQuestion = questions[randomIndexQuestion];

  question =  randomQuestion;
  console.log(question);

  removeQuestionFromArray(randomQuestion);
}

function removeQuestionFromArray(question) {
    let index = questions.indexOf(question);
    questions.splice(index, 1);
}

function showHint() {
    const hintDescription = document.querySelector("#hintDescription");
    const hintAnswer = document.querySelector("#hintAnswer");

    screen.changeText(hintDescription, question.hintDescription);
    screen.changeText(hintAnswer, question.hintAnswer);

  $("#hintModal").modal();
}