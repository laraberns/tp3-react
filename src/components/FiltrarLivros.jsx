import { useState } from "react";
import InfoLivros from "./InfoLivros";

export default function FiltroLivros({ listaLivros }) {
  const [genero, setGenero] = useState("");
  const [avaliacaoMin, setAvaliacaoMin] = useState(0);
  const [paginasMin, setPaginasMin] = useState(0);

  const livrosFiltrados = listaLivros.filter((livro) => {
    return (
      (genero === "" || livro.genero === genero) &&
      livro.avaliacao >= avaliacaoMin &&
      livro.paginas >= paginasMin
    );
  });

  const generosDisponiveis = [...new Set(listaLivros.map((l) => l.genero))];

  return (
    <div
      style={{
        padding: "10px",
        border: "2px solid green",
        borderRadius: "10px",
        marginTop: "15px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h4>Filtrar Livros</h4>

      <select value={genero} onChange={(e) => setGenero(e.target.value)}>
        <option value="">Todos os gêneros</option>
        {generosDisponiveis.map((g, idx) => (
          <option key={idx} value={g}>
            {g}
          </option>
        ))}
      </select>

      <label>Avaliação mínima:</label>
      <input
        type="number"
        min="0"
        placeholder="Avaliação mínima"
        value={avaliacaoMin}
        onChange={(e) => setAvaliacaoMin(Number(e.target.value))}
        style={{ width: "120px" }}
      />

      <label>Páginas mínimas:</label>

      <input
        type="number"
        min="0"
        placeholder="Páginas mínimas"
        value={paginasMin}
        onChange={(e) => setPaginasMin(Number(e.target.value))}
        style={{ width: "120px" }}
      />
      <div style={{ marginTop: "15px" }}>
        <InfoLivros listaLivros={livrosFiltrados} />
      </div>
    </div>
  );
}
