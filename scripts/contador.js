document.addEventListener("DOMContentLoaded", () => {
    const elementoContador = document.getElementById("contadorAvaliacoes");

    let numAvaliacoes = Number(localStorage.getItem("contadorAvaliacoes-ls")) || 0;

    numAvaliacoes++;

    localStorage.setItem("contadorAvaliacoes-ls", numAvaliacoes);

    if (elementoContador) {
        elementoContador.textContent = numAvaliacoes;
    }

    const currentYear = document.querySelector("#currentyear");
    const lastModified = document.querySelector("#lastModified");

    currentYear.textContent = new Date().getFullYear();

    const modifiedDate = new Date(document.lastModified);
    lastModified.textContent = `Última modificação: ${modifiedDate.toLocaleString("pt-BR")}`
});