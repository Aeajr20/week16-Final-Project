// import React, { useState } from 'react';
// import Cell from './Cell'; // Adjust the relative path as needed
// import Result from './Result'; // Adjust the relative path as needed

// const TicTacToeGame = () => {
//   const [currentPlayer, setCurrentPlayer] = useState('X');
//   const [gameOver, setGameOver] = useState(false);
//   const [grid, setGrid] = useState(Array(9).fill(''));

//   // Game logic goes here

//   return (
//     <div>
//       <div className="grid">
//         {grid.map((cell, index) => (
//           <Cell key={index} value={cell} onClick={() => handleClick(index)} />
//         ))}
//       </div>
//       <Result gameOver={gameOver} currentPlayer={currentPlayer} onRestart={restartGame} grid={grid} />
//     </div>
//   );
// };

// export default TicTacToeGame;
