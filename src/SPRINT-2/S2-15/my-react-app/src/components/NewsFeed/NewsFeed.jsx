import { NewsCard } from "./NewsCard/NewsCard";

export const NewsFeed = ({ newsList, addNewToFavoriteList, setCurrentSelectedNew, searchedAndFilteredResults, search, setSearch, filter }) => {
  const curretNewsList = search !== '' || filter !== '' ? searchedAndFilteredResults : newsList

  return (
    <div>
      <h2>{search !== '' ? `Resultados para: ${search}` : 'Recentes'}</h2>
      {search !== '' ? <button onClick={() => setSearch('')}>Limpar busca</button> : null}
      <ul>
        {curretNewsList.map((currentNew) => {
          return <NewsCard key={currentNew.id} currentNew={currentNew} addNewToFavoriteList={addNewToFavoriteList} setCurrentSelectedNew ={setCurrentSelectedNew}/>;
        })}
      </ul>
    </div>
  );
};
