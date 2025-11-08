import { FormProvider, useForm } from "react-hook-form"
import { EmailPasswInputs } from "../components/EmailPasswInputs"
import { AuthFooter } from "../components/AuthFooter"
import { useState } from "react"

export const LoginForm = () => {
  const methods = useForm()
  const { handleSubmit } = methods
  const onSubmit = (data: any) => console.log(data)
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  return (
    <FormProvider {...methods}>
      <EmailPasswInputs
        secureTextEntry={secureTextEntry}
        setSecureTextEntry={setSecureTextEntry}
      />
      <AuthFooter onSubmit={handleSubmit(onSubmit)} buttonText="Entrar" />
    </FormProvider>
  )
}
