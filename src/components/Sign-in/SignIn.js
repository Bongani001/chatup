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
    <div className='sign-in-page bg-secondary-subtle'>
        <div className='d-flex flex-column align-items-center bg-dark-subtle rounded p-5 gap-4'>
            <img className='img-fluid whatsUp-logo' width={70} src={require('../../assets/whatsup-icon.png')} alt='Whatsup logo' />
            <h2 className='fs-4 welcome'>Welcome to ChatUp</h2>
            <button className='btn btn-primary mt-4' onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
        <Footer />
    </div>
  )
}


export default SignIn;