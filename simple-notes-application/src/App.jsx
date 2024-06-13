import { useState } from "react";
import "./App.css";
import NotaLista from "./components/NotaLista.jsx";

function App() {
  // Estado para almacenar las notas
  const [notas, setNotas] = useState([]);
  // Estado para almacenar la nueva nota
  const [nuevaNota, setNuevaNota] = useState("");

  // Función para agregar una nueva nota
  const agreagarNota = () => {
    if (nuevaNota.trim() !== "") {
      setNotas([...notas, nuevaNota]);
      setNuevaNota("");
    }
  };

  // Función para eliminar una nota
  const eliminarNota = (indice) => {
    const nuevasNotas = notas.filter((nota, i) => i !== indice);
    setNotas(nuevasNotas);
  };

  return (
    <div className="blog-container">
      <svg
        className="icon-notas"
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M96 352V96c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v197.5c0 17-6.7 33.3-18.7 45.3l-58.5 58.5c-12 12-28.3 18.7-45.3 18.7H160c-35.3 0-64-28.7-64-64m176-224c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16zm24 336c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.9 512 0 451.1 0 376V152c0-13.3 10.7-24 24-24s24 10.7 24 24v224c0 48.6 39.4 88 88 88z"
        />
      </svg>
      <h1 className="blog-title">Blog de notas</h1>
      <textarea
        className="notas-input"
        value={nuevaNota}
        onChange={(e) => setNuevaNota(e.target.value)}
        placeholder="Escribir nueva nota"
        rows={16}
        cols={50}
      />
      <button className="notas-button" onClick={agreagarNota}>
        Agregar
      </button>
      <NotaLista notas={notas} onDeleteNota={eliminarNota} />
    </div>
  );
}

export default App;
