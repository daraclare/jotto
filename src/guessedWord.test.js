import React from "react";
import { shallow } from "enzyme";
import { propError, findByTestAttr } from "../config/jest/jestUtils";
import { GuessedWord } from "./GuessedWord";

const defaultProps = {
  guessedWords: [
    {
      guessedWord: "train",
      letterMatchCount: 3
    }
  ]
};

const setup = (props = {}) => {
  const initialProps = { ...defaultProps, ...props };
  const wrapper = shallow(<GuessedWord {...initialProps} />);
  return wrapper;
};

describe("GuessedWord Component with guesswords props", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it("should render without errors", () => {
    const dataAtt = findByTestAttr(wrapper, "component-guessedword");
    expect(dataAtt).toHaveLength(1);
  });

  it("should not throw errow with correct propTypes", () => {
    propError(GuessedWord, defaultProps);
  });

  it("should render a guessed word, not instructions", () => {
    const guessedWord = wrapper.find(".guessedWord").text();
    expect(guessedWord).toBeDefined();
  });
});

describe("GuessWord Component with empty props", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  it("should render instructions, not a word list", () => {
    const instructions = wrapper.find(".instructions").text();
    expect(instructions).toBe("Please guess a word");
  });
});

describe("GuessWord Component with multiple guessedWords in props", () => {
  let wrapper;
  const guessedWords = [
    {
      guessedWord: "train",
      letterMatchCount: 3
    },
    {
      guessedWord: "agile",
      letterMatchCount: 1
    },
    {
      guessedWord: "party",
      letterMatchCount: 5
    }
  ];

  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  it("should render all guessed words", () => {
    const matchedLetterNodes = wrapper.find(".matchedLetters").getElements();
    expect(matchedLetterNodes).toHaveLength(guessedWords.length);
  });

  it("should render the correct matchedLetter for first guess", () => {
    const matchedLetter = wrapper
      .find(".matchedLetters")
      .at(0)
      .text();
    const letterCount = guessedWords[0].letterMatchCount;
    expect(matchedLetter).toBe(`${letterCount}`);
  });
});
