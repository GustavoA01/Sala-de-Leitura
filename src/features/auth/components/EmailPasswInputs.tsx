import { InputController } from "@/components/InputController"
import { TextInput } from "react-native-paper"

type EmailPasswInputsProps = {
  secureTextEntry: boolean
  setSecureTextEntry: (value: boolean) => void
}

export const EmailPasswInputs = ({
  secureTextEntry,
  setSecureTextEntry,
}: EmailPasswInputsProps) => {
  return (
    <>
      <InputController label="Email" name="email" style={{ width: "100%" }} />
      <InputController
        label="Senha"
        name="senha"
        style={{ width: "100%" }}
        secureTextEntry={secureTextEntry}
        right={
          <TextInput.Icon
            icon={secureTextEntry ? "eye" : "eye-off"}
            onPress={() => setSecureTextEntry(!secureTextEntry)}
          />
        }
      />
    </>
  )
}
