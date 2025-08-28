import DetalhesLivros from "./DetalhesLivro";
import FiltroLivros from "./FiltrarLivros";
import InfoBiblioteca from "./InfoBiblioteca";
import InfoLivros from "./InfoLivros";

export default function BibliotecaPessoal({ biblioteca }) {
  const styleBox = {
    backgroundColor: "#e9cfcfff",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "400px",
    width: "100%",
    margin: "10px auto",
  };

  return (
    <div style={styleBox}>
      <h3>Biblioteca Pessoal</h3>
      <InfoBiblioteca biblioteca={biblioteca} />
      <h4>Lista completa de Livros</h4>
      <InfoLivros listaLivros={biblioteca.livros} />

      <FiltroLivros listaLivros={biblioteca.livros} />

      <h4>Detalhes Expandidos</h4>
      <DetalhesLivros listaLivros={biblioteca.livros} />
    </div>
  );
}
