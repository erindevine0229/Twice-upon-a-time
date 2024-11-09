import React from 'react';
import './Navbar.css';
import cartIcon from '../Assets/cart-icon.png';
import mainLogo from '../Assets/main-logo.png';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={mainLogo} alt='main logo for business'></img>
      </div>
      <ul className='nav-menu'>
        <li>Shop</li>
        <li>Floral</li>
        <li>Furniture</li>
        <li>Tableware</li>
        <li>Fabrics</li>
        <li>Signs</li>
        <li>Misc Decor</li>
        <li>About Us</li>
      </ul>
    </div>
  )
}

export default Navbar