import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { auth } from '../../../firebase-config';
import { AuthContext } from '../../../context/AuthContext';

const Header = () => {

    const {currentUser} = useContext(AuthContext);

  return (
        <nav className='navbar bg-secondary-subtle ps-3'>
            <div className='container-fluid d-flex align-items-center p-0 mx-2'>
                <div className='d-flex'>
                    <div className='navbar-brand'>
                        <img className='img-fluid whatsup-logo' width='30' src={require('../../../assets/whatsup-icon.png')} alt='WhatsUP logo' />
                    </div>
                    <h3 className='fs-6 d-flex align-items-center whatsUp-name'>ChatUp</h3>
                </div>
                <div className='right-nav d-flex align-items-center gap-3'>
                    <img src={currentUser.photoURL} className='user-image' alt='User Avatar'/>
                    <div className='dropdown'>
                        <button className='btn py-0' data-bs-toggle="dropdown" id="dropdownIcon" aria-expanded="false">
                            <i className="bi bi-gear" style={{fontSize: '25px'}}></i>
                        </button>
                        <ul className='dropdown-menu dropdown-menu-end' aria-labelledby="dropdownIcon">
                            <li className='dropdown-item d-flex gap-2 disabled'>
                                <i className='bi bi-people'></i>
                                <p>Public Group</p>
                            </li>
                            <li className='dropdown-item d-flex gap-2 disabled'>
                                <i className='bi bi-question-square'></i>
                                <p>Help</p>
                            </li>
                            <li className='dropdown-item d-flex gap-2 disabled'>
                                <i className='bi bi-info-square'></i>
                                <p>Report an issue</p>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li className='dropdown-item btn d-flex gap-2' onClick={() => signOut(auth)}>
                                <i className='bi bi-box-arrow-right'></i>
                                <span>Logout</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default Header