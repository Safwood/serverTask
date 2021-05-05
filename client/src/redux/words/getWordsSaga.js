import { takeEvery, call, put } from "redux-saga/effects";
import { GET_WORDS } from "./wordsAction";
import { getWordsSuccess, saveWordsFail } from "./wordsAction.js";
import { serverGetWords } from "../serverFunctions/serverGetWords";
import { setWordList } from "../../helpers/setWordList";

export function* getAndSaveWordsSaga(action) {
  
  const data = yield call(serverGetWords)
  const wordList = setWordList(data.data.wordList)
  console.log(wordList)

  if (data && data.statusText === "OK") {
    yield put(getWordsSuccess( wordList ))
  } else {
    alert("ошибка")
    yield put(saveWordsFail(data))
  }
}

export function* getWordsSaga() {
  yield takeEvery(GET_WORDS, getAndSaveWordsSaga)
}