document.addEventListener("DOMContentLoaded", () => {
    const elementoContador = document.getElementById("contadorAvaliacoes");

    let numAvaliacoes = Number(localStorage.getItem("contadorAvaliacoes-ls")) || 0;

    numAvaliacoes++;

    localStorage.setItem("contadorAvaliacoes-ls", numAvaliacoes);

    if (elementoContador) {
        elementoContador.textContent = numAvaliacoes;
    }

    const anoElemento = document.getElementById("anoAtual");
    if (anoElemento) {
        anoElemento.textContent = new Date().getFullYear();
    }
});