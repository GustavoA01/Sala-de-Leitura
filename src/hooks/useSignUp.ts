import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignUpFormType, signUpSchema } from "@/data/schemas"
import { auth } from "@/services/firebaseConfig"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { router } from "expo-router"

export const useSignUp = () => {
  const methods = useForm<SignUpFormType>({
    resolver: zodResolver(signUpSchema),
  })
  const {
    formState: { errors },
  } = methods
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const onSubmit = async (data: SignUpFormType) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)

      if (userCredential.user) {
        await updateProfile(userCredential.user, {
          displayName: data.userName
        })
        router.replace("/(tabs)")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return {
    methods,
    errors,
    secureTextEntry,
    setSecureTextEntry,
    onSubmit,
  }
}