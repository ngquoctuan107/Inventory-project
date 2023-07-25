import React, {useState} from 'react';
import {BiSearch} from 'react-icons/bi';
import {BsPerson} from 'react-icons/bs';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'


import './NavbarStyles.css'

function Navbar() {
  const [nav,setNav] = useState(false)
  const handleNav = () => setNav(!nav)

  return (
    <div className= {nav ? 'navbar navbar-bg' : 'navbar'}>
      <div className={ nav ? 'logo dark' : 'logo'}>
         <a href='/' className='title'>
          <img src={logo}/>
         </a>
      </div> 
      <ul className='nav-menu'>
        <a><Link to="/">HOME</Link></a>
        <a><Link to="/service">SERVICE</Link></a>
        <a><Link to="/about">ABOUT</Link></a>
        <a><Link to="/contact">CONTACT</Link></a>
      </ul>
      <div className='nav-icons'>
        <BiSearch  className = 'icon' style={{marginRight: '1rem'}} />
        <BsPerson className = 'icon' />
      </div>
      <div className='hamburger' onClick={handleNav}>
        {!nav ?  (<HiOutlineMenuAlt4 className ='icon' />) : (<AiOutlineClose style={{color: '#000'}} className='icon' />)}
      </div>

      <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
        <ul className="mobile-nav">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/service">SERVICE</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
              <button>Search</button>
              <button>Account</button>
          </div>
          <div className="social-icons">
              <FaFacebook className = 'icon' />
              <FaInstagram className = 'icon' />
              <FaTwitter className = 'icon' />
              <FaPinterest className = 'icon' />
              <FaYoutube className = 'icon' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar
 