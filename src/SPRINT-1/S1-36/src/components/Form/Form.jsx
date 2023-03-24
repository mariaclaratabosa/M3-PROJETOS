import styles from './Form.module.css'
import { useState } from 'react'
import '../../index.css'
import { v4 as uuidv4 } from 'uuid';

const TransactionsForm = ({ types, listTransactions, setListTransactions }) => {
    const [transaction, setTransaction] = useState({
        name: "",
        value: "",
        type: ""
    })

    const submitForm = (e) => {
        e.preventDefault()

        const newTransaction = { ...transaction, id: uuidv4() }

        setListTransactions([...listTransactions, newTransaction])
        setTransaction({ name: "", value: "", type: "" })
    }

    return (
        <div className={styles.formContainer}>
        <form onSubmit={submitForm} className={styles.formStyle}>
            <div className={styles.formDiv}>
                <label htmlFor="description">Descrição</label>
                <input type="text" value={transaction.name} onChange={(e) => setTransaction({ ...transaction, name: e.target.value })} placeholder="Digite aqui sua descrição" required />
                <span className={styles.exemple}>Ex: Compra de roupas</span>
            </div>
            <div  className={styles.formDiv}>
                <label htmlFor="value"> Valor (R$)</label>
                <input type="number" value={transaction.value} onChange={(e) => setTransaction({ ...transaction, value: e.target.value })} placeholder="Digite aqui o valor" required min={0} />
            </div>
            <div  className={styles.formDiv}>
                <label htmlFor="type">Tipo de valor</label>
                <select value={transaction.type} onChange={(e) => setTransaction({ ...transaction, type: e.target.value })} required>
                    <option value="">Selecione um tipo</option>
                    {types.map(type => (
                        <option key={type.name} value={type.name}>{type.name}</option>
                    ))}
                </select>
            </div>
            <button type="submit" className={styles.formButton}> Inserir valor </button>
        </form>
        </div>
    )
}

export default TransactionsForm