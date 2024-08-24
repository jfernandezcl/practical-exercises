import './css/app.css'
import portada from './images/img-portada.jpg'
import PokemonList from './components/PokemonList'

function App() {

  return (
    <>
      <div className='container-banner'>
        <h1>Poké API</h1>

      </div>
      <div>
        <PokemonList />
      </div>
    </>
  )
}

export default App
