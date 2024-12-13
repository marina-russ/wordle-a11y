import React from 'react';

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every page load.
const answer = sample(WORDS);
// For debugging:
console.info({ answer });

function Game() {

  const [guessHistory, setGuessHistory] = React.useState([]);

  return (
    <>
      <GuessResults
        guessHistory={guessHistory}
      />
      <GuessInput
        guessHistory={guessHistory}
        setGuessHistory={setGuessHistory}
      />

    </>
  );
}

export default Game;
