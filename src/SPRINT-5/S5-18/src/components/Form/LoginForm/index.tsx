import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useState } from 'react';
import { UserContext } from '../../../providers/UserContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { StyledParagraph } from '../../../styles/typography';

const loginFormSchema = z.object({
  email: z.string().min(1, { message: 'O e-mail é obrigatório' }).nonempty({ message: 'Campo obrigatório' }),
  password: z.string().min(1, { message: 'A senha é obrigatória' }).nonempty({ message: 'Campo obrigatório' })
})

export type ILoginFormData = z.infer<typeof loginFormSchema>

export const LoginForm = () => {
  const [loading, setLoading] = useState(false)
  const { userLogin } = useContext(UserContext)
  const {register, handleSubmit, formState: { errors } } = useForm<ILoginFormData>({
    resolver: zodResolver(loginFormSchema), 
  })

  const submit: SubmitHandler<ILoginFormData> = (formData) => {
    userLogin(formData, setLoading)
  }

  return(
  <StyledForm onSubmit={handleSubmit(submit)}>
    <Input type='email' id='E-mail' {...register('email')} disabled={loading} />
    {errors.email ? <StyledParagraph fontColor='red'>{errors.email.message}</StyledParagraph> : null}
    <Input type='password' id='Senha' {...register('password')} disabled={loading} />
    {errors.password ? <StyledParagraph fontColor='red'>{errors.password.message}</StyledParagraph> : null}
    <StyledButton $buttonSize='default' $buttonStyle='green'>
      {loading ? 'Entrando...' : 'Entrar'}
    </StyledButton>
  </StyledForm>
  )
}

