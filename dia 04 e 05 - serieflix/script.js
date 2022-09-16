//Exemplo com uma série para aparecer no programa
var listaSeries = ["Orange Is The New Black"];
var listaPoster = [
    "https://img.elo7.com.br/product/zoom/26AFC2E/big-poster-orange-is-the-new-black-lo38-tamanho-90x60-cm-poster-de-serie.jpg"
];

var elementoListaSeries = document.getElementById("listaSeries");

function adicionarSerie() {
    var nomeSerie = document.getElementById("titulo").value;
    var posterSerie = document.getElementById("poster").value;

    // Verifica se a série já está na lista ou se o campo está vazio

    if (nomeSerie.length != 0 && listaSeries.indexOf(nomeSerie) == -1) {
        // Verifica se o formato da imagem é suportado
        if (posterSerie.endsWith(".jpg")) {
            // Insere o título e o seu poster à lista.
            listaSeries.push(nomeSerie);
            listaPoster.push(posterSerie);
            alert("Série adicionada com sucesso na sua lista!");
        }
        // Caso a imagem possui um formato diferente
        else {
            alert(
                "[ERRO] O link da imagem possui um formato inválido! Formato aceito: .jpg"
            );
        }
    }
    // Caso a série já esteja na lista ou o usuário não tenha digitado nada
    else {
        alert(
            "[ERRO] Não foi possivel adicionar o Jogo à lista! O título já se encontra na lista ou não é válido!"
        );
    }

    // Limpa a lista  e os campos
    elementoListaSeries.innerHTML = "";
    document.getElementById("titulo").value = "";
    document.getElementById("poster").value = "";
}

function removerSerie() {
    // Guarda o título informado pelo usuário e verifica sua posição na lista
    var nomeSerie = document.getElementById("titulo").value;
    var indice = listaSeries.indexOf(nomeSerie);

    // Verifica se o Jogo está presente na lista
    if (indice == -1) {
        alert(
            "[ERRO] Não foi possível remover, pois o título informado não foi encontrado na lista!"
        );
    }
    // Caso esteja na lista
    else {
        // Remove o jogo e poster da lista.
        listaSeries.splice(indice, 1);
        listaPoster.splice(indice, 1);
        alert("Série removida com sucesso da sua lista!");
    }

    // Limpa a lista e os campos
    elementoListaSeries.innerHTML = "";
    document.getElementById("titulo").value = "";
    document.getElementById("poster").value = "";
}

function mostrarLista() {
    // Limpa a lista
    elementoListaSeries.innerHTML = "";

    // Para cada título cria uma tag h3 e um poster uma tag img.
    for (var i in listaSeries) {
        elementoListaSeries.innerHTML +=
            "<h3 class=serie-title>" +
            listaSeries[i] +
            "<br><img src=" +
            listaPoster[i] +
            " class=serie-poster>";
    }

    // Limpa os campos
    document.getElementById("titulo").value = "";
    document.getElementById("poster").value = "";
}
