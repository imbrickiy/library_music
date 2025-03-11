import { View, TextInput, Platform } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SearchBar() {
  return (
    <View className="flex-row items-center bg-background/90 rounded-full px-5 py-4 row-auto">
      <Ionicons
        name="search"
        color={"#ebebeb"}
        size={20}
        className=" contain-content resize"
      />
      <TextInput
        onPress={() => {}}
        placeholder="Search"
        value=""
        onChangeText={() => {}}
        placeholderTextColor={"#ebebeb"}
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
}
