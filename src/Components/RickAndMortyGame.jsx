import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';



const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

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

const Card = ({ character, onClick, isFlipped }) => {
  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="card-front">
        {isFlipped ? (
          <img src={character.image} alt={character.name} />
        ) : (
          <div className="card-back">Click to flip</div>
        )}
      </div>
    </div>
  );
};

const RickAndMortyGame = () => {
  const [characters, setCharacters] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const initializeGame = async () => {
      let chars = await fetchCharacters();
      chars = chars.slice(0, 6); // Select 6 characters
      chars = shuffleArray([...chars, ...chars]); // Duplicate and shuffle
      setCharacters(chars);
    };
    initializeGame();
  }, []);

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

      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  };

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

export default RickAndMortyGame;
