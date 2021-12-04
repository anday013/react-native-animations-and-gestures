import { Dimensions } from "react-native";

export const Window = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

export const Screen = {
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height,
};
