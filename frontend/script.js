async function carregarDados() {
    const url = "https://bookish-barnacle-4qvjjvg7wq5pfq797-3000.app.github.dev/";

    const resposta = await fetch(url);

    const produto = await resposta.json();

    const listaProdutos = document.getElementById("lista-produtos");

 listaProdutos.innerHTML = `
    <div class="card">
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h2>${produto.nome}</h2>
        <p>Categoria: ${produto.categoria}</p>
        <p>Preço: R$ ${produto.preço}</p>
    </div>
`;
}

carregarDados();