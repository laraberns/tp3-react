export default function DetalhesLivros({ listaLivros }) {
  const mediaPaginas =
    listaLivros.reduce((acc, l) => acc + l.paginas, 0) / listaLivros.length;

  const mediaAvaliacao =
    listaLivros.reduce((acc, l) => acc + l.avaliacao, 0) / listaLivros.length;

  return (
    <div>
      {listaLivros.map((livro, index) => (
        <div
          key={index}
          style={{
            border: "2px solid purple",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "15px",
            backgroundColor: "#f0e9ff",
            textAlign: "left",
          }}
        >
          <h4>📖 Detalhes do Livro</h4>
          <p><strong>Título:</strong> {livro.titulo}</p>
          <p><strong>Autor:</strong> {livro.autor}</p>
          <p><strong>Gênero:</strong> {livro.genero}</p>
          <p><strong>Páginas:</strong> {livro.paginas}</p>
          <p>
            <strong>Avaliação:</strong>{" "}
            {Array.from({ length: Math.round(livro.avaliacao) }, (_, i) => (
              <span key={i}>⭐</span>
            ))}
          </p>

          <hr />

          <p><strong>Comparação com a média da lista:</strong></p>
          <p>
            Páginas: {livro.paginas}{" "}
            {livro.paginas > mediaPaginas
              ? "(acima da média)"
              : livro.paginas < mediaPaginas
              ? "(abaixo da média)"
              : "(igual à média)"}
          </p>
          <p>
            Avaliação: {livro.avaliacao}{" "}
            {livro.avaliacao > mediaAvaliacao
              ? "(acima da média)"
              : livro.avaliacao < mediaAvaliacao
              ? "(abaixo da média)"
              : "(igual à média)"}
          </p>
        </div>
      ))}
    </div>
  );
}
