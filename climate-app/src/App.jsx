import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${
    // @ts-ignore
    import.meta.env.VITE_API_KEY
  }&q=London&aqi=no`;
  const [searchData, setSearchData] = useState();

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setSearchData(data));
  }, [setSearchData]);

  return (
    <main>
      <div>
        <h1>Buscador de clima:</h1>
      </div>

      <form>
        <label>
          Ciudad: <input type="text" />
        </label>
        <button type="submit">Buscar</button>
      </form>
    </main>
  );
}

export default App;
