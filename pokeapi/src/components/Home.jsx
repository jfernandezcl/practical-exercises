import PokemonList from "./PokemonList";
import '../css/Home.css'
import SearchBar from "./SearchBar";
import { usePokemon } from "../hooks/usePokemon";


export default function Home() {
  const { pokemons, filterPokemons } = usePokemon()
  return (
    <>
      <div className="container-search">
        <h1>Welcome to he Pokédex</h1>
      </div>
      <div>
        <SearchBar onSearch={filterPokemons} />
      </div>
      <div className="container-home">
        <PokemonList pokemons={pokemons} />
      </div>
    </>
  )
}