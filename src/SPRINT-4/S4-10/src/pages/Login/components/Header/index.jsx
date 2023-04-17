import  logo  from "../../../../assets/logo.svg"
import { StyledHeader } from "./style"

export const Header = () => {
    return(
        <StyledHeader>
            <img src={logo} alt="Logo da Kenzie Hub" />
        </StyledHeader>
    )
}