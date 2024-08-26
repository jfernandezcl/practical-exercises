import '../css/PokemonCard.css'

export default function PokemonCard({ pokemon }) {
  return (
    <div className="container-card">
      <div className='card-pokemon'>
        <img className='card-imagen' src={pokemon.image} alt={pokemon.name} />
      </div>
      <p className='card-name'>{pokemon.name}</p>
      <p>Height {pokemon.height}</p>
      <p>Weight {pokemon.weight}</p>
      <p>Type {pokemon.types}</p>
    </div>
  )
}

