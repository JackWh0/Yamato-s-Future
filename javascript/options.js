const questions = [
  {
    questionMessage: '[JS] Digite o nome da função que mostra uma mensagem na tela do usuário',
    questionImage: 'images/alert.png',
    questionAnswer: 'alert',
    hintDescription: 'A resposta começa com "A"',
    hintAnswer: '_LER_'
  },
  {
    questionMessage: 'Qual termo em inglês usado para denominar partes físicas do computador?',
    questionImage: 'images/hardware.jpg',
    questionAnswer: 'hardware',
    hintDescription: 'Teclado, mouse e monitor são exemplos de...',
    hintAnswer: 'H_RD_A_E'
  },
  {
    questionMessage: '[Js] Quando quero mostrar uma mensagem no console do browser, eu uso...?',
    questionImage: 'images/console.png',
    questionAnswer: 'console.log',
    hintDescription: 'A resposta é...',
    hintAnswer: 'cons_l_.log'
  },
  {
    questionMessage: '[Js] Qual propriedade de uma String é usada para ver o comprimento de uma palavra/frase?',
    questionImage: 'images/length.png',
    questionAnswer: 'length',
    hintDescription: 'A resposta é "comprimento" em inglês',
    hintAnswer: 'L_NG_H'
  },
  {
    questionMessage: 'Qual termo em inglês é usado para se referir a um erro não esperado nos códigos?',
    questionImage: 'images/bug.jpg',
    questionAnswer: 'bug',
    hintDescription: 'A resposta é uma das formas de dizer "besouro" em inglês',
    hintAnswer: 'B_G'
  }
]

const choices = {
  get: (opt) => {
    switch (opt) {
      case 'Reiniciar jogo':
      case 'Sair':
        return {
          continueTitle: 'exit'
        };
      case 'Aceitar emprego':
        return {
          continueTitle: '30/11/2032 - McCarran International Airport...',
          continueText: 'Yamato acaba de aterrissar em solo americano após a decisão de trabalhar para os EUA.',
          continueImage: 'images/02.png',
          cardImg: 'images/03.png',
          cardTitle: 'Aceitou o trabalho!',
          cardTxt: 'Agora que trabalha p/ eles, o governo quer que você use seus dons para liderar um projeto que visa ' +
            'criar robôs com inteligência artificial que unificará todos os países e eles serão os lideres.',
          opt1: 'Obedecer',
          opt2: 'Desobedecer'
        };
      case 'Obedecer':
        return {
          continueTitle: '10/12/2032 - Guerra de Otakus',
          continueText: 'O mundo descobriu os planos dos EUA e a terceira guerra mundial começou!',
          continueImage: 'images/04.png',
          cardImg: 'images/05.png',
          cardTitle: 'Obedeceu a ordem de liderar o projeto',
          cardTxt: 'Você aceitou liderar o projeto e agora Yamato é visto como um terrorista pelo mundo. ' +
            'Porém, você tem a chance de sabotar o projeto e acabar com a guerra.',
          opt1: 'Sabotar Projeto',
          opt2: 'Não Sabotar Projeto'
        };
      case 'Sabotar Projeto':
        return {
          continueTitle: 'Yamato sabotou o projeto',
          continueText: 'Ao contrário do que o governo queria, Yamato programou os robôs para obedecer somente a ele,' +
            ' e os usou para parar a guerra.',
          continueImage: 'images/06.png',
          cardImg: 'images/06.png',
          cardTitle: 'Game Over!',
          cardTxt: 'Sua história termina aqui...! Mas existem outros finais para ver xD! Neste final, Yamato conseguiu parar' +
            " a guerra e foi o único capaz de controlar os robôs. Sendo, mais tarde, considerado um gênio por suas contribuições " +
            "à área da inteligência artificial.",
          opt1: 'Reiniciar jogo',
          opt2: 'Sair'
        };
      case 'Não Sabotar Projeto':
        return {
          continueTitle: 'Yamato não sabotou o projeto',
          continueText: 'Graças a você, a inteligência artificial dada aos robôs se tornou submissa apenas ao governo dos EUA, ' +
            'e o resto do mundo foi dominado pelo poder de fogo deles. Agora, os EUA finalmente conquistaram a dominação mundial!',
          continueImage: 'images/07.png',
          cardImg: 'images/08.png',
          cardTitle: 'Game Over!',
          cardTxt: 'Sua história termina aqui...! Mas existem outros finais para ver xD! Neste final, Yamato foi frio e seguiu ordens ' +
            'sem questionar. Como consequência, os EUA venceu a guerra e conquistou a dominação mundial. Yamato viveu pelo resto da vida sem ' +
            'amigos e sendo ignorado por todos por conta de suas decisões.',
          opt1: 'Reiniciar jogo',
          opt2: 'Sair'
        };
      case 'Desobedecer':
        return {
          continueTitle: '10/12/2032 - Em algum lugar dos EUA',
          continueText: 'Yamato revelou os planos dos EUA e a opinião pública se divide entre acreditar ou não.',
          continueImage: 'images/09.png',
          cardImg: 'images/10.png',
          cardTitle: 'Capturado!',
          cardTxt: 'Os EUA não confiam mais no Yamato, e agora querem o sentenciar à morte. Porém, ele consegue ' +
            'passar despercebido pelos guardas e consegue uma chance de fugir.',
          opt1: 'Fugir',
          opt2: 'Ficar'
        };
      case 'Fugir':
        return {
          continueTitle: '10/12/2032 - Nave Alienigena',
          continueText: 'Após sair de dentro da base secreta, Yamato foi abduzido por aliens como uma tentativa de resgate. ',
          continueImage: 'images/11.png',
          cardImg: 'images/12.png',
          cardTitle: 'Abduzido por aliens!',
          cardTxt: 'Por admiração de ter evitado uma guerra e por sua inteligência avançada, eles o oferecem a oportunidade de viajar ' +
            ' pelo espaço e aprender mais sobre a cultura de outros seres.',
          opt1: 'Viajar pelo espaço',
          opt2: 'Voltar para a terra'
        };
      case 'Viajar pelo espaço':
        return {
          continueTitle: 'Evolução da espécie',
          continueText: 'Após aceitar viajar com os aliens, Yamato passou anos adquirindo conhecimento, até que em certo ponto, evoluiu ' +
            'para um novo tipo de ser humano! ',
          continueImage: 'images/13.png',
          cardImg: 'images/13.png',
          cardTitle: 'Game Over!',
          cardTxt: 'Sua história termina aqui...! Mas existem outros finais para ver xD! Neste final, Yamato passou anos adquirindo conhecimento ' +
            'em suas viagens estelares e evoluiu para um novo tipo de ser humano! Agora, ele possui olhos que veem tudo como uma grande ' +
            'sequência de códigos, e com sua mente, consegue os reescrever se assim desejar. Com este poder, ele salvou diversos planetas e galáxias.',
          opt1: 'Reiniciar jogo',
          opt2: 'Sair'
        };
      case 'Voltar para a terra':
        return {
          continueTitle: 'Considerado herói!',
          continueText: 'Após decidir voltar para a terra, os aliens te deixam em um lugar seguro e espalham provas de que você estava falando ' +
            'a verdade.',
          continueImage: 'images/14.png',
          cardImg: 'images/15.png',
          cardTitle: 'Game Over!',
          cardTxt: 'Sua história termina aqui...! Mas existem outros finais para ver xD! Neste final, Yamato foi considerado um herói pela sua ' +
            'coragem de revelar segredos que colocaram sua vida em risco, e inaugurou sua própria empresa de segurança cibernética. Com ' +
            'sua fama, ele conseguiu muitos clientes e logo se tornou uma das pessoas mais ricas do planeta!',
          opt1: 'Reiniciar jogo',
          opt2: 'Sair'
        };
      case 'Ficar':
        return {
          continueTitle: 'EUA - Prisão de segurança máxima',
          continueText: 'Yamato decidiu não fugir, e foi enviado para uma prisão de segurança máxima.',
          continueImage: 'images/16.png',
          cardImg: 'images/16.png',
          cardTitle: 'Game Over!',
          cardTxt: 'Sua história termina aqui...! Mas existem outros finais para ver xD! Neste final, você decidiu que Yamato deveria enfrentar sua ' +
            'sentença, e por isso, ele foi enviado a uma prisão de segurança máxima. Só que em vez de pena de morte, ele foi condenado a ficar ' +
            'preso pelo resto da vida em uma cela pequena e sem contato com outros humanos.',
          opt1: 'Reiniciar jogo',
          opt2: 'Sair'
        };
      case 'Rejeitar emprego':
        return {
          continueTitle: "30/11/2032 - Cafeteria",
          continueText: 'Após rejeitar a propósta dos EUA, Yamato sabe que está na lista dos mais procurados do mundo.',
          continueImage: 'images/17.png',
          cardImg: 'images/18.png',
          cardTitle: 'Rejeitou o trabalho!',
          cardTxt: 'Yamato descobriu que foi denunciado por outro hacker, e que a polícia está a caminho de onde ele ' +
            'está agora. Por ter um carro e conhecer bem as ruas onde mora, ele tem uma chance de tentar fugir!',
          opt1: 'Esperar a polícia',
          opt2: 'Fugir da polícia'
        };
      case 'Esperar a polícia':
        return {
          continueTitle: '02/12/2032 - Prisão nos EUA',
          continueText: 'Após se entregar, Yamato foi preso e enviado para os EUA, onde foi recebido em uma prisão de segurança máxima.',
          continueImage: 'images/19.png',
          cardImg: 'images/20.png',
          cardTitle: 'Esperando julgamento',
          cardTxt: 'Já se passaram quatro meses, e Yamato conseguiu a confiança dos guardas, que pelo seu bom comportamento, ' +
            'o deixam andar pela prisão livremente. Em um de seus passeios, ele vê um computador sem guardas por ' +
            'perto, e tem a chance de hackear o sistema para ser liberado mais cedo.',
          opt1: 'Hackear',
          opt2: 'Não hackear'
        };
      case 'Hackear':
        return {
          continueTitle: 'Conseguiu acesso ao computador!',
          continueText: 'Yamato está hackeando o sistema da prisão para mudar suas informações e diminuir sua sentença.',
          continueImage: 'images/21.png',
          cardImg: 'images/22.png',
          cardTitle: 'Foi liberado!',
          cardTxt: 'Por ser um gênio, Yamato hackeia o sistema da prisão facilmente e é liberado no dia seguinte. Por estar ' +
            'tudo nos conformes, os guardas o liberam sem questionamentos. Agora, ele deve decidir se deve ou não se ' +
            'vingar dos EUA por tudo que passou.',
          opt1: 'Se vingar',
          opt2: 'Não se vingar'
        };
      case 'Se vingar':
        return {
          continueTitle: 'Vingança!',
          continueText: 'Para se vingar, Yamato provoca um crash na bolsa de valores de New York, deixando o país na crise.',
          continueImage: 'images/23.png',
          cardImg: 'images/23.png',
          cardTitle: 'Game Over!',
          cardTxt: 'Sua história termina aqui...! Mas existem outros finais para ver xD! Neste final, Yamato foi capturado ' +
            'e preso pelos EUA, mas conseguiu fugir e se vingar radicalmente! Após isso, ele mudou sua identidade para ' +
            'não ser mais reconhecido e desde então, não foi mais visto...',
          opt1: 'Reiniciar jogo',
          opt2: 'Sair'
        };
      case 'Não se vingar':
        return {
          continueTitle: 'Não se vingou!',
          continueText: 'Yamato aprendeu desde cedo que a vingança nunca é plena, mata a alma e a envenena. E deixou o passado para trás.',
          continueImage: 'images/24.png',
          cardImg: 'images/24.png',
          cardTitle: 'Game Over!',
          cardTxt: 'Sua história termina aqui...! Mas existem outros finais para ver xD! Neste final, Yamato não se vingou dos EUA e ' +
            'mudou de identidade após sair da prisão. Após alguns anos, ele criou um aplicativo revolucionário e se tornou extremamente ' +
            'rico.',
          opt1: 'Reiniciar jogo',
          opt2: 'Sair'
        };
      case 'Não hackear':
        return {
          continueTitle: 'Liberado!',
          continueText: 'Yamato cumpriu sua sentença e após alguns anos, foi liberado.',
          continueImage: 'images/22.png',
          cardImg: 'images/22.png',
          cardTitle: 'Game Over!',
          cardTxt: 'Sua história termina aqui...! Mas existem outros finais para ver xD! Neste final, você decidiu que Yamato não deveria ' +
            'hackear o sistema. Porém, após ser visto por um dos guardas perto do computador, ele foi obrigado a retornar a retornar a ' +
            'sua cela e passou a ser tratado como perigoso pelo resto de seus dias na prisão. Após alguns anos, ele foi liberado.',
          opt1: 'Reiniciar jogo',
          opt2: 'Sair'
        };
      case 'Fugir da polícia':
        return {
          continueTitle: 'Perseguição!',
          continueText: 'Durante a fuga, Yamato começa a ser perseguido pela polícia!',
          continueImage: 'images/25.png',
          cardImg: 'images/25.png',
          cardTitle: 'Fuga perigosa',
          cardTxt: 'Agora que está sendo perseguido pela polícia, Yamato deve pensar de forma rápida como despistá-los. ' +
            'Após alguns segundos, ele se pergunta se conseguiria fazer uma manobra que o tiraria da estrada.',
          opt1: 'Fazer manobra',
          opt2: 'Não fazer manobra'
        };
      case 'Fazer manobra':
        return {
          continueTitle: 'Manobra radical!',
          continueText: 'Após fazer a manobra, o carro capotou e o Yamato foi preso!',
          continueImage: 'images/16.png',
          cardImg: 'images/19.png',
          cardTitle: 'Game Over!',
          cardTxt: 'Sua história termina aqui...! Mas existem outros finais para ver xD! Neste final, você optou por fazer ' +
            'com que o Yamato fosse um dos mais procurados do mundo, e quase o matou em uma manobra durante a fuga. ' +
            'Felizmente, Yamato saiu sem machucados graves, mas foi preso em seguida pela polícia.',
          opt1: 'Reiniciar jogo',
          opt2: 'Sair'
        };
      case 'Não fazer manobra':
        return {
          continueTitle: 'Fuga impecável!',
          continueText: 'Enquanto fugia, Yamato percebeu que a melhor alternativa para despistar os carros da polícia seria ' +
            'batendo o carro.',
          continueImage: 'images/26.png',
          cardImg: 'images/26.png',
          cardTitle: 'Game Over!',
          cardTxt: 'Sua história termina aqui...! Mas existem outros finais para ver xD! Neste final, Yamato bateu o carro em uma árvore ' +
            'e o carro explodiu. Mas, o que a polícia não sabe, é que tudo isso foi uma distração para sua fuga. Explicação: Enquanto ' +
            'fazia uma curva, Yamato deixou um sapato pressionando o acelerador e pulou do carro em movimento. (Forjou a própria morte ' +
            'e fugiu!) ',
          opt1: 'Reiniciar jogo',
          opt2: 'Sair'
        };
      default:
        return {
          continueTitle: '29/11/2032 - Em algum lugar do Japão...',
          continueText: 'Yamato está em seu quarto tentando hackear informações secretas da área 51 sobre alienigenas.',
          continueImage: 'images/01.png',
          cardImg: 'images/27.png',
          cardTitle: 'Yamato conseguiu hackear!',
          cardTxt: 'O governo dos EUA viu potêncial e espalhou nos noticiarios que o Yamato pode trabalhar p/ eles.' +
            ' Caso rejeite, entrará pra lista dos mais procurados do mundo!',
          opt1: 'Aceitar emprego',
          opt2: 'Rejeitar emprego'
        };
    }
  }
}