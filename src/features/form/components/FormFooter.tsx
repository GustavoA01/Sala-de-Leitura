import { View } from "react-native"
import { Button, Text } from "react-native-paper"
import { styles } from "./styles"
import { theme } from "@/theme"

type FormFooterProps = {
  onSave: () => void
  onCancel: () => void
  isValid: boolean
}

export const FormFooter = ({ onSave, onCancel, isValid }: FormFooterProps) => {
  return (
    <View style={styles.footerContainer}>
      <Button
        textColor={theme.colors.onSurface}
        mode="outlined"
        style={{ flex: 1 }}
        onPress={onCancel}
      >
        Cancelar
      </Button>
      <Button
        mode="contained"
        style={{ flex: 1 }}
        onPress={onSave}
        disabled={!isValid}
      >
        Salvar
      </Button>
    </View>
  )
}
