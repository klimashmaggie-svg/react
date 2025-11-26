import { useState } from 'react';

function ColorDisplay({ color }) {
  return (
    <div 
      className="color-display"
      style={{ 
        backgroundColor: color,
        width: '200px',
        height: '100px',
        margin: '10px 0',
      }}
    >
      {/* убран текст цвета */}
    </div>
  );
}

function ColorControls({ color, onColorChange }) {

  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];

  return (
    <div className="color-controls">
      <h3>Выберите цвет:</h3>
      <div className="color-buttons" style={{ display: 'flex', gap: '10px' }}>
        {colors.map((col) => (
          <button
            key={col}
            style={{ 
              backgroundColor: col,
              width: '40px',
              height: '40px',
              borderRadius: '6px',
              border: color === col ? '3px solid white' : '1px solid #ccc',
              cursor: 'pointer'
            }}
            onClick={() => onColorChange(col)}
            className={color === col ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  );
}

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState('#ff0000');

  return (
    <div className="color-picker">
      <h2>Выбор цвета</h2>
      <ColorDisplay color={selectedColor} />
      <ColorControls 
        color={selectedColor} 
        onColorChange={setSelectedColor}
      />
    </div>
  );
}

export default ColorPicker;
