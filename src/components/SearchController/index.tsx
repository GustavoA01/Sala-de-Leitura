import { theme } from "@/theme"
import { Control, Controller, FieldValues } from "react-hook-form"
import { Searchbar } from "react-native-paper"

type SearchControllerProps = {
  control: Control<FieldValues, any>
  handleSearch: (value: string) => void
}

export const SearchController = ({ control, handleSearch }: SearchControllerProps) => {
  return (  
    <Controller
      control={control}
      name="search"
      render={({ field }) => (
        <Searchbar
          placeholder="Buscar"
          placeholderTextColor={theme.colors.onSurface}
          inputStyle={{ color: "white" }}
          style={{ backgroundColor: theme.colors.surfaceVariant }}
          value={field.value}
          onChangeText={handleSearch}
        />
      )}
    />
  )
}
