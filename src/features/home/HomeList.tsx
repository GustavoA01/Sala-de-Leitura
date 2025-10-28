import { ListAccordion } from "@/components/ListAccordion"
import { mockData } from "@/data/constants"

export const HomeList = () => {
  return (
    <ListAccordion data={mockData} />
  )
}