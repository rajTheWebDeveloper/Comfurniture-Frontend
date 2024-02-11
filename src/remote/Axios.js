import axios from 'axios'


let AxiosInstance = axios.create({
  baseURL: "http://comfur.onrender.com/",
})



export default AxiosInstance