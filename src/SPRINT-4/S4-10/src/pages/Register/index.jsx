import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { Header } from "./components/Header"
import { RegisterForm } from "./components/Form"
import { StyledRegister } from "./style"

export const Register = () => {


    return (
        <>
            <StyledRegister>
                <Header />
                <RegisterForm />
            </StyledRegister>
            <ToastContainer theme="dark" toastStyle={{ backgroundColor: "var(--grey-3)" }}/>
        </>
    )
}