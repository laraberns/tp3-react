export default function Exercicio13() {
  const ehPar = (num1) => num1 % 2 == 0;

  const num1 = 11;

  return (
    <>
      <h2>Exercício 13</h2>
      <p>{num1} é par?</p>
      <p>{ehPar(num1) ? `${num1} é par` : `${num1} NÃO é par`}</p>
    </>
  );
}
