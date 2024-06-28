import "./Formulario.css";
import { useState, useEffect } from "react";
import Searchclimate from "./Searchclimate";

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
    <>
      {/*Introducir ciudad*/}
      <form onSubmit={handleSubmit}>
        <div className="contenido">
          <label className="contenido-nombre">
            Localización:
            <input
              className="contenido-input"
              type="text"
              value={inputCity}
              onChange={handleInputChange}
              placeholder="Escribir localización..."
            />
          </label>
        </div>
        <button className="button-buscar" type="submit">
          Buscar
        </button>
      </form>
      <Searchclimate searchData={searchData} />
    </>
  );
};

export default Formulario;
