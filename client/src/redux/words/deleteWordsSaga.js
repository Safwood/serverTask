import { takeEvery, call, put } from "redux-saga/effects";
import { DELETE_WORDS } from "./wordsAction";
import { deleteWordsSuccess, deleteWordsFail } from "./wordsAction";
// import { getWordsSuccess, saveWordsFail } from "./wordsAction";
// import { serverGetWords } from "../serverFunctions/serverGetWords";
import { serverDeleteWords } from "../serverFunctions/serverDeleteWords";
import { deleteTheme } from "../../helpers/deleteTheme";

export function* getAndDeletWordsSaga(action) {
  const {topic, wordsId, wordList} = action.payload;
  const data = yield call(serverDeleteWords, wordsId, topic)
  
  if (data && data.wordsId) {
    const filteredWordList = deleteTheme(data.wordsId, wordList)
    
    yield put(deleteWordsSuccess( filteredWordList ))
  } else {
    yield put(deleteWordsFail(data))
  }
}

export function* deleteWordsSaga() {
  yield takeEvery(DELETE_WORDS, getAndDeletWordsSaga)
}