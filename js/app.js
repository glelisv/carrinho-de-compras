let totalGeral = 0;
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML = '';
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = 'R$ 0';

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = quantidade * valorUnitario;
    
    carrinho.innerHTML = carrinho.innerHTML + `        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`
    
    totalGeral += preco;
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = '';
}

function limpar() {
    totalGeral = 0;
    carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = '';
    campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = 'R$ 0';

}