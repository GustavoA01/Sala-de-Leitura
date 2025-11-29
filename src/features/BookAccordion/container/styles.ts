import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  statusChip: {
    height: 24,
    minWidth: 50,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },

  statusLabel:{
    color: theme.colors.onSurface,
    fontWeight: "bold",
  },

  accordionDescriptionContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    marginTop: 4,
  },

  authorName: {
    color: theme.colors.onSurfaceVariant,
  },

  bookInfoContainer: {
    padding: 16,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },

  commentTitle: {
    fontSize: 16,
    marginBottom: 8,
    color: theme.colors.onSurfaceVariant,
  },

  rightAccordionContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  categoryDivider: {
    marginVertical: 8,
    backgroundColor: theme.colors.outline,
  },

  modalContainer: {
    backgroundColor: theme.colors.surface,
    padding: 20,
    marginHorizontal: 16,
    borderRadius: 12,
    gap: 24,
  },
})