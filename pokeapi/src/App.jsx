import './css/app.css'
import logo from './images/logo.png'
import PokemonList from './components/PokemonList'

function App() {

  return (
    <>
      <div className='container-banner'>
        <h1>Poké API</h1>
      </div>
      <div>
        <img className='logo' src={logo} alt='logo' />
      </div>
      <div>
        <PokemonList />
      </div>
    </>
  )
}

export default App
