import ProdutoCompleto from "../components/ProdutoCompleto";

export default function Exercicio5() {
  let produto = {
    nome: "Smartphone XYZ",
    descricao: "Um smartphone moderno com várias funcionalidades.",
    preco: 1999.99,
    vendedor: { nome: "Tobias", telefone: "(48) 99943-3343", nota: 4.8 },
    avaliacoes: [{ usuario: "Aline", avaliacao: "Celular muito bom", nota: 5 }],
  };

  return (
    <>
      <h2>Exercício 5</h2>
      <ProdutoCompleto produto={produto} />
    </>
  );
}
