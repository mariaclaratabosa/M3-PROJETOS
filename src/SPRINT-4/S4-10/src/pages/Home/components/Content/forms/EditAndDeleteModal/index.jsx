import { useContext, useEffect, useState } from "react"
import { TechContext } from "../../../../../../providers/TechContext"
import { useForm } from "react-hook-form"
import { StyledEditAndDeleteModal } from "./style"
import { ModalBackdrop } from "../AddModal/style"

export const EditAndDeleteModal = ({ isOpen, onClose, tech, loading }) => {
    const { deleteTech, updateTech, selectedTech, techStatus, setTechStatus } = useContext(TechContext)
    const [isChanged, setIsChanged] = useState(false)

    const { register, handleSubmit } = useForm({})

    const handleUpdateTech = () => {
        updateTech({ ...selectedTech, status: techStatus })
    }

    useEffect(() => {
        setTechStatus(tech.status)
    }, [tech.status])

    useEffect(() => {
        techStatus !== tech.status ? setIsChanged(true) : setIsChanged(false)
    }, [techStatus])


    return (
        <ModalBackdrop style={{ display: isOpen ? "block" : "none" }}>
            <StyledEditAndDeleteModal role="dialog" style={{ display: isOpen ? "block" : "none" }}>
                <div className="modalHeader">
                    <p>Tecnologia Detalhes</p>
                    <button onClick={onClose}>X</button>
                </div>
                <form>
                    <label htmlFor="name">Nome do projeto</label>
                    <input type="text" value={`${tech.title}`} disabled />
                    <label htmlFor="status">Status</label>
                    <select name="status" value={techStatus} onChange={(event) => setTechStatus(event.target.value)} register={register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <div className="modalButtons">
                        <button onClick={handleSubmit(handleUpdateTech)} className="updateButton" disabled={!isChanged}>{loading ? "Carregando..." : "Salvar alterações"}</button>
                        <button onClick={handleSubmit(deleteTech)} className="deleteButton">{loading ? "Carregando..." : "Excluir"}</button>
                    </div>
                </form>
            </StyledEditAndDeleteModal>
        </ModalBackdrop>
    )
}