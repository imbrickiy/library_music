import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Button,
} from "react-native";
import { Link } from "expo-router";
import TextInputComponent from "@/components/TextInputComponent";
import ButtonAnimated from "@/components/AddButton";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Search() {
  return (
    <SafeAreaView className="flex-1 bg-black-200">
      <View className="p-4">
        <Text className="text-white">Search</Text>
      </View>
      <View className="absolute bottom-32 right-3 rounded-full bg-white">
        <Link href="/modal">
          <Ionicons name="add" size={24} className="p-4" />
        </Link>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
