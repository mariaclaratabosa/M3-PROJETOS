import { UserProvider } from "../../providers/UserContext"
import { Navigate, Outlet, useLocation } from "react-router-dom"

export const ProtectedRoutes = () => {
    const token = localStorage.getItem("@TOKEN")
    const location = useLocation()

    if(!token){
        return <Navigate to="/" state={location} />
    }
    return(
        <UserProvider>
            <Outlet />
        </UserProvider>
    )
}