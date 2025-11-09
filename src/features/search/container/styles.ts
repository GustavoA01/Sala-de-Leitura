import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 16,
    paddingHorizontal: 8,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  card: {
    width: "48%",
    backgroundColor: theme.colors.surface,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  cardImage: {
    width: "100%",
    aspectRatio: 0.7,
    backgroundColor: theme.colors.surfaceVariant,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: theme.colors.onSurface,
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 12,
    color: theme.colors.onSurfaceVariant,
  },
})