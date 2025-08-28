export default function ListaNotas({ listaNotas }) {
  return (
    <div>
      {listaNotas.map((nota, index) => (
        <div
          key={index}
          style={{
            border: "3px solid blue",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <p>
            <strong>Prova:</strong> {nota.prova}
          </p>
          <p>
            <strong>Nota:</strong> {nota.nota}
          </p>
        </div>
      ))}
    </div>
  );
}
