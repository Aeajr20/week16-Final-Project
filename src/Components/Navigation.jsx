
import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    // Create a Bootstrap navigation bar with centered items
    <Nav className="justify-content-center">
      {/* Navigation item for Home */}
      <Nav.Item>
        {/* Link to the Home page */}
        <Link to="/" className="nav-link">Home</Link>
      </Nav.Item>
      {/* Navigation item for Matching Game */}
      <Nav.Item>
        {/* Link to the Matching Game page */}
        <Link to="/matching-game" className="nav-link">Matching Game</Link>
      </Nav.Item>
      {/* Navigation item for Tic Tac Toe */}
      <Nav.Item>
        {/* Link to the Tic Tac Toe page */}
        <Link to="/tic-tac-toe" className="nav-link">Tic Tac Toe</Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
