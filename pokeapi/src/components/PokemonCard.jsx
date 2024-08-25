import '../css/PokemonCard.css'

export default function PokemonCard({ pokemon }) {
  return (
    <div className="container-card">
      <img className='card-pokemon' src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
    </div>
  )
}