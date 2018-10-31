import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import RoomsReducer from "./RoomsReducer";
import AuthReducer from "./AuthReducer";
import EditorReducer from "./EditorReducer";

export default combineReducers({
  rooms: RoomsReducer,
  form: formReducer,
  auth: AuthReducer,
  editor: EditorReducer
});
