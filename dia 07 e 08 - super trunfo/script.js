var carta1 = {
    nome: "Pikachu",
    imagem:
        "https://d17lbu6bbzbdc8.cloudfront.net/wp-content/uploads/2020/06/10214056/Ash-Pikachu.jpg",
    atributos: {
        ataque: 55,
        defesa: 30,
        velocidade: 90
    }
};

var carta2 = {
    nome: "Bulbasaur",
    imagem:
        "https://i.pinimg.com/originals/e0/92/1e/e0921e6715a03d3b52ee653a27556850.jpg",
    atributos: {
        ataque: 49,
        defesa: 49,
        velocidade: 45
    }
};

var carta3 = {
    nome: "Charmander",
    imagem:
        "https://i.pinimg.com/736x/16/3c/f0/163cf0e64be3285899c41f0d39046219--pokemon-it-pokemon-craft.jpg",
    atributos: {
        ataque: 52,
        defesa: 43,
        velocidade: 65
    }
};

var carta4 = {
    nome: "Squirtle",
    imagem:
        "https://i.pinimg.com/564x/1b/47/3a/1b473a97ded04ac7c5b85eaf2baa5441--pokemon-birthday-pokemon-images.jpg",
    atributos: {
        ataque: 48,
        defesa: 65,
        velocidade: 43
    }
};

var carta5 = {
    nome: "Gengar",
    imagem: "https://img.pokemondb.net/sprites/home/normal/2x/gengar.jpg",
    atributos: {
        ataque: 65,
        defesa: 60,
        velocidade: 110
    }
};

var carta6 = {
    nome: "Pidgeot",
    imagem: "https://img.pokemondb.net/artwork/large/pidgeot.jpg",
    atributos: {
        ataque: 80,
        defesa: 75,
        velocidade: 91
    }
};

var carta7 = {
    nome: "Alakazam",
    imagem:
        "https://media.izi.travel/4e9d2b2c-83c3-4a84-8675-7cc276270305/b329d9ce-1576-4396-8ae8-4400f224db0b_800x600.jpg",
    atributos: {
        ataque: 50,
        defesa: 45,
        velocidade: 120
    }
};

var carta8 = {
    nome: "Rapidash",
    imagem:
        "https://i.pinimg.com/736x/85/e1/8b/85e18bbdf8305c3ccb744b0ec131f0b6--check-em-pokemon-stuff.jpg",
    atributos: {
        ataque: 100,
        defesa: 70,
        velocidade: 105
    }
};

var carta9 = {
    nome: "Dodrio",
    imagem: "https://img.pokemondb.net/sprites/home/normal/2x/dodrio.jpg",
    atributos: {
        ataque: 110,
        defesa: 70,
        velocidade: 100
    }
};

var carta10 = {
    nome: "Mew",
    imagem: "https://img.pokemondb.net/artwork/large/mew.jpg",
    atributos: {
        ataque: 100,
        defesa: 100,
        velocidade: 100
    }
};

var carta11 = {
    nome: "Poliwrath",
    imagem: "https://img.pokemondb.net/artwork/large/poliwrath.jpg",
    atributos: {
        ataque: 85,
        defesa: 95,
        velocidade: 70
    }
};

var carta12 = {
    nome: "Ninetales",
    imagem:
        "https://www.pidgi.net/wiki/images/1/1a/Ninetales_-_Pokemon_Mystery_Dungeon_Red_and_Blue_Rescue_Teams.jpg",
    atributos: {
        ataque: 76,
        defesa: 75,
        velocidade: 100
    }
};

var carta13 = {
    nome: "Articuno",
    imagem:
        "https://i.pinimg.com/736x/0f/39/02/0f39027201ff4c1dfaaa68e27a3d7371--cool-pokemon-pokemon-go.jpg",
    atributos: {
        ataque: 85,
        defesa: 100,
        velocidade: 85
    }
};

var carta14 = {
    nome: "Zapdos",
    imagem:
        "https://assets.reedpopcdn.com/zapdos.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/zapdos.jpg",
    atributos: {
        ataque: 90,
        defesa: 85,
        velocidade: 100
    }
};

var carta15 = {
    nome: "Moltres",
    imagem:
        "https://i.pinimg.com/474x/09/52/d8/0952d801dfe2365b37bf4ec3f38e8c1d.jpg",
    atributos: {
        ataque: 100,
        defesa: 90,
        velocidade: 90
    }
};

var cartas = [
    carta1,
    carta2,
    carta3,
    carta4,
    carta5,
    carta6,
    carta7,
    carta8,
    carta9,
    carta10,
    carta11,
    carta12,
    carta13,
    carta14,
    carta15
];
var cartaMaquina = 0;
var cartaJogador = 0;

function sortearCarta() {
    //função para ser escolhida aleatoriamente a carta da computador
    var numeroCartaMaquina = parseInt(Math.random() * 15);
    cartaMaquina = cartas[numeroCartaMaquina];
    //função para ser escolhido aleatoriamente a carta do jogador
    var numeroCartaJogador = parseInt(Math.random() * 15);
    //função para "enquanto" o numero da carta do jogador ser igual do computador, continuará sorteando
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 15);
    }
    cartaJogador = cartas[numeroCartaJogador];
    //habilitar e desabilitar os botões após a escolha da carta
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirCartaJogador();
}

//obter o atributo selecionado
function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    //se o atributo estiver selecionado, tenha o comportamento da função
    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
            //retorna esse valor
        }
    }
}

// FUNÇÃO JOGAR
function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");

    if (
        cartaJogador.atributos[atributoSelecionado] >
        cartaMaquina.atributos[atributoSelecionado]
    ) {
        htmlResultado = "<p class='resultado-final'>Você venceu! 😃</p>";
    } else if (
        cartaJogador.atributos[atributoSelecionado] <
        cartaMaquina.atributos[atributoSelecionado]
    ) {
        htmlResultado = "<p class='resultado-final'>Você perdeu! 😢</p>";
    } else {
        htmlResultado = "<p class='resultado-final'>Empatou! 😐</p>";
    }
    divResultado.innerHTML = htmlResultado;
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
}

//função para exibir as imagens das cartas do jogador
function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    //colocar entre ´´ anotação do css para buscar a imagem
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    //o $ significa que estamos escrevendo em javascript agora tambem da pra escrever:
    //divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem +")"
    var moldura =
        '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto +=
            "<input type='radio' name='atributo' value='" +
            atributo +
            "'>" +
            atributo +
            " " +
            cartaJogador.atributos[atributo] +
            "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";

    document.getElementById("btnResetar").disabled = false;
}

//função para exibir as imagens das cartas da maquina
function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    //colocar entre ´´ anotação do css para buscar a imagem
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    //o $ significa que estamos escrevendo em javascript agora tambem da pra escrever:
    //divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem +")"
    var moldura =
        '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto +=
            "<p type='text' name='atributo' value='" +
            atributo +
            "'>" +
            atributo +
            " " +
            cartaMaquina.atributos[atributo] +
            "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

//FUNÇÃO PARA REINICIAR JOGO
function reiniciarjogo() {
    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnResetar").disabled = true;
    var elementoResultado = document.getElementById("resultado");
    var divCartaJogador = document.getElementById("carta-jogador");
    var divCartaMaquina = document.getElementById("carta-maquina");
    var moldura =
        '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

    elementoResultado.innerHTML = "";
    divCartaJogador.style.backgroundImage = `url(${""})`;
    divCartaMaquina.style.backgroundImage = `url(${""})`;
    var nome = `<p class = "carta-subtitle">${""}</p>`;
    divCartaJogador.innerHTML = nome + moldura;
    var nome = `<p class = "carta-subtitle">${""}</p>`;
    divCartaMaquina.innerHTML = nome + moldura;
}
