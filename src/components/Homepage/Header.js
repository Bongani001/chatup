import React from 'react';

const Header = () => {
  return (
    <header>
        <nav>
            <div className='left-nav'>
                <img className='user-avater' src={require('../../assets/whatsup-icon.png')} alt='User profile' />
                <h1 className='whatsup-name'>WhatsUp</h1>
            </div>
            <div className='right-nav'>
                <img className='right-icon plus' src={require('../../assets/plus.png')} alt='Plus icon' />
            </div>
        </nav>
    </header>
  )
}

export default Header