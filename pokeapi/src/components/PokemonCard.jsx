import '../css/PokemonCard.css'

export default function PokemonCard({ pokemon }) {
  return (
    <div className="container-card">
      <div className='card-pokemon'>
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <p>{pokemon.name}</p>
    </div>
  )
}

