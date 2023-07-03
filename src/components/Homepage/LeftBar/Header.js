import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { auth } from '../../../firebase-config';
import { AuthContext } from '../../../context/AuthContext';

const Header = () => {

    const {currentUser} = useContext(AuthContext);

  return (
        <nav>
            <div className='left-nav'>
                <img className='whatsup-logo' src={require('../../../assets/whatsup-icon.png')} alt='WhatsUP logo' />
                <h3 className='whatsup-name'>WhatsUp</h3>
            </div>
            <div className='right-nav'>
                {/* <img className='right-icon plus' src={require('../../../assets/plus.png')} alt='Plus icon' />
                <img className='right-icon kebab' src={require('../../../assets/kebab.png')} alt='Kebab icon' /> */}
                <button className='btn logout' onClick={() => signOut(auth)}>Logout</button>
                <img src={currentUser.photoURL} className='user-image' alt='User Avatar'/>
            </div>
        </nav>
  )
}

export default Header