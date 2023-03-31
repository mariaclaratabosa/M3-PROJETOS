import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { CategoryList } from "./components/CategoryList/CategoryList";
import { NewsFeed } from "./components/NewsFeed/NewsFeed";
import { FavoriteModal } from "./components/FavoriteModal/FavoriteModal";
import { NewModal } from "./components/NewModal/NewModal";
import { api } from "./services/api";

function App() {
  const [newsList, setNewsList] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [isFavoriteModalVisible, setIsFavoriteModalVisible] = useState(false);
  const [currentSelectedNew, setCurrentSelectedNew] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("")

  const searchedAndFilteredResults = newsList.filter((currentNew) =>
   (currentNew.title.toLowerCase().includes(search.toLowerCase()) ||
   currentNew.category.toLowerCase().includes(search.toLowerCase())) && 
   filter === '' ? true : currentNew.category === filter
  );

  const loadNews = async () => {
    try {
      const response = await api.get("/news");
      setNewsList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadCategories = async () => {
    try {
      const response = await api.get("/categories");
      setCategoriesList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadNews();
    loadCategories();
  }, []);

  const addNewToFavoriteList = (currentNew) => {
    const newFavoritesList = [...favoritesList, currentNew];
    !favoritesList.some((favoriteNew) => favoriteNew.id === currentNew.id)
      ? setFavoritesList(newFavoritesList)
      : console.log("Notícia já favoritada");
  };

  const removeNewFromFavoriteList = (currentNewId) => {
    const newFavoriteList = favoritesList.filter(
      (favoriteNew) => favoriteNew.id !== currentNewId
    );
    setFavoritesList(newFavoriteList);
  };

  return (
    <div className="App">
      <Header
        setIsFavoriteModalVisible={setIsFavoriteModalVisible}
        favoritesList={favoritesList}
        setSearch={setSearch}
      />
      <CategoryList categoriesList={categoriesList} setFilter={setFilter} />
      <NewsFeed
        newsList={newsList}
        addNewToFavoriteList={addNewToFavoriteList}
        setCurrentSelectedNew={setCurrentSelectedNew}
        searchedAndFilteredResults={searchedAndFilteredResults}
        search={search}
        setSearch={setSearch}
        filter={filter}
      />
      {isFavoriteModalVisible ? <FavoriteModal favoritesList={favoritesList} removeNewFromFavoriteList={removeNewFromFavoriteList} /> : null}
      {currentSelectedNew ? (
        <NewModal
          currentSelectedNew={currentSelectedNew}
          setCurrentSelectedNew={setCurrentSelectedNew}
        />
      ) : null}
    </div>
  );
}

export default App;
