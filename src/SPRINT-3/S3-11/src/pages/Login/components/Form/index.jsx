import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../../../validator";
import { Link } from "react-router-dom";
import { StyledForm } from "./style";

export const LoginForm = ({ submit, loading }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema)
    })

    return (
        <StyledForm onSubmit={handleSubmit(submit)}>
            <p>Login</p>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="E-mail" {...register("email")} />
            {errors.email && <span>{errors.email.message}</span>}
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="Senha" {...register("password")} />
            {errors.password && <span>{errors.password.message}</span>}
            <button type="submit" className="loginButton">{loading ? "Carregando..." : "Entrar"}</button>
            <span>Ainda não possui uma conta?</span>
            <Link className="registerButton" to="/register">Cadastre-se</Link>
        </StyledForm>
    )
}
