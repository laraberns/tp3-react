import Estilizador from "../components/Estilizador";

export default function Exercicio3() {
  let estilo = {
    backgroundColor: "red",
    color: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "200px",
    margin: "10px auto",
  };

  return (
    <>
      <h2>Exercício 3</h2>
      <Estilizador estilo={estilo} />
    </>
  );
}
