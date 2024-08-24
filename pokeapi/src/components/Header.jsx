import logo from '../images/logo.png'
import '../css/Header.css'

export default function Header() {
  return (
    <header>
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
    </header>
  )
}