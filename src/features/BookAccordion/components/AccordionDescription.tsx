import { View } from "react-native"
import { Text } from "react-native-paper"
import { styles } from "../container/styles"
import { StatusChip } from "./StatusChip"
import { BookType } from "@/data/types"

type AccordionDescriptionProps = Pick<BookType, "author" | "status">

export const AccordionDescription = ({
  author,
  status,
}: AccordionDescriptionProps) => {
  return (
    <View style={styles.accordionDescriptionContainer}>
      <StatusChip status={status} />
      <Text numberOfLines={1} style={styles.authorName}>
        {author}
      </Text>
    </View>
  )
}
