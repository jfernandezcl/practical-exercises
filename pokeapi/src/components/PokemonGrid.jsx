// organizar y mostrar todas las tarjetas en una cuadrícula
import PokemonCard from "./PokemonCard";

export default function PokemonGrid({ pokemons }) {
  return (
    <div className="pokemon-cuadrícula">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}