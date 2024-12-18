import React, { useState, useEffect } from 'react';

import { range } from "../../utils.js";
import { checkGuess } from "../../game-helpers.js";

function Cell({ letter, status }) {

  const className = status
    ? `cell ${status}`
    : "cell";

  return (
    <span className={className}>
      {letter}
    </span>
  )
}

function Guess({ word, answer }) {

  const result = checkGuess(word, answer);

  return (
    <>
      <p className="guess">
        {range(5).map((word) => (
          <Cell
            key={word}
            letter={result ? result[word].letter : undefined}
            status={result ? result[word].status : undefined}
          />
        ))}
      </p>
    </>
  );
}

export default Guess;
