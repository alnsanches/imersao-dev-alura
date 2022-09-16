var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 1;
var maxTentativas = 4;

function Chutar() {

    var res = document.getElementById('resultado');
    var chute = parseInt(document.getElementById('valor').value);


    if (chute == numeroSecreto) {
        res.innerHTML = "Você acertou. 🥳";
    } else if (chute > 10 || chute < 0) {
        res.innerHTML = "Você deve digitar um número entre 0 e 10.";
        tentativas++;
    } else if (chute < numeroSecreto) {
        res.innerHTML = "Você errou! O número secreto é maior!";
        tentativas++;
    } else if (chute > numeroSecreto) {
        res.innerHTML = "Você errou! O número secreto é menor!";
        tentativas++;
    }

    if (tentativas >= maxTentativas) {
        res.innerHTML = "Suas tentativas acabaram. O número secreto era " + numeroSecreto + "! <br>Reinicie o jogo e tente novamente! 😀"
    }
}

function ReiniciarJogo() {
	document.getElementById('resultado').innerHTML = '';
}