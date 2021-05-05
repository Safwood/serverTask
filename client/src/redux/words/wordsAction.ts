export const GET_WORDS = "words/GET_WORDS"
export const GET_WORDS_SUCCESS = "words/GET_WORDS_SUCCESS"
export const SAVE_WORDS = "words/SAVE_WORDS"
export const SAVE_WORDS_SUCCESS = "words/SAVE_WORDS_SUCCESS"
export const SAVE_WORDS_FAIL = "words/SAVE_WORDS_FAIL"

export type getWordsType = {
  type: typeof GET_WORDS
}
export type saveWordsType = {
  type: typeof SAVE_WORDS
  payload: {
    topic: string 
    words: Array<Array<string>>
    wordsId: string
  }
}
export type saveWordsSuccessType = {
  type: typeof SAVE_WORDS_SUCCESS
  payload: {
    topic: string 
    words: Array<Array<string>>
    wordsId: string
  }
}
export type saveWordsFailType = {
  type: typeof SAVE_WORDS_FAIL
  payload: {
    error: string
  }
  
}
export type getWordsSuccessType = {
  type: typeof GET_WORDS_SUCCESS
  payload: {
    wordList: Array<Array<string>>
  }
  
}

export const getWords = (): getWordsType => ({type: GET_WORDS}  as const)
export const getWordsSuccess = (( wordList: Array<Array<string>> ): getWordsSuccessType => ({type: GET_WORDS_SUCCESS, payload: { wordList }})  as const)
export const saveWords = (topic: string, words: Array<Array<string>>, wordsId: string): saveWordsType => ({type: SAVE_WORDS, payload: { topic, words, wordsId }}  as const)
export const saveWordsSuccess = (topic: string, words: Array<Array<string>>, wordsId: string): saveWordsSuccessType => ({type: SAVE_WORDS_SUCCESS, payload: { topic, words, wordsId }}  as const)
export const saveWordsFail = (error: string): saveWordsFailType => ({type: SAVE_WORDS_FAIL, payload: { error }}  as const)

