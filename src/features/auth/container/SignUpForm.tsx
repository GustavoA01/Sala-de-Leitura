import { FormProvider } from "react-hook-form"
import { InputController } from "@/components/InputController"
import { EmailPasswInputs } from "../components/EmailPasswInputs"
import { AuthFooter } from "../components/AuthFooter"
import { SignUpFormType } from "@/data/schemas"
import { HelperText } from "react-native-paper"
import { useSignUp } from "@/hooks/useSignUp"

export const SignUpForm = () => {
  const { methods, errors, secureTextEntry, setSecureTextEntry, onSubmit } =
    useSignUp()

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
      <AuthFooter
        onSubmit={methods.handleSubmit(onSubmit)}
        buttonText="Cadastrar"
      />
    </FormProvider>
  )
}
