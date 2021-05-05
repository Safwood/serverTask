export const GET_WORDS = "words/GET_WORDS"
export const GET_WORDS_SUCCESS = "words/GET_WORDS_SUCCESS"
export const SAVE_WORDS = "words/SAVE_WORDS"
export const SAVE_WORDS_SUCCESS = "words/SAVE_WORDS_SUCCESS"
export const SAVE_WORDS_FAIL = "words/SAVE_WORDS_FAIL"

export const getWords = () => ({type: GET_WORDS})
export const getWordsSuccess = ((wordlist) => ({type: GET_WORDS_SUCCESS, payload: wordlist}))
export const saveWords = ({topic, words, wordsId}) => ({type: SAVE_WORDS, payload: { topic, words, wordsId }})
export const saveWordsSuccess = ({topic, words, wordsId}) => ({type: SAVE_WORDS_SUCCESS, payload: { topic, words, wordsId }})
export const saveWordsFail = ({error}) => ({type: SAVE_WORDS_FAIL, payload: { error }})