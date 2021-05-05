import axios from 'axios';

export const serverGetWords = async () => { 
  try {
    const response = await axios.get(`http://localhost:5000/api/words/get`, 
    {
      headers: {Authorization: "Bearer " + `${localStorage.getItem("token")}`},
      
    })
    console.log(response)
    return response
  } catch(e) {
    console.log(e.response.data.message)
    return e.response.data.message
  }
}