import React, { useState } from 'react';
import Cell from './ChildComponents/Cell'; // Corrected import path for Cell component
import Result from './ChildComponents/Result'; // Corrected import path for Result component

// Main Tic Tac Toe game component
const TicTacToeGame = () => {
  // State to manage the current player, game over status, grid, and message
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameOver, setGameOver] = useState(false);
  const [grid, setGrid] = useState(Array(9).fill(''));
  const [message, setMessage] = useState('');

  // Function to check if there is a winner
  const checkForWinner = (grid) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
        return true;
      }
    }

    return false;
  };

  // Function to handle cell clicks
  const handleClick = (index) => {
    if (grid[index] || gameOver) return; // Ignore if cell is already filled or game is over

    const newGrid = [...grid];
    newGrid[index] = currentPlayer;
    setGrid(newGrid);

    if (checkForWinner(newGrid)) {
      // Set message and game over status if there is a winner
      setMessage(`${currentPlayer === 'X' ? 'Rick says: Wubba Lubba Dub Dub!' : 'Morty says: Aw, geez!'} Player ${currentPlayer} wins!`);
      setGameOver(true);
      return;
    }

    if (newGrid.every(cell => cell)) {
      // Set message and game over status if there is a draw
      setMessage("It's a draw!");
      setGameOver(true);
      return;
    }

    // Switch to the other player
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  // Function to restart the game
  const restartGame = () => {
    setCurrentPlayer('X');
    setGameOver(false);
    setGrid(Array(9).fill(''));
    setMessage('');
  };

  return (
    <div>
      <div className="grid">
        {grid.map((cell, index) => (
          // Render each cell and handle click events
          <Cell key={index} value={cell} onClick={() => handleClick(index)} />
        ))}
      </div>
      {/* Render the result component with game over message and restart button */}
      <Result gameOver={gameOver} message={message} onRestart={restartGame} />
    </div>
  );
};

export default TicTacToeGame;
