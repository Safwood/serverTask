export const REGISTER = "registration/REGISTER"
export const register = ({email, password}) => ({type: REGISTER, payload: { email, password}})
