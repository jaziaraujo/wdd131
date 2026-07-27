
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();

const modifiedDate = new Date(document.lastModified);
lastModified.textContent = `Última modificação: ${modifiedDate.toLocaleString("pt-BR")}`;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});