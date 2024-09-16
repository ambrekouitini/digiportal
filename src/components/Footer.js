import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.scss';

const Footer = () => {


return (
    <div className="footer">
        <div className="container">
            <Link to="/">
                <div className="logo">
                    <span>Pole</span>
                    <span>digital</span>
                    <span>Mayoly</span>
                </div>
            </Link>
            <div className="links">
                <Link to="/projects">Nos projets</Link>
                <Link to="/ressources">Ressources</Link>
            </div>
            <div className="links">
                <Link to="/about">À propos</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    </div>
  );
};

export default Footer;