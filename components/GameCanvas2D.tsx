export default function GameCanvas2D({ graphics }: { graphics: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Game Canvas 2D</h2>
      <p>Graphics: {graphics}</p>
      <div
        style={{
          width: 300,
          height: 200,
          margin: '20px auto',
          background: '#eee',
          border: '1px solid #ccc',
        }}
      >
        [Game area]
      </div>
    </div>
  );
}
