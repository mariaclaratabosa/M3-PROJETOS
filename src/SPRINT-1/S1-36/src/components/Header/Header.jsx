import logo from './img/nuKenzie.svg'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <img src={logo} alt="Logo da Nu Kenzie" />
            </div>
        </header>
    )
}

export default Header