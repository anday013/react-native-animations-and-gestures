import React, { useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Easing, useSharedValue, withTiming } from "react-native-reanimated";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";
import { Window } from "../entities/constants";

const PROGRESS_WIDTH = Window.width * 0.85;

const Progress: React.FC = ({}) => {
  const { container } = styles;
  const progress = useSharedValue(0);
  const start = useCallback(() => {
    progress.value = withTiming(!progress.value ? 1 : 0, {
      duration: 2000,
      easing: Easing.linear,
    });
  }, []);

  return (
    <SafeAreaView style={container}>
      <ProgressBar duration={2000} width={PROGRESS_WIDTH} progress={progress} />

      <Button title="Proceed" onPress={start} />
    </SafeAreaView>
  );
};

export default Progress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
});
