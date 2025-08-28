export default function Exercicio7() {
  let nome = "Lara";
  const hoje = new Date();
  const horas = hoje.getHours();
  const minutos = hoje.getMinutes();

  const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;

  return (
    <>
      <h2>Exercício 7</h2>
      <p>Boas vindas, {nome}</p>
      <p>
        Horário atual: {horas}:{minutosFormatados}
      </p>
    </>
  );
}
