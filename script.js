function adicionarFilme() {
    var filme = document.getElementById("filme").value;
    if(filme.endsWith(".jpg") || filme.endsWith(".webp") || filme.endsWith(".png")) {
        listarFilmes(filme);
    } else {
        console.error("Endereço de filme inválido!");
    }
    document.getElementById("filme").value = "";
}

function listarFilmes(filme) {
    var elementoFilme = "<img src=" + filme + ">";
    var elementolistaFilme = document.getElementById("listaFilmes");
    elementolistaFilme.innerHTML = 
        elementolistaFilme.innerHTML + elementoFilme;
}