document.addEventListener("DOMContentLoaded", () => {
  
    const produtos = [
        { id: "fc-1888", nome: "capacitor de fluxo", classificacaomedia: 4.5 },
        { id: "fc-2050", nome: "fios elétricos", classificacaomedia: 4.7 },
        { id: "fs-1987", nome: "circuitos de tempo", classificacaomedia: 3.5 },
        { id: "ac-2000", nome: "reator de baixa tensão", classificacaomedia: 3.9 },
        { id: "jj-1969", nome: "equalizador de distorção", classificacaomedia: 5.0 }
    ];

    const selectProduto = document.getElementById("produto");

    if (selectProduto) {
        produtos.forEach(prod => {
            const option = document.createElement("option");
            option.value = prod.id; 
            option.textContent = prod.nome;
            selectProduto.appendChild(option);
        });
    }
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();

const modifiedDate = new Date(document.lastModified);
lastModified.textContent = `Última modificação: ${modifiedDate.toLocaleString("pt-BR")}`
});