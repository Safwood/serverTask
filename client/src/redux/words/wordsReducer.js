import { GET_WORDS, SAVE_WORDS, SAVE_WORDS_SUCCESS, SAVE_WORDS_FAIL  } from "./wordsAction";


const initialState = {
  wordList: [
    {
    wordsId: null,
    topic: "",
    words: []
    }
  ],
  isWordListSaved: false,
  error: null
}

export default function authReducer(state = initialState, action) {
  switch(action.type) {
    // case GET_WORDS: {
    //   return {...state, isAuthenticated: true, userId: action.payload, error: null}
    // }
    case SAVE_WORDS_SUCCESS: {
      return {isWordListSaved: true, wordList: action.payload.wordsId, error: null}
    }
    case SAVE_WORDS_FAIL: {
      return {...state, error: action.payload.error}
    }
    default: 
      return state
  }
}