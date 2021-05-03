import axios from 'axios';

export const serverRegister = async (email, password) => { 
  try {
    const response = await axios.post(`http://localhost:5000/api/auth/register`, {
      email: email,
      password: password
    })
    console.log(response)
    return response
  } catch(e) {
    console.log(e.response.data.message)
    return e.response.data.message
  }
}