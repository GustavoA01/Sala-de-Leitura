import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 16,
  },

  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  
  statusChipsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },

  addButtonContainer: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})