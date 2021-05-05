import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import wordsReducer from "./words/wordsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  words: wordsReducer
});
  
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;