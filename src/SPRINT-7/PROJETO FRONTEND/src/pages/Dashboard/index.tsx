import { OngsList } from "../../components/OngsList";
import { DashboardMainHeader } from "../../components/DashboardMainHeader";
import { Header } from "../../components/Header";
import { ToastContainer } from "react-toastify";

export const DashboardPage = () => {

    return (
        <>
            <Header />
            <main className="container mobile:mb-4">
                <DashboardMainHeader />
                <OngsList />
            </main>
            <ToastContainer toastStyle={{ backgroundColor: "#3AB8C7", color: "#ffffff"}} />
        </>
    )
}