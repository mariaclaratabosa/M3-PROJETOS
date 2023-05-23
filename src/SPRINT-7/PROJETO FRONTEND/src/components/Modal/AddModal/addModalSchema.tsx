import { z } from "zod";

export const addFormSchema = z.object({
    logo: z.string().url("Informe uma URL válida"),
    name: z.string().nonempty("O nome é obrigatório"),
    description: z.string().nonempty("A descrição é obrigatória"),
    link: z.string().url("Informe uma URL válida")
})

export type TAddFormData = z.infer<typeof addFormSchema>