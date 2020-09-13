let questions = [
    {
        questionMessage: '[JS] Digite o nome da função que mostra uma mensagem na tela do usuário',
        questionImage: 'https://i.imgur.com/GEzcVtW.png',
        questionAnswer: 'alert()'
    },
    {
        questionMessage: '[Js] Qual função mostra uma mensagem no console do browser?',
        questionImage: 'https://i.imgur.com/mUunZB9.png',
        questionAnswer: 'console.log()'
    }
]

let stories = [
    {
        continueTitle: '29/11/2032 - Em algum lugar do Japão...',
        continueText: 'Yamato está em seu quarto tentando hackear informações secretas da área 51 sobre alienigenas.',
        continueImage: 'https://i.imgur.com/SLntno4.png',
        cardImg: 'https://i.imgur.com/jYHn5fl.png',
        cardTitle: 'Yamato conseguiu hackear!',
        cardTxt: 'O governo dos EUA viu potêncial e espalhou nos noticiarios que o Yamato pode trabalhar p/ eles.' +
            ' Caso rejeite, entrará pra lista dos mais procurados do mundo!',
        opt1: 'Aceitar emprego',
        opt2: 'Rejeitar emprego'
    },
    {
        continueTitle: '30/11/2032 - McCarran International Airport...',
        continueText: 'Yamato acaba de aterrissar em solo americano após a decisão de trabalhar para os EUA.',
        continueImage: 'https://i.imgur.com/GJoKGiw.png',
        cardImg: 'https://i.imgur.com/5cTyOtu.png',
        cardTitle: 'Aceitou o trabalho!',
        cardTxt: 'Agora que trabalha p/ eles, o governo quer que você use seus dons para iniciar o projeto de ' +
                'criar um robô com inteligência artificial que unificará todos os países e eles serão os lideres.',
        opt1: 'Obedecer',
        opt2: 'Desobedecer'
    }
]

let choices = {
    get: function (opt){
        switch(opt){
            case 'Aceitar emprego':
                return stories[1];
                break;
                default:
                    return stories[0];
                    break;
        }
    }
}