import { useContext } from "react"
import { TechContext } from "../../../../../../providers/TechContext"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { ModalBackdrop, StyledAddModal } from "./style"

const schema = z.object({
    title: z.string().min(1, "O nome é obrigatório"),
    status: z.enum(["Iniciante", "Intermediário", "Avançado"], { message: "Por favor, selecione um nível válido" })
})

export const AddModal = ({ isOpen, onClose, addTech, loading }) => {
    const { createTech } = useContext(TechContext)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    })

    const onSubmit = async (data) => {
        try {
            await createTech(data)
            addTech(data)
            onClose()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <ModalBackdrop style={{ display: isOpen ? "block" : "none" }}>
            <StyledAddModal role="dialog" className="modal" style={{ display: isOpen ? "block" : "none" }}>
                <div className="addModalHeader">
                    <p>Cadastrar tecnologia</p>
                    <button onClick={onClose}>X</button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Nome da tecnologia</label>
                    <input type="text" placeholder="Digite aqui a tecnologia" {...register("title")} />
                    {errors.title ? <p className="errorsMessage">{errors.title.message}</p> : null}
                    <label htmlFor="status">Selecionar status</label>
                    <select {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    {errors.status ? <p>{errors.status.message}</p> : null}
                    <button type="submit">{loading ? "Carregando..." : "Cadastrar tecnologia"}</button>
                </form>
            </StyledAddModal>
        </ModalBackdrop>
    )
}