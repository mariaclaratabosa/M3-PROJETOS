import styles from './TotalMoney.module.css'

const TotalMoney = ({ listTransactions }) => {
    const total = listTransactions.reduce((value, transaction) => {
        return transaction.type === 'Entrada' ? value + Number(transaction.value) : value - Number(transaction.value)
    }, 0)
    return (
        <>
            {listTransactions.length > 0 &&
                <div className={styles.totalDiv}>
                    <section className={styles.totalContent}>
                        <span className={styles.totalSpan}>Valor total: </span>
                        <span className={styles.totalValue}>R${total.toFixed(2).replace('.', ',')}</span>
                    </section>
                    <section>
                        <span className={styles.totalSubtitle}>O valor se refere ao saldo</span>
                    </section>
                </div>
            }
        </>
    )
}

export default TotalMoney