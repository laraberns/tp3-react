import BibliotecaPessoal from "../components/BibliotecaPessoal";

//Exercício 7 ao 12
export default function Exercicio7ao12() {
  let biblioteca = {
    proprietario: "Lara Pereira",

    totalLivros: 3,

    livros: [
      {
        titulo: "O Senhor dos Anéis",

        autor: "J.R.R. Tolkien",

        genero: "Fantasia",

        paginas: 1216,

        avaliacao: 4.0,
      },
      {
        titulo: "1984",

        autor: "George Orwell",

        genero: "Distopia",

        paginas: 328,

        avaliacao: 4.0,
      },
      {
        titulo: "O Hobbit",

        autor: "J.R.R. Tolkien",

        genero: "Fantasia",

        paginas: 310,

        avaliacao: 1.0,
      },
    ],
  };

  return (
    <>
      <h2>Exercício 7 ao 12</h2>
      <BibliotecaPessoal biblioteca={biblioteca} />
    </>
  );
}
