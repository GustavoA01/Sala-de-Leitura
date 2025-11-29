import { FormProvider, useForm } from "react-hook-form"
import { EmailPasswInputs } from "../components/EmailPasswInputs"
import { AuthFooter } from "../components/AuthFooter"
import { useState } from "react"
import { LoginFormType, loginSchema } from "@/data/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { auth } from "@/services/firebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth"
import { router } from "expo-router"

export const LoginForm = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const methods = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  })
  const { handleSubmit } = methods

  const onSubmit = async (data: LoginFormType) => {
    try{
      await signInWithEmailAndPassword(auth, data.email, data.password)
      router.replace("/(tabs)")
    }catch(error){
      console.log(error)
    }
  }

  return (
    <FormProvider {...methods}>
      <EmailPasswInputs<LoginFormType>
        secureTextEntry={secureTextEntry}
        setSecureTextEntry={setSecureTextEntry}
      />
      <AuthFooter onSubmit={handleSubmit(onSubmit)} buttonText="Entrar" />
    </FormProvider>
  )
}
