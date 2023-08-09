// selectors.js (create a separate file to store your selectors)

// Assuming your state has an object with different data based on different parameter values
export const getDataBasedOnParam = (state, params) => {
  return state.tests[params];
};
