import { SAVE_WORDS_SUCCESS, SAVE_WORDS_FAIL, GET_WORDS_SUCCESS  } from "./wordsAction";


const initialState = {
  wordList: {
    
  },
  isWordListSaved: false,
  error: null
}

export default function authReducer(state = initialState, action) {
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
            ...state.wordList[wordsId],
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

      return {
        ...state, 
        wordList: {
          ...action.payload.wordList
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