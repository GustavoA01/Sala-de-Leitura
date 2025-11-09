import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  headerTitle: {
    color: theme.colors.onBackground,
    fontWeight: "bold",
  },
  listContent: {
    paddingBottom: 100,
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: 14,
    marginBottom: 14,
    elevation: 2,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
  iconContainer: {
    width: 50,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 6,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: theme.colors.onSurface,
    fontSize: 18,
    fontWeight: "600",
  },
  subtitle: {
    color: theme.colors.onSurfaceVariant,
    fontSize: 14,
    marginBottom: 6,
  },
  bookList: {
    marginTop: 4,
    marginLeft: 8,
  },
  bookItem: {
    color: theme.colors.onSurfaceVariant,
    fontSize: 14,
    marginTop: 2,
  },
  emptyText: {
    color: theme.colors.onSurfaceVariant,
    fontSize: 13,
    marginTop: 2,
    fontStyle: "italic",
  },
  modalContainer: {
    backgroundColor: theme.colors.surface,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 12,
  },
  modalTitle: {
    color: theme.colors.onSurface,
    marginBottom: 12,
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
  },
  addButton: {
    alignSelf: "center",
    width: "100%",
  },
});
