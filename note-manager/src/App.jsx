import { useState } from "react";
import "./App.css";

function App() {
  const [notas, setNotas] = useState();

  return (
    <>
      <h1>Note Manager</h1>
      <main>
        <form>
          <label>
            Título:
            <input type="text" />
          </label>
          <label>
            Texto:
            <input type="text" />
          </label>
        </form>
      </main>
    </>
  );
}

export default App;
