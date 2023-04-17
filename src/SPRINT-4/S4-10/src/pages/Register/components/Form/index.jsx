import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "../../../../validator"
import { StyledForm } from "./style"
import { useContext } from "react"
import { UserContext } from "../../../../providers/UserContext"

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema)
    })
    const { registerSubmit } = useContext(UserContext)

    return (
        <StyledForm onSubmit={handleSubmit(registerSubmit)}>
            <p className="createAccount">Crie sua conta</p>
            <span>Rápido e grátis, vamos nessa</span>
            <label htmlFor="name">Nome</label>
            <input type="text" placeholder="Digite aqui seu nome" {...register("name")} />
            {errors.name ? <p className="errorsMessage">{errors.name.message}</p> : null}
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Digite aqui seu email" {...register("email")} />
            {errors.email ? <p className="errorsMessage">{errors.email.message}</p> : null}
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="Digite aqui sua senha" {...register("password")} />
            {errors.password ? <p className="errorsMessage">{errors.password.message}</p> : null}
            <label htmlFor="confirm">Confirmar Senha</label>
            <input type="password" placeholder="Digite novamente sua senha" {...register("confirm")} />
            {errors.confirm ? <p className="errorsMessage">{errors.confirm.message}</p> : null}
            <label htmlFor="bio">Bio</label>
            <input type="text" placeholder="Fale sobre você" {...register("bio")} />
            {errors.bio ? <p className="errorsMessage">{errors.bio.message}</p> : null}
            <label htmlFor="contact">Contato</label>
            <input type="text" placeholder="Opção de contato" {...register("contact")} />
            {errors.contact ? <p className="errorsMessage">{errors.contact.message}</p> : null}
            <label htmlFor="course_module">Selecionar módulo</label>
            <select {...register("course_module")}>
                <option value="Primeiro Módulo">Primeiro Módulo</option>
                <option value="Segundo Módulo">Segundo Módulo</option>
                <option value="Terceiro Módulo">Terceiro Módulo</option>
                <option value="Quarto Módulo">Quarto Módulo</option>
                <option value="Quinto Módulo">Quinto Módulo</option>
                <option value="Sexto Móulo">Sexto Módulo</option>
            </select>
            {errors.course_module ? <p className="errorsMessage">{errors.course_module.message}</p> : null}
            <button type="submit" className="registerButton">Cadastrar</button>
        </StyledForm>
    )
}