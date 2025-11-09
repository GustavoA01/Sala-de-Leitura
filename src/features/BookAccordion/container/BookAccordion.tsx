import { View } from "react-native"
import { List } from "react-native-paper"
import { AccordionDescription } from "../components/AccordionDescription"
import { CustomBottomSheet } from "../../../components/ui/CustomBottomSheet"
import { useRef } from "react"
import { BookInfo } from "../components/BookInfo"
import { RightAccordion } from "../components/RightAccordion"
import { BookEditOptions } from "../components/BookEditOptions"
import { BookType } from "@/data/types"
import { router, usePathname } from "expo-router"
import { format } from "date-fns"

export const BookAccordion = ({
  id,
  title,
  author,
  status,
  description,
  rating,
  category,
  addedIn,
  startDate,
  endDate,
}: BookType) => {
  const bottomSheetRef = useRef<any>(null)
  const onOpenBottomSheet = () => bottomSheetRef.current?.open()
  const pathname = usePathname()
  const isListPathName = pathname.includes('/list-details')

  const handleEdit = () => {
    bottomSheetRef.current?.close()
    router.push(`/book-form?id=${id}`)
  }

  const handleAddToList = () => {
    bottomSheetRef.current?.close()
  }

  const handleDelete = () => {
    bottomSheetRef.current?.close()
  }

  const handleRemoveFromList = () => {
    bottomSheetRef.current?.close()
  }

  return (
    <View>
      <List.Accordion
        id={id}
        title={title}
        titleNumberOfLines={1}
        description={
          <AccordionDescription author={author ?? "-"} status={status} />
        }
        descriptionNumberOfLines={1}
        onLongPress={onOpenBottomSheet}
        delayLongPress={200}
        right={() => (rating ? <RightAccordion rating={rating} /> : null)}
      >
        <BookInfo
          addedIn={addedIn ? format(new Date(addedIn), "dd/MM/yyyy") : "-"}
          startDate={startDate ? format(new Date(startDate), "dd/MM/yyyy") : "-"}
          endDate={endDate ? format(new Date(endDate), "dd/MM/yyyy") : "-"}
          category={category ?? "-"}
          description={description ?? ""}
        />
      </List.Accordion>

      <CustomBottomSheet height={isListPathName ? 350 : 300} bottomSheetRef={bottomSheetRef}>
        <BookEditOptions
          bookTitle={title}
          onEdit={handleEdit}
          onAddToList={handleAddToList}
          onRemoveFromList={
            isListPathName ? handleRemoveFromList : undefined
          }
          onDelete={handleDelete}
        />
      </CustomBottomSheet>
    </View>
  )
}
