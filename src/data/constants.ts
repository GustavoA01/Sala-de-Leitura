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

export const booksMock = [
  {
    id: "buc0AAAAMAAJ",
    title: "Adventures of Sherlock Holmes",
    pages: 360,
    publicationDate: "1892",
    format: "Ebook",
    publisher: "Public Domain",
    language: "en",
    author: "Sir Arthur Conan Doyle",
    description: "Presenting 12 tales starring the legendary British detective Sherlock Holmes, this 1892 book is Arthur Conan Doyle's first short-story collection. The mystery compilation includes some of Holmes's finest cases with his dutiful sidekick, Doctor Watson, most notably \"A Scandal in Bohemia,\" in which Holmes matches wits with the crafty former lover of a European king. Also featured is \"The Adventure of the Red-Headed League,\" a study in misdirection that unfolds to become a much larger scheme. The stories, initially published in the Strand Magazine, are essential reading for Holmes fans.",
    imageLinks: {
      smallThumbnail: "http://books.google.com/books/content?id=buc0AAAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail: "http://books.google.com/books/content?id=buc0AAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    buyLink: "https://play.google.com/store/books/details?id=buc0AAAAMAAJ&rdid=book-buc0AAAAMAAJ&rdot=1&source=gbs_api",
    averageRating: 4.5,
    ratingsCount: 480,
  },
  {
    id: "1",
    title: "As Crônicas de Nárnia - Coleção de Luxo: O Leão, a Feiticeira e o Guarda-roupa",
    pages: 208,
    publicationDate: "2023-01-12",
    format: "Livro digital",
    publisher: "HarperCollins Brasil",
    language: "Português",
    author: "C.S. Lewis",
    categories: ["Fantasia", "Infantil"],
    description: "Um clássico da literatura infantojuvenil, combinando aventura, fantasia e lições de vida na terra de Nárnia.",
    imageLinks: {
      smallThumbnail: "https://m.media-amazon.com/images/I/51Y5bgG9SfL._SX331_BO1,204,203,200_.jpg",
      thumbnail: "http://books.google.com/books/publisher/content?id=WSqzEAAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE72ugJnueI5nDKcOw7G73vD6hSpDA8koJkOqT3GGQK6uqygwTNiSZgQdh2CHqskUDRQPfzsLTcgH-ArPU4ESuzzYh55q7dnQFN09pM956hi1tYAwG2fY-nu7_a5T4Ks90DFlG1Mr&source=gbs_api"
    },
    buyLink: "#",
    averageRating: 4.8,
    ratingsCount: 150,
  },
  {
    id: "2",
    title: "Pride and Prejudice",
    pages: 279,
    publicationDate: "1813",
    format: "Ebook",
    publisher: "Public Domain",
    language: "en",
    author: "Jane Austen",
    description: "The romantic novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book.",
    imageLinks: {
      smallThumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/PrideAndPrejudiceTitlePage.jpg/220px-PrideAndPrejudiceTitlePage.jpg",
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/1/1e/PrideAndPrejudiceTitlePage.jpg"
    },
    buyLink: "https://play.google.com/store/books/details?id=PRIDEAAAAMAAJ&rdid=book-PRIDEAAAAMAAJ&rdot=1&source=gbs_api",
    averageRating: 4.7,
    ratingsCount: 320,
  }
];