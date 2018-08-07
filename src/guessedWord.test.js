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

const setup = (props = {}, state = null) => {
  const initialProps = { ...defaultProps, ...props };
  const wrapper = shallow(<GuessedWord {...initialProps} />);
  return wrapper;
};

describe("GuessedWord Component", () => {
  it("should render without errors", () => {
    const wrapper = setup();
    const dataAtt = findByTestAttr(wrapper, "component-guessedword");
    expect(dataAtt).toHaveLength(1);
  });

  it("should not throw errow with correct propTypes", () => {
    propError(GuessedWord, defaultProps);
  });

  //   it("should render instructions when no words are guessed", () => {
  //     const testProps = { guessedWords: [] };
  //     const wrapper = setup({ guessedWords: [] });
  //     const instructions = wrapper.find(".instructions").text();
  //     expect(instructions).toBe("Please guess a word");
  //   });
});

describe("GuessWord Component with empty props", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  it("should render instructions", () => {
    const instructions = wrapper.find(".instructions").text();
    expect(instructions).toBe("Please guess a word");
  });
});
