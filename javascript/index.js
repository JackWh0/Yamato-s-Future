let startScreen = document.querySelector("#start");
let tutorialScreen = document.querySelector("#tutorial");
let gameScreen = document.querySelector("#game_question");
let resumeScreen = document.querySelector("#resume");
let questionScreen = document.querySelector("#question");
let gameChoiceScreen = document.querySelector("#game_choice")

let i = 0;

let screen = {
    show: function (item) {
        item.classList.remove("hide");
        item.classList.add("show");
    },
    hide: function (item) {
        item.classList.remove("show");
        item.classList.add("hide");
    },
    changeCardImage: function (item, img) {
        item.src = img;
    },
    changeText: function (item, message) {
        item.innerHTML = message;
    },
    changeButtonValue: function (btn, txt) {
        btn.value = txt;
    },
    setStory: function (item) {
        for (let i = 0; i < item.length; i++) {
            item[i].classList.remove("question");
            item[i].classList.add("story");
        }
    },
    setQuestion: function (item) {
        for (let i = 0; i < item.length; i++) {
            item[i].classList.remove("story");
            item[i].classList.add("question");
        }
    }
}

function showTutorial() {
    let startTxt = document.querySelector("#startTxt").value;

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
    let answer = document.querySelector("#answerTxt");

    console.log(questions[i]);
    if (answer.value.includes(questions[i].questionAnswer)) {
        showMessage(true)
        screen.hide(questionScreen);
        screen.changeButtonValue(answer, '[Hack@Har ~]$ ')
        showStory(stories[i])
        i++;
    }
    else {
        showMessage(false)
    }
}

function chooseOption(opt){
    continueStory(choices.get(opt));
    screen.hide(gameChoiceScreen);
    screen.show(resumeScreen)
}

function continueStory(story){
    let continueTitle = document.querySelector("#continueTitle");
    let continueText = document.querySelector("#continueText");
    let continueImage = document.querySelector("#continueImage");
    let questionMessage = document.querySelector("#questionMessage");
    let questionImage = document.querySelector("#questionImage");

    screen.changeText(questionMessage, questions[i].questionMessage);
    screen.changeCardImage(questionImage, questions[i].questionImage);
    screen.changeCardImage(continueImage, story.continueImage);
    screen.changeText(continueTitle, story.continueTitle)
    screen.changeText(continueText, story.continueText)
}

function showStory(story) {
    let cardTitle = document.querySelector("#card-title");
    let cardText = document.querySelector("#card-text");
    let cardImage = document.querySelector('#card-image');
    let btn1 = document.querySelector("#btn1");
    let btn2 = document.querySelector("#btn2");

    screen.show(gameChoiceScreen)
    screen.changeCardImage(cardImage, story.cardImg);
    screen.changeText(cardTitle, story.cardTitle);
    screen.changeButtonValue(btn1, story.opt1);
    screen.changeButtonValue(btn2, story.opt2);
    screen.changeText(cardText, story.cardTxt);
}

function showQuestion(choice) {
    alert('your choice was: ' + choice)
}

function showMessage(acertou) {
    let result = document.querySelector("#result");
    screen.show(result);

    if (acertou) {
        screen.changeText(result, 'Acertou! xD');
    } else {
        screen.changeText(result, `Dica: Em funções, use os parênteses para a resposta ser reconhecida! :P`);
    }
    setTimeout(screen.hide, 2000, result)
}

function hideResume() {
    screen.hide(resumeScreen);
    screen.show(questionScreen);
}