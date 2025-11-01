import React from "react"
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context"
import { styles } from "./styles"

type SafeAreaWrapperProps = SafeAreaViewProps & {
  children: React.ReactNode
}

export default function SafeAreaWrapper({ children, ...props }: SafeAreaWrapperProps) {
  return (
    <SafeAreaView
      style={styles.safeArea}
      {...props}
    >
      {children}
    </SafeAreaView>
  )
}
