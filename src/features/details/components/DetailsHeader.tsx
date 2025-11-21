import { styles } from "@/features/details/container/styles"
import { theme } from "@/theme"
import { View } from "react-native"
import { Icon, Text } from "react-native-paper"

type DetailsHeaderProps = {
  title: string
  author: string
  averageRating: number
  ratingsCount: number
  description: string
}

export const DetailsHeader = ({
  title,
  author,
  averageRating,
  ratingsCount,
  description,
}: DetailsHeaderProps) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.authorContainer}>
        <Text numberOfLines={2} style={styles.author}>
          {author}
        </Text>
        {averageRating ? (
          <View style={styles.ratingContainer}>
            <Icon source="star" size={20} color={theme.colors.primary} />
            <Text style={styles.rating}>{averageRating}</Text>
            <Text style={styles.ratingsCount}>{ratingsCount} avaliações</Text>
          </View>
        ) : null}
      </View>

      <Text style={styles.description}>{description}</Text>
    </>
  )
}
