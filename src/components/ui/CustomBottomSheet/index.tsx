import RBSheet from "react-native-raw-bottom-sheet"
import { theme } from "@/theme"

type CustomBottomSheetProps = {
  children: React.ReactNode
  bottomSheetRef: any
  height?: number
}

export const CustomBottomSheet = ({ children, bottomSheetRef, height}: CustomBottomSheetProps) => {
  return (
    <RBSheet
        ref={bottomSheetRef}
        closeOnPressMask={true}
        height={height ?? 350}
        draggable
        dragOnContent
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          container: {
            backgroundColor: theme.colors.surface,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          draggableIcon: {
            backgroundColor: "#444",
          },
        }}
        customModalProps={{
          animationType: "slide",
          statusBarTranslucent: true,
        }}
      >
        {children}
      </RBSheet>
  )
}