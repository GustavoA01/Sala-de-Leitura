import SafeAreaWrapper from '@/components/ui/SafeAreaWrapper'
import { Redirect, router } from 'expo-router'
import { useEffect } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

const LoginScreen = () => {

  useEffect(() => {
    setTimeout(() => {
      router.push('/(tabs)')
    }, 2000)
  }, [])
  
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
        <Text>Login</Text>
      </View>
    </SafeAreaWrapper>
  )
}

export default LoginScreen