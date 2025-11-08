import { Button, Text } from "react-native-paper"
import SafeAreaWrapper from "../components/ui/SafeAreaWrapper"
import { View, StyleSheet, Alert } from "react-native"
import { InputController } from "@/components/InputController"
import { FormProvider, useForm } from "react-hook-form"
import { theme } from "@/theme"
import { CustomButton } from "@/components/Button"
import { router } from "expo-router"

const SignUpScreen = () => {
  const form = useForm({defaultValues: {
    "name": "",
    "email": "",
    "senha": "",
  }});
  
  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <SafeAreaWrapper>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.text}>Sala de{'\n'}Leitura</Text>
        <FormProvider {...form}>
            <InputController placeholder="Nome de usuário" style={styles.textInput} {...form.register("name")}/>
            <InputController placeholder="Email" style={styles.textInput} {...form.register("email")}/>
            <InputController placeholder="Senha" style={styles.textInput} {...form.register("senha")}/>
            <CustomButton width="80%" fontSize={20} title="Cadastrar" onPress={form.handleSubmit(onSubmit)}/>
        </FormProvider>
        <Button onPress={() => router.navigate('/')}>
            <Text>Já tem uma conta? </Text>Faça login 
        </Button>
      </View>
    </SafeAreaWrapper>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 70,
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textInput:{
    width: '80%',
    marginBottom: 12,
    fontSize: 20,
    backgroundColor: theme.colors.surfaceVariant
  }
});


export default SignUpScreen