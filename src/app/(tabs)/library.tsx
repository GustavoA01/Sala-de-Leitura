import React, { useState } from "react";
import { View, FlatList } from "react-native";
import {
  Text,
  IconButton,
  Card,
  Modal,
  Portal,
  TextInput,
  Button,
  Menu,
  Divider,
} from "react-native-paper";
import SafeAreaWrapper from "@/components/ui/SafeAreaWrapper";
import { Header } from "@/components/Header";
import { theme } from "@/theme";
import { styles } from "./LibraryScreen.styles";

const LibraryScreen = () => {
  const [lists, setLists] = useState([
    {
      id: "1",
      title: "Meus Favoritos",
      icon: "heart",
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
      icon: "atom",
      books: [
        { id: "b6", title: "Fundação" },
        { id: "b7", title: "O Fim da Eternidade" },
        { id: "b8", title: "Contato" },
        { id: "b9", title: "O Jogo do Exterminador" },
      ],
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState<string | null>(null);
  const [selectedList, setSelectedList] = useState<any>(null);
  const [newListName, setNewListName] = useState("");
  const [newBookTitle, setNewBookTitle] = useState("");
  const [bookModalVisible, setBookModalVisible] = useState(false);

  // Criação de nova lista
  const handleAddList = () => {
    if (!newListName.trim()) return;
    const newList = {
      id: Math.random().toString(),
      title: newListName,
      icon: "book-open-variant",
      books: [],
    };
    setLists([...lists, newList]);
    setNewListName("");
    setModalVisible(false);
  };

  // Adicionar livro à lista selecionada
  const handleAddBook = () => {
    if (!newBookTitle.trim() || !selectedList) return;

    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === selectedList.id
          ? {
              ...list,
              books: [
                ...list.books,
                { id: Math.random().toString(), title: newBookTitle },
              ],
            }
          : list
      )
    );

    setNewBookTitle("");
    setBookModalVisible(false);
    setMenuVisible(null);
  };

  // Remover todos os livros de uma lista
  const handleClearBooks = (listId: string) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId ? { ...list, books: [] } : list
      )
    );
    setMenuVisible(null);
  };

  // Renderização de cada lista
  const renderItem = ({ item }: any) => (
    <Card style={styles.card} mode="elevated">
      <Card.Content style={styles.cardContent}>
        <View style={styles.iconContainer}>
          <IconButton
            icon={item.icon}
            size={32}
            iconColor={theme.colors.primary}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>
            Lista • {item.books.length}{" "}
            {item.books.length === 1 ? "livro" : "livros"}
          </Text>

          {item.books.length > 0 ? (
            <View style={styles.bookList}>
              {item.books.map((book: any) => (
                <Text key={book.id} style={styles.bookItem}>
                  • {book.title}
                </Text>
              ))}
            </View>
          ) : (
            <Text style={styles.emptyText}>
              Nenhum livro nesta lista ainda.
            </Text>
          )}
        </View>

        {/* Menu de opções */}
        <Menu
          visible={menuVisible === item.id}
          onDismiss={() => setMenuVisible(null)}
          anchor={
            <IconButton
              icon="dots-vertical"
              size={24}
              iconColor={theme.colors.onSurfaceVariant}
              onPress={() => {
                setSelectedList(item);
                setMenuVisible(item.id);
              }}
            />
          }
        >
          <Menu.Item
            leadingIcon="plus"
            title="Adicionar livro"
            onPress={() => {
              setBookModalVisible(true);
              setMenuVisible(null);
            }}
          />
          <Divider />
          <Menu.Item
            leadingIcon="delete"
            title="Remover todos os livros"
            onPress={() => handleClearBooks(item.id)}
          />
        </Menu>
      </Card.Content>
    </Card>
  );

  return (
    <SafeAreaWrapper>
      <Header />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text variant="headlineMedium" style={styles.headerTitle}>
            Sua Biblioteca
          </Text>
          <IconButton
            icon="plus-circle-outline"
            iconColor={theme.colors.primary}
            size={28}
            onPress={() => setModalVisible(true)}
          />
        </View>

        <FlatList
          data={lists}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
        />

        {/* MODAL para adicionar nova lista */}
        <Portal>
          <Modal
            visible={modalVisible}
            onDismiss={() => setModalVisible(false)}
            contentContainerStyle={styles.modalContainer}
          >
            <Text variant="titleMedium" style={styles.modalTitle}>
              Nova Categoria
            </Text>
            <TextInput
              label="Nome da nova lista"
              value={newListName}
              onChangeText={setNewListName}
              mode="outlined"
              style={styles.input}
              activeOutlineColor={theme.colors.primary}
            />
            <Button
              mode="contained"
              onPress={handleAddList}
              style={styles.addButton}
            >
              Criar
            </Button>
          </Modal>

          {/* MODAL para adicionar um livro */}
          <Modal
            visible={bookModalVisible}
            onDismiss={() => setBookModalVisible(false)}
            contentContainerStyle={styles.modalContainer}
          >
            <Text variant="titleMedium" style={styles.modalTitle}>
              Adicionar livro em "{selectedList?.title}"
            </Text>
            <TextInput
              label="Título do livro"
              value={newBookTitle}
              onChangeText={setNewBookTitle}
              mode="outlined"
              style={styles.input}
              activeOutlineColor={theme.colors.primary}
            />
            <Button
              mode="contained"
              onPress={handleAddBook}
              style={styles.addButton}
            >
              Adicionar
            </Button>
          </Modal>
        </Portal>
      </View>
    </SafeAreaWrapper>
  );
};

export default LibraryScreen;
