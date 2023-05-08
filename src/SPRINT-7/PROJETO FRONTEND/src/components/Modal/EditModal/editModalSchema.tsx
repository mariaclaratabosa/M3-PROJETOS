import { z } from "zod";

export const editFormSchema = z.object({
    name: z.string().nonempty("O nome é obrigatório"),
    description: z.string().nonempty("A descrição é obrigatória"),
})

export type TEditFormData = z.infer<typeof editFormSchema>