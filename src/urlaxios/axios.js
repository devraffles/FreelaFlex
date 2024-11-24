import axios from "axios";

const UrlAxios = axios.create({
    baseURL: "https://freelaflexbackend.vercel.app",
})

export default UrlAxios