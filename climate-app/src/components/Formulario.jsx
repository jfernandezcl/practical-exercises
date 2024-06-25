import "./Formulario.css";
import { useState, useEffect } from "react";

const Formulario = () => {
  const [searchData, setSearchData] = useState(null);
  const [city, setCity] = useState("");
  const [inputCity, setInputCity] = useState("");

  useEffect(() => {
    if (city) {
      const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${
        // @ts-ignore
        import.meta.env.VITE_API_KEY
      }&q=${city}&aqi=no`;

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
      {/*Introducir ciudad y botón*/}
      <form onSubmit={handleSubmit}>
        <div className="contenido">
          <label className="contenido-nombre">
            Ciudad:
            <input
              className="contenido-input"
              type="text"
              value={inputCity}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button className="button-buscar" type="submit">
          Buscar
        </button>
      </form>
      {/*Información*/}
      <div>
        {searchData && (
          <div className="data-climate">
            <h2>Clima en {searchData.location.name}:</h2>
            <p>Temperatura: {searchData.current.temp_c}°C</p>
            <p>Condición: {searchData.current.condition.text}</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Formulario;
