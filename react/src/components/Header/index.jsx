import './header.css';
import LOGO from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import BURGER from '../../assets/burger.png';
import MobileMenu from '../MobileMenu';
import { useState } from 'react';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
      <header>
        <img src={LOGO} width={134} height={27}/>
        <nav className='nav'>
            <NavLink to='/' className='nav-item'>Home</NavLink>
            <NavLink to='/about' className='nav-item'>About</NavLink>
            <NavLink to='/portfolio' className='nav-item'>Portfolio</NavLink>
            <NavLink to='/services' className='nav-item'>Services</NavLink>
        </nav>
        <button className='main-btn header-btn'>Contact Me</button>
        <button onClick={handleMenu} className='burger'>
          <img className='btn-burger' src={BURGER}/>
        </button>
        {menuOpen && <MobileMenu handelMenu={handleMenu}/>}
      </header>
  )
}

export default Header
