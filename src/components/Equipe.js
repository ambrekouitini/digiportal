import React, { useEffect, useRef, useState } from 'react';
import '../styles/equipe.scss';

const AnimatedMarquee = ({ text }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const marqueeContent = marquee.querySelector('.marquee-content');
    const marqueeWidth = marqueeContent.offsetWidth;

    marquee.appendChild(marqueeContent.cloneNode(true));

    let position = 0;
    const speed = 1.5; 
    const animate = () => {
      position -= speed;
      if (position <= -marqueeWidth) {
        position = 0;
      }
      marquee.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="marquee-container">
      <div ref={marqueeRef} className="marquee">
        <div className="marquee-content">
          <span>{text}</span>
          <span>•</span>
          <span>{text}</span>
          <span>•</span>
          <span>{text}</span>
          <span>•</span>
          <span>{text}</span>
          <span>•</span>
        </div>
      </div>
    </div>
  );
};

const Ressources = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [containerRef] = useState([
    { name: "Azedine AICHAOUI", job: "Responsable du pôle - Chef de Projet Digital" },
    { name: "Anh-Thao MAI", job: "Cheffe de Projet Digital / Web" },
    { name: "Ambre KOUITINI", job: "Alternante – Développeuse Full-stack" },
    { name: "Brévin RENAUD", job: "Alternant – Développeur Full-stack" }
  ]);

  return (
    <section className="equipe">
      <div 
        className={`equipeText ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bandeauLoop">
          <AnimatedMarquee text="Equipe" />
        </div>
        <div className="titleDiv">
          <h2>Nous Découvrir</h2>
          <div className="button"></div>
        </div>
      </div>
      <div className="equipesContent">
        <div className="container">
          {containerRef.map((item, index) => (
            <div className="singleCard" key={index}>
              <span className='name'>{item.name}</span>
              <span className='job'>{item.job}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ressources;