import MaterialDesignIcons, {
  MaterialDesignIconsIconName,
} from "@react-native-vector-icons/material-design-icons"
import { StyleProp, View, ViewStyle } from "react-native"
import { Card, Divider, Text } from "react-native-paper"
import { styles } from "./styles"
import React from "react"
import { theme } from "@/theme"

type FormCardContainerProps = {
  iconName: MaterialDesignIconsIconName
  title: string
  children: React.ReactNode
  contentStyle?: StyleProp<ViewStyle>
}

export const FormCardContainer = ({
  iconName,
  title,
  children,
  contentStyle,
}: FormCardContainerProps) => {
  return (
    <Card style={styles.container} elevation={0}>
      <View style={styles.content}>
        <MaterialDesignIcons
          name={iconName}
          size={24}
          color={theme.colors.primary}
        />
        <Text variant="bodyMedium">{title}</Text>
      </View>
      <Divider
        style={styles.divider}
      />

      <Card.Content style={{ gap: 16, ...(contentStyle as ViewStyle) }}>
        {children}
      </Card.Content>
    </Card>
  )
}
