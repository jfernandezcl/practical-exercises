import withResults from "../mocks/with-results.json";
import withoutResults from "../mocks/no-results.json";
import { useState } from "react";

export function useMovies({ search }) {
  const [responseMovies, setResponseMovies] = useState([]);

  const movies = responseMovies.Search;

  const mappedMovies = movies?.map((movies) => ({
    id: movies.imdbID,
    title: movies.Title,
    year: movies.Year,
    image: movies.Poster,
  }));

  const getMovies = () => {
    if (search) {
      setResponseMovies(withResults);
    } else {
      setResponseMovies(withoutResults);
    }
  };

  return { movies: mappedMovies, getMovies };
}
