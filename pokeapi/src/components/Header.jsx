import logo from '../images/logo.png'
import '../css/Header.css'

export default function Header() {
  return (
    <header className='container-banner'>
      <div>
        <img src={logo} alt='logo' />
      </div>
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
    </header >
  )
}