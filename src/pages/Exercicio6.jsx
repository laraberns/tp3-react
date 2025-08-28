export default function Exercicio6() {
  let livro = {
    titulo: "A vida é boa",
    autor: "Pedro Cabral",
    ano: 2010,
  };

  let capitulos = [1, 2, 3, 4, 5];

  return (
    <>
      <h2>Exercício 6</h2>
      <p>Nome do livro: {livro.titulo}</p>
      <p>Autor do livro: {livro.autor}</p>
      <p>Ano do livro: {livro.ano}</p>

      <ul>
        {capitulos.map((capitulo, index) => (
          <li key={index}>{capitulo}</li>
        ))}
      </ul>
    </>
  );
}
