import React, { useEffect, useRef } from 'react';
import '../../styles/projects/preFooter.scss';


const AnimatedMarquee = ({ text }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const marqueeContent = marquee.querySelector('.marquee-content');
    const marqueeWidth = marqueeContent.offsetWidth;

    marquee.appendChild(marqueeContent.cloneNode(true));

    let position = 0;
    const speed = 2.5; 
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


const PreFooter = () => {
  
    return (
      <div className="preFooter">
        <AnimatedMarquee text="Projets" />
      </div>
    );
  };
  
  export default PreFooter;