import React, { useEffect, useRef, useState } from 'react';
import '../../styles/home/textLoop.scss';

const TextLoop = ({ text }) => {
    const textRef = useRef(null);
  
    useEffect(() => {
      const text = textRef.current;
      const textContent = text.querySelector('.text-content');
      const textWidth = textContent.offsetWidth;
  
      text.appendChild(textContent.cloneNode(true));
  
      let position = 0;
      const speed = 1.5; 
      const animate = () => {
        position -= speed;
        if (position <= -textWidth) {
          position = 0;
        }
        text.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
      };
  
      animate();
    }, []);
  
    return (
    <section className="textLoop">
        <div className="text-container">
            <div ref={textRef} className="text">
            <div className="text-content">
                <span>Transformer</span>
                <span>•</span>
                <span>Innover</span>
                <span>•</span>
                <span>Réaliser</span>
                <span>•</span>
                <span>Transformer</span>
                <span>•</span>
                <span>Innover</span>
                <span>•</span>
                <span>Transformer</span>
                <span>•</span>
                <span>Innover</span>
                <span>•</span>
            </div>
            </div>
        </div>
    </section>
    );
  };

export default TextLoop;