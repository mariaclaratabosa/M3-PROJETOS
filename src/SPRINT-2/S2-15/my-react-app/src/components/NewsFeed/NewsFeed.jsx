import { NewsCard } from "./NewsCard/NewsCard";
import { StyledTitleTwo } from "../../styles/typography"
import { StyledNewsFeed } from "./styles";

export const NewsFeed = ({ newsList, addNewToFavoriteList, setCurrentSelectedNew, searchedAndFilteredResults, search, setSearch, filter }) => {
  const curretNewsList = search !== '' || filter !== '' ? searchedAndFilteredResults : newsList

  return (
    <StyledNewsFeed>
      <StyledTitleTwo>{search !== '' ? `Resultados para: ${search}` : 'Recentes'}</StyledTitleTwo>
      {search !== '' ? <button onClick={() => setSearch('')}>Limpar busca</button> : null}
      <ul>
        {curretNewsList.map((currentNew) => {
          return <NewsCard key={currentNew.id} currentNew={currentNew} addNewToFavoriteList={addNewToFavoriteList} setCurrentSelectedNew ={setCurrentSelectedNew}/>;
        })}
      </ul>
    </StyledNewsFeed>
  );
};
