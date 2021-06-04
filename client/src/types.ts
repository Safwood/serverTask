export type OneThemeType = {
  topic?: string,
  words?: Array<Array<string>> | null,
  wordsId?: number | string
}

// export type CardFormValuesType = {
//   cardNumber: string 
//   expiryDate: string 
//   cardName: string 
//   cvc: string
// }
// export type OrderFormValuesType = {
//   address1: string 
//   address2: string 
// }
// export type ServerLoginFunctonReponseType = {
//   error: string 
//   success: boolean
//   token: string
// }
// export type ServerCardFunctonReponseType = {
//   error: string 
//   success: boolean
//   token: string
// }
// export type serverGetCardFunctonReponseType = {
//   cardNumber: string, 
//   expiryDate: string, 
//   cardName: string, 
//   cvc: string,
//   error: string 
//   success: boolean
//   token?: string
// }

// export type CardErrorsType = {
//   cardNumber?: string 
//   expiryDate?: string 
//   cardName?: string 
//   cvc?: string
// }

// export type GetAddressListSagaType = {
//   addresses: Array<string>
// }