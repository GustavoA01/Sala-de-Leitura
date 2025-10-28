import { theme } from "@/theme"
import { View } from "react-native"
import { Icon, Text } from "react-native-paper"
import { styles } from "../container/styles"
import { BookType } from "@/data/types"

type RightAccordionProps = Pick<BookType, "rating">

export const RightAccordion = ({rating}: RightAccordionProps) => {
  return (
    <View style={styles.rightAccordionContainer}>
      <Text variant="titleMedium" style={{ color: theme.colors.onSurface }}>{rating}</Text>
      <Icon source="star" size={24} color={theme.colors.primary} />
    </View>
  )
}