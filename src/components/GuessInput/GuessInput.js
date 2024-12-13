import React from 'react';

function GuessInput({ guessHistory, setGuessHistory }) {
  const [pendingGuess, setPendingGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(`Guess is: ${pendingGuess}`);
        const nextGuessHistory = guessHistory = [...guessHistory, pendingGuess];
        setGuessHistory(nextGuessHistory);
        setPendingGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        value={pendingGuess}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(event) => {
          const nextPendingGuess = event.target.value.toUpperCase();
          setPendingGuess(nextPendingGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
