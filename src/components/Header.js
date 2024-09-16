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
    }, [location]); // Se déclenche à chaque changement d'URL

    useEffect(() => {
        // Ne jouer l'animation que sur la page d'accueil
        if (location.pathname === "/") {
            document.querySelector(".header").style.backgroundColor = "#33333300";
            gsap.to(".header", {
                backgroundColor: "#333333",
                scrollTrigger: {
                    trigger: ".header",
                    start: "top top",
                    end: "1024px top",
                    scrub: true,
                },
            });
        }
    },[location]);

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
                        <Link to="/projects">Nos projets</Link>
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
