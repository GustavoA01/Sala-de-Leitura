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
