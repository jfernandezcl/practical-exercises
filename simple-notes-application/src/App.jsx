import { useState } from "react";
import "./App.css";

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
    const nuevasNotas = notas.filter((notas, i) => i !== indice);
    setNotas(nuevasNotas);
  };

  return (
    <>
      <h1>Simple notas Application</h1>
      <input
        type="text"
        value={nuevaNota}
        onChange={(e) => setNuevaNota(e.target.value)}
        placeholder="Escribir nueva nota"
      />
      <button onClick={agreagarNota}>Agregar nota</button>
      <ul>
        {notas.map((nota, index) => (
          <li key={index}>
            {nota}
            <button onClick={() => eliminarNota(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
