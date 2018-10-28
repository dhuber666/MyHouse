import firebase from "../config/Firebase";

export const startSignUpUser = (email, password) => {
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => dispatch(successSignUpUser(user)))
      .catch(error => dispatch(errorSignUpUser(error)));

    dispatch({ type: "SIGNUP_START" });
  };
};

const successSignUpUser = user => {
  return {
    type: "SIGNUP_SUCCESS",
    payload: user
  };
};

const errorSignUpUser = error => {
  return {
    type: "SIGNUP_ERROR",
    payload: error
  };
};
