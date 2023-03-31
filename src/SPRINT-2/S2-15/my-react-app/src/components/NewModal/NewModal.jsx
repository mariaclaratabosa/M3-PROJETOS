export const NewModal = ({ currentSelectedNew, setCurrentSelectedNew }) => {
    return(
        <div>
            <div role="dialog">
                <button onClick={() => setCurrentSelectedNew(null)}>Fechar</button>
                <span>{currentSelectedNew.category}</span>
                <h1>{currentSelectedNew.title}</h1>
                <p>{currentSelectedNew.content}</p>
            </div>
        </div>
    )
}