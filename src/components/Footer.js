import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="copyright">
        Copyright ©️ 2023 Gelo
        <a href='https://www.github.com/Bongani001' target='_blank' rel="noreferrer"><img src={require('../assets/github-logo.png')} alt='Github logo' style={{width: 20, borderRadius: 5}} /></a>
    </footer>
  )
}

export default Footer