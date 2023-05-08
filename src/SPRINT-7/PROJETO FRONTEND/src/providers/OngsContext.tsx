import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { TAddFormData } from "../components/Modal/AddModal/addModalSchema";
import { TEditFormData } from "../components/Modal/EditModal/editModalSchema";
import { toast } from "react-toastify";

interface IOngsContextProviderProps {
    children: React.ReactNode
}

interface IOngsContext {
    listCard: IOngs[],
    ong: IOngs | null,
    addOng: (formData: TAddFormData, setLoading: React.Dispatch<React.SetStateAction<boolean>>, onClose: () => void) => Promise<void>,
    removeOng: (ongId: Number, setLoading: React.Dispatch<React.SetStateAction<boolean>>, onClose: () => void) => Promise<void>,
    editOng: (formData: TEditFormData, setLoading: React.Dispatch<React.SetStateAction<boolean>>, ongId: Number, onClose: () => void) => Promise<void>,
    searchValue: string,
    filteredOng: IOngs[],
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
}
export interface IOngs {
    name: string,
    id: number,
    description: string,
    link: string,
    logo: string,
    userId: Number,
}

export const OngsContext = createContext({} as IOngsContext)

export const OngsProvider = ({ children }: IOngsContextProviderProps) => {
    const [listCard, setListCard] = useState<IOngs[]>([])
    const [loading, setLoading] = useState(false)
    const [selectedOng, setSelectedOng] = useState<IOngs | null>(null)
    const [searchValue, setSearchValue] = useState("")
    const [searchedOng, setSearchedOng] = useState("")
    const [filteredOng, setFilteredOng] = useState<IOngs[]>([])
    const [formSubmited, setFormSubmited] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        const ongs = async () => {
            try {
                const { data } = await api.get("/ongs", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setListCard(data)
            }
            catch(error) {
                console.error(error)
            } 
        }
        ongs()
    }, [])

    const addOng = async (formData: TAddFormData, setLoading: React.Dispatch<React.SetStateAction<boolean>>, onClose: () => void) => {
        const token = localStorage.getItem("@TOKEN")
        const userId = localStorage.getItem("@USERID")
        try{
            setLoading(true)
            api.defaults.headers.common.authorization = `Bearer ${token}`
            const response = await api.post("/ongs", {...formData, userId})
            setListCard([...listCard, response.data])
            onClose()
        }
        catch(error){
            toast("Não foi possível adicionar ONG, tente novamente")
        } finally{
            setLoading(false)
        }
    }

    const removeOng = async (ongId: Number, setLoading: React.Dispatch<React.SetStateAction<boolean>>, onClose: () => void) => {
        const token = localStorage.getItem("@TOKEN")
        try{
            setLoading(true)
            api.defaults.headers.common.authorization = `Bearer ${token}`
            await api.delete(`/ongs/${ongId}`)
            const newOngsList = listCard.filter(currentOng => currentOng.id !== ongId)
            setListCard(newOngsList)
            onClose()
        } catch (error){
            toast("Não foi possível remover ONG, tente novamente")
        } finally{
            setLoading(false)
        }
    }

    const editOng = async (formData: TEditFormData, setLoading: React.Dispatch<React.SetStateAction<boolean>>, ongId: Number, onClose: () => void ) => { 
        const token = localStorage.getItem("@TOKEN")
        try{
            setLoading(true)
            api.defaults.headers.common.authorization = `Bearer ${token}`
            const response = await api.patch(`/ongs/${ongId}`, formData)
            const updatedOng = listCard.map(ong => ong.id === response.data.id ? response.data : ong)
            setListCard(updatedOng)
            onClose()
        } catch (error){
            toast("Não foi possível editar ONG, tente novamente")
        } finally{
            setLoading(false)
        }
    }

    const handleSearch = () => {
        const filteredOngs = listCard.filter((ong) => (
            searchValue === "" || ong.name.toLowerCase().includes(searchValue.toLowerCase()))
            )
            setFilteredOng(filteredOngs)
            setSearchedOng(searchValue)
            setFormSubmited(true)
    }
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        handleSearch()
    }

    return(
        <OngsContext.Provider value={{ listCard, addOng, removeOng, ong: selectedOng, editOng, filteredOng, handleSubmit, searchValue, handleInput }}>
            {children}
        </OngsContext.Provider>
    )
}


