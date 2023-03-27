import CharCard from "../CharCard/CharCard"

const Characters = ({ charactersList }) => {
    return (
        <div>
            <h1>Meus personagens</h1>
            {charactersList.map(({ id, name, image, status, species}) => (
                <CharCard key={id} name={name} image={image} status={status} species={species}/>
            ))}
        </div>
    )
}

export default Characters