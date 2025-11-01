import { theme } from "@/theme"
import {
  Controller,
  useFormContext,
  FieldValues,
  UseControllerProps,
} from "react-hook-form"
import { TextInput, TextInputProps } from "react-native-paper"

type InputControllerProps<FormType extends FieldValues> = TextInputProps &
  UseControllerProps<FormType>

export const InputController = <FormType extends FieldValues>({
  name,
  label,
  placeholder,
  ...inputProps
}: InputControllerProps<FormType>) => {
  const { control } = useFormContext()
  
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          label={label}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          mode="outlined"
          style={{
            backgroundColor: theme.colors.surfaceVariant,
          }}
          {...inputProps}
        />
      )}
    />
  )
}
