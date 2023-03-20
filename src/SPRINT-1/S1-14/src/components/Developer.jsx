function Card({name, age, country}){

    return (
      <ul>
        <li>
            <span>Dev: {name}</span>
            <span>Idade: {age}</span> 
            <span>País: {country}</span>
        </li>
      </ul>
    )
}

export default Card