import React, { useEffect, useRef } from 'react';
import '../../styles/about/infiniteLoop.scss';
import separatorImg from '../../assets/images/separator.png'; 

const InfiniteLoop = () => {
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
    <section className="infiniteLoop">
        <div className="text-container">
            <div ref={textRef} className="text">
            <div className="text-content">
                <span>Visionnaire</span>
                <img src={separatorImg} alt="separator" className="separator" />
                <span>Créatif</span>
                <img src={separatorImg} alt="separator" className="separator" />
                <span>Passionné</span>
                <img src={separatorImg} alt="separator" className="separator" />
                <span>Engagé</span>
                <img src={separatorImg} alt="separator" className="separator" />
                <span>Visionnaire</span>
                <img src={separatorImg} alt="separator" className="separator" />
                <span>Créatif</span>
                <img src={separatorImg} alt="separator" className="separator" />
                <span>Passionné</span>
                <img src={separatorImg} alt="separator" className="separator" />
                <span>Engagé</span>
                <img src={separatorImg} alt="separator" className="separator" />
            </div>
            </div>
        </div>
    </section>
    );
  };

export default InfiniteLoop;