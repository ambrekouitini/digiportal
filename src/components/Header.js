import '../styles/header.scss';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../assets/images/logo.svg';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const location = useLocation();

    const openNav = () => {
        document.querySelector('nav').classList.toggle('nav-open');
        document.querySelector('.burger').classList.toggle('close');
        document.querySelector('.header').classList.toggle('header-open');
    };

    useEffect(() => {
        document.querySelector('nav').classList.remove('nav-open');
        document.querySelector('.burger').classList.remove('close');
        document.querySelector('.header').classList.remove('header-open');
    }, [location]); // Exécute cet effet à chaque changement d'URL

    useEffect(() => {
        // Animation de changement de couleur du header au scroll
        gsap.to(".header", {
            backgroundColor: "#333333",
            scrollTrigger: {
                trigger: ".header",
                start: "top top", // Déclenche au début de la page
                end: "1024px top", // Se termine après avoir scrollé 100vh
                scrub: true, // Animation progressive liée au scroll
            },
        });
    }, []);

    return (
        <div className="header">
            <div className="navigation">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <div className="burger" onClick={openNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about">A propos</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
