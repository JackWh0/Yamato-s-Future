const startScreen = document.querySelector("#start");
const tutorialScreen = document.querySelector("#tutorial");
const gameScreen = document.querySelector("#game_question");
const resumeScreen = document.querySelector("#resume");
const questionScreen = document.querySelector("#question");
const gameChoiceScreen = document.querySelector("#game_choice");

let currentChoice = '';
let i = 0;

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
    },
    setStory: (item) => {
        for (let i of item) {
            item[i].classList.remove("question");
            item[i].classList.add("story");
        }
    },
    setQuestion: (item) => {
        for (let i of item) {
            item[i].classList.remove("story");
            item[i].classList.add("question");
        }
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
    screen.show(gameScreen);
}

function checkAnswer() {
    const answer = document.querySelector("#answerTxt");

    if (answer.value.toLowerCase().includes(questions[i].questionAnswer)) {
        showMessage(true)
        screen.hide(questionScreen);
        screen.changeButtonValue(answer, '[Hack@Har ~]$ ')

        showStory(choices.get(currentChoice))
        i++;
    }
    else {
        showMessage(false)
    }
}

function chooseOption(opt) {
    if (choices.get(opt) === 'exit') {
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

    screen.changeText(questionMessage, questions[i].questionMessage);
    screen.changeCardImage(questionImage, questions[i].questionImage);
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

function showMessage(acertou) {
    const result = document.querySelector("#result");
    const message = acertou ? 'Acertou! xD' : 'Errou! :P';

    screen.show(result);
    screen.changeText(result, message);

    setTimeout(screen.hide, 2000, result)
}

function hideResume() {
    screen.hide(resumeScreen);
    screen.show(questionScreen);
}