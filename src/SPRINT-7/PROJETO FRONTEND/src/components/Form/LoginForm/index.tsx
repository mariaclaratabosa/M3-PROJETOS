import { useContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../../providers/UserContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { TLoginFormData, loginFormSchema } from "./loginFormSchema";
import { Input } from "../Input";
import { ClipLoader } from "react-spinners";

export const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const { userLogin } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm<TLoginFormData>({
        resolver: zodResolver(loginFormSchema),
    })

    const submit: SubmitHandler<TLoginFormData> = (formData) => {
        userLogin(formData, setLoading)
    }
    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-col">
            <Input label="E-mail" type="email" {...register("email")} disabled={loading} error={errors.email} />
            <Input label="Senha" type="password" {...register("password")} disabled={loading} error={errors.password} />
            <button type="submit" disabled={loading} className="mt-[0.625rem] bg-color-04 w-[10.25rem] rounded-[20px] h-[3rem] text-white self-center">
                {loading ? <ClipLoader color="#ffffff" size={20} /> : "Entrar"}
            </button>
        </form>
    )
}

