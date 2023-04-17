import { useContext } from "react"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css'
import { Header } from "./components/Header"
import { LoginForm } from "./components/Form"
import { StyledLogin } from "./style"
import { UserContext } from "../../providers/UserContext"

export const Login = () => {
    const { signIn } = useContext(UserContext)

    return (
        <>
        <StyledLogin>
            <Header />
            <LoginForm signIn={signIn} />
        </StyledLogin>
        <ToastContainer theme="dark" toastStyle={{ backgroundColor: "var(--grey-3)"}} />
        </>
    )
}
