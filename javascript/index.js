let startScreen = document.querySelector("#start");
let tutorialScreen = document.querySelector("#tutorial");
let gameScreen = document.querySelector("#game");

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

    if (startTxt.toLowerCase().indexOf("start") > -1) {
        screen.hide(startScreen);
        screen.show(tutorialScreen);
    }
}

function startGame() {
    screen.hide(tutorialScreen);
    screen.show(gameScreen);
}

function checkAnswer(btn) {
    let itemType = document.querySelectorAll(".type");
    let isQuestion = itemType[0].classList[4].indexOf("question") > -1;
    
    if (isQuestion) {
        if (btn == answers[i]) {
            showMessage(true)
            i++;
            screen.setStory(itemType);
            showStory(btn)
        }
        else {
            showMessage(false)
        }
    } else {
        showQuestion(btn);
    }
}

function showStory(choice) {
    alert('your choice was: ' + choice)
    let message1 = document.querySelector("#message1");
    let message2 = document.querySelector("#message2");
    let cardTitle = document.querySelector("#card-title");
    let cardText = document.querySelector("#card-text");
    let cardImage = document.querySelector('#card-image');
    let btn1 = document.querySelector("#btn1");
    let btn2 = document.querySelector("#btn2");
    let itemType = document.querySelector("#info-type");

    setTimeout(screen.changeText, 2000, message1, story[0].msg1);
    setTimeout(screen.changeCardImage, 2000, cardImage, story[0].cardImg);
    setTimeout(screen.changeText, 2000, cardTitle, story[0].cardTitle);
    setTimeout(screen.changeText, 2000, message2, story[0].msg2);
    setTimeout(screen.changeText, 2000, cardText, story[0].cardTxt);
    setTimeout(screen.changeButtonValue, 2000, btn1, story[0].opt1);
    setTimeout(screen.changeButtonValue, 2000, btn2, story[0].opt2);
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
        screen.changeText(result, 'Errou! :P');
    }
    setTimeout(screen.hide, 2000, result)
}