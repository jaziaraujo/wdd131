const IMAGENS_PRODUTOS = {
  trufasSortidas: "https://s2-receitas.glbimg.com/YCvt0xnV3nkBqgxHqKhbX0xPJqc=/0x0:1000x667/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/B/F/P9q0drSPCl5HccTTPzZw/whatsapp-image-2020-12-28-at-13.58.30.jpeg",
  boloDeFrutas: "https://images.unsplash.com/photo-1508736375612-66c03035c629?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  bombonsGourmet: "https://delicious.com.br/wp-content/uploads/2020/10/DSC_0399.jpg",
  brownieAvela: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  boloChocolateAmargo: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop",
  macarrons: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  fondueMorango: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=500&auto=format&fit=crop",
  brigadeirosBelga: "https://plus.unsplash.com/premium_photo-1667664655114-2c3017d0607d?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

const LOGOTIPO_URL = "images/logo-favo.png"; 

const produtos = [
  {
    id: 1,
    nome: "Caixa de Trufas Artesanais (9 un)",
    categoria: "doces",
    preco: 30.00,
    prontaEntrega: true,
    imagem: IMAGENS_PRODUTOS.trufasSortidas,
    descricao: "Ganache cremosa envolvida em cacau em pó. Sabores: chocolate ao leite, Leite Ninho com Nutella e brigadeiro gourmet."
  },
  {
    id: 2,
    nome: "Bolo de Frutas Frescas",
    categoria: "bolos",
    preco: 110.00,
    prontaEntrega: true,
    imagem: IMAGENS_PRODUTOS.boloDeFrutas,
    descricao: "Bolo de frutas frescas com massa leve e umedecida, coberto por uma seleção vibrante de frutas sazonais"
  },
  {
    id: 3,
    nome: "Coleção Bombons Praliné de Avelã",
    categoria: "doces",
    preco: 85.00,
    prontaEntrega: true,
    imagem: IMAGENS_PRODUTOS.bombonsGourmet,
    descricao: "Casquinha fina de chocolate ao leite belga com recheio cremoso de avelãs tostadas."
  },
  {
    id: 4,
    nome: "Brownie Fudge com Nibs de Cacau",
    categoria: "doces",
    preco: 18.00,
    prontaEntrega: true,
    imagem: IMAGENS_PRODUTOS.brownieAvela,
    descricao: "Massa úmida e densa elaborada com blend de chocolates nobres e salpicada com nibs crocantes."
  },
  {
    id: 5,
    nome: "Bolo Trufado de Chocolate Amargo",
    categoria: "bolos",
    preco: 240.00,
    prontaEntrega: false,
    imagem: IMAGENS_PRODUTOS.boloChocolateAmargo,
    descricao: "Camadas de pão de ló de cacau intenso, recheio de mousse de chocolate 60% e cobertura de ganache espelhada."
  },
  {
    id: 6,
    nome: "Macarrons",
    categoria: "doces",
    preco: 22.00,
    prontaEntrega: true,
    imagem: IMAGENS_PRODUTOS.macarrons,
    descricao: "Casca crocante por fora e macia por dentro, recheados com ganache e creme de pistache de Bronte, fava de baunilha Bourbon, chocolate amargo de origem única e frutas vermelhas finas."
  },
  {
    id: 7,
    nome: "Cento de Brigadeiros Belga Gourmet",
    categoria: "doces",
    preco: 135.00,
    prontaEntrega: false,
    imagem: IMAGENS_PRODUTOS.brigadeirosBelga,
    descricao: "Confeitos artesanais finalizados com split de chocolate Callebaut ao leite e amargo."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  initCardapio();
  initFormularioContato();
});

function initCardapio() {
  const containerGrid = document.getElementById("products-grid");
  const botoesFiltro = document.querySelectorAll(".btn-filter");

  if (!containerGrid) return;

  renderizarProdutos(produtos, containerGrid);

  botoesFiltro.forEach((botao) => {
    botao.addEventListener("click", (e) => {
      botoesFiltro.forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");

      const categoriaSelecionada = e.target.getAttribute("data-category");
      let produtosFiltrados = [];

      if (categoriaSelecionada === "todos") {
        produtosFiltrados = produtos;
      } else if (categoriaSelecionada === "pronta-entrega") {
        produtosFiltrados = produtos.filter((item) => item.prontaEntrega === true);
      } else {
        produtosFiltrados = produtos.filter((item) => item.categoria === categoriaSelecionada);
      }

      renderizarProdutos(produtosFiltrados, containerGrid);
    });
  });
}

function renderizarProdutos(lista, container) {
  if (lista.length === 0) {
    container.innerHTML = `<p class="no-results">Nenhum produto encontrado para este filtro no momento.</p>`;
    return;
  }

  const htmlContent = lista.map((item) => {
    const badge = item.prontaEntrega 
      ? `<span class="badge-ready">Pronta-Entrega</span>` 
      : ``;

    return `
      <article class="product-card">
        <div class="product-image-container">
          <img src="${item.imagem}" alt="${item.nome}" loading="lazy" class="product-img" width="300" height="200">
        </div>
        <div class="product-info">
          ${badge}
          <h3>${item.nome}</h3>
          <p>${item.descricao}</p>
        </div>
        <div class="product-price">R$ ${item.preco.toFixed(2).replace('.', ',')}</div>
      </article>
    `;
  }).join("");

  container.innerHTML = htmlContent;
}

function initFormularioContato() {
  const formulario = document.getElementById("order-form");
  const feedbackBox = document.getElementById("form-feedback");

  if (!formulario) return;

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("cliente-nome").value.trim();
    const email = document.getElementById("cliente-email").value.trim();
    const servico = document.getElementById("tipo-servico").value;
    const data = document.getElementById("data-evento").value;
    const observacoes = document.getElementById("observacoes").value.trim();

    if (!nome || !email || !servico || !data) {
      alert("Por favor, preencha todos os campos obrigatórios (*).");
      return;
    }

    const novoPedido = {
      id: Date.now(),
      nome: nome,
      email: email,
      servico: servico,
      dataEvento: data,
      observacoes: observacoes,
      dataSolicitacao: new Date().toISOString()
    };

    salvarPedidoLocalStorage(novoPedido);

    feedbackBox.innerHTML = `
      <h3>Solicitação Enviada com Sucesso!</h3>
      <p>Obrigado, <strong>${novoPedido.nome}</strong>. Recebemos seu pedido de <em>${novoPedido.servico}</em> para a data <strong>${formatarData(novoPedido.dataEvento)}</strong>.</p>
      <p>Em breve entraremos em contato pelo e-mail <strong>${novoPedido.email}</strong> para confirmação dos detalhes.</p>
    `;
    
    feedbackBox.classList.remove("hidden");
    formulario.reset();
  });
}

function salvarPedidoLocalStorage(pedido) {
  let pedidosAnteriores = JSON.parse(localStorage.getItem("favo_pedidos")) || [];
  pedidosAnteriores.push(pedido);
  localStorage.setItem("favo_pedidos", JSON.stringify(pedidosAnteriores));
}

function formatarData(dataISO) {
  const partes = dataISO.split("-");
  if (partes.length === 3) {
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }
  return dataISO;
}