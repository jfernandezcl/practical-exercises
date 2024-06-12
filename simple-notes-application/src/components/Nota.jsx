import "./Nota.css";

function Nota({ nota, onDelete }) {
  return (
    <div>
      <p>{nota}</p>
      <button onClick={onDelete}>Eliminar</button>
    </div>
  );
}

export default Nota;
