import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { auth } from '../../../firebase-config';
import { AuthContext } from '../../../context/AuthContext';

const Header = () => {

    const {currentUser} = useContext(AuthContext);

  return (
        <nav className='navbar bg-secondary-subtle'>
            <div className='container-fluid d-flex align-items-center'>
                <div className='d-flex'>
                    <div className='navbar-brand'>
                        <img className='img-fluid whatsup-logo' width='30' src={require('../../../assets/whatsup-icon.png')} alt='WhatsUP logo' />
                    </div>
                    <h3 className='fs-6 d-flex align-items-center whatsUp-name'>WhatsUp</h3>
                </div>
                <div className='right-nav d-flex align-items-center gap-3'>
                    <img src={currentUser.photoURL} className='user-image' alt='User Avatar'/>
                    <div className='dropdown'>
                        <i className="bi bi-gear dropdown-toggle" data-bs-toggle="dropdown" id="dropdownIcon" aria-expanded="false" style={{fontSize: '25px'}}></i>
                        <ul className='dropdown-menu dropdown-menu-end' aria-labelledby="dropdownIcon">
                            <li className='dropdown-item disabled'>Public Group</li>
                            <li className='dropdown-item disabled'>Settings</li>
                            <li><hr className="dropdown-divider" /></li>
                            <li className='dropdown-item' onClick={() => signOut(auth)}>Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default Header