import React, { useEffect, useRef } from 'react';
import './heroBanner.scss';
import { gsap } from 'gsap';

const SectionOne = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Animation d'entrée avec GSAP
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <section ref={sectionRef} className="section-one">
      <h1>Bienvenue dans la première section</h1>
      <p>Voici ma première section avec animation.</p>
    </section>
  );
};

export default SectionOne;
