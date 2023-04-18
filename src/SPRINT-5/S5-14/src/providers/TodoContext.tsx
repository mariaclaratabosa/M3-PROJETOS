import { createContext, useState } from "react";

export interface IToDo{
    id: number;
    name: string;
    description: string;
}

interface IToDoListProviderProps{
    children: React.ReactNode;
}

interface IToDoContext{
    toDoList: IToDo[]
    addToDo: (toDo: IToDo) => void
    removeToDo: (id: number) => void
}

export const ToDoListContext = createContext({} as IToDoContext)

export const ToDoListProvider = ({children}: IToDoListProviderProps) => {
    const [toDoList, setToDoList] = useState<IToDo[]>([])

    const addToDo = (toDo: IToDo) => {
        if(!toDoList?.some((toDoItem) => toDoItem.id === toDo.id)){
            setToDoList([...toDoList, toDo])
        }
    }

    const removeToDo = (id: number) => {
        const newToDoList = toDoList.filter((toDoItem) => toDoItem.id !== id)
        setToDoList(newToDoList)
    }

    return(
        <ToDoListContext.Provider value={{ toDoList, addToDo, removeToDo}}>
            {children}
        </ToDoListContext.Provider>
    )
}
