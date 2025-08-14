'use client'; // wajib untuk state dan interaksi di Next.js 13 app dir
import { useState } from 'react';
import LandingPage from '../components/LandingPage';
import GameCanvas2D from '../components/GameCanvas2D';
import GraphicsSettings from '../components/GraphicsSettings';

export default function Home() {
  const [page, setPage] = useState<'landing' | 'game'>('landing');
  const [graphics, setGraphics] = useState<'high' | 'medium' | 'low'>('high');

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      {page === 'landing' && <LandingPage onPlay={() => setPage('game')} />}
      {page === 'game' && <GameCanvas2D graphics={graphics} />}
      <div style={{ marginTop: 20 }}>
        <GraphicsSettings value={graphics} onChange={setGraphics} />
      </div>
    </div>
  );
}
