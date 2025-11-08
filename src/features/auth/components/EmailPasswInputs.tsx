import { InputController } from "@/components/InputController"
import { FieldValues, Path, useFormContext } from "react-hook-form"
import { HelperText, TextInput } from "react-native-paper"

type MinimumAuthProps = {
  email: string
  password: string
}

type EmailPasswInputsProps<FormType extends FieldValues & MinimumAuthProps> = {
  secureTextEntry: boolean
  setSecureTextEntry: (value: boolean) => void
}

export const EmailPasswInputs = <
  FormType extends FieldValues & MinimumAuthProps
>({
  secureTextEntry,
  setSecureTextEntry,
}: EmailPasswInputsProps<FormType>) => {
  const {
    formState: { errors },
  } = useFormContext<FormType>()
  return (
    <>
      <InputController<FormType>
        label="Email"
        name={"email" as Path<FormType>}
        style={{ width: "100%" }}
        keyboardType="email-address"
      />
      {errors.email && (
        <HelperText style={{ alignSelf: "flex-start" }} type="error">
          {errors.email.message as string}
        </HelperText>
      )}
      <InputController<FormType>
        label="Senha"
        name={"password" as Path<FormType>}
        style={{ width: "100%" }}
        secureTextEntry={secureTextEntry}
        right={
          <TextInput.Icon
            icon={secureTextEntry ? "eye" : "eye-off"}
            onPress={() => setSecureTextEntry(!secureTextEntry)}
          />
        }
      />
      {errors.password && (
        <HelperText style={{ alignSelf: "flex-start" }} type="error">
          {errors.password.message as string}
        </HelperText>
      )}
    </>
  )
}
