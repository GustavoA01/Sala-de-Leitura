import z from "zod";

export const bookFormSchema = z.object({
  title: z.string({ required_error: "Título é obrigatório" }).min(1, { message: "Título é obrigatório" }),
  author: z.string().optional(),
  description: z.string().optional(),
  category: z.string().optional(),
  rating: z.preprocess((value) => {
    if (value === "") return undefined
    if (typeof value === "string") return Number(value)
  }, z.number().max(100, { message: "Avaliação máxima é 100" })
    .min(-100, { message: "Avaliação mínima é -100" }).optional(),)
})

export const signUpSchema = z.object({
  userName: z.string({ required_error: "Este campo é obrigatório" })
    .min(3, { message: "Seu nome deve ter pelo menos 3 caracteres" }),
  email: z.string({ required_error: "Este campo é obrigatório" }).email({ message: "Email inválido" }),
  password: z.string({ required_error: "Este campo é obrigatório" })
    .min(8, { message: "Senha deve ter pelo menos 8 caracteres" }),
})

export const loginSchema = z.object({
  email: z.string({ required_error: "Este campo é obrigatório" }).email({ message: "Email inválido" }),
  password: z.string({ required_error: "Este campo é obrigatório" })
    .min(8, { message: "Senha deve ter pelo menos 8 caracteres" }),
})

export const addListSchema = z.object({
  title: z.string({ required_error: "Este campo é obrigatório" })
    .min(1, { message: "Título é obrigatório" }),
  listDescription: z.string().optional(),
})

export type BookFormType = z.infer<typeof bookFormSchema>
export type SignUpFormType = z.infer<typeof signUpSchema>
export type LoginFormType = z.infer<typeof loginSchema>
export type AddListFormType = z.infer<typeof addListSchema>
