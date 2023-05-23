import { Link } from "react-router-dom"
import { LoginForm } from "../../components/Form/LoginForm"
import logo from "../../assets/logo.svg"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export const LoginPage = () => {
    return (
        <>
            <div className="animate-change-background-image h-screen bg-cover flex justify-center items-center shadow-color-04 relative mobile:flex-col mobile:items-center mobile:pb-[3rem] mobile:h-full">
                <img src={logo} className="fixed top-[65px] left-[85px] mobile:top-[25px] mobile:left-[40%] mobile:absolute"></img>
                <div>
                    <p className="text-white text-[1.5rem] max-w-[25.75rem] text-center mr-40 mobile:mr-0 mobile:mt-[8rem] mobile:text-base mobile:mb-[3rem]">"Antes de ter amado um animal, parte da nossa alma permanece desacordada" DOE!</p>
                </div>
                <div className="flex flex-col w-[25.75rem] bg-color-05 border border-[#3AB8C7] rounded-[20px] h-fit py-[1rem] px-[2.875rem] shadow-[0_0px_32px_1px_#3AB8C7] mobile:pt-[1rem] mobile:pb-[1rem] mobile:w-[18rem] mobile:h-[24rem] mobile:mx-12">
                    <h2 className="text-[2.5rem] text-white text-center mb-[1.125rem] mobile:text-2xl">
                        Login
                    </h2>
                    <LoginForm />
                    <Link to="/register" className="text-white mt-[1.125rem] text-center">Cadastre-se</Link>
                </div>
            </div>
            <ToastContainer toastStyle={{ backgroundColor: "#3AB8C7", color: "#ffffff"}} />
        </>
    )
}