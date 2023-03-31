import { StyledLabel, StyledTitleThree } from "../../../../styles/typography"
import { StyledButton } from "../../../../styles/buttons"
import { StyledFavoriteCard } from "./style"

export const FavoriteCard = ({ favoriteNew, removeNewFromFavoriteList }) => {
    return(
        <StyledFavoriteCard>
            <StyledLabel>{favoriteNew.category}</StyledLabel>
            <StyledTitleThree>{favoriteNew.title}</StyledTitleThree>
            <StyledButton onClick={() => removeNewFromFavoriteList(favoriteNew.id)}>Desfavoritar</StyledButton>
        </StyledFavoriteCard>
    )
}