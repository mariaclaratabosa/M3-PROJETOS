import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { useContext, useState } from 'react';
import { UserContext } from '../../../providers/UserContext';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { StyledParagraph } from '../../../styles/typography';


const registerFormSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório'),
  email: z.string()
  .min(1, 'O e-mail é obrigatório')
  .email('O e-mail deve estar no formato corret'),
  password: z.string()
  .min(7, { message: 'A senha é obrigatória e precisa de mínimo 8 caracteres'})
        .regex(/(?=.*?[A-Z])/, 'É necessário ao menos uma letra maiúscula')
        .regex(/(?=.*?[a-z])/, 'É necessário ao menos uma letra minúscula')
        .regex(/(?=.*?[0-9])/, 'É necessário pelo menos um número')
        .regex(/(?=.*?[!@#$%^&*()_+={}\[\]|\\;:'',<.>\/?])/, 'É necessário pelo menos um caractere especial'),
    confirm: z.string().min(1, 'A confirmação de senha é obrigatória'),
}).refine(({password, confirm}) => password === confirm, {
  message: 'As senhas precisam corresponder',
  path: ['confirm']
})

export type IRegisterFormData = z.infer<typeof registerFormSchema>

const RegisterForm = () => {
  const [loading, setLoading] = useState(false)
  const { userRegister } = useContext(UserContext)
  const {register, handleSubmit, formState: {errors}} = useForm<IRegisterFormData>({
    resolver: zodResolver(registerFormSchema)
  })

  const submit: SubmitHandler<IRegisterFormData> = (formData) => {
    userRegister(formData, setLoading)
  }
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input type='text' id='Nome' {...register('name')} disabled={loading} />
      {errors.name ? <StyledParagraph fontColor='red'>{errors.name.message}</StyledParagraph> : null}
      <Input type='email' id='E-mail' {...register('email')} disabled={loading} />
      {errors.email ? <StyledParagraph fontColor='red'>{errors.email.message}</StyledParagraph> : null}
      <Input type='password' id='Senha' {...register('password')} disabled={loading} />
      {errors.password ? <StyledParagraph fontColor='red'>{errors.password.message}</StyledParagraph> : null}
      <Input type='password' id='Confirmar senha' {...register('confirm')} disabled={loading} />
      {errors.confirm ? <StyledParagraph fontColor='red'>{errors.confirm.message}</StyledParagraph> : null}
      <StyledButton $buttonSize='default' $buttonStyle='gray' disabled={loading} >
        {loading ? 'Cadastrando...' : 'Cadastrar'}
      </StyledButton>
    </StyledForm>
  )
}

export default RegisterForm;
