export default function GraphicsSettings({
  value,
  onChange,
}: {
  value: 'high' | 'medium' | 'low';
  onChange: (val: 'high' | 'medium' | 'low') => void;
}) {
  return (
    <div style={{ position: 'absolute', top: 20, right: 20 }}>
      <label>Graphics: </label>
      <select value={value} onChange={(e) => onChange(e.target.value as any)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
}
