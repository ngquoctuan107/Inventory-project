import React from 'react'
import Navbar from '../components/navbar/Navbar';
import './Contact.css';
import {FaPhone , FaEnvelope, FaMapMarker, FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa';

function Contact() {
  return (
    <div>
      <div className='head'>
        <Navbar />
      </div>
      <div className='main-part'>
      <h1>Contact us</h1>
      <p className='sub-title'>Any question or remarks? Just write us a message</p>

      <div id='contact-container'>
        <div className='contact-info'>
          <h4>
            Contact Information
          </h4>
          <p>Fill up the form and we will get back to you as soon as possible.</p>
          <div className='icon-text'>
          <FaPhone className = 'icon' />
          <span>+123 456 7899</span>
          </div>
          <div className='icon-text'>
          <FaEnvelope className = 'icon' />
          <span>info@example.com</span>
          </div>
          <div className='icon-text'>
          <FaMapMarker className = 'icon' />
          <span>Centria UAS, Kokkola.</span>
          </div>
          <div className='social-media'>
            <a href='#' className='icon-circle'>
              <FaFacebook className = 'icon' />
            </a>
            <a href='#' className='icon-circle'>
              <FaInstagram className = 'icon' />
            </a>
            <a href='#' className='icon-circle'>
              <FaPinterest className = 'icon' />
            </a>
            <a href='#' className='icon-circle'>
              <FaTwitter className = 'icon' />
            </a>
            
          </div>
        </div>
        <form>
          <div className='col'>
            <div className='form-group'>
              <label>First Name</label>
              <input type="text"/>
            </div>
            <div className='form-group'>
              <label>Last Name</label>
              <input type="text"/>
            </div>
            </div>
            
          <div className='col'>
            <div className='form-group'>
              <label>Email</label>
              <input type="email"/>
            </div>
            <div className='form-group'>
              <label>Phone</label>
              <input type="phone"/>
            </div>
          </div>

          <div className='col'>
            <div className='form-group solo'>
              <label>How can we help you?</label>
              <div id='radio-buttons'>
              <div className='radio-button'>
              <input type="radio" name='type' id='radiocode' value="code"/>
              <label for="radiocode"> Pass code</label>
              </div>
              <div className='radio-button'>
              <input type="radio" name='type' id='radiolocker' value="locker"/>
              <label for="radiolocker"> Locker</label>
              </div>
              <div className='radio-button'>
              <input type="radio" name='type' id='radiobooking' value="booking"/>
              <label for="radiobooking"> Reservation </label>
              </div>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='form-group solo'>
              <label>Message</label>
              <textarea></textarea>
            </div>
          </div>

          <div className='col'>
            <div className='form-group solo right'>
                <button className='primary'>Send my message</button>
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Contact
 