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

export const startSignInUser = (email, password) => {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
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

export const logoutUser = () => {
  return dispatch =>
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: "LOGOUT_USER"
        });
      });
};

export const initAuthWithFirebase = () => {
  // return a dispatch every time state changes

  return dispatch =>
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("now we have a user", user);
        dispatch(successSignUpUser(user));
      } else {
        dispatch(logoutUser());
      }
    });
};
