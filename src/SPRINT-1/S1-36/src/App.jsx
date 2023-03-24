import { useState } from 'react'
import styles from './App.module.css'
import TransactionsForm from './components/Form/Form'
import Header from './components/Header/Header'
import FinancialSummaryList from './components/List/List'
import TotalMoney from './components/Total/TotalMoney'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [listTransactions, setListTransactions] = useState([])
  const [transaction, setTransaction] = useState(
    {
      name: "",
      value: "",
      type: "",
      id: uuidv4()
    },
  )

  const [totalMoney, setTotalMoney] = useState(0)

  const types = [
    {
      name: "Entrada"
    },
    {
      name: "Saída"
    }
  ]

  const removeTransaction = (id, value) => {
    const newListTransactions = listTransactions.filter((transaction) => transaction.id !== id)
    setListTransactions(newListTransactions)
    setTotalMoney(totalMoney - value)
  }

  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.globalContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.mainItens}>
            <TransactionsForm types={types} listTransactions={listTransactions} setListTransactions={setListTransactions} transaction={transaction} setTransaction={setTransaction} />
            <TotalMoney listTransactions={listTransactions} />
          </div>
          <FinancialSummaryList listTransactions={listTransactions} removeTransaction={removeTransaction} />
        </div>
      </div>
    </div>
  )
}

export default App
