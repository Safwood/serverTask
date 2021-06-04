export const GET_WORDS = "words/GET_WORDS"
export const GET_WORDS_SUCCESS = "words/GET_WORDS_SUCCESS"
export const SAVE_WORDS = "words/SAVE_WORDS"
export const SAVE_WORDS_SUCCESS = "words/SAVE_WORDS_SUCCESS"
export const SAVE_WORDS_FAIL = "words/SAVE_WORDS_FAIL"
export const DELETE_WORDS = "words/DELETE_WORDS"
export const DELETE_WORDS_SUCCESS = "words/DELETE_WORDS_SUCCESS"
export const DELETE_WORDS_FAIL = "words/DELETE_WORDS_FAIL"

export type getWordsType = {
  type: typeof GET_WORDS
}
export type saveWordsType = {
  type: typeof SAVE_WORDS
  payload: {
    topic: string 
    words: Array<Array<string>>
    wordsId: string | null
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
export type wordListType = {
  [key: number]:  {
    topic?: string,
    words?: Array<Array<string>>,
    wordsId?: number | string
  } | any
}
export type deleteWordsType = {
  type: typeof DELETE_WORDS
  payload: {
    topic: string 
    wordsId: string
    wordList?: wordListType
  }
}
export type deleteWordsSuccessType = {
  type: typeof DELETE_WORDS_SUCCESS
  payload: {
    wordList: Array<Array<string>>
  }
}
export type deleteWordsFailType = {
  type: typeof DELETE_WORDS_FAIL
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
export const deleteWords = (topic: string, wordsId: string, wordList: wordListType): deleteWordsType => ({type: DELETE_WORDS, payload: { topic, wordsId, wordList }}  as const)
export const deleteWordsSuccess = (wordList: Array<Array<string>>): deleteWordsSuccessType => ({type: DELETE_WORDS_SUCCESS, payload: { wordList }}  as const)
export const deleteWordsFail = (error: string): deleteWordsFailType => ({type: DELETE_WORDS_FAIL, payload: { error }}  as const)