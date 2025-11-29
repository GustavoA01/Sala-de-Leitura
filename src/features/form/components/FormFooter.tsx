import { View } from "react-native"
import { ActivityIndicator, Button, Text } from "react-native-paper"
import { styles } from "../container/styles"
import { theme } from "@/theme"

type FormFooterProps = {
  onSave: () => void
  onCancel: () => void
  isValid: boolean
  isLoading: boolean
}

export const FormFooter = ({
  onSave,
  onCancel,
  isValid,
  isLoading,
}: FormFooterProps) => {
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
        {isLoading ? (
          <ActivityIndicator color={theme.colors.onSurface} />
        ) : (
          "Salvar"
        )}
      </Button>
    </View>
  )
}
