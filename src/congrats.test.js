import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../config/jest/jestUtils";
import { propError } from "../config/jest/jestUtils";
import { Congrats } from "./Congrats";

const setup = (props = {}, state = null) => {
  const initialProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Congrats {...initialProps} />);
  return wrapper;
};

const defaultProps = {
  success: false
};

describe("Congrats Component", () => {
  it("renders without errors", () => {
    const wrapper = setup();
    const findTest = findByTestAttr(wrapper, "component-congrats");
    expect(findTest).toHaveLength(1);
  });

  it("renders no text when 'success' prop is false", () => {
    const wrapper = setup();
    const text = wrapper.find(".message").text();
    expect(text).toBe("");
  });

  it("renders congrats message when 'success' props is true", () => {
    const wrapper = setup({ success: true });
    const text = wrapper.find(".message").text();
    expect(text).toBe("You WON!!!");
  });

  it("does not throw warning with correct propsTypes", () => {
    const expectedProps = { success: false };
    propError(Congrats, expectedProps);
  });
});
