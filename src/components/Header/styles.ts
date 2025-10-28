import { theme } from "../../theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: theme.colors.onBackground,
  },

  accountButton: {
    backgroundColor: theme.colors.outlineVariant,
    borderRadius: 100,
    padding: 8,
  },
})