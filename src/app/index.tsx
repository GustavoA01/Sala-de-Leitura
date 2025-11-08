import { CustomButton } from '@/components/Button'
import { InputController } from '@/components/InputController'
import { styles } from '@/components/StackHeader/styles'
import SafeAreaWrapper from '@/components/ui/SafeAreaWrapper'
import { theme } from '@/theme'
import { Link, Redirect, router, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { View, StyleSheet } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const LoginScreen = () => {
  const router = useRouter();
  const form = useForm();
  const onSubmit = (data: any) => console.log(data);
  const [secureTextEntry, setSecureTextEntry] = useState(true);


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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styleSheet.text}>Sala de{'\n'}Leitura</Text>
      <FormProvider {...form}>
            <InputController placeholder="Email" style={styleSheet.textInput} {...form.register("name")}/>
            <InputController secureTextEntry={secureTextEntry} placeholder="Senha" style={styleSheet.textInput} {...form.register("senha")}
                    right={
                      <TextInput.Icon
                        icon={secureTextEntry ? 'eye-off' : 'eye'}
                        onPress={() => setSecureTextEntry(!secureTextEntry)}
                      />
                    }
            />
            <CustomButton width="80%" fontSize={20} title="Entrar" onPress={onSubmit}/>
            <Button onPress={() => router.navigate('/sign-up')}>
              <Text>Não tem uma conta? </Text>Cadastre-se
            </Button>
        </FormProvider>
      </View>
    </SafeAreaWrapper>
  )
}

const styleSheet = StyleSheet.create({
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


export default LoginScreen