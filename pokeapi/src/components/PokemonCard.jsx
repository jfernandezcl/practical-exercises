import '../css/PokemonCard.css'

export default function PokemonCard({ pokemon }) {
  return (
    <div className="container-card">
      <div className='card-pokemon'>
        <img className='card-imagen' src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className='container-title'>
        <p className='card-name'>{pokemon.name}</p>
        <p className='card-type'>Type {pokemon.types}</p>
      </div>
      <div className='container-info'>
        <span className='card-size'>H {pokemon.height}</span>
        <span className='card-size'>W {pokemon.weight}</span>
      </div>
    </div>
  )
}

