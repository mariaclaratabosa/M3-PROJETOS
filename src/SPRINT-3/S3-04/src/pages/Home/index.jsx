import { Link } from 'react-router-dom'

const Home = ({ members }) => {
    return(
        <div>
            {members.map((member) => (
                <div key={member.id}>
                    <Link to={member.type ==='pj' ? `/company/${member.id}` : `/costumer/${member.id}`}>
                        {member.name}
                    </Link>
                </div>
            ))}
        </div>
        
    )
}

export default Home