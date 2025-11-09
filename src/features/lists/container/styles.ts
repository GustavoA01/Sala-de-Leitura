import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },

  listItem: {
    backgroundColor: theme.colors.surface,
    borderRadius: 14,
    marginBottom: 14,
  },

  addButton: {
    alignSelf: "flex-end",
    marginBottom: 16,
  },
});
