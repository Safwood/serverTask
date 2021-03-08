import { takeEvery, call, put } from "redux-saga/effects";
import { AUTHENTICATE } from "../actions/authenticateAction";
// import { logIn } from "../actions/logInAction";

export function* authenticateSaga(action) {
  // const {email, password} = action.payload;
  console.log(action.payload)
  
}

export function* authSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga)
}