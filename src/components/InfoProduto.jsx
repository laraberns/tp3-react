export default function InfoProduto({ nome, descricao, preco }) {
  return (
    <div
      style={{
        border: "3px solid blue",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <p>Nome: {nome}</p>
      <p>Descrição: {descricao}</p>
      <p>Preço: {preco}</p>
    </div>
  );
}
