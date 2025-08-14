import { useRef, useEffect, useState } from 'react';

export default function GameCanvas2D({ graphics }: { graphics: 'high' | 'medium' | 'low' }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  // Background color berdasarkan graphics setting
  const bgColor =
    graphics === 'high' ? '#222' : graphics === 'medium' ? '#888' : '#eee';

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      setPos(prev => {
        let { x, y } = prev;
        const step = 10;
        if (e.key === 'ArrowUp') y -= step;
        if (e.key === 'ArrowDown') y += step;
        if (e.key === 'ArrowLeft') x -= step;
        if (e.key === 'ArrowRight') x += step;
        return { x, y };
      });
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Draw canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Kotak biru
      ctx.fillStyle = 'blue';
      ctx.fillRect(pos.x, pos.y, 50, 50);

      requestAnimationFrame(draw);
    };
    draw();
  }, [pos, bgColor]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Game Canvas 2D</h2>
      <p>Graphics: {graphics}</p>
      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        style={{ border: '1px solid #ccc', marginTop: 10 }}
      />
      <p>Gunakan tombol panah untuk menggerakkan kotak biru.</p>
    </div>
  );
          }
