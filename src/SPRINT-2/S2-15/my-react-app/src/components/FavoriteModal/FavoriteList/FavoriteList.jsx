import { FavoriteCard } from "./FavoriteCard/FavoriteCard";

export const FavoriteList = ({ favoritesList, removeNewFromFavoriteList }) => {
  return (
    <ul>
      {favoritesList.map((favoriteNew) => (
        <FavoriteCard key={favoriteNew.id} favoriteNew={favoriteNew} removeNewFromFavoriteList={removeNewFromFavoriteList} />
      ))}
    </ul>
  );
};
