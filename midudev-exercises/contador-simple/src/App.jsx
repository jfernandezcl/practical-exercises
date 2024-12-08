import { useState } from "react";
import "./App.css";

function App() {
  const [incremento, setIncremento] = useState(0);

  const handleClickIncrease = () => {
    setIncremento(incremento + 1);
  };

  const handleClickdecrement = () => {
    setIncremento(incremento - 1);
  };

  const handleClickReset = () => {
    setIncremento(0);
  };

  return (
    <>
      <main className="card">
        <h3 className="title">Contador de incremento</h3>
        <div className="counter">
          <p>Contador : {incremento}</p>
        </div>
        <div>
          <button className="button" onClick={handleClickIncrease}>
            Incrementar
          </button>
          <button className="button" onClick={handleClickdecrement}>
            Decrementar
          </button>
          <button className="button" onClick={handleClickReset}>
            Resetear
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
