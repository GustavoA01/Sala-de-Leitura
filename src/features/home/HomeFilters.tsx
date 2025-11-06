import { View } from "react-native"
import { styles } from "../Filters/container/styles"
import { useState } from "react"
import { StatusChip } from "../Filters/components/FilterChip"
import { SearchController } from "@/components/SearchController"
import { useForm } from "react-hook-form"
import { router } from "expo-router"
import { filtersLabel } from "@/data/constants"
import { AddSortContainer } from "../Filters/container/AddSortContainer"

export const HomeFilters = () => {
  const [selectedFilter, setSelectedFilter] = useState<number | undefined>(
    undefined
  )
  const [selectedSort, setSelectedSort] = useState<string>("")

  const { control } = useForm()

  const handleFilter = (filter: number | undefined) => {
    setSelectedFilter(filter)
    console.log(filter)
  }

  const handleSelectSort = (value: string) => {
    setSelectedSort(value)
    console.log(value)
  }

  const handleSearch = (value: string) => {
    console.log(value)
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
        onSelectSort={handleSelectSort}
      />
    </View>
  )
}
