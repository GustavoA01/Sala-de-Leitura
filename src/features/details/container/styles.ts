import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  modalContainer: {
    marginTop: '50%',
    backgroundColor: theme.colors.surface,
    padding: 20,
    marginHorizontal: 16,
    borderRadius: 12,
    gap: 24
  },

  imageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },

  image: {
    width: 200,
    height: 300,
    borderRadius: 8,
    backgroundColor: theme.colors.outlineVariant,
  },

  placeholder: {
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
    textAlign: "center",
  },

  author: {
    fontSize: 18,
    color: theme.colors.tertiary,
    marginBottom: 4,
    fontWeight: "600",
  },

  description: {
    fontSize: 16,
    color: theme.colors.onSurfaceVariant,
    lineHeight: 22,
    marginBottom: 24,
    textAlign: "left",
  },

  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
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
    maxWidth: "80%",
    textAlign: "right",
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
    gap: 4
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
});