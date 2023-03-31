export const NewsCard = ({ currentNew, addNewToFavoriteList, setCurrentSelectedNew }) => {
  return (
    <li>
      <button onClick={() => addNewToFavoriteList(currentNew)}>Favoritar</button>
      <span>{currentNew.category}</span>
      <h3>{currentNew.title}</h3>
      <button onClick={() => setCurrentSelectedNew(currentNew)}>Saiba mais</button>
    </li>
  );
};
