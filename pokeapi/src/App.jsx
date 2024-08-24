import './css/app.css'
import logo from './images/logo.png'
import PokemonList from './components/PokemonList'

function App() {

  return (
    <>
      <div className='container-banner'>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#search'>Search</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
        </ul>
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
