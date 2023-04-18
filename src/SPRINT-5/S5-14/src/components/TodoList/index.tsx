import { useContext } from "react";
import { ToDoListContext } from "../../providers/TodoContext"
import { ToDoCard } from "../TodoCard";

export const ToDoList = () => {
    const {toDoList, removeToDo} = useContext(ToDoListContext)
    return(
        <ul>
            {toDoList.map((toDo) => (
                <ToDoCard key={toDo.id} toDo={toDo} removeToDo={removeToDo}/>
            ))}
        </ul>
    )
}