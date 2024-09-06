import React, { useRef, useEffect, useState } from 'react';
import '../styles/heroBanner.scss';

const SectionOne = () => {
  const canvasRef = useRef(null);
  const lastDrawTimeRef = useRef(0); // Use useRef for the lastDrawTime

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const drawText = (textColor) => {
      context.clearRect(0, 0, width, height); // Clear the whole canvas to redraw text and rectangles
      context.font = '900 20vw Satoshi';
      context.fillStyle = textColor;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText('Pole'.toUpperCase(), width / 2, height / 2 - 200);
      context.fillText('digital'.toUpperCase(), width / 2, height / 2 + 200);
    };

    // Initial text rendering
    drawText('#FFFFFF');

    const drawRectangle = (mouseX, mouseY) => {
      context.beginPath();
      context.rect(mouseX, mouseY, 20, 120);
      context.fillStyle = '#fff'; // Change to your desired color
      context.fill();
    };

    const handleMouseMove = (e) => {
      const currentTime = Date.now();
      const timeSinceLastDraw = currentTime - lastDrawTimeRef.current;

      if (timeSinceLastDraw > 30) { // 500 milliseconds = 0.5 seconds
        const mouseX = e.clientX + 25;
        const mouseY = e.clientY;

        console.log(timeSinceLastDraw);

        drawRectangle(mouseX, mouseY);
        lastDrawTimeRef.current = currentTime;
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Dependency array is empty to only run once

  return (
    <section className="heroBanner">
      <canvas ref={canvasRef} />
    </section>
  );
};

export default SectionOne;
