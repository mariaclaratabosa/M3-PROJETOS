import styles from './Card.module.css'

const ListItemCard = ({ transaction, removeTransaction }) => {
    const transactionType = transaction.type === "Entrada" ? styles.greenBar : styles.greyBar
    const value = Number(transaction.value)
    const formattedValue = value.toFixed(2).replace('.', ',')
    return (
        <div>
            <li>
                <div className={transactionType}></div>
                <section className={styles.descriptionAndType}>
                    <h3 className={styles.description}>{transaction.name}</h3>
                    <span>{transaction.type}</span>
                </section>
                <section className={styles.valueAndDelete}>
                    <span className={styles.value}> R$ {formattedValue}</span>
                    <button onClick={() => removeTransaction(transaction.id, transaction.value)} className={styles.delete}>Excluir</button>
                </section>
            </li>
        </div>
    )
}
export default ListItemCard