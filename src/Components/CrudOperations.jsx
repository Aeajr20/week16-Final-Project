import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

// The API endpoint from where the characters data is fetched
const API_URL = 'https://668dd698bf9912d4c92bfd22.mockapi.io/api/vi/characters';

// The CrudOperations component handles Create, Read, Update, and Delete (CRUD) operations
const CrudOperations = () => {
  // State variables for the characters data, new character name
  const [characters, setCharacters] = useState([]);
  const [newName, setNewName] = useState('');

  // Fetch characters from the API when the component mounts
  useEffect(() => {
    fetchCharacters();
  }, []);

  // Function to fetch characters from the API
  const fetchCharacters = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      // Add an updateName property to each character
      const charactersWithUpdateNames = data.map(character => ({ ...character, updateName: '' }));
      setCharacters(charactersWithUpdateNames);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  // Function to add a new character
  const addCharacter = async () => {
    const newCharacter = {
      fullName: newName,
      characterTrait: 'New Trait', // Assuming a default value for trait
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCharacter),
      });
      const data = await response.json();
      setCharacters([...characters, { ...data, updateName: '' }]);
      setNewName(''); // Clear input after adding
    } catch (error) {
      console.error('Error adding character:', error);
    }
  };

  // Function to delete a character
  const deleteCharacter = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      setCharacters(characters.filter((character) => character.id !== id));
    } catch (error) {
      console.error('Error deleting character:', error);
    }
  };

  // Function to update a character
  const updateCharacter = async (id) => {
    const characterToUpdate = characters.find(character => character.id === id);
    const updatedCharacter = {
      fullName: characterToUpdate.updateName,
    };

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCharacter),
      });
      const data = await response.json();
      setCharacters(characters.map((character) =>
        character.id === id ? { ...data, updateName: '' } : character
      ));
    } catch (error) {
      console.error('Error updating character:', error);
    }
  };

  // Render the component
  return (
    <div>
      <h3>Character List:</h3>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            {character.fullName} - {character.characterTrait}
            <Button variant="danger" size="sm" className="ml-2" onClick={() => deleteCharacter(character.id)}>
              Delete
            </Button>
            <Form.Group className="ml-2">
              <Form.Control
                type="text"
                placeholder="Update Name"
                value={character.updateName}
                onChange={(e) => setCharacters(characters.map((char) =>
                  char.id === character.id ? { ...char, updateName: e.target.value } : char
                ))}
              />
              <Button variant="info" size="sm" className="ml-2" onClick={() => updateCharacter(character.id)}>
                Update
              </Button>
            </Form.Group>
          </li>
        ))}
      </ul>

      <Form className="mt-4">
        <Form.Control
          type="text"
          placeholder="Enter Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <Button variant="primary" className="ml-2" onClick={addCharacter}>
          Add Character
        </Button>
      </Form>
    </div>
  );
};

// Export the CrudOperations component, so it can be imported and used in other files.
export default CrudOperations;
