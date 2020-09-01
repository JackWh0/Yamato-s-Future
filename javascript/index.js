let startScreen = document.querySelector("#start");
let tutorialScreen = document.querySelector("#tutorial");

let screen = {
    show: function (t) {
        t.classList.remove("hide");
        t.classList.add("show");
    },
    hide: function (t) {
        t.classList.remove("show");
        t.classList.add("hide");
    }
}

function startGame() {
    let startTxt = document.querySelector("#startTxt").value;

    if (startTxt.toLowerCase().indexOf("start") > -1) {
        screen.hide(startScreen);
        screen.show(tutorialScreen);
    }

}