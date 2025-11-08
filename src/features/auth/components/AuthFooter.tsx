import { theme } from "@/theme"
import { router } from "expo-router"
import { TouchableOpacity, View } from "react-native"
import { Button, Text } from "react-native-paper"
import { authStyles } from "../container/styles"

type AuthFooterProps = {
  onSubmit: () => void
  buttonText: string
}

export const AuthFooter = ({ onSubmit, buttonText }: AuthFooterProps) => {
  return (
    <>
      <Button
        buttonColor={theme.colors.secondary}
        labelStyle={{ fontSize: 16 }}
        style={authStyles.button}
        mode="contained"
        onPress={onSubmit}
      >
        {buttonText}
      </Button>
      <View style={{ flexDirection: "row", gap: 4 }}>
        <Text>
          {buttonText === "Cadastrar"
            ? "Já tem uma conta? "
            : "Não tem uma conta? "}
        </Text>
        <TouchableOpacity
          onPress={() =>
            router.navigate(buttonText === "Cadastrar" ? "/" : "/sign-up")
          }
        >
          <Text style={{ color: theme.colors.primary }}>
            {buttonText === "Cadastrar" ? "Fazer login" : "Cadastre-se"}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}
