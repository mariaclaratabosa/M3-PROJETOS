import { useState } from "react";
import { api } from "../../services/api";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css';
import { useNavigate } from "react-router-dom";
import { Header } from "./components/Header";
import { LoginForm } from "./components/Form";
import { StyledLogin } from "./style";

export const Login = ({ setUser }) => {
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const submit = async (data) => {
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
            setLoading(false)
            toast.error("Email ou senha incorretos")
        }
    }

    return (
        <>
        <StyledLogin>
            <Header />
            <LoginForm submit={submit} loading={loading} />
        </StyledLogin>
        <ToastContainer theme="dark" toastStyle={{ backgroundColor: "var(--grey-3)"}} />
        </>
    )
}
