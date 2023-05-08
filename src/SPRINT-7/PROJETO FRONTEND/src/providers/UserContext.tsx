import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { TLoginFormData } from "../components/Form/LoginForm/loginFormSchema";
import { TRegisterFormData } from "../components/Form/RegisterForm/registerFormSchema";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { translateErrorMessage } from "../services/locales";
import { Axios, AxiosError } from "axios";

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  user: IUser | null;
  userLogin: (
    formData: TLoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  userRegister: (
    formData: TRegisterFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  userLogout: () => void;
  isLoading: boolean,
}

interface IUser {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

interface IUserLoginResponse {
  accessToken: string;
  user: IUser;
}

interface IUserRegisterResponse {
  accessToken: string;
  user: IUser;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const path = location.pathname;

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USERID");

    const userAutoLogin = async () => {
      if (token && userId) {
        try {
          setIsLoading(true);
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          const response = await api.get<IUser>(`/users/${userId}`);
          setUser(response.data);
          navigate(path);
        } catch (error) {
          localStorage.removeItem("@TOKEN");
          localStorage.removeItem("@USERID");
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };
    userAutoLogin();
  }, []);

  const userLogin = async (
    formData: TLoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const response = await api.post<IUserLoginResponse>("/login", formData);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@USERID", response.data.user.id);
      setUser(response.data.user);
      navigate("/dashboard");
    } catch (error) {
      const errorMessage = translateErrorMessage((error as AxiosError).response?.data)
      toast(errorMessage)
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (
    formData: TRegisterFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      await api.post<IUserRegisterResponse>("/register", formData);
      navigate("/");
    } catch (error) {
      const errorMessage = translateErrorMessage((error as AxiosError).response?.data)
      toast(errorMessage)
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, userLogin, userRegister, userLogout, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};
