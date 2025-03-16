import { View, Text, SafeAreaView } from "react-native";
import React from "react";

export default function Saved() {
  return (
    <SafeAreaView className="flex-1 bg-black-200">
      <View className="p-4">
        <Text className="text-white">Saved</Text>
      </View>
    </SafeAreaView>
  );
}
