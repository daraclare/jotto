import React from "react";
import PropTypes from "prop-types";

export const GuessedWord = props => {
  let context =
    props.guessedWords.length === 0 ? (
      <p className="instructions">Please guess a word</p>
    ) : (
      props.guessedWords.map((item, index) => {
        return (
          <div key={index}>
            <p className="guessedWord">
              {item.guessedWord}{" "}
              <span className="matchedLetters">{item.letterMatchCount}</span>{" "}
            </p>
          </div>
        );
      })
    );
  return (
    <div data-test="component-guessedword">
      {context}
      <h1>Hi there</h1>
      <p>So what</p>
    </div>
  );
};

GuessedWord.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};
