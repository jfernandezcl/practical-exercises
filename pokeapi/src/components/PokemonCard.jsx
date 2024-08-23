export default function PokemonCard({ pokemon }) {
  return (
    <div>
      <img src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
    </div>
  )
}