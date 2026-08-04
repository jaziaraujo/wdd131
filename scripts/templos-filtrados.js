
const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Campinas Brasil",
    localizacao: "Campinas, São Paulo, Brasil",
    consagracao: "2002, 17 de maio",
    area: 48100,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/400x250/campinas-brazil-temple-1030031-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "São Paulo Brasil",
    localizacao: "São Paulo, SP, Brasil",
    consagracao: "1978, 30 de outubro",
    area: 59246,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Salt Lake Utah",
    localizacao: "Salt Lake City, Utah, Estados Unidos",
    consagracao: "1893, 6 de abril",
    area: 382207,
    urlDaImagem:
      "https://www.churchofjesuschrist.org/imgs/3ceae76a283681c03cda2b24923d64ef2a87bf90/full/!1200,/0/default"
  }
];

const container = document.querySelector(".res-grid");
const tituloPagina = document.querySelector("#titulo-pagina");

function renderizarTemplos(lista) {
  container.innerHTML = "";

  lista.forEach((templo) => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    const nome = document.createElement("h3");
    nome.textContent = templo.nomeDoTemplo;

    const localizacao = document.createElement("p");
    localizacao.innerHTML = `<span class="label">Localização:</span> ${templo.localizacao}`;

    const consagracao = document.createElement("p");
    consagracao.innerHTML = `<span class="label">Consagração:</span> ${templo.consagracao}`;

    const area = document.createElement("p");
    area.innerHTML = `<span class="label">Área:</span> ${templo.area.toLocaleString("pt-BR")} sq ft`;

    const imagem = document.createElement("img");
    imagem.src = templo.urlDaImagem;
    imagem.alt = `Templo de ${templo.nomeDoTemplo}`;
    imagem.loading = "lazy"; 
    imagem.width = 400;
    imagem.height = 250;

    card.appendChild(nome);
    card.appendChild(localizacao);
    card.appendChild(consagracao);
    card.appendChild(area);
    card.appendChild(imagem);

    container.appendChild(card);
  });
}

function obterAno(stringConsagracao) {
  return parseInt(stringConsagracao.split(",")[0].trim());
}

document.querySelector("#inicio").addEventListener("click", (e) => {
  e.preventDefault();
  tituloPagina.textContent = "Página Inicial";
  renderizarTemplos(templos);
});

document.querySelector("#antigos").addEventListener("click", (e) => {
  e.preventDefault();
  tituloPagina.textContent = "Templos Antigos (antes de 1900)";
  const filtrados = templos.filter((t) => obterAno(t.consagracao) < 1900);
  renderizarTemplos(filtrados);
});

document.querySelector("#novos").addEventListener("click", (e) => {
  e.preventDefault();
  tituloPagina.textContent = "Templos Novos (depois de 2000)";
  const filtrados = templos.filter((t) => obterAno(t.consagracao) > 2000);
  renderizarTemplos(filtrados);
});

document.querySelector("#grandes").addEventListener("click", (e) => {
  e.preventDefault();
  tituloPagina.textContent = "Templos Grandes (acima de 90.000 sq ft)";
  const filtrados = templos.filter((t) => t.area > 90000);
  renderizarTemplos(filtrados);
});

document.querySelector("#pequenos").addEventListener("click", (e) => {
  e.preventDefault();
  tituloPagina.textContent = "Templos Pequenos (abaixo de 10.000 sq ft)";
  const filtrados = templos.filter((t) => t.area < 10000);
  renderizarTemplos(filtrados);
});

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.classList.toggle("open");
});

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();

const modifiedDate = new Date(document.lastModified);
lastModified.textContent = `Última modificação: ${modifiedDate.toLocaleString("pt-BR")}`;

renderizarTemplos(templos);