import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  title: string;
  onPress: () => any;
}

const Button: React.FC<Props> = ({ onPress, title }) => {
  const { container, text } = styles;
  return (
    <TouchableOpacity style={container} onPress={onPress}>
      <Text style={text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 50,
    backgroundColor: "#FF9500",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    alignSelf: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
