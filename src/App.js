import React, { useState } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const App = () => {
  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
    checkSpelling(inputText);
  };

  const checkSpelling = (inputText) => {
    const words = inputText.split(/\s+/); // Split by whitespace
    for (let word of words) {
      const lowerCaseWord = word.toLowerCase();
      if (customDictionary[lowerCaseWord]) {
        setSuggestion(`Did you mean: ${customDictionary[lowerCaseWord]}?`);
        return;
      }
    }
    setSuggestion(''); // Clear suggestion if no misspelling found
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea 
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
        rows="10"
        cols="50"
      />
      {suggestion && <div>{suggestion}</div>}
    </div>
  );
};

export default App;
