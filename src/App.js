import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [joke, setJoke] = useState('');

  const handleClick = () => {
    axios
      .get(` https://cors-anywhere.herokuapp.com/https://api.yomomma.info/`)
      .then((response) => setJoke(response.data.joke));
  };

  return (
    <div>
      <button onClick={handleClick}> Jokes </button>
      <h1>{joke}</h1>
    </div>
  );
};

export default App;
