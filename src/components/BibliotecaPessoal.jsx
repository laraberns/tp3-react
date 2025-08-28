import InfoBiblioteca from "./InfoBiblioteca";
import InfoLivros from "./InfoLivros";

export default function BibliotecaPessoal({ biblioteca }) {
  const styleBox = {
    backgroundColor: "#e9cfcfff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
    margin: "10px auto",
  };

  return (
    <div style={styleBox}>
      <h3>Biblioteca Pessoal</h3>
      <InfoBiblioteca biblioteca={biblioteca} />
      <InfoLivros listaLivros={biblioteca.livros} />
    </div>
  );
}
