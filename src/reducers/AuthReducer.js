const INITIAL_STATE = {
  user: null,
  loading: true,
  error: null
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGOUT_USER":
      return { ...state, user: null, loading: false };
    case "SIGNUP_START":
      return { ...state, loading: true };
    case "SIGNUP_SUCCESS":
      return { ...state, user: action.payload, loading: false };
    case "SIGNUP_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default AuthReducer;
