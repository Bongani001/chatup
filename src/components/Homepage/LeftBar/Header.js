import React from 'react';

const Header = () => {
  return (
        <nav>
            <div className='left-nav'>
                <img className='whatsup-logo' src={require('../../../assets/whatsup-icon.png')} alt='WhatsUP logo' />
                <h1 className='whatsup-name'>WhatsUp</h1>
            </div>
            <div className='right-nav'>
                <img className='right-icon plus' src={require('../../../assets/plus.png')} alt='Plus icon' />
                <img className='right-icon kebab' src={require('../../../assets/kebab.png')} alt='Kebab icon' />
            </div>
        </nav>
  )
}

export default Header