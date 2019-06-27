const itemsReducer = (state = {}, action) => {
  let nextState;
  Object.freeze(state);
  switch (action.type) {
    // case value:
    //   return nextState;
    default:
      return state;
  }
};

export default itemsReducer;
