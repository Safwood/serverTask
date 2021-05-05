import { takeEvery, call, put } from "redux-saga/effects";
import { SAVE_WORDS } from "./wordsAction";
import { saveWordsSuccess, saveWordsFail } from "./wordsAction.js";
// import { preloaderOn, preloaderOff } from "../preloader/preloaderAction";
import { serverSaveWords } from "../serverFunctions/serverSaveWords";

export function* saveWordsSaga(action) {
  const {topic, words, wordsId} = action.payload;
  
  // yield put(preloaderOn())
  const data = yield call(serverSaveWords, topic, words, wordsId)

  // yield put(preloaderOff())

  if (data.wordsId) {
    console.log(data)
    yield put(saveWordsSuccess(topic, words, wordsId ))
  } else {
    alert("ошибка")
    yield put(saveWordsFail(data))
  }
}

export function* wordsSaga() {
  yield takeEvery(SAVE_WORDS, saveWordsSaga)
}