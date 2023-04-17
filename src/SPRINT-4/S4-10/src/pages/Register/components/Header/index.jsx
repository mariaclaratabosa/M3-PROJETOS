import logo from "../../../../assets/logo.svg"
import { Link } from "react-router-dom"
import { StyledHeader } from "./style"

export const Header = () => {
    return (
        <StyledHeader>
            <img src={logo} alt="Logo da Kenzie Hub" />
            <Link to="/">Voltar</Link>
        </StyledHeader>
    )
}