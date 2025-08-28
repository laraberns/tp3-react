export default function InfoBiblioteca({ biblioteca }) {
  const mediaPaginasLivros =
    biblioteca.livros.reduce((acc, livro) => acc + livro.paginas, 0) /
    biblioteca.totalLivros;

  const generoContagem = biblioteca.livros.reduce((acc, livro) => {
    acc[livro.genero] = (acc[livro.genero] || 0) + 1;
    return acc;
  }, {});

  const generoMaisLido = Object.keys(generoContagem).reduce((a, b) =>
    generoContagem[a] > generoContagem[b] ? a : b
  );

  return (
    <div
      style={{
        border: "3px solid blue",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <p>Nome do proprietário: {biblioteca.proprietario}</p>
      <p>Total de livros: {biblioteca.totalLivros}</p>
      <p>Média de páginas por livro: {mediaPaginasLivros.toFixed(0)}</p>
      <p>Gênero mais lido: {generoMaisLido} </p>
    </div>
  );
}
