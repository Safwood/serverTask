import { fork } from "redux-saga/effects"
import { loginSaga } from "./auth/loginSaga"
import { regSaga } from "./registration/regSaga"
import { dataSaga } from "./userdata/dataSaga"
import { wordsSaga } from "./words/wordsSaga"
import { getWordsSaga } from "./words/getWordsSaga"
import { deleteWordsSaga } from "./words/deleteWordsSaga"

export default function* rootSaga() {
  yield fork(loginSaga);
  yield fork(regSaga);
  yield fork(dataSaga);
  yield fork(wordsSaga);
  yield fork(getWordsSaga);
  yield fork(deleteWordsSaga);
}