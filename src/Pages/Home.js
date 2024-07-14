import React, { useState } from 'react';
import Navigation from '../Components/Navigation';
import FloatingEquations from '../Components/FloatingEquations';
import LoginForm from '../Components/LoginForm';
import characters from './characters.json'; // Import the characters data
import './Home.css'
const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentCharacter, setCurrentCharacter] = useState(characters[0]);

  const filteredCharacters = characters.filter(character =>
    character.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCharacterSelect = (character) => {
    setCurrentCharacter(character);
  };

  return (
    <div className="container">
      <Navigation />
      <header className="App-header">
        <h1>Rick and Morty Character Viewer</h1>
        <input
          type="text"
          placeholder="Search characters..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {"Let's get riggity riggity wrecked!"}
        <div className="character-selector">
          {filteredCharacters.map((character, index) => (
            <button key={index} onClick={() => handleCharacterSelect(character)}>
              {character.fullName}
            </button>
          ))}
        </div>
        {"Let's get schwifty!"}
        <div className="character-display">
          <h2>{currentCharacter.fullName}</h2>
          <img src={currentCharacter.image} alt={currentCharacter.fullName} />
          <p>Character Trait: {currentCharacter.characterTrait}</p>
          <p>Status: {currentCharacter.status}</p>
          <p>Species: {currentCharacter.species}</p>
          <p>Origin: {currentCharacter.origin}</p>
          <p>Current Location: {currentCharacter.currentLocation}</p>
          <p>Favorite Catchphrase: {currentCharacter.favoriteCatchphrase}</p>
        </div>
        <LoginForm />
        <FloatingEquations />
      </header>
    </div>
  );
};

export default Home;
