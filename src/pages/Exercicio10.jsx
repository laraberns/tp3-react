export default function Exercicio10() {
  function calcularDoisNumeros(num1, num2) {
    return num1 + num2;
  }

  const num1 = 10;
  const num2 = 4;

  return (
    <>
      <h2>Exercício 10</h2>
      <p>
        Soma de dois números: {num1} + {num2}
      </p>
      <p>{calcularDoisNumeros(num1, num2)}</p>
    </>
  );
}
