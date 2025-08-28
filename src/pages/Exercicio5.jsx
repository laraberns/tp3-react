export default function Exercicio5() {
  let nome = "Lara";
  const idade = 26;
  const ehMulher = true;
  return (
    <>
      <h2>Exercício 5</h2>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      {ehMulher ? <p>Sexo: Feminino</p> : <p>Sexo: Masculino</p>}
    </>
  );
}
