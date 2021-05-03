import { takeEvery, call, put } from "redux-saga/effects";
import { SAVE_WORDS } from "./wordsAction";
import { saveWordsSuccess, saveWordsFail } from "./wordsAction.js";
// import { preloaderOn, preloaderOff } from "../preloader/preloaderAction";
import { serverSaveWords } from "../serverFunctions/serverSaveWords";

export function* saveWordsSaga(action) {
  const {topic, words} = action.payload;
  
  // yield put(preloaderOn())
  const data = yield call(serverSaveWords, topic, words)
  console.log(data.data)

  // yield put(preloaderOff())

  if (data && data.status === 200 || 201) {
    yield put(saveWordsSuccess(data.data.wordsId))
  } else {
    alert("ошибка")
    yield put(saveWordsFail(data))
  }
}

export function* wordsSaga() {
  yield takeEvery(SAVE_WORDS, saveWordsSaga)
}