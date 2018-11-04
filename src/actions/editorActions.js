import firebase from "../config/Firebase";
import { convertToRaw, convertFromRaw } from "draft-js";

export const updateEditorState = editorState => {
  return dispatch => {
    dispatch({
      type: "UPDATE_EDITOR_STATE",
      payload: editorState
    });
  };
};

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
