import { HeaderControls } from "./HeaderControls/HeaderControls"
import { StyledContainer } from "../../styles/grid"
import { StyledHeader } from "./style"
import Logo from "../../assets/Logo.svg"

export const Header = ({ setIsFavoriteModalVisible, favoritesList, setSearch }) => {
    return (
            <StyledHeader>
                <StyledContainer>
                    <div className="flexBox">
                        <img src={Logo} alt="Logo" />
                        <HeaderControls setIsFavoriteModalVisible={setIsFavoriteModalVisible} favoritesList={favoritesList} setSearch={setSearch} />
                    </div>
                </StyledContainer>
            </StyledHeader>
    )
}