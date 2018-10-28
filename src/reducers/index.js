import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import RoomsReducer from "./RoomsReducer";

export default combineReducers({
  rooms: RoomsReducer,
  form: formReducer
});
