import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  return (
    <SafeAreaView className="flex-1 bg-black-200">
      <View className="p-4">
        <Text className="text-white">Profile</Text>
      </View>
    </SafeAreaView>
  );
}
