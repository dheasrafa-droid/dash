export default function LandingPage({ onPlay }: { onPlay: () => void }) {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Ghost Mini 2D Prototype</h1>
      <p>Landing Page - Klik Play untuk game</p>
      <button onClick={onPlay} style={{ padding: '10px 20px', marginTop: '20px' }}>
        Play Game
      </button>
    </div>
  );
}
