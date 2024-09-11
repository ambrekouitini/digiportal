import React, { useRef, useEffect } from 'react';
import '../styles/heroBanner.scss';

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
        // Fallback to a system font if Satoshi fails to load
        ctxMiddle.font = ctxTop.font = '900 20vw Arial, sans-serif';
        drawText(ctxMiddle, '#333333');
        drawText(ctxTop, '#FFFFFF');
      }
    };

    const drawRoundedRectangleOnAllCanvases = (x, y) => {
      const rectWidth = 40;
      const rectHeight = 150;
      const radius = 20;

      const drawRoundedRect = (ctx) => {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + rectWidth - radius, y);
        ctx.quadraticCurveTo(x + rectWidth, y, x + rectWidth, y + radius);
        ctx.lineTo(x + rectWidth, y + rectHeight - radius);
        ctx.quadraticCurveTo(x + rectWidth, y + rectHeight, x + rectWidth - radius, y + rectHeight);
        ctx.lineTo(x + radius, y + rectHeight);
        ctx.quadraticCurveTo(x, y + rectHeight, x, y + rectHeight - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
      };

      ctxBottom.fillStyle = 'white';
      drawRoundedRect(ctxBottom);
      ctxBottom.fill();

      ctxTop.globalCompositeOperation = 'destination-out';
      drawRoundedRect(ctxTop);
      ctxTop.fill();
      ctxTop.globalCompositeOperation = 'source-over'; 
    };

    const handleMouseMove = (e) => {
      const rect = canvasTop.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      drawRoundedRectangleOnAllCanvases(mouseX, mouseY);
    };

    const handleResize = () => {
      ({ width, height } = updateCanvasSize());
      ctxBottom.fillStyle = '#333333';
      ctxBottom.fillRect(0, 0, width, height);
      loadAndDrawText();
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