const INITIAL_STATE = {};

const RoomsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_ROOMS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default RoomsReducer;
