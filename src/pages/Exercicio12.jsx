export default function Exercicio12() {
  const calcularDiferencaDoisNumeros = (num1, num2) => num1 - num2;

  const num1 = 11;
  const num2 = 4;

  return (
    <>
      <h2>Exercício 12</h2>
      <p>
        Diferença de dois números: {num1} - {num2}
      </p>
      <p>{calcularDiferencaDoisNumeros(num1, num2)}</p>
    </>
  );
}
