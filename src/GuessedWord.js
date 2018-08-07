import React from "react";
import PropTypes from "prop-types";

export const GuessedWord = props => {
  let context =
    props.guessedWords.length === 0 ? (
      <p className="instructions">Please guess a word</p>
    ) : (
      <div>
        <h4>Guessed Words</h4>
        {props.guessedWords.map((item, index) => {
          return (
            <div key={index}>
              <p className="guessedWord">
                {item.guessedWord}{" "}
                <span className="matchedLetters">{item.letterMatchCount}</span>{" "}
              </p>
            </div>
          );
        })}
      </div>
    );
  return <div data-test="component-guessedword">{context}</div>;
};

GuessedWord.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};
