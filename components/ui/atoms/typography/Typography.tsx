import { Colors } from "@/constants/Colors";
import React, { FC, useEffect, useRef } from "react";
import {
  StyleProp,
  StyleSheet,
  TextProps,
  TextStyle,
  useColorScheme,
  Text,
} from "react-native";
import { TYPOGRAPHY_VARIANTS, styles } from "./styles/styles";

export interface TypographyProps extends TextProps {
  color?: string;
  variant: (typeof TYPOGRAPHY_VARIANTS)[keyof typeof TYPOGRAPHY_VARIANTS];
  style?: StyleProp<TextStyle>;
  isAnimated?: boolean;
}
const Typography: FC<React.PropsWithChildren<TypographyProps>> = ({
  color,
  variant,
  style,
  children,
  isAnimated,
  ...rest
}) => {
  const colorScheme = useColorScheme();
  return (
    <Text
      style={[
        { color: color ?? Colors[colorScheme ?? "light"].text },
        styles[variant as keyof typeof styles],
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default Typography;
