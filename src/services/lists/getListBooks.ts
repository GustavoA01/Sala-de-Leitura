import { BookType } from "@/data/types";
import { doc, documentId, getDoc, getDocs, query, where } from "firebase/firestore";
import { listCollection } from ".";
import { bookListCollection } from "../books";

export const getListBooks = async (listId: string): Promise<BookType[]> => {
  try {
    const listRef = doc(listCollection, listId)
    const listSnap = await getDoc(listRef)

    if (!listSnap.exists()) {
      throw new Error("Lista não encontrada")
    }

    const listData = listSnap.data()
    const bookIds: string[] = listData.books || []

    if (bookIds.length === 0)  return []

    const booksRef = bookListCollection
    const q = query(booksRef, where(documentId(), "in", bookIds))

    const querySnapshot = await getDocs(q)

    const books: BookType[] = []
    querySnapshot.forEach((doc) => {
      books.push({ id: doc.id, ...doc.data() } as BookType)
    });

    return books
  } catch (error) {
    console.error("Erro ao buscar livros da lista:", error)
    throw error
  }
};