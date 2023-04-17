import { createContext, useContext, useState } from "react"
import { UserContext } from "./UserContext"
import { api } from "../services/api"
import { toast } from "react-toastify"

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
    const { user, userToken, userTechs, setUserTechs } = useContext(UserContext)
    const [isTechModalOpen, setIsTechModalOpen] = useState(false)
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [selectedTech, setSelectedTech] = useState({})
    const [techStatus, setTechStatus] = useState("")
    const [loading, setLoading] = useState(false)



    const createTech = async (data) => {
        try {
            setLoading(true)
            api.defaults.headers.common.authorization = `Bearer ${userToken}`
            const response = await api.post("/users/techs", data)
            await setUserTechs([...userTechs, response.data])
            setLoading(false)
            setIsAddModalOpen(false)
            toast.success("Tecnologia adicionada com sucesso")
        } catch (error) {
            console.error(error)
            toast.error("Não foi possível adicionar tecnologia")
        }
    }

    const deleteTech = async () => {
        try {
            setLoading(true)
            api.defaults.headers.common.authorization = `Bearer ${userToken}`
            await api.delete(`/users/techs/${selectedTech.id}`)
            const updatedTechs = userTechs ? userTechs.filter((tech) => tech.id !== selectedTech.id) : []
            setUserTechs(updatedTechs)
            setIsTechModalOpen(false)
            setLoading(false)
            toast.success("Tecnologia deletada com sucesso")
        } catch (error) {
            toast.error("Não foi possível deletar tecnologia")
        }
    }

    const updateTech = async (data) => {
        try {
            setLoading(true)
            api.defaults.headers.common.authorization = `Bearer ${userToken}`
            const response = await api.put(`/users/techs/${selectedTech.id}`, data)
            const updatedTechs = userTechs.map(tech => tech.id === response.data.id ? response.data : tech)
            setUserTechs(updatedTechs)
            setIsTechModalOpen(false)
            setLoading(false)
            toast.success("Tecnologia atualizada com sucesso")
        } catch (error) {
            console.log(error)
            toast.error("Não foi possível atualizar tecnologia")
        }
    }

    return (
        <TechContext.Provider value={{ createTech, isTechModalOpen, setIsTechModalOpen, selectedTech, setSelectedTech, deleteTech, isAddModalOpen, setIsAddModalOpen, updateTech, techStatus, setTechStatus, loading }}>
            {children}
        </TechContext.Provider>
    )
}