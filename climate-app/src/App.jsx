import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [searchData, setSearchData] = useState(null);
  const [city, setCity] = useState("");
  const [inputCity, setInputCity] = useState("");

  useEffect(() => {
    if (city) {
      const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${
        // @ts-ignore
        import.meta.env.VITE_API_KEY
      }&q={city}&aqi=no`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setSearchData(data));
    }
  }, [city]);

  const handleInputChange = (event) => {
    setInputCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(inputCity);
  };

  return (
    <main>
      <div>
        <h1>Buscador de clima:</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Ciudad:
          <input
            className="form-input"
            type="text"
            value={inputCity}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Buscar</button>
      </form>

      {searchData && (
        <div>
          <h2>Clima en {searchData.location.name}:</h2>
          <p>Temperatura: {searchData.current.temp_c}°C</p>
          <p>Condición: {searchData.current.condition.text}</p>
        </div>
      )}
    </main>
  );
}

export default App;
