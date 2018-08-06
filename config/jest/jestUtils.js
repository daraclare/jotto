export const findByTestAttr = (wrapper, att) => {
  const section = wrapper.find(`[data-test="${att}"]`);
  return section;
};
