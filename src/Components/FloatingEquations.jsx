import React, { useEffect, useState } from 'react';

function FloatingEquations() {
  const equations = ['E = mc^2', 'a^2 + b^2 = c^2', 'F = ma', 's = ut + 1/2at^2'];

  const getRandomEquation = () => {
    const index = Math.floor(Math.random() * equations.length);
    return equations[index];
  };

  const getRandomPosition = () => {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    return { x, y };
  };

  const [floatingEquations, setFloatingEquations] = useState([]);

  useEffect(() => {
    const equationsArray = Array.from({ length: 50 }, () => ({
      equation: getRandomEquation(),
      position: getRandomPosition(),
    }));
    setFloatingEquations(equationsArray);
  }, []);

  return (
    <div className="floating-equations">
      {floatingEquations.map((eq, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${eq.position.x}px`,
            top: `${eq.position.y}px`,
            color: 'white',
            fontSize: '20px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          {eq.equation}
        </div>
      ))}
    </div>
  );
}

export default FloatingEquations;
