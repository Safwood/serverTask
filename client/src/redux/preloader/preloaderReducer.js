import { PRELOADER_ON, PRELOADER_OFF } from "./preloaderAction";

let initialState = {
  isPreloaderOn: false
}

export default function preloaderReducer(state = initialState, action) {

  switch(action.type) {
    case PRELOADER_ON: {
      return {
        isPreloaderOn: true
      }
    }
    case PRELOADER_OFF: {
      return{ 
        isPreloaderOn: false 
      }
    }
        
    default: 
      return state
  }
}