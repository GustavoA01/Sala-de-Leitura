import { FormProvider, useForm } from "react-hook-form"
import { EmailPasswInputs } from "../components/EmailPasswInputs"
import { AuthFooter } from "../components/AuthFooter"
import { useState } from "react"
import { LoginFormType, loginSchema } from "@/data/schemas"
import { zodResolver } from "@hookform/resolvers/zod"

export const LoginForm = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const methods = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  })
  const { handleSubmit } = methods

  const onSubmit = (data: LoginFormType) => {
    console.log(data)
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
