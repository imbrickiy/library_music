import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import { Alert, Animated, Button, StyleSheet, View } from "react-native";

export default function ButtonAnimated() {
  const animationValue = useRef(new Animated.Value(0)).current;

  const runAnimationOnClick = () => {
    Animated.spring(animationValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View>
      <Animated.View
        style={{
          height: 10,
          width: 10,
          backgroundColor: "red",
          transform: [
            {
              scale: animationValue.interpolate({
                inputRange: [0, 6],
                outputRange: [6, 2],
              }),
            },
          ],
        }}
      />
      <Button title="Scale Up" onPress={runAnimationOnClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D2D2D",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  simpleButton: {
    backgroundColor: "#988EAA",
  },
});
