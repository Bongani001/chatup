import React from 'react';
import Footer from '../Footer';
import './SignIn.css';
import { auth, db, provider } from '../../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';


const SignIn = () => {

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);

    await setDoc(doc(db, "users", result.user.uid), {
      uid: result.user.uid,
      displayName: result.user.displayName,
      email: result.user.email,
      photoURL: result.user.photoURL
    });

    const res = await getDoc(doc(db, "userChats", result.user.uid))

    if(!res.exists()) {
      await setDoc(doc(db, "userChats", result.user.uid), {});
    }
    navigate("/");
  };

  return (
    <div className='sign-in-page'>
        <div className='sign-in-container'>
            <img className='sign-in whatsup-icon' src={require('../../assets/whatsup-icon.png')} alt='Whatsup logo' />
            <h2 className='sign-in-header-text' >Sign in to WhatsUp</h2>
            <button className='sign-in-button' onClick={signInWithGoogle}>Continue with Google</button>
        </div>
        <Footer />
    </div>
  )
}


export default SignIn;