import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Link } from "expo-router";
import TextInputComponent from "@/components/TextInputComponent";
import ButtonAnimated from "@/components/ButtonAnimated";

export default function Search() {
  return (
    <SafeAreaView className="flex-1 bg-black-200">
      <View className="p-4">
        <Text className="text-white">Search</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
