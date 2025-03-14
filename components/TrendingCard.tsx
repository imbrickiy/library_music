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
    // <View className="w-lvw relative">
    //   <Image
    //     source={{
    //       uri: station.bg_image_mobile,
    //     }}
    //     className="size-32 rounded-lg"
    //     resizeMode="cover"
    //   />

    // <TouchableOpacity
    //   className="absolute top-2 right-2"
    //   onPress={() => {
    //     console.log("pressed");
    //   }}
    // >
    //   {station.mark ? (
    //     <Ionicons name="heart" size={24} color="white" />
    //   ) : (
    //     <Ionicons name="heart-outline" size={24} color="white" />
    //   )}
    // </TouchableOpacity>

    //   <View className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
    //     <Ionicons name="play" size={40} color="white" />
    //   </View>
    //   <Link href={`/stations/${station.id}`} asChild>
    //     <TouchableOpacity className="w-full h-10 absolute bg-background/70 bottom-0 hover:bg-background">
    //       <View className="max-w-32 m-auto flex-row items-center justify-center gap-2">
    //         <Image
    //           source={{
    //             uri: station.icon_fill_white,
    //           }}
    //           className="size-8"
    //         />
    //         <Text className="text-[0.5rem] text-wrap font-bold text-white max-w-28">
    //           {station.title}
    //         </Text>
    //       </View>
    //     </TouchableOpacity>
    //   </Link>
    // </View>
    <Link href={`/stations/${station.id}`} asChild>
      <TouchableOpacity className="grow-0 shrink-0 basis-1/4 w-32 max-w-1/4">
        <View className="w-full relative bg-background/90 rounded-lg border-opacity-10">
          
          <View className="absolute top-2 right-2">
            {station.mark ? (
              <Ionicons name="heart" size={20} color="white" />
            ) : (
              <Ionicons name="heart-outline" size={20} color="white" />
            )}
          </View>

          <View className=" mx-auto my-2 flex-col items-center justify-center gap-2 ">
            <Image
              source={{
                uri: station.icon_fill_white,
              }}
              className="size-20"
            />
            <View className="flex items-center justify-center h-9">
              <Text className=" text-white text-wrap max-w-32 text-sm overflow-hidden line-clamp-2 box-content">
                {station.title}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
