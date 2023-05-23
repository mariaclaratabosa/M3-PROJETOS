import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import { IoReturnDownBackSharp } from "react-icons/io5"

export const HeaderLearnMore = () => {
  return (
      <header className="bg-black h-[6.8125rem] w-full">
        <div className="container flex justify-between h-full items-center">
            <Link to={"/dashboard"}>
                <img src={logo} alt="" />
            </Link>
            <Link to="/dashboard">
                <IoReturnDownBackSharp className="text-white w-7 h-7" />
            </Link>
        </div>
      </header>
  )
}
