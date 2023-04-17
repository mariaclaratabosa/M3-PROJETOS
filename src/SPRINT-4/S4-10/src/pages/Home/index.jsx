import { Header } from "./components/Header"
import { HomeContent } from "./components/Content"
import { StyledHome } from "./style"
import { Outlet } from "react-router-dom"

export const Dashboard = () => {

    return (
        <StyledHome>
            <Header />
            <Outlet />
            <HomeContent />
        </StyledHome>
    )
}