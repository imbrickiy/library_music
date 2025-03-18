import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
// import stations from "@/assets/data/stations.json";

export default function StationDetail() {
  const { id } = useLocalSearchParams();


  return (
    <View>
      <Text>Detail {id}</Text>
    </View>
  );
}
