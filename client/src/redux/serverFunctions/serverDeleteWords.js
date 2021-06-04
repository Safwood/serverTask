import axios from 'axios';

export const serverDeleteWords = async (wordsId, topic) => { 
  const data = {
    topic: topic,
    wordsId: wordsId
  }
  try {
    const response = await axios.post(`http://localhost:5000/api/words/delete`, data,
    {
      headers: {Authorization: "Bearer " + `${localStorage.getItem("token")}`}
    })
    console.log(response.data)
    return response.data
  } catch(e) {
    console.log(e.response.message)
    return e.response.data.message
  }
}