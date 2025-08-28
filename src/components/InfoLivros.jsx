export default function InfoLivros({ listaLivros }) {
  return (
    <div
      style={{
        border: "3px solid blue",
        padding: "15px",
        marginBottom: "10px",
      }}
    >
      <ul style={{ listStyle: "none", padding: 0 }}>
        {listaLivros.map((livro, index) => (
          <li
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <strong>{livro.titulo}</strong> <br />
            <em>Autor:</em> {livro.autor} <br />
            <em>Gênero:</em> {livro.genero} <br />
            <em>Páginas:</em> {livro.paginas} <br />
            <em>Avaliação:</em>{" "}
            {Array.from({ length: Math.round(livro.avaliacao) }, (_, i) => (
              <span key={i}>⭐</span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
