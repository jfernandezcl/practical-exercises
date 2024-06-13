import "./Nota.css";

function Nota({ nota, onDelete }) {
  return (
    <div className="notas">
      <p>{nota}</p>
      <button className="notas-button" onClick={onDelete}>
        Eliminar
      </button>
    </div>
  );
}

export default Nota;
