// Utilizar el hook personalizado
// Organizar la barra de busqueda y cuadrícula
import PokemonGrid from "./PokemonGrid";
import SearchBar from "./SearchBar";
import { usePokemon } from "../hooks/usePokemon";

export default function PokemonList() {
  const { pokemons, filterPokemons } = usePokemon()

  return (
    <div>
      <SearchBar onSearch={filterPokemons} />
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}