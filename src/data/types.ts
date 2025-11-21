export interface BookType {
  id: string
  title: string
  author?: string
  status: number
  description?: string
  rating?: number | null
  category?: string
  addedIn: string
  startDate?: string | null
  endDate?: string | null
}

// TODO: trocar datas para Timestamp 

export type GoogleBooksContextType = {
  googleBooks: GoogleBook[] | undefined
  setQuery: (query: string) => void
  isLoadingGoogleBooks: boolean
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