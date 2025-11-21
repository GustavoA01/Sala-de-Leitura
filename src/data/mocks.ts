import { BookType } from "./types";

export const accordionMock: BookType[] = [
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

export const mockLists = [
  {
    id: "1",
    title: "Meus Favoritos",
    books: [
      { id: "b1", title: "Duna" },
      { id: "b2", title: "Neuromancer" },
      { id: "b3", title: "1984" },
      { id: "b4", title: "Admirável Mundo Novo" },
      { id: "b5", title: "O Conto da Aia" },
    ],
  },
  {
    id: "2",
    title: "Ficção Científica",
    books: [],
  },
]