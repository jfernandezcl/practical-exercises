import "./Searchclimate.css";

const Searchclimate = ({ searchData }) => {
  return (
    <>
      {searchData && (
        <div className="data-climate">
          <h2>Clima en {searchData.location.name}</h2>
          <img src={searchData.current.condition.icon} alt="icono tiempo" />
          <p>Condición: {searchData.current.condition.text}</p>
          <p>Temperatura: {searchData.current.temp_c}°C</p>
          <p>Fecha y hora: {searchData.location.localtime}</p>
        </div>
      )}
    </>
  );
};

export default Searchclimate;
