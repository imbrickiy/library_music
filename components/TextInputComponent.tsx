import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const TextInputComponent = () => {
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Введите текст:</Text>
      <TextInput
        style={styles.input}
        value={value} // Значение текстового поля
        onChangeText={setValue} // Обработчик изменения текста
        placeholder="Например, ваше имя"
      />
      <Text>Вы ввели: {value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { marginBottom: 10, fontSize: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default TextInputComponent;
