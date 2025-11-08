import { StyleSheet } from "react-native";
import { theme } from "@/theme";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 8,
    backgroundColor: theme.colors.outlineVariant,
  },
  placeholder: {
    justifyContent: "center",
    alignItems: "center",
  },
  bookInfo: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
    textAlign: "left",
  },
  author: {
    fontSize: 18,
    color: theme.colors.tertiary,
    marginBottom: 4,
    fontWeight: "600",
  },
  genre: {
    fontSize: 14,
    color: theme.colors.onSurfaceVariant,
    marginBottom: 20,
    fontStyle: "italic",
  },
  description: {
    fontSize: 16,
    color: theme.colors.onSurfaceVariant,
    lineHeight: 22,
    marginBottom: 24,
    textAlign: "left",
  },
  details: {
    borderRadius: 8,
    padding: 16,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.outline,
  },
  label: {
    fontSize: 14,
    color: theme.colors.onSurfaceVariant,
    fontWeight: "500",
  },
  value: {
    fontSize: 14,
    color: "white",
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.outline,
    marginVertical: 24,
  },
  buttonContainer: {
    gap: 10,
    marginTop: 20,
  },
  authorContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  rating: {
    fontSize: 14,
    color: theme.colors.tertiary,
    marginRight: 4,
  },
  ratingsCount: {
    fontSize: 12,
    color: theme.colors.onSurfaceVariant,
  },
  freeText: {
    color: theme.colors.primary,
    fontWeight: '600',
  },
});

export default styles;