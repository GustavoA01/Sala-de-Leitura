import { theme } from "@/theme"
import { View } from "react-native"
import { Divider, List, Text } from "react-native-paper"
import { styles } from "../container/styles"
import { BookType } from "@/data/types"
import { format } from "date-fns"

type BookInfoProps = Pick<
  BookType,
  "addedIn" | "startDate" | "endDate" | "category" | "description"
>

export const BookInfo = ({
  addedIn,
  startDate,
  endDate,
  category,
  description,
}: BookInfoProps) => {
  const BookTimeInfo = [
    {
      title: "Adicionado em:",
      value: addedIn,
    },
    {
      title: "Início da leitura:",
      value: startDate,
    },
    {
      title: "Fim da leitura:",
      value: endDate,
    },
  ]

  return (
    <View style={styles.bookInfoContainer}>
      {BookTimeInfo.map((item) => (
        <List.Item
          key={item.title}
          title={item.title}
          titleStyle={{ color: theme.colors.onSurfaceVariant }}
          right={() => (
            <Text
              variant="titleMedium"
              style={{ color: theme.colors.onSurface }}
            >
              {item.value ? format(item.value.toDate(), "dd/MM/yyyy") : "-"}
            </Text>
          )}
        />
      ))}

      <Divider bold style={styles.categoryDivider} />

      <List.Item
        title="Categoria:"
        titleNumberOfLines={1}
        titleStyle={{ color: theme.colors.onSurfaceVariant }}
        right={() => (
          <Text variant="titleMedium" style={{ color: theme.colors.onSurface }}>
            {category ? category : "-"}
          </Text>
        )}
      />

      {description && (
        <>
          <Divider bold style={styles.categoryDivider} />
          <List.Item
            title="COMENTÁRIO"
            titleStyle={styles.commentTitle}
            description={description ?? "-"}
            descriptionNumberOfLines={7}
            descriptionStyle={{
              fontSize: 16,
              color: "white",
            }}
          />
        </>
      )}
    </View>
  )
}
