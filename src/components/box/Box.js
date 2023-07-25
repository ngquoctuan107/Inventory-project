import React from 'react';
import './Box.css';
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa';

function Box() {
  return (
    <div className='box'>
        <div className='container'>
            <div className='content'>
                <h3 className='title'>UNLOCK</h3>
                <p>Talonpujankatu 2A</p>
                <p>67100 Kokkola, Finland</p>
                <p>info@centria.fi</p>
                <div className='info'><p>About us</p></div>
                <div className='info-1'><p>Contact information</p></div>                
            </div>
            <div className='icons'>
              <h3 className='title'>Follow us</h3>
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

export default Box
