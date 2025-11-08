import { StackHeader } from "@/components/StackHeader";
import SafeAreaWrapper from "@/components/ui/SafeAreaWrapper";
import { useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView, Image, Linking } from "react-native";
import { CustomButton } from "@/components/Button";
import { booksMock } from "@/data/constants";
import styles from "./styles";

const DetailsScreen = () => {
  const { id } = useLocalSearchParams();
  console.log(id);

  const book = booksMock.find((b) => b.id === id) || booksMock[0];

  const handleAddToLibrary = () => {
    console.log("Adicionando à biblioteca:", book.title);
  };

  const handleBuyBook = () => {
    if (book.buyLink && book.buyLink !== "#") {
      Linking.openURL(book.buyLink).catch((err) =>
        console.error("Erro ao abrir link:", err)
      );
    } else {
      console.log("Link de compra não disponível");
    }
  };

  return (
    <SafeAreaWrapper>
      <StackHeader title="Detalhes" />
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

        <View style={styles.bookInfo}>
          <Text style={styles.title}>{book.title}</Text>
          
          <View style={styles.authorContainer}>
            <Text style={styles.author}>{book.author}</Text>
            {book.averageRating && (
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>⭐ {book.averageRating}</Text>
                <Text style={styles.ratingsCount}>
                  ({book.ratingsCount} avaliações)
                </Text>
              </View>
            )}
          </View>

          <Text style={styles.description}>{book.description}</Text>
          <View style={styles.divider} />

          <View style={styles.details}>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Páginas</Text>
              <Text style={styles.value}>{book.pages}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Editora</Text>
              <Text style={styles.value}>{book.publisher}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Publicado em</Text>
              <Text style={styles.value}>{book.publicationDate}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Idioma</Text>
              <Text style={styles.value}>
                {book.language === 'en' ? 'Inglês' : 
                 book.language === 'pt' ? 'Português' : book.language}
              </Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton
              title="+ Adicionar à Biblioteca"
              onPress={handleAddToLibrary}
            />
            <CustomButton
              title="Comprar Livro"
              onPress={handleBuyBook}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default DetailsScreen;