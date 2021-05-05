export const PRELOADER_ON = "preloader/PRELOADER_ON"
export const PRELOADER_OFF = "preloader/PRELOADER_OFF"


export type PreloaderOnActionType = {
  type: typeof PRELOADER_ON
}

export type PreloaderOffActionType = {
  type: typeof PRELOADER_OFF
}

export const preloaderOn = (): PreloaderOnActionType => ({type: PRELOADER_ON} as const)
export const preloaderOff = (): PreloaderOffActionType => ({type: PRELOADER_OFF} as const)