export default function ExibirProduto({ nome, preco, quantidade, custo }) {
  return (
    <div>
      <h3>Nome: {nome}</h3>
      <p>Preço: R$ {preco}</p>
      <p>Quantidade em estoque: {quantidade}</p>
      <p>Custo: R$ {custo}</p>
    </div>
  );
}
