export const GET_WORDS = "words/GET_WORDS"
export const SAVE_WORDS = "words/SAVE_WORDS"
export const SAVE_WORDS_SUCCESS = "words/SAVE_WORDS_SUCCESS"
export const SAVE_WORDS_FAIL = "words/SAVE_WORDS_FAIL"

export const getWords = ({topic, id}) => ({type: GET_WORDS, payload: { topic, id  }})
export const saveWords = ({topic, words}) => ({type: SAVE_WORDS, payload: { topic, words }})
export const saveWordsSuccess = ({id}) => ({type: SAVE_WORDS_SUCCESS, payload: { id }})
export const saveWordsFail = ({error}) => ({type: SAVE_WORDS_FAIL, payload: { error }})