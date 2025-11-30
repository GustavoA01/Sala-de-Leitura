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

  settingsContainer: {
    padding: 16,
    flex: 1,
    justifyContent:'space-between',
    marginBottom: 16,
  },

  settingsTitle: {
    color: theme.colors.onBackground,
  },

  accountContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  accountText: {
    color: theme.colors.onBackground,
    fontSize: 16,
    fontWeight: "bold",
  },

  modalContainer: {
    backgroundColor: theme.colors.surface,
    padding: 20,
    marginHorizontal: 16,
    borderRadius: 12,
    gap: 24,
  },
})