export const AUTHENTICATE = "auth/AUTHENTICATE"
export const authenticate = ({email, password}) => ({type: AUTHENTICATE, payload: { email, password }})