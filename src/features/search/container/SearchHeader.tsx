import { SearchController } from "@/components/SearchController"
import { View } from "react-native"
import { Divider } from "react-native-paper"
import { useForm } from "react-hook-form"

export const SearchHeader = () => {
  const { control } = useForm()
  const handleSearch = (value: string) => {
    console.log(value)
  }
  
  return (
    <View style={{ paddingHorizontal: 16 }}>
      <SearchController control={control} handleSearch={handleSearch} />
      <Divider style={{ marginTop: 16, marginBottom: 4 }} />
    </View>
  )
}
