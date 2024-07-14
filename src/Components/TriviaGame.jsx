import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';

const TriviaGame = () => {
  // State to store the trivia questions
  const [questions] = useState([
    // Sample trivia questions with their options, correct answers, and difficulty levels
    {
      question: 'What is the name of Rick’s daughter?',
      options: ['Beth', 'Summer', 'Morty', 'Jessica'],
      correctAnswer: 'Beth',
      difficulty: 'Easy'
    },
    {
      question: 'What is the main portal gun color?',
      options: ['Blue', 'Green', 'Red', 'Yellow'],
      correctAnswer: 'Green',
      difficulty: 'Easy'
    },
    {
      question: 'Who is Morty’s math teacher?',
      options: ['Mr. Goldenfold', 'Mr. Poopybutthole', 'Mr. Meeseeks', 'Birdperson'],
      correctAnswer: 'Mr. Goldenfold',
      difficulty: 'Medium'
    },
    {
      question: 'What is the name of the theme park inside a human body?',
      options: ['Anatomy Park', 'Microverse', 'Froopyland', 'Gazorpazorp'],
      correctAnswer: 'Anatomy Park',
      difficulty: 'Medium'
    },
    {
      question: 'What is the name of the planet where Birdperson is from?',
      options: ['Bird World', 'Birdland', 'Phoenixon', 'Florpian'],
      correctAnswer: 'Bird World',
      difficulty: 'Hard'
    },
    {
      question: 'What phrase does Rick use to turn himself into a pickle?',
      options: ['I’m Pickle Rick!', 'Turn me into a pickle!', 'Get ready, Morty!', 'Pickle Time!'],
      correctAnswer: 'I’m Pickle Rick!',
      difficulty: 'Hard'
    },
    {
      question: 'What is the name of Rick’s car battery microverse?',
      options: ['Tinyverse', 'Miniverse', 'Microverse', 'Smallverse'],
      correctAnswer: 'Microverse',
      difficulty: 'Very Hard'
    },
    {
      question: 'What species is Krombopulos Michael?',
      options: ['Gromflomite', 'Meeseeks', 'Plutonian', 'Gearhead'],
      correctAnswer: 'Gromflomite',
      difficulty: 'Very Hard'
    },
    {
      question: 'What item does Rick frequently ask Morty to retrieve from his lab?',
      options: ['Wrench', 'Screwdriver', 'Morty Crystal', 'Plumbus'],
      correctAnswer: 'Screwdriver',
      difficulty: 'Easy'
    },
    {
      question: 'What is the name of the alien with a multiverse TV?',
      options: ['Greebybobe', 'Pencilvester', 'Ants-in-my-eyes Johnson', 'Stealy'],
      correctAnswer: 'Stealy',
      difficulty: 'Medium'
    },
    {
      question: 'What creature does Rick use to produce Mega Seeds?',
      options: ['Cronenberg', 'Schmebulock', 'Plutonian', 'Mega Trees'],
      correctAnswer: 'Mega Trees',
      difficulty: 'Medium'
    },
    {
      question: 'What is the catchphrase of Mr. Meeseeks?',
      options: ['I’m Mr. Meeseeks, look at me!', 'Existence is pain!', 'Meeseeks time!', 'Look at me!'],
      correctAnswer: 'I’m Mr. Meeseeks, look at me!',
      difficulty: 'Easy'
    },
    {
      question: 'Who is Rick’s best friend?',
      options: ['Birdperson', 'Squanchy', 'Mr. Poopybutthole', 'Jerry'],
      correctAnswer: 'Birdperson',
      difficulty: 'Medium'
    },
    {
      question: 'What kind of creature is Squanchy?',
      options: ['Cat-like', 'Dog-like', 'Bird-like', 'Fish-like'],
      correctAnswer: 'Cat-like',
      difficulty: 'Medium'
    },
    {
      question: 'Which episode features the Council of Ricks?',
      options: ['Close Rick-Counters of the Rick Kind', 'Get Schwifty', 'Total Rickall', 'The Wedding Squanchers'],
      correctAnswer: 'Close Rick-Counters of the Rick Kind',
      difficulty: 'Hard'
    },
    {
      question: 'What are the names of the giant heads that appear in the sky?',
      options: ['Get Schwifty Heads', 'Testicle Monsters', 'Cromulons', 'Gazorpazorpians'],
      correctAnswer: 'Cromulons',
      difficulty: 'Medium'
    },
    {
      question: 'What dimension is the main Rick from?',
      options: ['C-137', 'C-138', 'D-199', 'D-200'],
      correctAnswer: 'C-137',
      difficulty: 'Hard'
    },
    {
      question: 'What song does Rick sing in the episode "Get Schwifty"?',
      options: ['Get Schwifty', 'Terryfold', 'Human Music', 'Goodbye Moonmen'],
      correctAnswer: 'Get Schwifty',
      difficulty: 'Easy'
    },
    {
      question: 'What is the name of the agency that tries to arrest Rick and Morty in the first episode?',
      options: ['Galactic Federation', 'Council of Ricks', 'Cronenberg Police', 'Time Police'],
      correctAnswer: 'Galactic Federation',
      difficulty: 'Medium'
    },
    {
      question: 'Who voices Rick Sanchez?',
      options: ['Justin Roiland', 'Dan Harmon', 'Chris Parnell', 'Spencer Grammer'],
      correctAnswer: 'Justin Roiland',
      difficulty: 'Easy'
    }
  ]);

  // State variables for game management
  const [currentQuestion, setCurrentQuestion] = useState(0); // Index of the current question
  const [score, setScore] = useState(0); // Player's score
  const [wrongAnswers, setWrongAnswers] = useState(0); // Number of wrong answers
  const [gameOver, setGameOver] = useState(false); // Game over flag
  const [incorrectQuestions, setIncorrectQuestions] = useState([]); // Array to store incorrectly answered questions
  const [reviewMode, setReviewMode] = useState(false); // Flag to indicate review mode

  // Effect to handle game reset after game over
  useEffect(() => {
    let timer;
    if (gameOver) {
      timer = setTimeout(() => {
        resetGame();
      }, 20000); // Auto-reset game after 20 seconds
    }
    return () => clearTimeout(timer); // Cleanup on component unmount or state change
  }, [gameOver]);

  // Function to handle user's answer selection
  const handleAnswer = (selectedOption) => {
    if (!gameOver) {
      if (selectedOption === questions[currentQuestion].correctAnswer) {
        setScore(score + 1); // Increment score on correct answer
      } else {
        setWrongAnswers(wrongAnswers + 1); // Increment wrong answers count
        setIncorrectQuestions([...incorrectQuestions, questions[currentQuestion]]); // Add incorrect question to list
      }

      // Move to the next question if available, otherwise end game
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setGameOver(true); // Set game over flag
      }

      // Activate review mode if more than 10 wrong answers
      if (wrongAnswers + 1 >= 10) {
        setGameOver(true);
        setReviewMode(true);
      }
    }
  };

  // Function to reset the game state
  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setWrongAnswers(0);
    setGameOver(false);
    setReviewMode(false);
    setIncorrectQuestions([]);
  };

  return (
    <Container>
      <h3 className="Trivia">Rick and Morty Trivia Game</h3>
      {!gameOver && !reviewMode && (
        // Display current question and options during active gameplay
        <div id="Questions">
          <p className="questions">
            Question {currentQuestion + 1} of {questions.length} ({questions[currentQuestion].difficulty}):
          </p>
          <h4>{questions[currentQuestion].question}</h4>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <Button
                  style={{ backgroundColor: 'black', color: 'rgb(184, 5, 219)' }}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {gameOver && reviewMode && (
        // Display game over screen with score and review incorrect answers
        <div>
          <div>
            <h2 id="Catchphrase">LET'S GET RIGGITY RIGGITY WRECKED SON!!!</h2>
            <h2>Game Over!</h2>
            <h2>Your score: {score}</h2>
            <h2>Number of wrong answers: {wrongAnswers}</h2>
          </div>
          <Button onClick={resetGame}>Play Again</Button>
          <hr />
          <div>
            <h5 id="Review">Review Answers:</h5>
            <ul>
              {incorrectQuestions.map((question, index) => (
                <li key={index}>
                  <strong>{question.question}</strong> - Correct Answer: {question.correctAnswer} ({question.difficulty})
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {gameOver && !reviewMode && (
        // Display game over screen with score and option to review incorrect answers
        <div>
          <div id="ReviewMode">
            <h2>Game Over</h2>
            <h2>Your score: {score}</h2>
            <h2>Number of wrong answers: {wrongAnswers}</h2>
          </div>
          <Button onClick={resetGame}>Play Again</Button>
          <h2>Review Answers:</h2>
          <ul>
            {incorrectQuestions.map((question, index) => (
              <li key={index}>
                <strong>{question.question}</strong> - Correct Answer: {question.correctAnswer} ({question.difficulty})
              </li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
};

export default TriviaGame;
