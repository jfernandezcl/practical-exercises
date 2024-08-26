import '../css/PokemonCard.css'

export default function PokemonCard({ pokemon }) {
  return (
    <div className="container-card">
      <div className='card-pokemon'>
        <img className='card-imagen' src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className='container-info'>
        <p className='card-name'>{pokemon.name}</p>
        <p className='card-size'>Height {pokemon.height}</p>
        <p className='card-size'>Weight {pokemon.weight}</p>
        <p className='card-type'>Type {pokemon.types}</p>
      </div>
    </div>
  )
}

