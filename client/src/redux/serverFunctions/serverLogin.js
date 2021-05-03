import axios from 'axios';

export const serverLogin = async (email, password) => { 
  try { 
    const response = await axios.post(`http://localhost:5000/api/auth/login`, {
      email: email,
      password: password
    })

    return response
  } catch(e) {
    
    console.log(e.response.data.message)
    return e.response.data.message
  }
}