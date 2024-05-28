import responseMovies from "../mocks/with-results.json";
import withouResults from "../mocks/no-results.json";

export function useMovies() {
  const movies = responseMovies.Search;

  const mappedMovies = movies?.map((movies) => ({
    id: movies.imdbID,
    title: movies.Title,
    year: movies.Year,
    image: movies.Poster,
  }));
  return { movies: mappedMovies };
}
