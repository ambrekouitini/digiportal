import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import '../../styles/home/Description.scss';
import { Link } from 'react-router-dom';

// Importation des images
import usImage from '../../assets/images/us.png';
import projectsImage from '../../assets/images/project.png';
import ideasImage from '../../assets/images/ideas.png';

const Description = () => {
    const descriptionRef = useRef(null);

    useEffect(() => {
        const split = new SplitType(descriptionRef.current, {
            types: 'words',
            tagName: 'span',
        });

        const words = descriptionRef.current.querySelectorAll('.highlight'); 

        // words.forEach((word) => {
        //     word.addEventListener('mouseenter', () => {
        //         word.classList.add('hovered');
        //         gsap.to(word, {
        //             color: 'black',
        //             duration: 0.1,
        //             ease: 'power4.out',
        //         });
        //     });

        //     word.addEventListener('mouseleave', () => {
        //         gsap.to(word, {
        //             color: 'black',
        //             duration: 0.3,
        //             ease: 'power4.out',
        //         }).eventCallback('onComplete', () => {
        //             word.classList.remove('hovered');
        //         });
        //     });
        // });
    }, []);

    return (
        <section ref={descriptionRef} className="description">
            <p>
                <Link to="/about"><span className="highlight">Nous</span></Link>
                <img src={usImage} alt="Us" />
                pilotons des 
                <Link to="/projects"><span className="highlight">projets</span></Link>
                <img src={projectsImage} alt="Projects" />
                digitaux avec précision transformant vos
                <span className="highlight">idées</span>
                <img src={ideasImage} alt="Ideas" />
                en réalisations concrètes
            </p>
        </section>
    );
};

export default Description;
