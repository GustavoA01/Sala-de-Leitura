import { 
  QueryConstraint, 
  addDoc, 
  arrayRemove, 
  collection, 
  deleteDoc, 
  doc, 
  getDoc, 
  getDocs, 
  orderBy, 
  query, 
  serverTimestamp, 
  updateDoc, 
  where, 
  writeBatch } from "firebase/firestore"
import { auth, db } from "../firebaseConfig"
import { BookType } from "@/data/types"
import { listCollection } from "../lists"

const bookListName = "book-list"
export const bookListCollection = collection(db, bookListName)

export const createBook = async (book: Omit<BookType, "id" | "addedIn" | "userId">) => {
  const user = auth.currentUser

  try {
    await addDoc(bookListCollection, { ...book, userId: user?.uid, addedIn: serverTimestamp() })
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getBooks = async (status: number | undefined, sort?: string): Promise<BookType[]> => {
  try {
    const userId = auth.currentUser?.uid
    const queryConstraints: QueryConstraint[] = []

    queryConstraints.push(where("userId", "==", userId))

    if (status !== undefined) {
      queryConstraints.push(where("status", "==", status))
    }

    switch (sort) {
      case "title":
        queryConstraints.push(orderBy("title", "asc"))
        break
      case "author":
        queryConstraints.push(orderBy("author", "asc"))
        break
      case "rating":
        queryConstraints.push(orderBy("rating", "desc"))
        break
      case "addedLongTimeAgo":
        queryConstraints.push(orderBy("addedIn", "asc"))
        break
      case "addedRecently":
      default:
        queryConstraints.push(orderBy("addedIn", "desc"))
        break
    }

    const q = query(bookListCollection, ...queryConstraints)
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

    const listsQuery = query(listCollection, where("bookIds", "array-contains", id));
    const listasSnapshot = await getDocs(listsQuery);

    const batch = writeBatch(db);
    listasSnapshot.forEach(listaDoc => {
      batch.update(listaDoc.ref, {
        bookIds: arrayRemove(id)
      });
    });

    await batch.commit();
  } catch (error) {
    console.log(error)
    throw error
  }
}