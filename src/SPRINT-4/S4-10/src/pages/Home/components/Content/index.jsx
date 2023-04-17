import { StyledContent } from "./style"
import { useContext, useEffect } from "react"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css'
import { UserContext } from "../../../../providers/UserContext"
import { AddModal } from "./forms/AddModal"
import { TechContext } from "../../../../providers/TechContext"
import { EditAndDeleteModal } from "./forms/EditAndDeleteModal"
import { api } from "../../../../services/api"

export const HomeContent = () => {
    const { name, course_module, userTechs, setUserTechs } = useContext(UserContext)
    const { isAddModalOpen, setIsAddModalOpen, isTechModalOpen, setIsTechModalOpen, selectedTech, setSelectedTech, loading } = useContext(TechContext)

    const addTech = (tech) => {
        const updatedTechs = [...userTechs, tech]
        setUserTechs(updatedTechs)
    }

    const handleTechClick = (tech) => {
        setSelectedTech(tech)
        setIsTechModalOpen(true)
    }

    useEffect(()=>{
        const fetchData = async () => {
            while(loading == false){
                const userId = localStorage.getItem("@USERID")
                const response = await api.get(`/users/${userId}`)
                setUserTechs(response.data.techs)
                if(loading){
                    break
                }
            }
        }
        fetchData()
    },[])


    return (
        <>
            <StyledContent>
                <div className="userContent">
                    <p>Olá, {name}</p>
                    <span>{course_module} </span>
                </div>
                <div className="mainContent">
                    <div>
                        <p>Tecnologias</p>
                        <button onClick={() => setIsAddModalOpen(true)}>+</button>
                    </div>
                   {userTechs.length === 0 ? (
                    <p>Ainda não há tecnologias cadastradas :( </p>
                   ) : (
                    <ul>
                    {userTechs && userTechs.map((tech) => {
                        return <li key={tech.id} onClick={() => handleTechClick(tech)}>
                            <span className="techTitle">{tech.title}</span>
                            <span className="techStatus">{tech.status}</span>
                        </li>
                    })}
                </ul>
                   )}
                </div>
                <AddModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} addTech={addTech} loading={loading}/>
                {selectedTech &&
                    <EditAndDeleteModal isOpen={isTechModalOpen} onClose={() => setIsTechModalOpen(false)} tech={selectedTech} loading={loading} />}
            </StyledContent>
            <ToastContainer theme="dark" toastStyle={{ backgroundColor: "var(--grey-3)" }} />
        </>
    )
}