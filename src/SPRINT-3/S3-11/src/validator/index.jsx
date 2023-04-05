import { z } from "zod"

export const registerSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório"),
    email: z.string()
        .min(1, "O e-mail é obrigatório")
        .email("O e-mail deve estar no formato correto"),
    password: z.string()
        .min(8, { message: "A senha é obrigatória e precisa de mínimo 8 caracteres"})
        .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
        .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
        .regex(/(?=.*?[!@#$%^&*()_+={}\[\]|\\;:'",<.>\/?])/, "É necessário pelo menos um caractere especial"),
    confirm: z.string().min(1, "A confirmação de senha é obrigatória"),
    bio: z.string().min(1, "A descrição é obrigatória"),
    contact: z.string().min(1, "O campo de contato é obrigatório"),
    course_module: z.enum(["Primeiro Módulo", "Segundo Módulo", "Terceiro Módulo", "Quarto Módulo", "Quinto Módulo", "Sexto Módulo"], { message: "Por favor, selecione um módulo válido" })
}).refine(({ password, confirm }) => password === confirm, {
    message: "As senhas precisam corresponder",
    path: ["confirm"],
})

export const loginSchema =  z.object({
    email: z.string().email({ message: "E-mail inválido" }).nonempty({ message: "Campo obrigatório" }),
    password: z.string().min(8).nonempty({ message: "Campo obrigatório" }),
})
