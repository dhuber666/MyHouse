import firebase from "../config/Firebase";
import { convertToRaw, convertFromRaw } from "draft-js";

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
        dispatch(successSignUpUser(user));
      } else {
        dispatch(logoutUser());
      }
    });
};

export const addNewRoom = title => {
  return (dispatch, getState) => {
    const room = {
      title
    };

    firebase
      .database()
      .ref(`users/${getState().auth.user.uid}/rooms`)
      .push(room);

    dispatch({
      type: "ADD_NEW_ROOM",
      payload: title
    });
  };
};

export const updateEditorState = editorState => {
  return dispatch => {
    dispatch({
      type: "UPDATE_EDITOR_STATE",
      payload: editorState
    });
  };
};

// variable for storing the id of interval
let intervalID;

export const subscribeAutosave = () => {
  return (dispatch, getState) => dispatch(saveEditorStateToFirebase());
};

export const unsubscribeAutosave = () => {
  return dispatch => clearInterval(intervalID);
};

const saveEditorStateToFirebase = () => {
  return (dispatch, getState) => {
    intervalID = setInterval(() => {
      const editorState = getState().editor.editorState;
      const jsonState = JSON.stringify(
        convertToRaw(editorState.getCurrentContent())
      );
      // TODO: Figure out the best place to store an editor's state. The state of the editor alone is enough
      // Just set it to readonly when done editing
      firebase
        .database()
        .ref(`users/${getState().auth.user.uid}/editor`)
        .set(jsonState);
    }, 1000);
  };
};

export const fetchEditorState = () => {
  return (dispatch, getState) => {
    firebase
      .database()
      .ref(`users/${getState().auth.user.uid}/editor`)
      .once("value", snapshot => {
        const jsonState = snapshot.val();

        const state = convertFromRaw(JSON.parse(jsonState));

        dispatch({
          type: "FETCH_EDITOR_STATE",
          payload: state
        });
      });
  };
};

export const fetchRooms = () => {
  return (dispatch, getState) => {
    firebase
      .database()
      .ref(`users/${getState().auth.user.uid}/rooms`)
      .on("value", snapshot => {
        const rooms = snapshot.val();
        console.log(rooms);
        dispatch({
          type: "FETCH_ROOMS",
          payload: rooms
        });
      });
  };
};
