import { useState } from "react";
import DetalhesLivros from "./DetalhesLivro";
import FiltroLivros from "./FiltrarLivros";
import InfoBiblioteca from "./InfoBiblioteca";
import InfoLivros from "./InfoLivros";

export default function BibliotecaPessoal({ biblioteca }) {
  const [visaoDetalhada, setVisaoDetalhada] = useState(false);

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

      <h4>Lista de Livros</h4>
      {visaoDetalhada ? (
        <DetalhesLivros listaLivros={biblioteca.livros} />
      ) : (
        <>
          <InfoLivros listaLivros={biblioteca.livros} />
        </>
      )}

      <button
        onClick={() => setVisaoDetalhada(!visaoDetalhada)}
        style={{
          margin: "10px 0",
          padding: "8px 12px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {visaoDetalhada ? "Voltar à visão geral" : "Ver detalhes expandidos"}
      </button>

      <FiltroLivros listaLivros={biblioteca.livros} />
    </div>
  );
}
