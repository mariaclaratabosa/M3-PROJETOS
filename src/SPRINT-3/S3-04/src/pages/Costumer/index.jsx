import { useParams, Link } from 'react-router-dom'
import './index.css'

const Costumer = ({ members }) => {
    const { id } = useParams()
    const member = members.find((member) => member.id === id)

    return(
        <div className='costumerContainer'>
            <h1>Detalhes do cliente</h1>
            <p>Nome do cliente: {member && member.name}</p>
            <Link to="/">Voltar</Link>
        </div>
    )
}

export default Costumer