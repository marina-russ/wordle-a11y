import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { range } from "../../utils.js";

import Guess from "../Guess";

function GuessResults({ guessHistory, answer }) {

  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <Guess key={`result-${num}`} word={guessHistory[num]} answer={answer} />
        ))}
      </div>
    </>
  );
}

export default GuessResults;
