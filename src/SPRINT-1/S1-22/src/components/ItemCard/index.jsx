import React from 'react'

const ItemCard = ({item}) => {
    return(
        <li>
            <h3>{item.name}</h3>
            <span>{item.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</span>
            <span>{item.category}</span>
        </li>
    )
}

export default ItemCard