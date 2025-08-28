import Dados from "../components/Dados";

export default function Exercicio4() {
  let dados = {
    titulo: "Dados Pessoais",
    mensagem: "Olá, meu nome é Lara Pereira. Sou estudante de React.",
    tipo: "Sucesso",
  };

  return (
    <>
      <h2>Exercício 4</h2>
      <Dados dados={dados} />
    </>
  );
}
