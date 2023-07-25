import React from 'react'
import './introStyles.css'

import f_pic from '../../images/1.jpeg'
import s_pic from '../../images/2.jpeg'
import t_pic from '../../images/3.jpeg'
import four_pic from '../../images/4.jpeg'
import five_pic from '../../images/5.jpeg'

function App() {
  return (
    <div className='Intro'>
        <div className='container'>
            <h1>Get started</h1>
            <p>Unlock your first locker</p>
            <div className='img-container'>
                <img className='span-3 image-grid-row-2' src={f_pic} alt="/" />
                <img src={s_pic} alt="/" />
                <img src={t_pic} alt="/" />
                <img src={four_pic} alt="/" />
                <img src={five_pic} alt="/" />
            </div>
        </div>
    </div>
  );
}

export default App