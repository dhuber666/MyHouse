const INITIAL_STATE = {
  loading: true,
  rooms: {}
};

const RoomsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_ROOMS":
      return { loading: false, rooms: action.payload };
    default:
      return state;
  }
};

export default RoomsReducer;
