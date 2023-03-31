export const FavoriteCard = ({ favoriteNew, removeNewFromFavoriteList }) => {
    return(
        <li>
            <span>{favoriteNew.category}</span>
            <h3>{favoriteNew.title}</h3>
            <button onClick={() => removeNewFromFavoriteList(favoriteNew.id)}>Desfavoritar</button>
        </li>
    )
}