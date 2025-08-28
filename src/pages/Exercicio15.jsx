import { useState } from "react";

export default function Exercicio15() {
  const [contador, setContador] = useState(0);

  return (
    <>
      <h2>Exercício 15</h2>

      <p>Contador: {contador}</p>

      <button onClick={() => setContador((prev) => prev + 1)}>Aumentar</button>
      <button onClick={() => setContador((prev) => prev - 1)}>Diminuir</button>
    </>
  );
}
