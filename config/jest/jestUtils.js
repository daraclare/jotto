import checkPropTypes from "check-prop-types";

export const findByTestAttr = (wrapper, att) => {
  const section = wrapper.find(`[data-test="${att}"]`);
  return section;
};

export const propError = (component, expectedProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    expectedProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
