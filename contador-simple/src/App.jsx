import { useState } from "react";
import "./App.css";

function App() {
  const [incremento, setIncremento] = useState(0);

  const handleClick = () => {
    setIncremento(incremento + 1);
  };

  return (
    <>
      <main className="card">
        <h3 className="title">Contador de incremento</h3>
        <div className="counter">
          <p>Contador : {incremento}</p>
        </div>
        <div>
          <button className="button" onClick={handleClick}>
            Incrementar
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
