import SafeAreaWrapper from "@/components/ui/SafeAreaWrapper"
import { LoginForm } from "@/features/auth/container/LoginForm"
import { authStyles } from "@/features/auth/container/styles"
import { View } from "react-native"
import { Text } from "react-native-paper"

const LoginScreen = () => {
  return (
    <SafeAreaWrapper>
      <View style={authStyles.container}>
        <Text variant="displayMedium" style={authStyles.title}>
          Sala de Leitura
        </Text>
        <LoginForm />
      </View>
    </SafeAreaWrapper>
  )
}

export default LoginScreen
