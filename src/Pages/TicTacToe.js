// Import necessary modules from their respective packages
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import the game components and CSS styles
import TicTacToeGame from '../Components/TicTacToeGame';
import CrudOperations from '../Components/CrudOperations'; // Import the new component
import Footer from '../Components/Footer';
import './TicTacToe.css';

// Define the TicTacToe component
const TicTacToe = () => {
  // State variable for the characters
  const [characters, setCharacters] = useState([
    { id: 1, fullName: 'Rick Sanchez', characterTrait: 'Genius scientist' },
    { id: 2, fullName: 'Morty Smith', characterTrait: 'Timid grandson' },
    { id: 3, fullName: 'Summer Smith', characterTrait: 'Adventurous sister' },
  ]);

  // Render the component
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      {/* Render the TicTacToeGame component */}
      <TicTacToeGame />
      {/* Define the navigation bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Container>
          {/* Link to the Home page */}
          <Link className="navbar-brand" to="/">Home</Link>
          <div className="navbar-nav">
            {/* Link to the Matching Game page */}
            <Link className="nav-link" to="/matching-game">Matching Game</Link>
            {/* Link to the Tic Tac Toe page */}
            <Link className="nav-link" to="/tic-tac-toe">Tic Tac Toe</Link>
          </div>
        </Container>
      </nav>

      {/* Render the CrudOperations component */}
      <Container className="mt-4">
        <CrudOperations characters={characters} setCharacters={setCharacters} />
      </Container>
      {/* Render the Footer component */}
      <Footer/>
    </div>
  );
};

// Export the TicTacToe component as the default export
export default TicTacToe;
