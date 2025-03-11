import SearchBar from "@/components/SearchBar";
import TrendingCard from "@/components/TrendingCard";
import { Station } from "@/interfaces/stations";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  View,
  Text,
  FlatList,

} from "react-native";
// import stations from "@/assets/data/stations.json";
export default function Index() {

  const stationData = require("@/assets/data/stations.json");
  const stations = stationData.stations.stations;

  return (
    <View className="flex-1 bg-black-200">
      <Image
        source={require("@/assets/images/background.png")}
        className="absolute w-full z-0"
      />
      <ScrollView
        className="flex-1 px-3.5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <Image
          source={require("@/assets/images/icon.png")}
          className="size-24 mt-20 mb-5 mx-auto"
        />
        <View className=" mt-5">
          <SearchBar />
        </View>
        <View className="mt-4">
          <Text className="text-white text-lg font-bold">Stations</Text>
          {/* <ActivityIndicator
            size="large"
            color="#ebebeb"
            className="my-safe-offset-10 self-center"
          /> */}
          {stationData.stations.stations && (
            <FlatList
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: "flex-start",
                gap: 20,
                paddingRight: 5,
                marginBottom: 10,
              }}
              className="mt-2 pb-28"
              data={stations}
              contentContainerStyle={{
                gap: 18,
              }}
              renderItem={({ item: station, index }) => (
                <View key={index}>
                  <TrendingCard station={station} />
                </View>
              )}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <View className="w-4" />}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}
