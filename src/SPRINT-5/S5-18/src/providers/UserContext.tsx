import { createContext, useEffect, useState } from 'react';
import { ILoginFormData } from '../components/Form/LoginForm';
import { api } from '../services/api';
import { IRegisterFormData } from '../components/Form/RegisterForm';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface IUserProviderProps{
    children: React.ReactNode
}

interface IUserContext{
    user: IUser | null
    userLogin: (formData: ILoginFormData, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>
    userRegister: (formDta: IRegisterFormData, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>
    userLogout: () => void
}

interface IUser{
    id: string,
    name: string,
    email: string,
}

interface IUserLoginResponse{
    accessToken: string,
    user: IUser,
}

interface IUserRegisterResponse{
    accessToken: string,
    user: IUser,
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {
    const [user, setUser] = useState<IUser | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('@TOKEN')
        const userId = localStorage.getItem('@USERID')

        const userAutoLogin = async () => {
            try{
                api.defaults.headers.common.authorization = `Bearer ${token}`
                const response = await api.get<IUser>(`/users/${userId}`)
                setUser(response.data)
                navigate('/shop')
            } catch (error){
                localStorage.removeItem('@TOKEN')
                localStorage.removeItem('@USERID')
            }
        }
        token && userId ? userAutoLogin() : null;
    }, [])

    const userLogin = async (formData: ILoginFormData, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
        try {
            setLoading(true)
            const response = await api.post<IUserLoginResponse>('/login', formData)
            localStorage.setItem('@TOKEN', response.data.accessToken)
            localStorage.setItem('@USERID', response.data.user.id)
            setUser(response.data.user)
            navigate('/shop')
        } catch (error) {
            toast.error('E-mail ou senha errados')
        } finally {
            setLoading(false)
        }
    }

    const userRegister = async (formData: IRegisterFormData, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
        try{
            setLoading(true)
            await api.post<IUserRegisterResponse>('/users', formData)
            navigate('/')
            toast.success('Usuário cadastrado com sucesso')
        } catch (error){
            toast.error('Não foi possível cadastrar usuário')
        } finally{
            setLoading(false)
        }
    }

    const userLogout = () => {
        localStorage.removeItem('@TOKEN')
        localStorage.removeItem('@USERID')
        setUser(null)
        navigate('/')
    }

    return <UserContext.Provider value={{ user, userLogin, userRegister, userLogout }}>{children}</UserContext.Provider>
}