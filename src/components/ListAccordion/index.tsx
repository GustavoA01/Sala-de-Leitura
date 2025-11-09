import { FlatList } from "react-native-gesture-handler"
import { BookAccordion } from "@/features/BookAccordion/container/BookAccordion"
import { Divider, List } from "react-native-paper"
import { BookType } from "@/data/types"
import { theme } from "@/theme"

export const ListAccordion = ({data}: {data: BookType[]}) => {
  return (
    <List.AccordionGroup>
      <Divider
        style={{
          marginVertical: 4,
          backgroundColor: theme.colors.outlineVariant,
        }}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <BookAccordion
            id={item.id}
            title={item.title}
            author={item.author}
            status={item.status}
            description={item.description}
            rating={item.rating}
            category={item.category}
            addedIn={item.addedIn}
            startDate={item.startDate}
            endDate={item.endDate}
          />
        )}
      />
    </List.AccordionGroup>
  )
}
