import "./App.css";
import Testimonio from "./componentes/Testimonio.jsx";
import { info } from "./utils/info.jsx";
function App() {
  return (
    <main className="App">
      <h1>Esto es lo que opinan los Alumnos de React</h1>
      <ul>
        {info.map((person, index) => (
          <li key={`testimonio-${index}`}>
            <Testimonio person={person} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
