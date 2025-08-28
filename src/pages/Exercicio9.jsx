export default function Exercicio9() {
  let listaTarefas = [
    "Passear com o cachorro",
    "Brincar com a vizinha",
    "Pular corda",
  ];

  return (
    <>
      <h2>Exercício 9</h2>

      <ul>
        {listaTarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </>
  );
}
