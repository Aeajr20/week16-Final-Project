import React from 'react';

// The Result component represents the result of a game.
// It accepts three props: 'gameOver', 'message', and 'onRestart'.
// 'gameOver' is a boolean indicating whether the game is over.
// 'message' is the text to display when the game is over.
// 'onRestart' is a function that will be called when the restart button is clicked.

const Result = ({ gameOver, message, onRestart }) => (
  <div id="gameResult" style={{ display: gameOver ? 'block' : 'none' }}>
    {/* Display the game over message */}
    {message}
    {/* Display a restart button. When this button is clicked, the onRestart function is called. */}
    <button id="restartButton" onClick={onRestart}>Restart Game</button>
  </div>
);

// Export the Result component, so it can be imported and used in other files.
export default Result;
