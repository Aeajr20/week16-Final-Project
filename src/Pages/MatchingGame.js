// import React from 'react';
// import { Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import RickAndMortyGame from '../Components/RickAndMortyGame';
// import TriviaGame from '../Components/TriviaGame';
// import './MatchingGame.css';

// const MatchingGame = () => {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <Container>
//           <Link className="navbar-brand" to="/">Home</Link>
//           <div className="navbar-nav">
//             <Link className="nav-link" to="/matching-game">Matching Game</Link>
//             <Link className="nav-link" to="/tic-tac-toe">Tic Tac Toe</Link>
//           </div>
//         </Container>
//       </nav>

//       <div className="game-board">
        
//         <RickAndMortyGame />
//       </div>

//       <div className="trivia-game">
//         {/* Trivia game content here */}
//         <h3 class="Trivia">Trivia Game</h3>
//         <p>Add your trivia content here...</p>
//       </div>
//     </div>
//   );
// };

// export default MatchingGame;


import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RickAndMortyGame from '../Components/RickAndMortyGame';
import TriviaGame from '../Components/TriviaGame'; // Ensure the import is correct
import './MatchingGame.css';

const MatchingGame = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Container>
          <Link className="navbar-brand" to="/">Home</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/matching-game">Matching Game</Link>
            <Link className="nav-link" to="/trivia-game">Tic Tac Toe</Link>
          </div>
        </Container>
      </nav>

      <div className="game-board">
        <RickAndMortyGame />
      </div>

      <div className="trivia-game">
        <TriviaGame /> {/* Render the TriviaGame component here */}
      </div>
    </div>
  );
};

export default MatchingGame;
