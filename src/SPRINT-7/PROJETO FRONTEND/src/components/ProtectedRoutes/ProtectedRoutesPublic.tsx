import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Navigate, Outlet } from "react-router-dom";
import { FadeLoader } from "react-spinners";

export const ProtectedRoutesPublic = () => {
  const { user, isLoading } = useContext(UserContext);

  return (
    <>
      {isLoading ? (
        <div className="h-full w-full fixed top-0 left-0 flex items-center justify-center">
          <FadeLoader color="#3AB8C7"/>
        </div>
      ) : (!user ? (
        <Outlet />
      ) : (
        <Navigate to="/dashboard" />
      )
      )}
    </>
  );
};
