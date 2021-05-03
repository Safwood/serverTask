import { takeEvery, call, put } from "redux-saga/effects";
import { GET_USER_DATA } from "./userDataAction";
import { logIn } from "../auth/logInAction";
import { serverAuth } from "../serverFunctions/serverAuth";
import { logInFail } from "../auth/logInAction";

export function* userDataSaga(action) {
  const data = yield call(serverAuth)

  if (data && data.status === 200 || 201) {
    yield put(logIn(data.data.userId))
  } else {
    yield put(logInFail(data))
  }
}

export function* dataSaga() {
  yield takeEvery(GET_USER_DATA, userDataSaga)
}