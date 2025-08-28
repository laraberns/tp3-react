export default function Exercicio1() {
  const perfil = {
    nome: "Lara",
    sobrenome: "Pereira",
    foto: "assets/Lara.jpg",
    contatos: ["(11) 99999-9999", "(15) 93322-9999"],
    emails: ["lara@gmail.com", "lara@email.com"],
    endereco: "Rua Altos, 123 - Centro - São Paulo/SP",
  };

  const styleTitulo = {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "10px",
  };

  const styleCard = {
    margin: "20px auto",
    border: "1px solid black",
    padding: "15px",
    borderRadius: "10px",
    maxWidth: "400px",
    textAlign: "center",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  };

  const styleFoto = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    margin: "10px 0",
  };

  return (
    <>
      <h2>Exercício 1</h2>
      <div style={styleCard}>
        <img alt="foto de perfil" src={perfil.foto} style={styleFoto} />
        <p style={styleTitulo}>
          {perfil.nome} {perfil.sobrenome}
        </p>

        <p style={styleTitulo}>Contatos:</p>
        <ul>
          {perfil.contatos.map((tel, index) => (
            <li key={index}>{tel}</li>
          ))}
        </ul>

        <p style={styleTitulo}>E-mails:</p>
        <ul>
          {perfil.emails.map((mail, index) => (
            <li key={index}>{mail}</li>
          ))}
        </ul>

        <p style={styleTitulo}>Endereço:</p>
        <p>{perfil.endereco}</p>
      </div>
    </>
  );
}
