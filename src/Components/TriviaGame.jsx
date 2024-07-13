

import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const TriviaGame = () => {
  const [questions] = useState([
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

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);
  const [reviewMode, setReviewMode] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (!gameOver) {
      if (selectedOption === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      } else {
        setWrongAnswers(wrongAnswers + 1);
        setIncorrectQuestions([...incorrectQuestions, questions[currentQuestion]]);
      }

      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setGameOver(true);
      }

      // Check if the user has reached 10 wrong answers
      if (wrongAnswers + 1 >= 10) {
        setGameOver(true);
        setReviewMode(true); // Activate review mode if 10 wrong answers are reached
      }
    }
  };

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
        <div>
          <p class="questions">Question {currentQuestion + 1} of {questions.length} ({questions[currentQuestion].difficulty}):</p>
          <h4>{questions[currentQuestion].question}</h4>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <Button style={{ backgroundColor: 'black', color: 'rgb(184, 5, 219)' }} onClick={() => handleAnswer(option)}>{option}</Button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {gameOver && reviewMode && (
        <div>
            
            <div class="h2">
          <h2>Game Over!</h2>
          <h2>Your score: {score}</h2>
          <p>Number of wrong answers: {wrongAnswers}</p>
          </div>
          
          <Button onClick={resetGame}>Play Again</Button>
          <Link to="/matching-game">Back to Matching Game</Link>
          <hr />
          <h5>Review Answers:</h5>
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
