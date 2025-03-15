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
    <SafeAreaView className="flex-1">
      <View className="p-4">
        <ButtonAnimated />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  simpleButton: {
    backgroundColor: "#988EAA",
  },
  touchableButton: {
    backgroundColor: "#00000080",
  },
  textStyle: {
    color: "white",
    fontSize: 16,
    paddingVertical: 10,
  },
});
