import "./App.css";
import Formulario from "./components/Formulario";
// @ts-ignore
import localizacion from "./images/localizacion.png";

const App = () => {
  return (
    <main>
      <div className="titulo-icono">
        <h1>Buscador de clima</h1>
        <img src={localizacion} alt="icono" />
      </div>

      <div>
        <Formulario />
      </div>
    </main>
  );
};

export default App;
