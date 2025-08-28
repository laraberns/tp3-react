import BoletimAluno from "../components/BoletimAluno";

export default function Exercicio6() {
  let aluno = {
    nome: "Lara Pereira",

    matricula: "2023101234",

    responsavel: "Mariana Pereira",

    disciplinas: [
      {
        nome: "Matemática",

        docente: "João Silva",

        notas: [
          {
            prova: "Prova 1",

            nota: 8.5,
          },
        ],
      },
    ],
  };

  return (
    <>
      <h2>Exercício 6</h2>
      <BoletimAluno aluno={aluno} />
    </>
  );
}
