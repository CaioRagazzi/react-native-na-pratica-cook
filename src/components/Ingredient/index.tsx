import { Image, Pressable, PressableProps, Text } from "react-native"
import { styles } from "./style"
import { useState } from "react"

export type IngredientProps = {
  name: string
  image: string
  selected?: boolean
}

export default function Ingredient({
  name,
  image,
  selected,
  ...rest
}: IngredientProps & PressableProps) {
  return (
    <Pressable
      style={[styles.container, selected && styles.selected]}
      {...rest}
    >
      <Image source={require("@/assets/apple.png")} style={styles.image} />
      <Text style={styles.title}>maca</Text>
    </Pressable>
  )
}
