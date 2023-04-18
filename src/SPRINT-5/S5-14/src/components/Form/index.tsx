import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext, useState } from "react"
import { ToDoListContext } from "../../providers/TodoContext"
import "./style.css"

export const registerFormSchema = z.object({
    name: z.string().min(1, {message: "O nome é obrigatório"}),
    description: z.string().min(1, {message: "A descrição é obrigatória"})
})

export type TRegisterFormValues = z.infer<typeof registerFormSchema>

export const Form = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<TRegisterFormValues>({
        resolver: zodResolver(registerFormSchema)
    })
    const {addToDo} = useContext(ToDoListContext)
    const [id, setId] = useState<number>(0)

    const onSubmit: SubmitHandler<TRegisterFormValues> = (data) => {
        const newId = id + 1;
        addToDo({
            id: newId,
            name: data.name,
            description: data.description,
        })
        setId(newId)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Item</label>
            <input type="text" {...register("name")} />
            {errors.name && <span>{errors.name.message}</span>}
            <label htmlFor="description">Descrição</label>
            <textarea {...register("description")} />
            {errors.description && <span>{errors.description.message}</span>}
            <button type="submit">Adicionar</button>
        </form>
    )
}