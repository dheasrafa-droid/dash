export default function LandingPage({ onPlay }: { onPlay: () => void }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>DSRT Landing Page</h1>
      <p>Digital Smart Revise Technology</p>
      <button
        onClick={onPlay}
        style={{ padding: '10px 20px', marginTop: 20, cursor: 'pointer' }}
      >
        Play Game
      </button>
    </div>
  );
}
