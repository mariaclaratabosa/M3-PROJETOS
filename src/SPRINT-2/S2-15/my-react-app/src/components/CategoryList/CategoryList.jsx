export const CategoryList = ({ categoriesList, setFilter }) => {
    return(
        <ul>
            <li>
                <button onClick={() => setFilter('')}>Recentes</button>
            </li>
            {categoriesList.map(category => {
                return(
                    <li key={category.id}>
                    <button onClick={() => setFilter(category.slug)}>
                        {category.label}
                    </button>
                </li>
                )
            })}
        </ul>
    )
}