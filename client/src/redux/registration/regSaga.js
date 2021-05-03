import { takeEvery, call, put } from "redux-saga/effects";
import { REGISTER } from "./registerAction";
import { logIn } from "../auth/logInAction";
import { serverRegister } from "../serverFunctions/serverRegister";
// import { preloaderOn, preloaderOff } from "../preloader/preloaderAction";
import { logInFail } from "../auth/logInAction";

export function* registerSaga(action) {
  const {email, password} = action.payload;

  // yield put(preloaderOn())
  const data = yield call(serverRegister, email, password)
  // yield put(preloaderOff())
  console.log(data)


  if (data && data.status === 200 || 201) {
    yield put(logIn(data.data.userId))
  } else {
    alert("ошибка авторизации")
    yield put(logInFail(data))
  }
}

export function* regSaga() {
  yield takeEvery(REGISTER, registerSaga)
}