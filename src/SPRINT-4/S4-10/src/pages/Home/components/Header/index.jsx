import logo from "../../../../assets/logo.svg"
import { Link } from "react-router-dom"
import { StyledHeader } from "./style"

export const Header = () => {
    const handleLogout = () => {
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
    }

    return (
        <StyledHeader>
            <img src={logo} alt="Logo da Kenzie Hub" />
            <Link to="/" onClick={handleLogout}>Sair</Link>
        </StyledHeader>
    )
}