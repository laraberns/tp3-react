export default function Exercicio8() {
  let nome = "Lara";
  const hoje = new Date();
  const horas = hoje.getHours();
  const minutos = hoje.getMinutes();

  const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;

  let saudacao;
  if (horas < 12) {
    saudacao = "Bom dia";
  } else if (horas < 18) {
    saudacao = "Boa tarde";
  } else {
    saudacao = "Boa noite";
  }

  return (
    <>
      <h2>Exercício 8</h2>
      <p>
        {saudacao}, {nome}
      </p>
      <p>
        Horário atual: {horas}:{minutosFormatados}
      </p>
    </>
  );
}
