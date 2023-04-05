import { useParams, Link } from 'react-router-dom'
import './index.css'

const Company = ({ members }) => {
    const { id } = useParams()
    const member = members.find((member) => member.id === id)

    return(
        <div className='companyContainer'>
            <h1>Detalhes da empresa</h1>
            <p>Nome da empresa: {member && member.name}</p>
            <Link to="/">Voltar</Link>
        </div>
    )
}

export default Company