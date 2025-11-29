import { styles } from "@/features/details/container/styles"
import { Image, Linking, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Divider, Text } from "react-native-paper"
import { DetailsHeader } from "../components/DetailsHeader"
import { DetailsInfo } from "../components/DetailsInfo"
import { DetailsFooter } from "../components/DetailsFooter"
import { ConfirmBuyModal } from "../components/ConfirmBuyModal"
import { useState } from "react"
import { GoogleBook } from "@/data/types"
import { router } from "expo-router"

export const BookDetails = ({ book }: { book: GoogleBook }) => {
  const [visible, setVisible] = useState(false)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)

  const handleAddToLibrary = () => {
    router.push({
      pathname: "/book-form",
      params: {
        id: book.id,
        source: "google",
      },
    })
  }

  const handleBuyBook = () => {
    if (book.saleInfo?.buyLink && book.saleInfo.buyLink !== "#") {
      Linking.openURL(book.saleInfo.buyLink).catch((err) =>
        console.error("Erro ao abrir link:", err)
      )
    } else {
      console.log("Link de compra não disponível")
    }
  }

  const cleanHtmlDescription = (description: string) => {
    return description
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<[^>]+>/g, "")
      .trim()
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.imageContainer}>
        {book.volumeInfo.imageLinks?.thumbnail ? (
          <Image
            source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
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
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors?.[0] ?? ""}
          averageRating={book.volumeInfo.averageRating ?? 0}
          ratingsCount={book.volumeInfo.ratingsCount ?? 0}
          description={cleanHtmlDescription(book.volumeInfo.description ?? "")}
        />
        <Divider bold style={{ marginVertical: 12 }} />

        <DetailsInfo
          pages={book.volumeInfo.pageCount ?? 0}
          categories={book.volumeInfo.categories?.join(", ") || "-"}
          publisher={book.volumeInfo.publisher ?? "Editora não disponível"}
          publicationDate={
            book.volumeInfo.publishedDate ?? "Data de publicação não disponível"
          }
          language={book.volumeInfo.language ?? "Idioma não disponível"}
        />

        <DetailsFooter
          onAddToLibrary={handleAddToLibrary}
          showModal={showModal}
          isBookAvailable={book.saleInfo?.saleability === "FOR_SALE"}
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
