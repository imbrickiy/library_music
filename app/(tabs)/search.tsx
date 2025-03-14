import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Search() {
  return (
    <Link href={"/"} asChild>
      <TouchableOpacity className="w-32 relative pl-5">
        <Image
          source={{
            uri: "https://www.radiorecord.ru/upload/iblock/cb0/livedjsets.jpeg",
          }}
          className="w-32 h-48 rounded-lg"
          resizeMode="cover"
        />
        <View className="absolute bottom-9 -left-3.5 px-2 py-1 rounded-full">
          <Text numberOfLines={2} className="font-bold text-white text-6xl">
            index
          </Text>
        </View>
        <Text
          className="absolute text-sm font-bold text-light-200"
          numberOfLines={2}
        >
          title
        </Text>
      </TouchableOpacity>
    </Link>
  );
}
