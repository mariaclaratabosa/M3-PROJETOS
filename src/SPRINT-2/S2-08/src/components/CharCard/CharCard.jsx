import styles from './CharCard.module.css'

const CharCard = ({ name, image, status, species }) => {
    return (
        <li className={styles.listItem}>
            <h2 className={styles.characterName}>{name.substring(0, 15) + (name.length > 15 ? '...' : '')}</h2>
            <img className={styles.characterImage} src={image} alt={name} />
            <span>Status: {status}</span>
            <span>Espécie: {species}</span>
        </li>
    )
}

export default CharCard
