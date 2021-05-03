import axios from 'axios';

export const serverAuth = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/api/auth/data`,
            {
              headers: {
              Authorization: "Bearer " + `${localStorage.getItem("token")}`
              }
            })
        localStorage.setItem('token', response.data.token)
        return response
    } catch (e) {
        console.log(e.response.data.message)
        return e.response.data.message
    }
}