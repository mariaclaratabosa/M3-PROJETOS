import { FavoriteList } from "./FavoriteList/FavoriteList"
import { StyledTitleTwo } from "../../styles/typography"
import { StyledFavoriteModal } from "./style"
import { MdClose } from "react-icons/md"

export const FavoriteModal = ({ favoritesList, removeNewFromFavoriteList, setIsFavoriteModalVisible }) => {
    return(
        <StyledFavoriteModal role="dialog">
            <div className="modalGrid">
            <button className="closeButton" onClick={() => setIsFavoriteModalVisible(false)}><MdClose size={28} /></button>
            <StyledTitleTwo fontSize="two">Favoritos</StyledTitleTwo>
            <FavoriteList favoritesList={favoritesList} removeNewFromFavoriteList={removeNewFromFavoriteList} />
            </div>
        </StyledFavoriteModal>
    )
}