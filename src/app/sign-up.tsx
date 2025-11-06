import { Text } from "react-native-paper"
import SafeAreaWrapper from "../components/ui/SafeAreaWrapper"
import { View } from "react-native"

const SignUpScreen = () => {
  return (
    <SafeAreaWrapper>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Cadastro</Text>
      </View>
    </SafeAreaWrapper>
  )
}

export default SignUpScreen