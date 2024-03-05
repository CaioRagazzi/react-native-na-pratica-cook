import { Alert, ScrollView, Text, View } from "react-native"
import { styles } from "./style"
import Ingredient from "@/components/Ingredient"
import Ingredients from "@/components/Ingredients"
import Selected from "@/components/Selected"
import { useState } from "react"

export default function Index() {
  const [selected, setSelected] = useState<string[]>([])

  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value))
    }

    setSelected((state) => [...state, value])
  }

  function handleOnClearSelected(): void {
    Alert.alert("Limpar", "Deseja limpar tudo", [
      { text: "Nao", style: "cancel" },
      { text: "Sim", onPress: () => setSelected([]) },
    ])
  }

  function handleOnSearch(): void {
    throw new Error("Function not implemented.")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>
      <Text style={styles.message}>
        Descubra receitas baseadas nos produtos que voce escolheu
      </Text>

      <ScrollView
        contentContainerStyle={styles.ingredients}
        showsVerticalScrollIndicator={false}
      >
        {Array.from({ length: 100 }).map((_, index) => {
          return (
            <Ingredient
              key={index}
              name="Tomate"
              image=""
              selected={selected.includes(String(index))}
              onPress={() => handleToggleSelected(String(index))}
            />
          )
        })}
      </ScrollView>

      {selected.length > 0 && (
        <Selected
          quantity={selected.length}
          onClear={handleOnClearSelected}
          onSearch={handleOnSearch}
        />
      )}
    </View>
  )
}
