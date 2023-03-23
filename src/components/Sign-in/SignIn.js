import React from 'react';
import Footer from '../Footer';
import './SignIn.css';

const SignIn = props => {
  return (
    <div className='sign-in-page'>
        <div className='sign-in-container'>
            <img className='sign-in whatsup-icon' src={require('../../assets/whatsup-icon.png')} alt='Whatsup logo' />
            <h2 className='sign-in-header-text' >Sign in to WhatsUp</h2>
            <button className='sign-in-button'>Continue with Google</button>
        </div>
        <Footer />
    </div>
  )
}


export default SignIn;