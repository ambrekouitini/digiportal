import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import '../styles/RevealText.scss';

gsap.registerPlugin(ScrollTrigger);

const RevealText = () => {
  const textRefs = useRef([]);

  useEffect(() => {
    textRefs.current.forEach((element) => {
      if (element) {
        const splitText = new SplitType(element, { types: 'chars, words' });

        // Sélectionner uniquement les caractères dans les <span>
        const spanChars = element.querySelectorAll('span .char');

        // Sélectionner les caractères en dehors des <span>
        const nonSpanChars = Array.from(splitText.chars).filter(
          (char) => !char.closest('span')
        );

        // Animation pour les caractères dans les <span> (noir -> jaune)
        gsap.fromTo(
          spanChars,
          { color: '#818181' }, 
          {
            color: '#FFD700', 
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: true,
              markers: false,
            },
            stagger: 0.1,
          }
        );

        // Animation pour les caractères hors des <span> (gris foncé -> gris clair)
        gsap.fromTo(
          nonSpanChars,
          { color: '#818181' }, 
          {
            color: '#333333', 
            
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: true,
              markers: false,
            },
            stagger: 0.05,
          }
        );

        return () => {
          splitText.destroy();
        };
      }
    });
  }, []);

  return (
    <>
      <section className='textSection'>
        <p className="reveal-type" ref={(el) => (textRefs.current[0] = el)}>
          Le <span>pôle digital</span> de la DDSI joue un rôle central dans notre <span>transformation numérique</span> chez Mayoly. Nous pilotons l'innovation, animons la <span>communauté digitale</span>, formons nos collaborateurs et maintenons une communication efficace pour façonner <span>l'avenir numérique</span> de notre entreprise.
        </p>
      </section>
    </>
  );
};

export default RevealText;
