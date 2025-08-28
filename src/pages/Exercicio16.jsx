import ExibirProduto from "../components/ExibirProduto";

export default function Exercicio16() {
  let produto = { nome: "Mesa", preco: 120, quantidade: 12, custo: 80 };
  return (
    <>
      <h2>Exercício 16</h2>

      <ExibirProduto
        custo={produto.custo}
        nome={produto.nome}
        preco={produto.preco}
        quantidade={produto.quantidade}
      />
    </>
  );
}
