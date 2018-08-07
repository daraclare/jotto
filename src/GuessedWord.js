import React from "react";
import PropTypes from "prop-types";

export const GuessedWord = props => {
  let context =
    props.guessedWords.length === 0 ? (
      <p className="instructions">Please guess a word</p>
    ) : (
      <p>my words</p>
    );
  return (
    <div data-test="component-guessedword">
      {console.log("props.guessword", props.guessedWords)}
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
