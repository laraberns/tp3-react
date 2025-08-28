export default function ListaAvaliacoes({ listaAvaliacoes }) {
  return (
    <div>
     {listaAvaliacoes.map((avaliacao, index) => (
       <div key={index} style={{ border: "3px solid blue", padding: "10px", marginBottom: "10px" }}>
         <p><strong>Usuário:</strong> {avaliacao.usuario}</p>
          <p><strong>Comentário:</strong> {avaliacao.avaliacao}</p>
          <p><strong>Nota:</strong> {avaliacao.nota}</p>
       </div>
     ))}
    </div>
  )
}
