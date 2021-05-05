import { PRELOADER_ON, PRELOADER_OFF } from "./preloaderAction";
import { PreloaderOnActionType, PreloaderOffActionType } from "./preloaderAction";

type InitialStateType = {
  isPreloaderOn: boolean
}

let initialState: InitialStateType = {
  isPreloaderOn: false
}

export default function preloaderReducer(state = initialState, action: PreloaderOnActionType | PreloaderOffActionType): InitialStateType {

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