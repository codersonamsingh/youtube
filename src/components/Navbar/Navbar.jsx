import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'


const Navbar = () => {
    return (
        <nav className='flex-div'>
            <div className='nav-left flexdiv '>
                <img className='menu_icon' src={menu_icon} alt="" />
                <img className= 'logo' src={logo} alt="" />

            </div>
        </nav>
    )
}
export default Navbar