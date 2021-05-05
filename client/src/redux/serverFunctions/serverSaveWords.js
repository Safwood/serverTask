import axios from 'axios';

export const serverSaveWords = async (topic, words, wordsId) => { 
  const data = {
    topic: topic,
    words: words,
    wordsId: wordsId
  }
  try {
    const response = await axios.post(`http://localhost:5000/api/words/save`, data,
    {
      headers: {Authorization: "Bearer " + `${localStorage.getItem("token")}`}
    })
    console.log(response)
    return response.data
  } catch(e) {
    console.log(e.response.data.message)
    return e.response.data.message
  }
}