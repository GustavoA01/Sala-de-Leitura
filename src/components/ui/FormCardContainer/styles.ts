import { StyleSheet } from "react-native"
import { theme } from "@/theme"

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.outline,
    borderRadius: theme.roundness,
  },

  icon: {
    marginRight: 8,
  },

  content: {
    padding: 16,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },

  divider: {
    backgroundColor: theme.colors.outline,
    marginBottom: 8,
  }
})
