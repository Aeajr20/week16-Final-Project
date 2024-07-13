import React, { useState } from 'react';
import Navigation from '../Components/Navigation';
import LoginForm from '../Components/LoginForm';
import FloatingEquations from '../Components/FloatingEquations';
import characters from './characters.json';
import './Home.css'


function Home() {
  const [currentCharacter, setCurrentCharacter] = useState(characters[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCharacterSelect = (character) => {
    setCurrentCharacter(character);
  };

  const filteredCharacters = characters.filter(character =>
    character.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="Home">
      <Navigation />
      <header className="Home-header">
        <h1>Rick and Morty Character Viewer</h1>
        <input
          type="text"
          placeholder="Search characters..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {5+5}
        <div className="character-selector">
          {filteredCharacters.map((character, index) => (
            <button key={index} onClick={() => handleCharacterSelect(character)}>
              {character.fullName}
            </button>
          ))}
        </div>
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
      </header>
      <FloatingEquations />
      <footer>
        <LoginForm />
      </footer>
    </div>
  );
}

export default Home;
