import CharCard from "../CharCard/CharCard"
import { StyledList } from "./List"

const Characters = ({ charactersList }) => {
    return (
        <div>
            <StyledList>
            {charactersList.map(({ id, name, image, status, species}) => (
                <CharCard key={id} name={name} image={image} status={status} species={species}/>
            ))}
            </StyledList>
        </div>
    )
}

export default Characters