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

export const booksMock = [
  {
    id: "0",
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
    id: "2",
    title: "Pride and Prejudice",
    pages: 279,
    publicationDate: "1813",
    format: "Ebook",
    publisher: "Public Domain",
    language: "en",
    author: "Jane Austen",
    description: "The romantic novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book.",
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=s1gVAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=s1gVAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    buyLink: "https://play.google.com/store/books/details?id=PRIDEAAAAMAAJ&rdid=book-PRIDEAAAAMAAJ&rdot=1&source=gbs_api",
    averageRating: 4.7,
    ratingsCount: 320,
  },
  {
    id: "3",
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
    "id": "4",
    "title": "O Iluminado",
    "pages": 520,
    "publicationDate": "2019-02-18",
    "format": "Livro",
    "publisher": "Suma",
    "language": "pt-BR",
    "author": "Stephen King",
    "categories": [
      "Ficção",
      "Terror"
    ],
    "description": "O clássico de Stephen King sobre um hotel mal-assombrado e a aterrorizante jornada de uma família isolada pela neve. Jack Torrance, um escritor e ex-professor, aceita um emprego como zelador no isolado Hotel Overlook, levando sua esposa Wendy e seu filho Danny, que possui habilidades psíquicas.",
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=A-k-cQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      "thumbnail": "http://books.google.com/books/publisher/content?id=O4wtDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72CMx5Ac77Vapz5WgUwVhHNjpBWGMSR24EqyaCjo4Bb6GLYIbGiyZ-MPUftlCvnZ6W8hEdZzkxnM8xAP7kqIHDH-PccisV7noDZHd-SzCWHqNDv4nv7f9zBMKqq4EYr-kYfQst0&source=gbs_api"
    },
    "buyLink": "https://play.google.com/store/books/details?id=N-QoEAAAQBAJ&rdid=book-N-QoEAAAQBAJ&rdot=1&source=gbs_api",
    "averageRating": 4.6,
    "ratingsCount": 1289
  },
  {
    "id": "5",
    "title": "It: A coisa",
    "pages": 1104,
    "publicationDate": "2014-08-04",
    "format": "Livro",
    "publisher": "Suma",
    "language": "pt-BR",
    "author": "Stephen King",
    "categories": [
      "Ficção",
      "Terror"
    ],
    "description": "Nesse clássico que inspirou os filmes da Warner, um grupo de amigos conhecido como Clube dos Otários aprende o real sentido da amizade, do amor, da confiança... e do medo. O mais profundo e tenebroso medo. Quase trinta anos depois, o grupo volta a se encontrar. Mike, o único que permaneceu em Derry, dá o sinal — uma nova onda de terror tomou a pequena cidade.",
    "imageLinks": {
      "smallThumbnail": "https://books.google.com/books/content?id=tDkqDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "https://books.google.com/books/content?id=tDkqDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "buyLink": "https://play.google.com/store/books/details?id=tDkqDwAAQBAJ&rdid=book-tDkqDwAAQBAJ&rdot=1&source=gbs_api",
    "averageRating": 4.5,
    "ratingsCount": 4280
  }
];