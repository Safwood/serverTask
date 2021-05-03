import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import wordsReducer from "./words/wordsReducer";

export default combineReducers({
  auth: authReducer,
  words: wordsReducer
});