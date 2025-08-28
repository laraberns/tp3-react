export default function Color({ color }) {
  const styleBox = {
    backgroundColor: color,
    color: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "200px",
    margin: "10px auto",
  };

  return (
    <div style={styleBox}>
      <p>Componente de cor</p>
      <h3>Cor recebida: {color}</h3>
    </div>
  );
}
