import ListItemCard from "./Card/Card"
import styles from './List.module.css'

const FinancialSummaryList = ({ listTransactions, removeTransaction }) => {
    return(
        <div className={styles.listDiv}>
            <p className={styles.financialSummary}>Resumo financeiro</p>
            {listTransactions.length > 0 ? (
                <ul>
                {listTransactions.map((transaction) => {
                    return(
                        <ListItemCard key={transaction.id} transaction={transaction} removeTransaction={removeTransaction} />
                    )
                })}
            </ul>
            ) : (
                    <p className={styles.emptySummary}>Você ainda não possui nenhum lançamento</p>
            )}
        </div>
    )
}
export default FinancialSummaryList