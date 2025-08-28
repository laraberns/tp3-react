import ListaNotas from "./ListaNotas";

export default function ListaDisciplinas({ listaDisciplinas }) {
  return (
    <div>
      {listaDisciplinas.map((disciplina, index) => (
        <div
          key={index}
          style={{
            border: "3px solid blue",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <p>
            <strong>Nome:</strong> {disciplina.nome}
          </p>
          <p>
            <strong>Docente:</strong> {disciplina.docente}
          </p>
          <ListaNotas listaNotas={disciplina.notas} />
        </div>
      ))}
    </div>
  );
}
