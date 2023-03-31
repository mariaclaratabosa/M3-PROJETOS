import { StyledLabel, StyledTitleTwo } from "../../../styles/typography"
import { StyledNewsCard } from "./styles";
import { MdFavoriteBorder } from "react-icons/md"

export const NewsCard = ({ currentNew, addNewToFavoriteList, setCurrentSelectedNew }) => {
  return (
    <StyledNewsCard>
      <button className="favoriteButton" onClick={() => addNewToFavoriteList(currentNew)}><MdFavoriteBorder size={28} /></button>
      <div className="contentBox">
        <StyledLabel>{currentNew.category}</StyledLabel>
        <StyledTitleTwo>{currentNew.title}</StyledTitleTwo>
        <button onClick={() => setCurrentSelectedNew(currentNew)}>Saiba mais</button>
      </div>
    </StyledNewsCard>
  );
};
