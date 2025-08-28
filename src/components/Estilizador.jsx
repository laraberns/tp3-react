export default function Estilizador({ estilo }) {
  return (
    <div style={estilo}>
      <h3>Componente Estilizado</h3>
      <p>Os estilos foram aplicados via prop!</p>
    </div>
  );
}
