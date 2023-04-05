import { Link } from 'react-router-dom'
import './index.css'
const Home = ({ members }) => {
    return(
        <div className='homeContainer'>
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