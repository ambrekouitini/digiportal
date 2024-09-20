import React, { useRef, useEffect } from 'react';
import '../../styles/home/heroBanner.scss';

const SectionOne = () => {
  const canvasRefs = [useRef(null), useRef(null), useRef(null)];
  const containerRef = useRef(null);

  useEffect(() => {
    const [canvasBottom, canvasMiddle, canvasTop] = canvasRefs.map(ref => ref.current);
    const container = containerRef.current;

    const updateCanvasSize = () => {
      const { width, height } = container.getBoundingClientRect();

      [canvasBottom, canvasMiddle, canvasTop].forEach(canvas => {
        canvas.width = width;
        canvas.height = height;
      });

      return { width, height };
    };

    let { width, height } = updateCanvasSize();

    const ctxBottom = canvasBottom.getContext('2d');
    const ctxMiddle = canvasMiddle.getContext('2d');
    const ctxTop = canvasTop.getContext('2d');

    ctxBottom.fillStyle = '#333333';
    ctxBottom.fillRect(0, 0, width, height);

    const drawText = (context, textColor) => {
      context.clearRect(0, 0, width, height);
      context.font = '900 20vw Satoshi';
      context.fillStyle = textColor;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText('Pole'.toUpperCase(), width / 2, height / 2 - 200);
      context.fillText('Digital'.toUpperCase(), width / 2, height / 2 + 200); 
    };

    const loadAndDrawText = async () => {
      try {
        await document.fonts.load('900 20vw Satoshi');
        drawText(ctxMiddle, '#333333');
        drawText(ctxTop, '#FFFFFF');
      } catch (error) {
        console.error('Failed to load font:', error);
        ctxMiddle.font = ctxTop.font = '900 20vw Arial, sans-serif';
        drawText(ctxMiddle, '#333333');
        drawText(ctxTop, '#FFFFFF');
      }
    };

    const drawRoundedRectangle = (ctx, x, y, width, height, radius) => {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
      ctx.fill();
    };

    let lastX = null;
    let lastY = null;

    const drawTrail = (x, y) => {
      const rectWidth = 40;
      const rectHeight = 150;
      const radius = 20;

      if (lastX !== null && lastY !== null) {
        const dx = x - lastX;
        const dy = y - lastY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const steps = Math.max(Math.floor(distance / 5), 1);

        for (let i = 0; i < steps; i++) {
          const t = i / steps;
          const currX = lastX + dx * t;
          const currY = lastY + dy * t;

          ctxBottom.fillStyle = 'white';
          drawRoundedRectangle(ctxBottom, currX - rectWidth / 2, currY - rectHeight / 2, rectWidth, rectHeight, radius);

          ctxTop.globalCompositeOperation = 'destination-out';
          drawRoundedRectangle(ctxTop, currX - rectWidth / 2, currY - rectHeight / 2, rectWidth, rectHeight, radius);
          ctxTop.globalCompositeOperation = 'source-over';
        }
      }

      lastX = x;
      lastY = y;
    };

    const handleMouseMove = (e) => {
      const rect = canvasTop.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      drawTrail(mouseX, mouseY);
    };

    const handleResize = () => {
      ({ width, height } = updateCanvasSize());
      ctxBottom.fillStyle = '#333333';
      ctxBottom.fillRect(0, 0, width, height);
      loadAndDrawText();
      lastX = null;
      lastY = null;
    };

    loadAndDrawText();
    canvasTop.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      canvasTop.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="heroBanner" ref={containerRef}>
      <canvas ref={canvasRefs[0]} className="canvas-bottom" />
      <canvas ref={canvasRefs[1]} className="canvas-middle" />
      <canvas ref={canvasRefs[2]} className="canvas-top" />
    </section>
  );
};

export default SectionOne;