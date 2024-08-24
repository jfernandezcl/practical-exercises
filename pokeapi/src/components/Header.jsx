import logo from '../images/logo.png'
import '../css/Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='container-banner'>
      <div>
        <img src={logo} alt='logo' />
      </div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/search'>Search</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </header >
  )
}