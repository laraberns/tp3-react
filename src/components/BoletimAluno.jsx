import InfoAluno from "./InfoAluno";
import ListaDisciplinas from "./ListaDisciplinas";

export default function BoletimAluno({ aluno }) {
  const styleBox = {
    backgroundColor: "#e9cfcfff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
    margin: "10px auto",
  };

  return (
    <div style={styleBox}>
      <InfoAluno
        nome={aluno.nome}
        matricula={aluno.matricula}
        responsavel={aluno.responsavel}
      />
      <ListaDisciplinas listaDisciplinas={aluno.disciplinas} />
    </div>
  );
}
