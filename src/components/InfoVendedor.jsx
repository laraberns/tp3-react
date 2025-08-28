export default function InfoVendedor({ nome, telefone, nota }) {
  return (
    <div style={{ border: "3px solid blue", padding: "10px", marginBottom: "10px" }}>
      <p>Nome: {nome}</p>
      <p>Telefone: {telefone}</p>
      <p>Nota: {nota}</p>
    </div>
  );
}
