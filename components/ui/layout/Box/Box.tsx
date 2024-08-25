import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { FC, PropsWithChildren } from "react";

type BoxProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

const Box: FC<BoxProps> = ({ children, style }) => {
  return <View style={style}>{children}</View>;
};

export default Box;
