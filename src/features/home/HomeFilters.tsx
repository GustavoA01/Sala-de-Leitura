import { View } from "react-native"
import { styles } from "../Filters/container/styles"
import { StatusChip } from "../Filters/components/FilterChip"
import { SearchController } from "@/components/SearchController"
import { useForm } from "react-hook-form"
import { router } from "expo-router"
import { filtersLabel } from "@/data/constants"
import { AddSortContainer } from "../Filters/container/AddSortContainer"
import { useFilters } from "./hooks/UseFilters"

export const HomeFilters = () => {
  const { control } = useForm()
  const {
    setSearchTerm,
    setSelectedFilter,
    selectedFilter,
    selectedSort,
    setSelectedSort,
  } = useFilters()

  const handleFilter = (filter: number | undefined) => {
    setSelectedFilter(filter)
  }

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  return (
    <View style={styles.container}>
      <View style={styles.statusChipsContainer}>
        {filtersLabel.map((filter) => {
          const isSelected = selectedFilter === filter.value
          return (
            <StatusChip
              key={filter.label}
              label={filter.label}
              value={filter.value ?? undefined}
              isSelected={isSelected}
              handlePressFilter={handleFilter}
            />
          )
        })}
      </View>

      <SearchController control={control} handleSearch={handleSearch} />
      <AddSortContainer
        onPressAddButton={() => router.push("/book-form")}
        selectedSort={selectedSort}
        onSelectSort={setSelectedSort}
      />
    </View>
  )
}
