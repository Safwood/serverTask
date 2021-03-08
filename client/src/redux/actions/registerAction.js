export const REGISTER = "REGISTRATE"
export const register = ({email, password, name}) => ({type: REGISTER, payload: { email, password, name}})
