import { Timestamp } from "firebase/firestore"

export interface BookType {
  id: string
  title: string
  author?: string
  status: number
  description?: string
  rating?: number | null
  category?: string
  addedIn: Timestamp
  startDate?: Timestamp | null
  endDate?: Timestamp | null
  userId: string
}

export interface ListType {
  id: string
  title: string
  description?: string
  books: string[]
  userId: string
}

export type GoogleBooksContextType = {
  googleBooks: GoogleBook[] | undefined
  setQuery: (query: string) => void
  isLoadingGoogleBooks: boolean
}

export type FiltersContextType = {
  searchTerm: string
  setSearchTerm: (value: string) => void
  selectedFilter: number | undefined
  setSelectedFilter: (value: number | undefined) => void
  books: BookType[]
  isLoading: boolean
  selectedSort: string
  setSelectedSort: (value: string) => void
}

export interface GoogleBook {
  id: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo?: SaleInfo;
}

export interface VolumeInfo {
  title: string;
  subtitle?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  pageCount?: number;
  categories?: string[];
  averageRating?: number;
  ratingsCount?: number;
  language?: string;
  imageLinks?: {
    smallThumbnail?: string;
    thumbnail?: string;
  };
  previewLink?: string;
  infoLink?: string;
}

export interface SaleInfo {
  country: string;
  saleability: "FOR_SALE" | "NOT_FOR_SALE" | "FREE";
  isEbook: boolean;
  buyLink?: string;
}