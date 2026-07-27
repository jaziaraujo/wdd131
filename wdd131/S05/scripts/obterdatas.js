const ano = new Date().getFullYear();

document.getElementById("anoatual").textContent = ano;

document.getElementById("ultimaModificacao").textContent =
`Última modificação: ${document.lastModified}`; 