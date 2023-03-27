const CharCard = ({ name, image, status, species }) => {
    return (
        <div>
            <h2>{name.substring(0, 15) + (name.length > 15 ? '...' : '')}</h2>
            <img src={image} alt={name} />
            <span>Status: {status}</span>
            <span>Espécie: {species}</span>
        </div>
    )
}

export default CharCard