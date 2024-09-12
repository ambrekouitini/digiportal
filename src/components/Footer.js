import { useState } from 'react';
import '../styles/footer.scss';

const Footer = () => {


return (
    <div className="footer">
        <div className="container">
            <div className="logo">
                <span>Pole</span>
                <span>digital</span>
                <span>Mayoly</span>
            </div>
            <div className="links">
                <a href="#">Nos projets</a>
                <a href="#">Ressources</a>
            </div>
            <div className="links">
                <a href="#">À propos</a>
                <a href="#">Contact</a>
            </div>
        </div>
    </div>
  );
};

export default Footer;