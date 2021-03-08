import { LOG_IN  } from "../actions/logInAction";
import { LOG_IN_FAIL  } from "../actions/logInAction";
import { LOG_IN_FAIL_CLOSE  } from "../actions/logInAction";
import { LOG_OUT  } from "../actions/logOutAction";


const initialState = {
  isAuthenticated: false,
  userId: null,
  // token: null,
  hasAuthError: null,
  error: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case LOG_IN: {
      return {isAuthenticated: true, userId: action.payload, hasAuthError: null}
    }
    case LOG_OUT: {
      return {isAuthenticated: false, userId: null, hasAuthError: null}
    }
    case LOG_IN_FAIL: {
      return {isAuthenticated: false, hasAuthError: action.payload}
    }
    case LOG_IN_FAIL_CLOSE: {
      return {isAuthenticated: false, hasAuthError: null}
    }
    default: 
      return state
  }
}