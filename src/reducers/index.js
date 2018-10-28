import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import RoomsReducer from "./RoomsReducer";
import AuthReducer from "./AuthReducer";

export default combineReducers({
  rooms: RoomsReducer,
  form: formReducer,
  auth: AuthReducer
});
