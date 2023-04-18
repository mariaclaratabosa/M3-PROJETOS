import { IToDo } from "../../providers/TodoContext"

interface IToDoCardProps{
    toDo: IToDo;
    removeToDo: (id: number) => void;
}

export const ToDoCard = ({toDo, removeToDo}: IToDoCardProps) => {

    const handleRemove = () => {
        removeToDo(toDo.id)
    }
    return(
        <li>
            <h3>Item: {toDo.name}</h3>
            <p>Descrição: {toDo.description}</p>
            <button onClick={handleRemove}>Remover item</button>
        </li>
    )
}