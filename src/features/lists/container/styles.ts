import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 170,
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

  addModalContainer: {
    padding: 16,
    justifyContent: "space-between",
    paddingBottom:24,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.roundness,
    marginHorizontal: 16
  },

  addModalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16
  }
});
