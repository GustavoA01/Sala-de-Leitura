import { FormProvider, useForm } from "react-hook-form"
import { InputController } from "@/components/InputController"
import { EmailPasswInputs } from "../components/EmailPasswInputs"
import { AuthFooter } from "../components/AuthFooter"
import { useState } from "react"

export const SignUpForm = () => {
  const methods = useForm()
  const { handleSubmit } = methods
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <InputController
        label="Nome de usuário"
        name="name"
        style={{ width: "100%" }}
      />
      <EmailPasswInputs
        secureTextEntry={secureTextEntry}
        setSecureTextEntry={setSecureTextEntry}
      />
      <AuthFooter onSubmit={handleSubmit(onSubmit)} buttonText="Cadastrar" />
    </FormProvider>
  )
}
