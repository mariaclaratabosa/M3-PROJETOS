import { useState } from 'react'

function Form({ addTodo }){
    const [inputValue, setInputValue] = useState('')

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(inputValue)
        setInputValue('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>To-do List</h1>
            <input type="text" value={inputValue} onChange={handleInput} placeholder="Nova tarefa"/>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form