import { z } from "zod";

export const registerFormSchema = z.object({
    name: z
        .string()
        .min(3, "O nome é obrigatório"),
    email: z.string().nonempty("O e-mail é obrigatório").email("Forneça um e-mail válido"),
    password: z
        .string()
        .min(8, "A senha precisa conter pelo menos 8 caracteres")
        .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
        .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
        .regex(/(?=.*?[!@#$%^&*()_+={}\[\]|\\;:"",<.>\/?])/, "É necessário pelo menos um caractere especial"),
    confirm: z.string().min(1, "A confirmação de senha é obrigatória"),
}).refine(({ password, confirm }) => password === confirm, {
    message: "As senhas precisam corresponder",
    path: ["confirm"]
})

export type TRegisterFormData = z.infer<typeof registerFormSchema>