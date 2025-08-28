export default function Card({ titulo, preco }) {
  return (
    <div>
      <h3>{titulo}</h3>
      <p>Preço: R$ {preco}</p>
    </div>
  );
}
