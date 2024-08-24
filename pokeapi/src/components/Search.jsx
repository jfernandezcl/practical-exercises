import SearchBar from "./SearchBar";
import PokemonGrid from "./PokemonGrid";
import { usePokemon } from "../hooks/usePokemon";

export default function Search() {
  const { pokemons, filterPokemons } = usePokemon()

  return (
    <div>
      <h1>Search Pokémon</h1>
      <SearchBar onSearch={filterPokemons} />
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}