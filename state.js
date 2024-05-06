export const getInitialState = (initialState) => Object.freeze({
  ...initialState
});

export const changeState = (oldState, newState) => Object.freeze({...oldState, ...newState});
