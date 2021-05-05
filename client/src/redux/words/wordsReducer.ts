import { SAVE_WORDS_SUCCESS, SAVE_WORDS_FAIL, GET_WORDS_SUCCESS, saveWordsType, saveWordsSuccessType ,saveWordsFailType, getWordsSuccessType  } from "./wordsAction";

type InitialStateType = {
  wordList?: {
    [key: number]:  {
      topic?: string,
      words?: Array<Array<string>>,
      wordsId?: number | string
    } | string[]
  },
  isWordListSaved: boolean
  error: string | null
}

const initialState: InitialStateType = {
  wordList: {},
  isWordListSaved: false,
  error: null
}

export default function wordsReducer(state = initialState, action:
  saveWordsType | 
  saveWordsSuccessType |
  saveWordsFailType | 
  getWordsSuccessType 
  ): InitialStateType {

  console.log(action)
  switch(action.type) {
    case SAVE_WORDS_SUCCESS: {
      const {
        topic, 
        words,
        wordsId
      } = action.payload;
      return {
        ...state, 
        wordList: {
          ...state.wordList,
          [wordsId]: {
            topic: topic,
            words: words,
            wordsId: wordsId
          }
        },
        isWordListSaved: true,
        error: null
      }
    }
    case GET_WORDS_SUCCESS: {
      const {wordList} = action.payload;
      return {
        ...state, 
        wordList: {
          ...wordList
        }
      }
    }
    case SAVE_WORDS_FAIL: {
      return {...state, error: action.payload.error}
    }
    default: 
      return state
  }
}