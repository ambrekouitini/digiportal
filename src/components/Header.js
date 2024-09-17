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
    }, [location]);

    useEffect(() => {
        let animation;

        // Si on est sur la page d'accueil
        if (location.pathname === "/") {
            const handleScroll = () => {
                // Vérifie la position de scroll et déclenche l'animation si on est en dessous de 0px mais avant 1024px
                if (window.scrollY <= 64) {
                    if (!animation) {
                        document.querySelector(".header").style.backgroundColor = "#33333300";
                        
                        animation = gsap.to(".header", {
                            backgroundColor: "#333333",
                            scrollTrigger: {
                                trigger: ".header",
                                start: "top top",
                                end: "1024px top",
                                scrub: true,
                            },
                        });
                    }
                }
            };

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
                if (animation) {
                    animation.kill(); // Arrête l'animation lors du changement de page
                }
            };
        } else {
            // Fixe la couleur du header pour les autres pages
            document.querySelector(".header").style.backgroundColor = "#333333";
        }
    }, [location]);

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
