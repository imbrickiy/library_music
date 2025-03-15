import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
// import stations from "@/assets/data/stations.json";

export default function StationDetail() {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        className="flex-1 px-3.5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
        }}
      >
        <View>
          <Text>Detail {id}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
