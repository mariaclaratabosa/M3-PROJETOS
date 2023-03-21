function WelcomePage({ user, setIsLoggedIn}) {
    function handleLogout() {
        setIsLoggedIn(false)
    }

    return (
        <div>
            <h1>Bem vindo, {user}!</h1>
            <button onClick={handleLogout}>Sair</button>
        </div>
    )
}

export default WelcomePage