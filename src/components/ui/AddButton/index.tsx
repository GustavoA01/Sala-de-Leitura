import { Button, Icon } from "react-native-paper"
import { theme } from "@/theme"
import { StyleProp, ViewStyle } from "react-native"

type AddButtonProps = {
  onPress: () => void
  style?: StyleProp<ViewStyle>
}

export const AddButton = ({onPress, style}: AddButtonProps) => {
  return (
    <Button
      mode="outlined"
      onPress={onPress}
      icon={(props) => (
        <Icon source="plus" size={props.size} color={theme.colors.primary} />
      )}
      textColor={theme.colors.onSurface}
      style={style}
    >
      Adicionar
    </Button>
  )
}
