import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom";
import { Header } from "./components/Header"
import { HomeContent } from "./components/Content"
import { StyledHome } from "./style"

export const Dashboard = () => {
    const [name, setName] = useState("")
    const [course_module, setCourseModule] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        const userId = localStorage.getItem("@USERID")

        const getUser = async () => {
            try {
                const response = await api.get(`/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setName(response.data.name)
                setCourseModule(response.data.course_module)
            } catch (error) {
                console.log(error)
            }
        }
        token && userId ? (
            getUser()
        ) : (
            navigate("/")
        )
    }, [])

    const handleLogout = () => {
        localStorage.clear()
    }

    return (
        <StyledHome>
            <Header handleLogout={handleLogout} />
            <HomeContent name={name} course_module={course_module} />
        </StyledHome>
    )
}