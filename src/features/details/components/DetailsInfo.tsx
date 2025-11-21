import { styles } from "@/features/details/container/styles"
import { View } from "react-native"
import { Text } from "react-native-paper"

type DetailsInfoProps = {
  pages: number
  categories: string
  publisher: string
  publicationDate: string
  language: string
}

export const DetailsInfo = ({
  pages,
  categories,
  publisher,
  publicationDate,
  language,
}: DetailsInfoProps) => {
  return (
    <View>
      <View style={styles.detailRow}>
        <Text style={styles.label}>Páginas</Text>
        <Text style={styles.value}>{pages === 0 ? "-" : pages}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Categorias</Text>
        <Text numberOfLines={1} style={styles.value}>
          {categories}
        </Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Editora</Text>
        <Text style={styles.value}>{publisher}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Publicado em</Text>
        <Text style={styles.value}>{publicationDate}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Idioma</Text>
        <Text style={styles.value}>
          {language === "en"
            ? "Inglês"
            : language === "pt"
            ? "Português"
            : language}
        </Text>
      </View>
    </View>
  )
}
