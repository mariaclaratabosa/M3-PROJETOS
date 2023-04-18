import axios from "axios"

export const api = axios.create({
    baseURL: "https://fruit-fake-api.onrender.com",
    timeout: 8000,
})