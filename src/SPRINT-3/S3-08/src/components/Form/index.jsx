import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Input from '../Input'
import { schema } from '../../validator'
import { useState } from 'react'
import Card from '../Card/Card'

const Form = () => {
    const [user, setUser] = useState(null)
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    })

    const submit = (formData) => {
        setUser(formData)
    }


    return (
        <div>
            {!user ? (
                <form onSubmit={handleSubmit(submit)} noValidate>
                <fieldset>
                    <Input
                        label="Nome:"
                        id="name"
                        type="text"
                        placeholder="Digite seu nome"
                        register={register('name')}
                    />
                    {errors.name ? <p>{errors.name.message}</p> : null}
                    <Input
                        label="E-mail:"
                        id="email"
                        type="email"
                        placeholder="Digite seu e-mail"
                        register={register('email')}
                    />
                    {errors.email ? <p>{errors.email.message}</p> : null}
                    <Input
                        label="Senha:"
                        id="password"
                        type="password"
                        placeholder="Digite sua senha"
                        register={register('password')}
                    />
                    {errors.password ? <p>{errors.password.message}</p> : null}
                    <button type="submit">Enviar</button>
                </fieldset>
            </form>
            ) : (
                <Card user={user}/>
            )}
        </div>
    )
}

export default Form