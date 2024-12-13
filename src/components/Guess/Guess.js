import React from 'react';

import { range } from "../../utils.js";

function Guess({ value }) {
  return (
    <>
      <p className="guess">
        {range(5).map((letter) => (
          <span key={letter.index} className="cell">
            {value ? value[letter] : undefined}
          </span>
        ))}
      </p>
    </>
  );
}

export default Guess;
