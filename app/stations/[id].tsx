import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import stations from "@/assets/data/stations.json";
import { Station } from "@/interfaces/stations";

export default function StationDetail() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const data = stations.stations.stations.find((station: Station) => station.id === Number(id));
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
              className="flex-1 px-3.5"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                minHeight: "100%",
              }}
            >
        <View className="mt-5">
          <Text className="text-white">Detail {data?.title}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
