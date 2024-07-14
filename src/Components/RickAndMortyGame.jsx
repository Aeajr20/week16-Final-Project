import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Function to shuffle an array randomly
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

// Function to fetch characters from the Rick and Morty API
const fetchCharacters = async () => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character/');
    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};

// Card component representing each character card
// It accepts three props: 'character', 'onClick', and 'isFlipped'.
// 'character' is the character data.
// 'onClick' is a function that will be called when the card is clicked.
// 'isFlipped' is a boolean indicating whether the card is flipped.
const Card = ({ character, onClick, isFlipped }) => {
  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="card-front">
        {isFlipped ? (
          // If the card is flipped, display the character image
          <img src={character.image} alt={character.name} />
        ) : (
          // If the card is not flipped, display a placeholder
          <div className="card-back">Click to flip</div>
        )}
      </div>
    </div>
  );
};

// Main component for the Rick and Morty matching game
const RickAndMortyGame = () => {
  // State to store characters, flipped cards, matched cards, and score
  const [characters, setCharacters] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);

  // useEffect to initialize the game by fetching characters and setting up the game board
  useEffect(() => {
    const initializeGame = async () => {
      let chars = await fetchCharacters();
      chars = chars.slice(0, 6); // Select 6 characters
      chars = shuffleArray([...chars, ...chars]); // Duplicate and shuffle
      setCharacters(chars);
    };
    initializeGame();
  }, []);

  // Function to handle card click events
  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index)) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (characters[firstIndex].id === characters[secondIndex].id) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
        setScore(score + 1); // Increase score when cards match
      }

      // Reset flipped cards after 1 second
      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  };

  // Render the component
  return (
    <Container className="Container">
      <h3 className="mt-4 mb-3">Matching Game</h3>
      <Row className="game-board">
        {characters.map((character, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2} className="mb-3">
            <Card
              character={character}
              isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
              onClick={() => handleCardClick(index)}
            />
          </Col>
        ))}
      </Row>
      <div className="score">
        <strong>Score: {score}</strong>
      </div>
    </Container>
  );
};

// Export the RickAndMortyGame component, so it can be imported and used in other files.
export default RickAndMortyGame;
