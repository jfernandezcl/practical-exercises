import "./NotaLista.css";
import Nota from "./Nota.jsx";

function NotaLista({ notas, onDeleteNota }) {
  return (
    <div>
      {notas.map((nota, index) => (
        <Nota key={index} nota={nota} onDelete={() => onDeleteNota(index)} />
      ))}
    </div>
  );
}

export default NotaLista;
