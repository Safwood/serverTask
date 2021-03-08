export const AUTHENTICATE = "AUTHENTICATE"
export const authenticate = ({email, password}) => ({type: AUTHENTICATE, payload: { email, password }})