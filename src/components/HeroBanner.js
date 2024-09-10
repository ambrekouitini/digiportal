import React, { useRef, useEffect } from 'react';
import '../styles/heroBanner.scss';

const SectionOne = () => {
  const canvasRefs = [useRef(null), useRef(null), useRef(null)];
  const lastDrawTimeRef = useRef(0);

  useEffect(() => {
    const [canvasBottom, canvasMiddle, canvasTop] = canvasRefs.map(ref => ref.current);

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Contexte des différents canvas
    const ctxBottom = canvasBottom.getContext('2d');
    const ctxMiddle = canvasMiddle.getContext('2d');
    const ctxTop = canvasTop.getContext('2d');

    // Définir les dimensions de chaque canvas
    [canvasBottom, canvasMiddle, canvasTop].forEach(canvas => {
      canvas.width = width;
      canvas.height = height;
    });

    // Dessin du canvas bas (fond gris)
    ctxBottom.fillStyle = '#333333';
    ctxBottom.fillRect(0, 0, width, height);

    // Dessin du texte pour le canvas milieu (texte en gris)
    const drawText = (context, textColor) => {
      context.clearRect(0, 0, width, height);
      context.font = '900 20vw Satoshi';
      context.fillStyle = textColor;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText('Pole'.toUpperCase(), width / 2, height / 2 - 200);
      context.fillText('Digital'.toUpperCase(), width / 2, height / 2 + 200);
    };

    // Texte gris sur le canvas du milieu
    drawText(ctxMiddle, '#333333'); // Texte gris

    // Texte blanc sur le canvas du haut
    drawText(ctxTop, '#FFFFFF'); // Texte blanc

    // Fonction pour dessiner un rectangle sur chaque canvas
    const drawRectangleOnAllCanvases = (x, y) => {
      const currentTime = Date.now();
      if (currentTime - lastDrawTimeRef.current < 25) return; // 25ms
      
      lastDrawTimeRef.current = currentTime;

      ctxBottom.beginPath();
      ctxBottom.rect(x, y, 20, 120);
      ctxBottom.fillStyle = 'white';
      ctxBottom.fill();

      ctxTop.globalCompositeOperation = 'destination-out';
      ctxTop.beginPath();
      ctxTop.rect(x, y, 20, 120);
      ctxTop.fill();
      ctxTop.globalCompositeOperation = 'source-over'; 

    };

    // Gestionnaire de mouvement de la souris
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Dessiner sur les trois canvas en même temps
      drawRectangleOnAllCanvases(mouseX, mouseY);
    };

    // Ajouter l'événement de la souris sur l'un des canvas
    canvasTop.addEventListener('mousemove', handleMouseMove);

    return () => {
      canvasTop.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="heroBanner">
      <canvas ref={canvasRefs[0]} className="canvas-bottom" />
      <canvas ref={canvasRefs[1]} className="canvas-middle" />
      <canvas ref={canvasRefs[2]} className="canvas-top" />
    </section>
  );
};

export default SectionOne;