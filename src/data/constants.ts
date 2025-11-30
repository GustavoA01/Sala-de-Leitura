import { theme } from "@/theme"

export const filtersLabel = [
  {
    label: "Todos",
    value: undefined,
  },
  {
    label: "Lendo",
    value: 0,
  },
  {
    label: "Para ler",
    value: 1,
  },
  {
    label: "Lidos",
    value: 2,
  },
]

export const statusLabel = [
  { label: "Lendo", color: theme.colors.secondary, value: 0 },
  { label: "Para ler", color: theme.colors.error, value: 1 },
  { label: "Lido", color: theme.colors.primary, value: 2 },
]

export const sortItems = [
  {
    label: "Título",
    value: "title",
  },
  {
    label: "Autor",
    value: "author",
  },
  {
    label: "Avaliação",
    value: "rating",
  },
  {
    label: "Adicionados recentemente",
    value: "addedRecently",
  },
  {
    label: "Adicionados há mais tempo",
    value: "addedLongTimeAgo",
  },
]

