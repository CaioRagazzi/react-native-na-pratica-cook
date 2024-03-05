import { View, Text } from "react-native"
import Animated, {
  SlideInDown,
  BounceInDown,
  BounceOutDown,
} from "react-native-reanimated"
import { styles } from "./style"
import { MaterialIcons } from "@expo/vector-icons"
import { theme } from "@/theme"

export type props = {
  quantity: number
  onClear: () => void
  onSearch: () => void
}

export default function Selected({ quantity, onClear, onSearch }: props) {
  return (
    <Animated.View
      style={styles.container}
      entering={SlideInDown.duration(500)}
      exiting={BounceOutDown}
    >
      <View style={styles.header}>
        <Text style={styles.label}>{quantity} ingredientes selecionados</Text>
        <MaterialIcons
          name="close"
          size={24}
          onPress={onClear}
          color={theme.colors.gray_400}
        />
      </View>
    </Animated.View>
  )
}
