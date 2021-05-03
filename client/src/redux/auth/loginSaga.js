import { takeEvery, call, put } from "redux-saga/effects";
import { AUTHENTICATE } from "./authenticateAction";
import { logIn } from "./logInAction";
// import { preloaderOn, preloaderOff } from "../preloader/preloaderAction";
import { logInFail } from "./logInAction";
import { serverLogin } from "../serverFunctions/serverLogin";

export function* authenticateSaga(action) {
  const {email, password} = action.payload;
  
  // yield put(preloaderOn())
  const data = yield call(serverLogin, email, password)
  console.log(data.data)

  // yield put(preloaderOff())

  if (data && data.status === 200) {
    localStorage.setItem('token', data.data.token)
    yield put(logIn(data.data.userId))
  } else {
    alert("ошибка авторизации")
    yield put(logInFail(data))
  }
}

export function* loginSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga)
}