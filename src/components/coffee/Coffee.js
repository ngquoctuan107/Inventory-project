import React from 'react'
import './CoffeeStyles.css'

function Coffee() {
    return (
            <div className="coffee">
            <div className="overlay"></div>
            <div className="content">
                <h1>Welcome to our home</h1>
                <p>Our assistance ensures the secure and cautious storage of your belongings.</p>
                <div>
                    <a href='/about'>
                    <button>Learn more</button>
                    </a>
                </div>
            </div>
            </div>
        
    )
}

export default Coffee