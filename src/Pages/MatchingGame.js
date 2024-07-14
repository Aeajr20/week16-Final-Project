// Import necessary modules from their respective packages
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import the game components and CSS styles
import RickAndMortyGame from '../Components/RickAndMortyGame';
import TriviaGame from '../Components/TriviaGame'; // Ensure the import is correct
import './MatchingGame.css';

// Define the MatchingGame component
const MatchingGame = () => {
  return (
    <div>
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

      {/* Render the RickAndMortyGame component */}
      <div className="game-board">
        <RickAndMortyGame />
      </div>

      {/* Render the TriviaGame component */}
      <div className="trivia-game">
        <TriviaGame /> {/* Render the TriviaGame component here */}
      </div>
    </div>
  );
};

// Export the MatchingGame component as the default export
export default MatchingGame;
