import { theme } from "@/theme"
import { BookType } from "./types"

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
    label: "Adicionados recentemente",
    value: "addedRecently",
  },
  {
    label: "Adicionados há mais tempo",
    value: "addedLongTimeAgo",
  },
]

export const mockData: BookType[] = [
  {
    id: "1",
    title: "O Iluminado",
    description: "Um bom livro",
    rating: 5,
    author: "Stephen King",
    status: 0,
    category: "Ficção",
    addedIn: "2025-01-01",
    startDate: "2025-01-01",
    endDate: "2025-01-01",
  },
  {
    id: "2",
    title: "Harry Potter e a Pedra Filosofal",
    description: undefined,
    rating: undefined,
    author: undefined,
    status: 1,
    category: undefined,
    addedIn: "2025-01-01",
    startDate: undefined,
    endDate: undefined,
  },
  {
    id: "3",
    title: "As Crônicas de Nárnia: o Leão, a Feiticeira e o Guarda-roupa.",
    description: "A família Pevensie encontra um mundo mágico através de um guarda-roupa. Eles se tornam príncipes e rainhas e enfrentam o mal do Rei Caspian.",
    rating: 10,
    author: "C.S. Lewis",
    status: 2,
    category: "Fantasia",
    addedIn: "2025-01-01",
    startDate: "2025-01-01",
    endDate: "2025-01-01",
  },
]