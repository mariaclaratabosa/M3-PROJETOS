import { useState } from 'react'

function GetUserComponent({ setUser, setIsLoggedIn }) {
    const [ userInput, setUserInput ] = useState('')

    function handleLogin(e){
        e.preventDefault()

        setUser(userInput)
        setIsLoggedIn(true)
    }

    return (
        <form onSubmit={handleLogin}>
            <h1>Faça seu login</h1>
            <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Insira seu nome"/>
            <button type="submit">Acessar</button>
        </form>
    )
}

export default GetUserComponent