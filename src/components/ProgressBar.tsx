import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
import { ReText } from "react-native-redash";

interface Props {
  width: number;
  height?: number;
  progress: Animated.SharedValue<number>;
  duration: number;
}

const ProgressBar: React.FC<Props> = ({ width, height = 50, progress }) => {
  const { container, progressText, progressTextWrapper, barContainer, bar } =
    styles;

  const progressPercentageText = useDerivedValue(
    () => `${Math.floor(progress.value * 100)}%`
  );

  const animatedStyle = useAnimatedStyle(() => ({
    width: progress.value * width,
  }));

  return (
    <View style={container}>
      <View style={[barContainer, { height, width }]}>
        <View style={progressTextWrapper}>
          <ReText text={progressPercentageText} style={progressText} />
        </View>
        <Animated.View style={[bar, animatedStyle]} />
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  barContainer: {
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    backgroundColor: "#34C759",
    height: "100%",
    width: 0,
  },
  progressText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  progressTextWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100
  },
});
