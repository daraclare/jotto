import { actionTypes } from "../actions/index";
import successReducer from "./successReducer";

describe("Success Reducer", () => {
  let state;
  beforeEach(() => {
    state = false;
  });
  it("should return false as default", () => {
    const returnedState = successReducer(state, {});
    expect(returnedState).toBe(false);
  });
  it("should return true when passed action type 'CORRECT_GUESS' ", () => {
    const returnedState = successReducer(state, actionTypes.CORRECT_GUESS);
    expect(returnedState).toBe(false);
  });
});
