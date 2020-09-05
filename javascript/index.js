let startScreen = document.querySelector("#start");
let tutorialScreen = document.querySelector("#tutorial");
let gameScreen = document.querySelector("#game");

let answers = ['alert()']
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
    if (btn.value == answers[i]) {
        showMessage(true)
        i++;
        changeOptions();
    }
    // else {
    //     showMessage(false)
    // }
}

function changeOptions() {
    let message1 = document.querySelector("#message1");
    let message2 = document.querySelector("#message2");
    let cardTitle = document.querySelector("#card-title");
    let cardText = document.querySelector("#card-text");
    let cardImage = document.querySelector('#card-image');
    let btn1 = document.querySelector("#btn1");
    let btn2 = document.querySelector("#btn2");

    setTimeout(screen.changeText, 2000, message1, 'Decisão liberada!');
    setTimeout(screen.changeCardImage, 2000, cardImage, 'https://i.imgur.com/jYHn5fl.png');
    setTimeout(screen.changeText, 2000, cardTitle, 'Yamato conseguiu hackear!');
    setTimeout(screen.changeText, 2000, message2, 'Selecione o que quer fazer:');
    setTimeout(screen.changeText, 2000, cardText, 'O governo dos EUA viu potêncial e espalhou nos noticiarios que o Yamato pode trabalhar p/ eles.' +
        ' Caso rejeite, entrará pra lista dos mais procurados do mundo!');
    setTimeout(screen.changeButtonValue, 2000, btn1, 'Aceitar emprego');
    setTimeout(screen.changeButtonValue, 2000, btn2, 'Rejeitar emprego');
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