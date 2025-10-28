import { Button, Icon } from "react-native-paper"
import { theme } from "@/theme"

type AddButtonProps ={
  onPress: () => void
}

export const AddButton = ({onPress}: AddButtonProps) => {
  return (
    <Button
      mode="outlined"
      onPress={onPress}
      icon={(props) => (
        <Icon source="plus" size={props.size} color={theme.colors.primary} />
      )}
      textColor={theme.colors.onSurface}
    >
      Adicionar
    </Button>
  )
}
