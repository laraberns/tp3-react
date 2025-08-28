import Card from "../components/Card";

export default function Exercicio14() {
  let produtos = [
    { nome: "Mesa", preco: 120 },
    { nome: "Cadeira", preco: 80 },
    { nome: "Sofá", preco: 700 },
  ];

  return (
    <>
      <h2>Exercício 14</h2>

      {produtos.map((produto, index) => (
        <Card key={index} titulo={produto.nome} preco={produto.preco} />
      ))}
    </>
  );
}
