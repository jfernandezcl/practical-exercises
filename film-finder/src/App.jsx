import "./App.css";
import responseMovies from "./mocks/with-results.json";
import withouResults from "./mocks/no-results.json";
import { Movies } from "./components/Movies.jsx";

function App() {
  const movies = responseMovies.Search;

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form">
          <input placeholder="Avengers, Star Wars, The Matrix..." />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
