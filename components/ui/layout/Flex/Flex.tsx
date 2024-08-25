import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { FC, PropsWithChildren } from "react";

type FlexProps = PropsWithChildren<{
  direction?: "row" | "column";
  justifyContent?: "center" | "flex-start" | "flex-end" | "space-between";
  alignItems?: "center" | "flex-start" | "flex-end";
  gap?: number;
  style?: StyleProp<ViewStyle>;
}>;

const styles = StyleSheet.create({
  base: {
    display: "flex",
  },
});

const Flex: FC<FlexProps> = ({
  children,
  direction,
  alignItems,
  gap,
  justifyContent,
  style,
}) => {
  return (
    <View
      style={[
        style,
        styles.base,
        { flexDirection: direction, gap, justifyContent, alignItems },
      ]}
    >
      {children}
    </View>
  );
};

export default Flex;
