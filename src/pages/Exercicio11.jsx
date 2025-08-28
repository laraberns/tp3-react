export default function Exercicio11() {
  function converterCelsiusFahrenheit(tempCelsius) {
    return (tempCelsius * 9) / 5 + 32;
  }

  const tempCelsius = 20;

  return (
    <>
      <h2>Exercício 11</h2>
      <p>Temperatura: {tempCelsius}°C</p>
      <p>Temperatura: {converterCelsiusFahrenheit(tempCelsius)}°F</p>
    </>
  );
}
