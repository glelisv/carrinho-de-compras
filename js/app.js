function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    alert(nomeProduto);
    alert(valorUnitario);
    alert(quantidade);

    let preco = quantidade * valorUnitario;
    alert(preco);

    /*if(nomeProduto == "Fone de ouvido - R$100") {
        //document.getElementById('lista-nomeProdutos').innerHTML = `<span class="texto-azul">${quantidade}x</span> Fone de ouvido <span class="texto-azul">R$100</span>`;
        //total = total + (100 * quantidade);
        alert(valor);
    } else if (nomeProduto == "Celular - R$1400") {
        alert("Celular");
    } else if (nomeProduto == "Oculus VR - R$5000") {
        alert("Oculus VR");
    }*/
}

function limpar() {

}