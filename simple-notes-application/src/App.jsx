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
    <div>
      <h1>Simple notas Application</h1>
      <textarea
        value={nuevaNota}
        onChange={(e) => setNuevaNota(e.target.value)}
        placeholder="Escribir nueva nota"
        rows={16}
        cols={50}
      />
      <button onClick={agreagarNota}>Agregar nota</button>
      <NotaLista notas={notas} onDeleteNota={eliminarNota} />
    </div>
  );
}

export default App;
