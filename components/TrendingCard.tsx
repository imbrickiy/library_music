import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Station } from "@/interfaces/stations";
import Ionicons from "@expo/vector-icons/Ionicons";

interface TrendingCardProps {
  station: Station;
}

export default function TrendingCard({ station }: TrendingCardProps) {
  return (
    <View className="w-lvw relative">
      <Image
        source={{
          uri: station.bg_image_mobile,
        }}
        className="size-32 rounded-lg"
        resizeMode="cover"
      />

      <TouchableOpacity
        className="absolute top-2 right-2"
        onPress={() => {
          console.log("pressed");
        }}
      >
        {station.mark ? (
          <Ionicons name="heart" size={24} color="white" />
        ) : (
          <Ionicons name="heart-outline" size={24} color="white" />
        )}
      </TouchableOpacity>

      <View className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
        <Ionicons name="play" size={40} color="white" />
      </View>
      <Link href={`/stations/${station.id}`} asChild>
        <TouchableOpacity className="w-full h-10 absolute bg-background/70 bottom-0 hover:bg-background">
          <View className="max-w-32 m-auto flex-row items-center justify-center gap-2">
            <Image
              source={{
                uri: station.icon_fill_white,
              }}
              className="size-8"
            />
            <Text className="text-[0.5rem] text-wrap font-bold text-white max-w-28">
              {station.title}
            </Text>
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
