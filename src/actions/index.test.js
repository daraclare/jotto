import { correctGuess, actionTypes } from "./index";

describe("CorrectGuess Action", () => {
  it("should return an object with type 'CORRECT_GUESS' ", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
