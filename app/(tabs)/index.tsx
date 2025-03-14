import SearchBar from "@/components/SearchBar";
import TrendingCard from "@/components/TrendingCard";
import { Station, Stations } from "@/interfaces/stations";
import { Link } from "expo-router";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, View, Text, FlatList } from "react-native";
import usePlaylistStore from "@/store/usePlaylistStore";

export default function Index() {
  const opacity = useSharedValue(0);
  const fadeIn = () => {
    opacity.value = withTiming(1, { duration: 3000 });
  };
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const { data } = usePlaylistStore();

  
  useEffect(() => {
    fadeIn();
  }, []);
  
  const stations = data.stations;

  return (
    <View className="flex-1 bg-black-200">
      <Image
        source={require("@/assets/images/background.png")}
        className="absolute w-full z-0"
      />
      <View className="px-3.5 flex-1 pb-2">
        <Image
          source={require("@/assets/images/icon.png")}
          className="size-24 mt-20 mb-5 mx-auto"
        />
        <View className=" mt-5">
          <SearchBar />
        </View>
        <View className="mt-4 pb-safe-or-96 mx-auto">
          <Text className="text-white text-lg font-bold">Stations</Text>
          {/* <ActivityIndicator
            size="large"
            color="#ebebeb"
            className="my-safe-offset-10 self-center"
          /> */}
          {stations && (
            <Animated.FlatList
              style={animatedStyle}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: "flex-start",
                gap: 20,
                paddingRight: 5,
                marginBottom: 10,
              }}
              className="mt-2 pb-28"
              data={stations.stations}
              contentContainerStyle={{
                gap: 18,
              }}
              renderItem={({ item: station, index }) => (
                <View key={index}>
                  <TrendingCard station={station} />
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <View className="w-4" />}
            />
          )}
        </View>
        <View className=""></View>
      </View>
    </View>
  );
}
