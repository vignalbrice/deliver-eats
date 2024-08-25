import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React, { FC, PropsWithChildren, useEffect } from "react";
import Typography, { TypographyProps } from "./Typography";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  useAnimatedProps,
} from "react-native-reanimated";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { styles } from "./styles/styles";

type AnimatedTypographyProps = TypographyProps &
  PropsWithChildren<{
    duration?: number;
  }>;

const AnimatedTypography: FC<AnimatedTypographyProps> = ({
  children,
  style,
  color,
  variant,
  duration,
  ...rest
}) => {
  const moveAnimation = useSharedValue(100);
  const opactiyAnimation = useSharedValue(0);
  const colorScheme = useColorScheme();
  const config = {
    duration: duration ?? 1000,
  };

  useEffect(() => {
    moveAnimation.value = 0;
    opactiyAnimation.value = 1;
  }, []);

  const transitionStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withTiming(moveAnimation.value, config) }],
      opacity: withTiming(opactiyAnimation.value, config),
    };
  });

  return (
    <Animated.Text
      style={[
        {
          color: color ?? Colors[colorScheme ?? "light"].text,
          ...transitionStyle,
          overflow: "hidden",
        },
        styles[variant as keyof typeof styles],
        style,
      ]}
      {...rest}
    >
      {children}
    </Animated.Text>
  );
};

export default AnimatedTypography;
