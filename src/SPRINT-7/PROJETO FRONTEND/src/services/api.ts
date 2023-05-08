import axios from "axios";

export const api = axios.create({
    baseURL: "https://helpets.onrender.com/", 
    timeout: 8000,
})