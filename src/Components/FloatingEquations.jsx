import React, { useEffect, useState } from 'react';

function FloatingEquations() {
  // Array of equations to be displayed
  const equations = ['E = mc^2', 'a^2 + b^2 = c^2', 'F = ma', 's = ut + 1/2at^2'];

  // Function to get a random equation from the array
  const getRandomEquation = () => {
    const index = Math.floor(Math.random() * equations.length);
    return equations[index];
  };

  // Function to get a random position within the window
  const getRandomPosition = () => {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    return { x, y };
  };

  // State to hold the array of floating equations
  const [floatingEquations, setFloatingEquations] = useState([]);

  // useEffect hook to initialize the floating equations when the component mounts
  useEffect(() => {
    // Create an array of 50 equations with random positions
    const equationsArray = Array.from({ length: 50 }, () => ({
      equation: getRandomEquation(),
      position: getRandomPosition(),
    }));
    // Set the floating equations state
    setFloatingEquations(equationsArray);
  }, []);

  return (
    <div className="floating-equations">
      {/* Map through the floating equations array and render each equation at its random position */}
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
