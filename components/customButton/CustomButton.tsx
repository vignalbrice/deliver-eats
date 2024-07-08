import React, { FC, PropsWithChildren } from "react";
import { Text, View, TouchableOpacity } from "react-native";

type CustomButtonProps = {
  color?: string;
  backgroundColor?: string;
  bold?: boolean;
  onPress: () => void;
};

const CustomButton: FC<PropsWithChildren<CustomButtonProps>> = ({
  color = "#000",
  backgroundColor = "#f1f1f1",
  bold = false,
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          padding: 20,
          backgroundColor,
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color,
            textAlign: "center",
            fontWeight: bold ? "900" : "normal",
          }}
        >
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
