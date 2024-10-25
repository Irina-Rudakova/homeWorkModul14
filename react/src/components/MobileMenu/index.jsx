import './mobile.css'
import { NavLink } from 'react-router-dom'

const MobileMenu = ({ handleMenu }) => {
        return (
            <div className='mobile-menu' onClick={handleMenu}>
                <nav className='mobile-menu__nav'>
                <NavLink to='/' className='nav-item'>Home</NavLink>
                <NavLink to='/about' className='nav-item'>About</NavLink>
                <NavLink to='/portfolio' className='nav-item'>Portfolio</NavLink>
                <NavLink to='/services' className='nav-item'>Services</NavLink>
                </nav>
            </div>
        )
}

export default MobileMenu