import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, serverTimestamp, updateDoc, where } from "firebase/firestore"
import { auth, db } from "../firebaseConfig"
import { BookType } from "@/data/types"

const bookListName = "book-list"
const bookListCollection = collection(db, bookListName)

export const createBook = async (book: Omit<BookType, "id" | "addedIn" | "userId">) => {
  const user = auth.currentUser

  try {
    await addDoc(bookListCollection, { ...book, userId: user?.uid, addedIn: serverTimestamp() })
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getBooks = async (): Promise<BookType[]> => {
  try {
    const userId = auth.currentUser?.uid

    const q = query(bookListCollection, where("userId", "==", userId))
    const querySnapshot = await getDocs(q)

    const books = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as BookType[]

    return books
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getBookById = async (id: string): Promise<BookType> => {
  try {
    const docRef = doc(bookListCollection, id)
    const docSnap = await getDoc(docRef)

    return docSnap.data() as BookType
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const updateBook = async (id: string, book: Omit<BookType, "id" | "addedIn" | "userId">) => {
  try {
    await updateDoc(doc(bookListCollection, id), { ...book })
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const deleteBook = async (id: string) => {
  try {
    await deleteDoc(doc(bookListCollection, id))
  } catch (error) {
    console.log(error)
    throw error
  }
}