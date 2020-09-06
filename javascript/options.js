let story = [
    {
        msg1: 'Decisão liberada!',
        msg2: 'Selecione o que quer fazer:',
        cardImg: 'https://i.imgur.com/jYHn5fl.png',
        cardTitle: 'Yamato conseguiu hackear!',
        cardTxt: 'O governo dos EUA viu potêncial e espalhou nos noticiarios que o Yamato pode trabalhar p/ eles.' +
            ' Caso rejeite, entrará pra lista dos mais procurados do mundo!',
        opt1: 'Aceitar emprego',
        opt2: 'Rejeitar emprego'
    }
]

let choice = [{
    aceitou: function () {
        return story[1];
    },
    rejeitou: function () {
        return story[2];
    }
}]