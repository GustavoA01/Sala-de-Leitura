import SafeAreaWrapper from "@/components/ui/SafeAreaWrapper"
import { LoginForm } from "@/features/auth/container/LoginForm"
import { authStyles } from "@/features/auth/container/styles"
import { View } from "react-native"
import { Text } from "react-native-paper"

const LoginScreen = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push('/(tabs)')
  //   }, 2000)
  // }, [])

  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push('/sign-up')
  //   }, 2000)
  // }, [])

  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push('/details/1')
  //   }, 2000)
  // }, [])

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
