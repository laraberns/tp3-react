import InfoProduto from "./InfoProduto";
import InfoVendedor from "./InfoVendedor";
import ListaAvaliacoes from "./ListaAvaliacoes";

export default function ProdutoCompleto({ produto }) {
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
      <InfoProduto
        descricao={produto.descricao}
        nome={produto.nome}
        preco={produto.preco}
      />
      <InfoVendedor
        nome={produto.vendedor.nome}
        telefone={produto.vendedor.telefone}
        nota={produto.vendedor.nota}
      />
      <ListaAvaliacoes listaAvaliacoes={produto.avaliacoes} />
    </div>
  );
}
