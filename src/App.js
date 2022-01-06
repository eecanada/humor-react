import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [joke, setJoke] = useState('');

  function getData() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://yomomma-api.herokuapp.com/jokes`
      )
      .then((response) => setJoke(response.data.joke));
  }

  const handleClick = () => {
    getData()
  };

  return (
    <div className="joke">
      <h1>{joke}</h1>
      <button onClick={handleClick}> Jokes </button>
    </div>
  );
};

export default App;
