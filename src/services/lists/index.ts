import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { ListType } from "@/data/types"
import { auth, db } from "../firebaseConfig"

const listCollectionName = "lists"
export const listCollection = collection(db, listCollectionName)

export const createList = async (list: Omit<ListType, "id" | "userId" | "books">) => {
  const user = auth.currentUser

  try {
    await addDoc(listCollection, { ...list, books:[], userId: user?.uid })
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getLists = async (): Promise<ListType[]> => {
  const user = auth.currentUser

  try {
    const q = query(listCollection, where("userId", "==", user?.uid))
    const querySnapshot = await getDocs(q)
    const lists = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as ListType[]

    return lists
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getListById = async (id: string): Promise<ListType> => {
  try {
    const docRef = doc(listCollection, id)
    const docSnap = await getDoc(docRef)
    return docSnap.data() as ListType
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const updateList = async (id: string, list: Partial<ListType>) => {
  try {
    await updateDoc(doc(listCollection, id), { ...list })
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const deleteList = async (id: string) => {
  try {
    await deleteDoc(doc(listCollection, id))
  } catch (error) {
    console.log(error)
    throw error
  }
}