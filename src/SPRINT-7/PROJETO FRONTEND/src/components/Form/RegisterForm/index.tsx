import { useContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../../providers/UserContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { TRegisterFormData, registerFormSchema } from "./registerFormSchema";
import { Input } from "../Input";
import { ClipLoader } from "react-spinners";

export const RegisterForm = () => {
    const [loading, setLoading] = useState(false);
    const { userRegister } = useContext(UserContext);
    const {register, handleSubmit, formState: { errors } } = useForm<TRegisterFormData>({
        resolver: zodResolver(registerFormSchema)
    })

    const submit: SubmitHandler<TRegisterFormData> = (formData) => {
        userRegister(formData, setLoading)
    }
    return(
        <form onSubmit={handleSubmit(submit)} className="flex flex-col">
            <Input label="Nome" type="text" {...register("name")} disabled={loading} error={errors.name} />
            <Input label="E-mail" type="email" {...register("email")} disabled={loading} error={errors.email} />
            <Input label="Senha" type="password" {...register("password")} disabled={loading} error={errors.password} />
            <Input label="Confirmar senha" type="password" {...register("confirm")} disabled={loading} error={errors.confirm} />
            <button type="submit" disabled={loading} className="mt-[0.625rem] bg-color-04 w-[10.25rem] rounded-[20px] h-[3rem] text-white self-center">
                {loading ? <ClipLoader color="#ffffff" size={20}/> : "Cadastrar"}
            </button>
        </form>
    )
}