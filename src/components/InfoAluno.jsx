export default function InfoAluno({ nome, matricula, responsavel }) {
  return (
    <div
      style={{
        border: "3px solid blue",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <p>Nome: {nome}</p>
      <p>Matricula: {matricula}</p>
      <p>Responsável: {responsavel}</p>
    </div>
  );
}
