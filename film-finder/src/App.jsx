import { useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies.jsx";
import { useMovies } from "./hooks/useMovies.js";

function App() {
  const { movies } = useMovies();
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { query } = Object.fromEntries(new window.FormData(event.target));
    console.log(query);
  };

  const handlechange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    if (newQuery === "") {
      setError("No se puede buscar una película vacía");
      return;
    }

    if (newQuery.match(/^\d+$/)) {
      setError("No se puede buscar una película con un número");
      return;
    }

    if (newQuery.length < 3) {
      setError("La busqueda tiene que tener al menos 3 caracteres");
      return;
    }

    setError(null);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handlechange}
            value={query}
            name="query"
            placeholder="Avengers, Star Wars, The Matrix..."
          />
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
