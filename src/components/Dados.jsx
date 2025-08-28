export default function Dados({ dados }) {
  let backgroundColor;

  if (dados.tipo === "Sucesso") {
    backgroundColor = "green";
  }

  if (dados.tipo === "Erro") {
    backgroundColor = "red";
  }

  if (dados.tipo === "Alerta") {
    backgroundColor = "orange";
  }

  const styleBox = {
    backgroundColor: backgroundColor,
    color: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "250px",
    margin: "10px auto",
  };

  return (
    <div style={styleBox}>
      <h3>Componente de dados</h3>
      <p>
        <b>{dados.titulo}</b>
      </p>
      <p>{dados.mensagem}</p>
    </div>
  );
}
