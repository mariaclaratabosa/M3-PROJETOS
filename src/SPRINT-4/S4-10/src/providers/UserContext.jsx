import { useEffect, useState } from "react"
import { createContext } from "react"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const [userTechs, setUserTechs] = useState([])

    const navigate = useNavigate()
    const userToken = localStorage.getItem("@TOKEN")
    const userId = localStorage.getItem("@USERID")
    
    useEffect(() => {
        const getUser = async () => {
            if(!token){
                navigate("/")
            }
            try {
                const response = await api.get(`/users/${userId}`)
                setUser(response.data)
                setUserTechs(response.data.techs)
            } catch (error) {
                localStorage.removeItem("@TOKEN")
                localStorage.removeItem("@USERID")
                navigate("/")
                console.log(error)
            }
        }
        getUser()
    }, [])

    useEffect(() => {
        const userAutoLogin = async () => {
            try{
                api.defaults.headers.common.authorization = `Bearer ${userToken}`
                const response = await api.get("/profile")
                setUser(response.data)
                navigate(`/dashboard/${userId}`)
            } catch{
                localStorage.removeItem("@TOKEN")
                navigate("/")
            }
        }
        userAutoLogin()
    }, [])

    const signIn = async (data) => {
        try {
            setLoading(true)
            const response = await api.post("/sessions", data)
            setUser(response.data.user)
            localStorage.setItem("@TOKEN", response.data.token)
            localStorage.setItem("@USERID", response.data.user.id)
            setLoading(false)
            const userId = response.data.user.id
            navigate(`/dashboard/${userId}`)
        } catch (error) {
            toast.error("Usuário ou senha errados")
        }
    }


    const registerSubmit = async (data) => {
        try {
            await api.post("/users", data)
            toast.success("Conta criada com sucesso")
            navigate("/")
        } catch (error) {
            toast.error("Ops! Algo deu errado")
        }
    }


    return (
        <UserContext.Provider value={{ user, setUser, userToken, name: user?.name, course_module: user?.course_module, userTechs, setUserTechs, signIn, registerSubmit, loading }}>
            {children}
        </UserContext.Provider>
    )
}