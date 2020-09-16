let questions = [
    {
        questionMessage: '[JS] Digite o nome da função que mostra uma mensagem na tela do usuário',
        questionImage: 'https://i.imgur.com/GEzcVtW.png',
        questionAnswer: 'alert()'
    },
    {
        questionMessage: 'Qual termo em inglês usado para denominar partes físicas do computador?',
        questionImage: 'https://i.imgur.com/zZav5eK.jpg',
        questionAnswer: 'hardware'
    },
    {
        questionMessage: '[Js] Qual função mostra uma mensagem no console do browser?',
        questionImage: 'https://i.imgur.com/mUunZB9.png',
        questionAnswer: 'console.log()'
    },
    {
        questionMessage: '[Js] Qual propriedade de uma String é usada para ver o comprimento de uma palavra/frase?',
        questionImage: 'https://i.imgur.com/d9dKzsM.png',
        questionAnswer: 'length'
    },
    {
        questionMessage: 'Qual termo em inglês é usado para se referir a um erro não esperado nos códigos?',
        questionImage: 'https://i.imgur.com/E5w6enY.jpg',
        questionAnswer: 'bug'
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
        cardTxt: 'Agora que trabalha p/ eles, o governo quer que você use seus dons para liderar um projeto que visa ' +
            'criar robôs com inteligência artificial que unificará todos os países e eles serão os lideres.',
        opt1: 'Obedecer',
        opt2: 'Desobedecer'
    },
    {
        continueTitle: '10/12/2032 - Guerra de Otakus',
        continueText: 'O mundo descobriu os planos dos EUA e a terceira guerra mundial começou!',
        continueImage: 'https://i.imgur.com/zdtbIQB.png',
        cardImg: 'https://i.imgur.com/ugdmQTb.png',
        cardTitle: 'Obedeceu a ordem de liderar o projeto',
        cardTxt: 'Você aceitou liderar o projeto e agora Yamato é visto como um terrorista pelo mundo. ' +
            'Porém, você tem a chance de sabotar o projeto e acabar com a guerra.',
        opt1: 'Sabotar Projeto',
        opt2: 'Não Sabotar Projeto'
    },
    {
        continueTitle: 'Yamato sabotou o projeto',
        continueText: 'Ao contrário do que o governo queria, Yamato programou os robôs para obedecer somente a ele,' +
            ' e os usou para parar a guerra.',
        continueImage: 'https://i.imgur.com/PBoUt1D.png',
        cardImg: 'https://i.imgur.com/q9bFY2X.png',
        cardTitle: 'Game Over!',
        cardTxt: 'Sua história termina aqui...! Mas existem outros finais para ver xD! Neste final, Yamato conseguiu parar' +
            " a guerra e foi o único capaz de controlar os robôs. Sendo, mais tarde, considerado um gênio por suas contribuições " +
            "à área da inteligência artificial.",
        opt1: 'Reiniciar jogo',
        opt2: 'Sair'
    },
    {
        continueTitle: 'Yamato não sabotou o projeto',
        continueText: 'Graças a você, a inteligência artificial dada aos robôs se tornou submissa apenas ao governo dos EUA, ' +
            'e o resto do mundo foi dominado pelo poder de fogo deles. Agora, os EUA finalmente conquistaram a dominação mundial!',
        continueImage: 'https://i.imgur.com/L6LGQ6l.png',
        cardImg: 'https://i.imgur.com/q9bFY2X.png',
        cardTitle: 'Game Over!',
        cardTxt: 'Sua história termina aqui...! Mas existem outros finais para ver xD! Neste final, Yamato foi frio e seguiu ordens ' +
            'sem questionar. Como consequência, os EUA venceu a guerra e conquistou a dominação mundial. Yamato viveu pelo resto da vida sem ' +
            'amigos e sendo ignorado por todos por conta de suas decisões.',
        opt1: 'Reiniciar jogo',
        opt2: 'Sair'
    },
    {
        continueTitle: '10/12/2032 - Base secreta nos EUA',
        continueText: 'Yamato revelou os planos dos EUA e a opinião pública se divide entre acreditar ou não.',
        continueImage: 'https://i.imgur.com/q9bFY2X.png',//imagem provisoria
        cardImg: 'https://i.imgur.com/q9bFY2X.png',//imagem provisoria
        cardTitle: 'Desobedeceu a ordem de liderar o projeto!',
        cardTxt: 'Os EUA não confiam mais no Yamato, e agora querem o sentenciar à morte. Porém, ele consegue ' +
            'passar despercebido pelos guardas e consegue uma chance de fugir.',
        opt1: 'Fugir',
        opt2: 'Ficar'
    },
    {
        continueTitle: '10/12/2032 - Nave Alienigena',
        continueText: 'Após sair de dentro da base secreta, Yamato foi abduzido por aliens como uma tentativa de resgate. ',
        continueImage: 'https://i.imgur.com/q9bFY2X.png',//imagem provisoria
        cardImg: 'https://i.imgur.com/q9bFY2X.png',//imagem provisoria
        cardTitle: 'Abduzido por aliens!',
        cardTxt: 'Por admiração de ter evitado uma guerra e por sua inteligência avançada, eles o oferecem a oportunidade de viajar ' +
            ' pelo espaço e aprender mais sobre a cultura de outros seres.',
        opt1: 'Viajar pelo espaço',
        opt2: 'Voltar para a terra'
    },
    {
        continueTitle: 'Evolução da espécie',
        continueText: 'Após aceitar viajar com os aliens, Yamato passou anos adquirindo conhecimento, até que em certo ponto, evoluiu ' +
            'para um novo tipo de ser humano! ',
        continueImage: 'https://i.imgur.com/q9bFY2X.png',//imagem provisoria
        cardImg: 'https://i.imgur.com/q9bFY2X.png',//imagem provisoria
        cardTitle: 'Game Over!',
        cardTxt: 'Sua história termina aqui...! Mas existem outros finais para ver xD! Neste final, Yamato passou anos adquirindo conhecimento ' +
            'em suas viagens estelares e evoluiu para um novo tipo de ser humano! Agora, ele possui olhos que veem tudo como uma grande ' +
            'sequência de códigos, e com sua mente, consegue os reescrever se assim desejar. Com este poder, ele salvou diversos planetas e galáxias.',
        opt1: 'Reiniciar jogo',
        opt2: 'Sair'
    },
    {
        continueTitle: 'Considerado herói!',
        continueText: 'Após decidir voltar para a terra, os aliens te deixam em um lugar seguro e espalham provas de que você estava falando ' +
            'a verdade.',
        continueImage: 'https://i.imgur.com/q9bFY2X.png',//imagem provisoria
        cardImg: 'https://i.imgur.com/q9bFY2X.png',//imagem provisoria
        cardTitle: 'Game Over!',
        cardTxt: 'Sua história termina aqui...! Mas existem outros finais para ver xD! Neste final, Yamato foi considerado um herói pela sua ' +
            'coragem de revelar segredos que colocaram sua vida em risco, e inaugurou sua própria empresa de segurança cibernética. Com ' +
            'sua fama, ele conseguiu muitos clientes e logo se tornou uma das pessoas mais ricas do planeta!',
        opt1: 'Reiniciar jogo',
        opt2: 'Sair'
    },
    {
        continueTitle: 'EUA - Prisão de segurança máxima',
        continueText: 'Yamato decidiu não fugir, e foi enviado para uma prisão de segurança máxima.',
        continueImage: 'https://i.imgur.com/q9bFY2X.png',//imagem provisoria
        cardImg: 'https://i.imgur.com/q9bFY2X.png',//imagem provisoria
        cardTitle: 'Game Over!',
        cardTxt: 'Sua história termina aqui...! Mas existem outros finais para ver xD! Neste final, você decidiu que Yamato deveria enfrentar sua '+
                'sentença, e por isso, ele foi enviado a uma prisão de segurança máxima. Só que em vez de pena de morte, ele foi condenado a ficar '+
                'preso pelo resto da vida em uma sela pequena e sem contato com outros humanos.',
        opt1: 'Reiniciar jogo',
        opt2: 'Sair'
    }
]

let choices = {
    get: function (opt) {
        switch (opt) {
            case 'Reiniciar jogo':
            case 'Sair':
                return 'exit';
            case 'Aceitar emprego':
                return stories[1];
            case 'Obedecer':
                return stories[2];
            case 'Sabotar Projeto':
                return stories[3];
            case 'Não Sabotar Projeto':
                return stories[4];
            case 'Desobedecer':
                return stories[5];
            case 'Fugir':
                return stories[6];
            case 'Viajar pelo espaço':
                return stories[7];
            case 'Voltar para a terra':
                return stories[8];
            case 'Ficar':
                return stories[9];
            default:
                return stories[0];

        }
    }
}