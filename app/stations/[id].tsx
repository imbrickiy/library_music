import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function StationDetail() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Detail {id}</Text>
    </View>
  );
}
