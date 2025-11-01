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

export type BookFormType = z.infer<typeof bookFormSchema>