let totalGeral = 0;
document.getElementById('valor-total').textContent = '0';
document.getElementById('lista-produtos').innerHTML = '';

function adicionar(){
  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split('-')[0];
  let valorProduto = produto.split('R$')[1];
  let qtd = document.getElementById('quantidade').value;

  document.getElementById('quantidade').value = 0;

  let preco = qtd * valorProduto;

  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML = carrinho.innerHTML + `        <section class="carrinho__produtos__produto">
  <span class="texto-azul">${qtd}x</span>${nomeProduto}<span class="texto-azul">R$${preco}</span>
  </section>`;
  
  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$ ${totalGeral}`;
  

}
function limpar(){
  totalGeral = 0;
  document.getElementById('valor-total').textContent = '0';
  document.getElementById('lista-produtos').innerHTML = '';
}
