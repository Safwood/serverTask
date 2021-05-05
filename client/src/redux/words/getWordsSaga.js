import { takeEvery, call, put } from "redux-saga/effects";
import { GET_WORDS } from "./wordsAction";
import { getWordsSuccess, saveWordsFail } from "./wordsAction";
import { serverGetWords } from "../serverFunctions/serverGetWords";
import { setWordList } from "../../helpers/setWordList";

export function* getAndSaveWordsSaga(action) {
  const data = yield call(serverGetWords)
  
  if (data && data.statusText === "OK") {
    const wordList = setWordList(data.data.wordList)
    yield put(getWordsSuccess( wordList ))
  } else {
    yield put(saveWordsFail(data))
  }
}

export function* getWordsSaga() {
  yield takeEvery(GET_WORDS, getAndSaveWordsSaga)
}