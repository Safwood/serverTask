import axios from 'axios';

export const serverSaveWords = async (topic, words) => { 
  console.log(topic, words)
  const data = {
    topic: topic,
    words: words
  }
  try {
    const response = await axios.post(`http://localhost:5000/api/words/save`, data,
    {
      headers: {Authorization: "Bearer " + `${localStorage.getItem("token")}`}
    })
    console.log(response)
    return response
  } catch(e) {
    console.log(e.response.data.message)
    return e.response.data.message
  }
}