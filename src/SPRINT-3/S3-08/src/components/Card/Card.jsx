const Card = ({ user }) => {
    return(
        <div>
            <h3>Dados do usuário</h3>
            <ul>
                <li>Nome: {user.name} </li>
                <li>E-mail: {user.email} </li>
            </ul>
        </div>
    )
}

export default Card