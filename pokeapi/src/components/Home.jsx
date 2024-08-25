import PokemonList from "./PokemonList";
import '../css/Home.css'

export default function Home() {
  return (
    <div className="container-home">
      <h1>Welcome to he Pokédex</h1>
      <PokemonList />
    </div>
  )
}