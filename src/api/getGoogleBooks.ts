import { GoogleBook } from "@/data/types";
import { api } from "@/lib/axios"

export const getGoogleBooks = async (query: string):Promise<GoogleBook[]> => {
  const response = await api.get("/volumes", {
    params: {
      q: query == "" ? "a" : query,
      maxResults: 25,
    },
  });

  return response.data.items as GoogleBook[];
}

export const getGoogleBookById = async (id: string):Promise<GoogleBook> => {
  const response = await api.get(`/volumes/${id}`);
  return response.data as GoogleBook;
}
