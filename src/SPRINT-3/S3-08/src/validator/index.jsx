import { z } from 'zod';

export const schema = z.object({
    name: z.string().min(1, "O nome é obrigatório"),
    email: z.string()
    .min(1, "O e-mail é obrigatório")
    .email("O email é obrigatório"),
    password: z.string()
    .min(8, "A senha é obrigatória e precisa de no mínimo 8 caracteres")
    .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
})