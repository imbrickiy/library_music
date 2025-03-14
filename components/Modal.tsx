import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  Pressable,
  StyleSheet,
  View,
  Text,
} from "react-native";
export default function ModalComponent({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) {
  // This variable is the total value of height of the screen.
  const screenHeight = Dimensions.get("screen").height;
  const panY = useRef(new Animated.Value(screenHeight)).current;

  // This allows to set a duration for timing when the dialog is open
  const resetPositionAnim = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  // This allows to set a duration for timing when the dialog is close
  const closeAnim = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 500,
    useNativeDriver: true,
  });

  // translate Y position to align with Animated value
  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  // This method will trigger to dismiss the dialog
  const handleDismiss = () => closeAnim.start(props.onDismiss);

  // Side effect when resetPositionAnim is triggered it will automatically run the start() method.
  useEffect(() => {
    resetPositionAnim.start();
  }, [resetPositionAnim]);

  // PanResponder reconciles several touches into a single gesture.
  // It makes single-touch gestures resilient to extra touches,
  // and can be used to recognize basic multi-touch gestures
  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: Animated.event([null, { dy: panY }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gs) => {
        if (gs.dy > 0 && gs.vy > 2) {
          return handleDismiss();
        }
        return resetPositionAnim.start();
      },
    })
  ).current;
  return (
    <View>
      <Modal
        visible={open}
        animationType="fade"
        transparent
        onRequestClose={handleDismiss}
      >
        <Pressable onPress={handleDismiss} style={styles.overlay}>
          <Animated.View
            style={{
              ...styles.container,
              transform: [{ translateY: translateY }],
            }}
            {...panResponders.panHandlers}
          >
            <View style={styles.sliderIndicatorRow}>
              <View style={styles.sliderIndicator} />
            </View>
            <Text>Hello</Text>
          </Animated.View>
        </Pressable>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "white",
    paddingTop: 12,
    marginHorizontal: 15,
    marginBottom: 30,
    paddingHorizontal: 3,
    borderRadius: 12,
    minHeight: 220,
  },
  sliderIndicatorRow: {
    flexDirection: "row",
    marginBottom: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  sliderIndicator: {
    backgroundColor: "#CECECE",
    height: 4,
    width: 45,
  },
});
