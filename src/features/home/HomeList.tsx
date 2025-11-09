import { ListAccordion } from "@/components/ListAccordion"
import { accordionMock } from "@/data/mocks"

export const HomeList = () => {
  return (
    <ListAccordion data={accordionMock} />
  )
}