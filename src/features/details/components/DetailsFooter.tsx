import { styles } from "@/features/details/container/styles"
import { AddButton } from "@/components/ui/AddButton"
import { theme } from "@/theme"
import { View } from "react-native"
import { Button } from "react-native-paper"

type DetailsFooterProps = {
  onAddToLibrary: () => void
  showModal: () => void
  isBookAvailable: boolean
}

export const DetailsFooter = ({
  onAddToLibrary,
  showModal,
  isBookAvailable,
}: DetailsFooterProps) => {
  return (
    <View style={styles.buttonContainer}>
      <AddButton onPress={onAddToLibrary} />
      <Button
        buttonColor={theme.colors.secondary}
        mode="contained"
        onPress={showModal}
        disabled={!isBookAvailable}
      >
        Comprar Livro
      </Button>
    </View>
  )
}
