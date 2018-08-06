import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { findByTestAttr } from "../config/jest/jestUtils";

import { Congrats } from "./Congrats";

configure({ adapter: new Adapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Congrats {...props} />);
  return wrapper;
};

const props = {
  success: false
};

describe("Congrats Component", () => {
  it("renders without errors", () => {
    const wrapper = setup(props);
    const findTest = findByTestAttr(wrapper, "component-congrats");
    expect(findTest).toHaveLength(1);
  });

  it("renders no text when 'success' prop is false", () => {
    const wrapper = setup(props);
    const text = wrapper.find(".message").text();
    expect(text).toBe("");
  });

  it("renders congrats message when 'success' props is true", () => {
    const wrapper = setup({ success: true });
    const text = wrapper.find(".message").text();
    expect(text).toBe("You WON!!!");
  });
});
