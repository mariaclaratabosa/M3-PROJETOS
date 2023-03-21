import React from 'react'

function RestrictedPage({ isLoggedIn, user, Login, Logout }) {
    return (
        <div>
            {isLoggedIn ? (
                <>
                    <h1>Bem vindo, {user}!</h1>
                    <button onClick={Logout}>Logout</button>
                </>
            ) : (
                <>
                <h1>Você não pode acessar esta página!</h1>
                <button onClick={Login}>Login</button>
            </>
            )}
        </div>
    )
}

export default RestrictedPage