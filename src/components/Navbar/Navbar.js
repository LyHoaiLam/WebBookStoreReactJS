import { faBook, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import style from './Navbar.css'
import logoNavbar from '../../assets/1.jpeg'
import logo from '../../assets/circles.png'



function Navbar() {
    return (
        <div>
            <div className='navbar'>
                <div>
                <FontAwesomeIcon className='icon-size icon-book' style={{color: "white"}} icon={faBook} />
                
                </div>
                
                {/* <img className='icon-size icon-book' src={logo} /> */}
                <FontAwesomeIcon className='icon-size icon-cart' style={{color: "white"}} icon={faShoppingCart} />
            </div>
            <div>
                <img className='img' src={logoNavbar} alt='Sai' />
            </div>      
        </div>
        
    );
}

export default Navbar;