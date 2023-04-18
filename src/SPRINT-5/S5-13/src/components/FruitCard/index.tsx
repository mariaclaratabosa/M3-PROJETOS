import { IFruit } from "../../App"

interface IFruitCardProps{
    fruit: IFruit;
}

export const FruitCard = ({fruit} : IFruitCardProps) => {
    return(
        <li>
            <h3>Nome: {fruit.name}</h3>
            <p>Categoria: {fruit.category}</p>
            <p>R$ {fruit.price}.00</p>
        </li>
    )
}