import logout from "../../assets/logout.svg";
import logo from "../../assets/logo.svg";
import lupa from "../../assets/lupa.png";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Link } from "react-router-dom";
import { OngsContext } from "../../providers/OngsContext";

export const Header = () => {
  const { userLogout } = useContext(UserContext);
  const {searchValue, handleSubmit, handleInput} = useContext(OngsContext)
  
  return (
    <header className="bg-black h-[6.8125rem] mobile:w-fill">
      <div className="container flex justify-between h-full items-center mobile:flex-col">
        <Link to={"/dashboard"}>
          <img src={logo} className="mobile:my-2 mobile:w-14" />
        </Link>
        <div className="flex items-center mobile:mb-3">
          <div className="flex items-center mr-[0.9375rem] w-[17.4375rem] h-[2.4375rem] rounded-[20px] pl-[0.625rem] border border-[#3AB8C7] bg-transparent autofill:bg-transparent text-white justify-around">
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                type="text"
                value={searchValue}
                onChange={handleInput}
                className="bg-transparent autofill:bg-transparent text-white outline-none"
              />
              <button type="submit">
                <img src={lupa} alt="" />
              </button>
            </form>
          </div>
          <button onClick={() => userLogout()}>
            <img src={logout} alt="" />
          </button>
        </div>
      </div>
    </header>
  );
}
