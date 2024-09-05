import React, { useRef } from 'react';
import '../styles/heroBanner.scss';
import { gsap } from 'gsap';

const SectionOne = () => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="heroBanner">
      <h2>Du style</h2>
      <div className="textButton"></div>
      <div class="button"></div>
    </section>
  );
};

export default SectionOne;
