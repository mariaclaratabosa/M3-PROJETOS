import { api } from "../../services/api"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useNavigate } from "react-router-dom";
import { Header } from "./components/Header";
import { RegisterForm } from "./components/Form";
import { StyledRegister } from "./style";

export const Register = () => {

    const navigate = useNavigate()

    const submit = async (data) => {
        try {
            await api.post("/users", data)
            toast.success("Conta criada com sucesso")
            setTimeout(() => {
                navigate("/")
            }, 3000)
        } catch (error) {
            toast.error("Ops! Algo deu errado")
        }
    }

    return (
        <>
            <StyledRegister>
                <Header />
                <RegisterForm submit={submit} />
            </StyledRegister>
            <ToastContainer theme="dark" toastStyle={{ backgroundColor: "var(--grey-3)" }}/>
        </>
    )
}