import CharCard from "../CharCard/CharCard"
import styles from "./Characters.module.css"

const Characters = ({ charactersList }) => {
    return (
        <>
            <h1>Meus personagens</h1>
            <ul className={styles.charactersList}>
                {charactersList.map(({ id, name, image, status, species }) => (
                    <CharCard key={id} name={name} image={image} status={status} species={species} />
                ))}
            </ul>
        </>
    )
}

export default Characters