import { FavoriteList } from "./FavoriteList/FavoriteList"

export const FavoriteModal = ({ favoritesList, removeNewFromFavoriteList }) => {
    return(
        <div role="dialog">
            <button>Fechar</button>
            <h2>Favoritos</h2>
            <FavoriteList favoritesList={favoritesList} removeNewFromFavoriteList={removeNewFromFavoriteList} />
        </div>
    )
}