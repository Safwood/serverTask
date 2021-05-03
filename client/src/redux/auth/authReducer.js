import { LOG_IN, LOG_IN_FAIL, LOG_IN_FAIL_CLOSE  } from "../auth/logInAction";
import { LOG_OUT  } from "../auth/logOutAction";


const initialState = {
  isAuthenticated: false,
  userId: null,
  error: null
}

export default function authReducer(state = initialState, action) {
  switch(action.type) {
    case LOG_IN: {
      return {...state, isAuthenticated: true, userId: action.payload, error: null}
    }
    case LOG_OUT: {
      return {isAuthenticated: false, userId: null, error: null}
    }
    case LOG_IN_FAIL: {
      return {...state, isAuthenticated: false, error: action.payload}
    }
    case LOG_IN_FAIL_CLOSE: {
      return {...state, error: null}
    }
    default: 
      return state
  }
}