import React from "react"
import { StyleProp, ViewStyle } from "react-native"
import { useTheme } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"

export default function SafeAreaWrapper({
  children,
  style,
}: {
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
}) {
  const theme = useTheme()

  return (
    <SafeAreaView
      style={{
        ...styles.safeArea,
        ...(style as object),
      }}
    >
      {children}
    </SafeAreaView>
  )
}
