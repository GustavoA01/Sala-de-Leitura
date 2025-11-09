import { AddButton } from "@/components/ui/AddButton"
import { FlatList, View } from "react-native"
import { ListItem } from "../components/ListItem"
import { styles } from "./styles"

const lists = [
  {
    id: "1",
    title: "Meus Favoritos",
    books: [
      { id: "b1", title: "Duna" },
      { id: "b2", title: "Neuromancer" },
      { id: "b3", title: "1984" },
      { id: "b4", title: "Admirável Mundo Novo" },
      { id: "b5", title: "O Conto da Aia" },
    ],
  },
  {
    id: "2",
    title: "Ficção Científica",
    books: [],
  },
]

export const ListsContainer = () => {
  return (
    <View style={styles.container}>
      <AddButton onPress={() => {}} style={styles.addButton} />
      <View>
        <FlatList
          data={lists}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              description={
                item.books.length > 0
                  ? `${item.books.length} livro${
                      item.books.length > 1 ? "s" : ""
                    }`
                  : "Nenhum livro adicionado"
              }
              onPress={() => {}}
              onPressIcon={() => {}}
            />
          )}
        />
      </View>
    </View>
  )
}
