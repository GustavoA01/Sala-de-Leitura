import { FormProvider, useForm } from "react-hook-form"
import { InputController } from "@/components/InputController"
import { EmailPasswInputs } from "../components/EmailPasswInputs"
import { AuthFooter } from "../components/AuthFooter"
import { useState } from "react"
import { SignUpFormType, signUpSchema } from "@/data/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { HelperText } from "react-native-paper"

export const SignUpForm = () => {
  const methods = useForm<SignUpFormType>({
    resolver: zodResolver(signUpSchema),
  })
  const {
    handleSubmit,
    formState: { errors },
  } = methods
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const onSubmit = (data: SignUpFormType) => {
    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <InputController<SignUpFormType>
        label="Nome de usuário"
        name="userName"
        style={{ width: "100%" }}
      />
      {errors.userName && (
        <HelperText style={{ alignSelf: "flex-start" }} type="error">
          {errors.userName?.message}
        </HelperText>
      )}
      <EmailPasswInputs<SignUpFormType>
        secureTextEntry={secureTextEntry}
        setSecureTextEntry={setSecureTextEntry}
      />
      <AuthFooter onSubmit={handleSubmit(onSubmit)} buttonText="Cadastrar" />
    </FormProvider>
  )
}
