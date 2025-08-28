import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Exercicio1 from "./pages/Exercicio1";
import Exercicio2 from "./pages/Exercicio2";
import Exercicio3 from "./pages/Exercicio3";
import Exercicio4 from "./pages/Exercicio4";
import Exercicio5 from "./pages/Exercicio5";
import Exercicio6 from "./pages/Exercicio6";
import Exercicio7ao12 from "./pages/Exercicio7ao12";

const componentes = [
  Exercicio1,
  Exercicio2,
  Exercicio3,
  Exercicio4,
  Exercicio5,
  Exercicio6,
  Exercicio7ao12
];

function ListaExercicios() {
  return (
    <>
      <h1>Lista de Exercícios</h1>
      <ul>
        {componentes.map((_, i) => (
          <li key={i}>
            <Link to={`/exercicio${i + 1}`}>Exercício {i + 1}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div style={{ padding: 20 }}>
      {location.pathname === "/" && <ListaExercicios />}

      <Routes>
        {componentes.map((Componente, i) => (
          <Route key={i} path={`/exercicio${i + 1}`} element={<Componente />} />
        ))}
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
