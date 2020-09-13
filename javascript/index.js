let startScreen = document.querySelector("#start");
let tutorialScreen = document.querySelector("#tutorial");
let gameScreen = document.querySelector("#game_question");
let resumeScreen = document.querySelector("#resume");
let questionScreen = document.querySelector("#question");

let questions = ['[Js] Selecione a função que mostra uma mensagem para o usuário',
    '[Js] Selecione a função que mostra uma mensagem no console do browser'];
let answers = ['alert()', 'console.log'];
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

    if (answer.value.includes(answers[i])) {
        showMessage(true)
        i++;
        screen.hide(questionScreen)
        showStory()
    }
    else {
        showMessage(false)
    }
}

function showStory() {
    //alert('your choice was: ' + choice)
    let gameChoice = document.querySelector("#game_choice")
    let message1 = document.querySelector("#message1");
    let message2 = document.querySelector("#message2");
    let cardTitle = document.querySelector("#card-title");
    let cardText = document.querySelector("#card-text");
    let cardImage = document.querySelector('#card-image');
    let btn1 = document.querySelector("#btn1");
    let btn2 = document.querySelector("#btn2");

    screen.show(gameChoice)
    screen.changeText(message1, story[0].msg1);
    screen.changeCardImage(cardImage, story[0].cardImg);
    screen.changeText(cardTitle, story[0].cardTitle);
    screen.changeText(message2, story[0].msg2)
    screen.changeButtonValue(btn1, story[0].opt1);
    screen.changeButtonValue(btn2, story[0].opt2);
    screen.changeText(cardText, story[0].cardTxt);
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