import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().nonempty("O email é obrigatório"),
    password: z.string().nonempty("A senha é obrigatória")
});

export type TLoginFormData = z.infer<typeof loginFormSchema>;