import { styles } from "@/features/details/container/styles"
import { Image, Linking, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Divider, Text } from "react-native-paper"
import { DetailsHeader } from "../components/DetailsHeader"
import { DetailsInfo } from "../components/DetailsInfo"
import { DetailsFooter } from "../components/DetailsFooter"
import { ConfirmBuyModal } from "../components/ConfirmBuyModal"
import { useState } from "react"

type BookDetailsProps = {
  book: {
    title: string
    author: string
    averageRating: number
    ratingsCount: number
    description: string
    imageLinks: {
      thumbnail: string
    }
    pages: number
    categories: string[]
    publisher: string
    publicationDate: string
    language: string
    buyLink: string
  }
}

export const BookDetails = ({ book }: BookDetailsProps) => {
  const [visible, setVisible] = useState(false)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)

  const handleAddToLibrary = () => {}

  const handleBuyBook = () => {
    if (book.buyLink && book.buyLink !== "#") {
      Linking.openURL(book.buyLink).catch((err) =>
        console.error("Erro ao abrir link:", err)
      )
    } else {
      console.log("Link de compra não disponível")
    }
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.imageContainer}>
        {book.imageLinks?.thumbnail ? (
          <Image
            source={{ uri: book.imageLinks.thumbnail }}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <View style={[styles.image, styles.placeholder]}>
            <Text style={{ color: "white" }}>Imagem não disponível</Text>
          </View>
        )}
      </View>

      <View>
        <DetailsHeader
          title={book.title}
          author={book.author}
          averageRating={book.averageRating}
          ratingsCount={book.ratingsCount}
          description={book.description}
        />
        <Divider bold style={{ marginVertical: 12 }} />

        <DetailsInfo
          pages={book.pages}
          categories={book.categories?.join(", ") || ""}
          publisher={book.publisher}
          publicationDate={book.publicationDate}
          language={book.language}
        />

        <DetailsFooter
          onAddToLibrary={handleAddToLibrary}
          showModal={showModal}
        />
      </View>
      
      <ConfirmBuyModal
        visible={visible}
        hideModal={hideModal}
        onBuyBook={handleBuyBook}
      />
    </ScrollView>
  )
}
